package com.resumeai.resume_ai_backend.service.impl;

import com.resumeai.resume_ai_backend.entity.Resume;
import com.resumeai.resume_ai_backend.entity.User;
import com.resumeai.resume_ai_backend.repository.ResumeRepository;
import com.resumeai.resume_ai_backend.repository.UserRepository;
import com.resumeai.resume_ai_backend.service.interfaces.ResumeService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.UUID;
import com.resumeai.resume_ai_backend.dto.ResumeResponse;
import java.util.List;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.core.io.Resource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.ResponseEntity;


@Service
public class ResumeServiceImpl implements ResumeService {

    private final ResumeRepository resumeRepository;
    private final UserRepository userRepository;

    public ResumeServiceImpl(
            ResumeRepository resumeRepository,
            UserRepository userRepository) {

        this.resumeRepository = resumeRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void uploadResume(MultipartFile file, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        try {
            String originalFileName = file.getOriginalFilename();

            String uniqueFileName =
                    UUID.randomUUID() + "_" + originalFileName;

            Path uploadPath = Paths.get("uploads/resumes");

            Files.createDirectories(uploadPath);

            Path filePath = uploadPath.resolve(uniqueFileName);

            Files.copy(
                    file.getInputStream(),
                    filePath,
                    StandardCopyOption.REPLACE_EXISTING
            );

            Resume resume = Resume.builder()
                    .fileName(originalFileName)
                    .filePath(filePath.toString())
                    .uploadedAt(LocalDateTime.now())
                    .user(user)
                    .build();

            resumeRepository.save(resume);

        } catch (IOException e) {
            throw new RuntimeException("Failed to store resume", e);
        }
    }
    @Override
    public List<ResumeResponse> getMyResumes(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Resume> resumes = resumeRepository.findByUserId(user.getId());

        return resumes.stream()
                .map(resume -> new ResumeResponse(
                        resume.getId(),
                        resume.getFileName(),
                        resume.getUploadedAt()
                ))
                .toList();
    }

    @Override
    public ResumeResponse getResume(Long resumeId, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        if (!resume.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("You are not authorized to access this resume");
        }

        return new ResumeResponse(
                resume.getId(),
                resume.getFileName(),
                resume.getUploadedAt()
        );
    }
    @Override
    public void deleteResume(Long resumeId, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        if (!resume.getUser().getId().equals(user.getId())) {
            throw new RuntimeException(
                    "You are not authorized to delete this resume"
            );
        }

        try {
            Path filePath = Paths.get(resume.getFilePath());

            Files.deleteIfExists(filePath);

            resumeRepository.delete(resume);

        } catch (IOException e) {
            throw new RuntimeException(
                    "Failed to delete resume file",
                    e
            );
        }
    }


    @Override
    public ResponseEntity<Resource> downloadResume(Long resumeId, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        if (!resume.getUser().getId().equals(user.getId())) {
            throw new RuntimeException(
                    "You are not authorized to access this resume"
            );
        }

        Resource resource =
                new FileSystemResource(resume.getFilePath());

        if (!resource.exists()) {
            throw new RuntimeException("Resume file not found");
        }

        return ResponseEntity.ok()
                .header(
                        "Content-Disposition",
                        "attachment; filename=\"" + resume.getFileName() + "\""
                )
                .body(resource);
    }




}