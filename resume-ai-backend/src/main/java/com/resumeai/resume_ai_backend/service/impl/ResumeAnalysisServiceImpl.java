package com.resumeai.resume_ai_backend.service.impl;

import com.resumeai.resume_ai_backend.repository.ResumeAnalysisRepository;
import com.resumeai.resume_ai_backend.service.interfaces.ResumeAnalysisService;
import org.springframework.stereotype.Service;
import com.resumeai.resume_ai_backend.entity.Resume;
import com.resumeai.resume_ai_backend.entity.TargetRole;
import com.resumeai.resume_ai_backend.entity.ResumeAnalysis;
import com.resumeai.resume_ai_backend.repository.ResumeRepository;
import com.resumeai.resume_ai_backend.repository.TargetRoleRepository;
import com.resumeai.resume_ai_backend.repository.UserRepository;
import com.resumeai.resume_ai_backend.entity.User;
import java.time.LocalDateTime;

@Service
public class ResumeAnalysisServiceImpl implements ResumeAnalysisService {

    private final ResumeAnalysisRepository resumeAnalysisRepository;
    private final ResumeRepository resumeRepository;
    private final TargetRoleRepository targetRoleRepository;
    private final UserRepository userRepository;
    public ResumeAnalysisServiceImpl(
            ResumeAnalysisRepository resumeAnalysisRepository,
            ResumeRepository resumeRepository,
            TargetRoleRepository targetRoleRepository,
            UserRepository userRepository) {

        this.resumeAnalysisRepository = resumeAnalysisRepository;
        this.resumeRepository = resumeRepository;
        this.targetRoleRepository = targetRoleRepository;
        this.userRepository = userRepository;
    }

    @Override
    public ResumeAnalysis analyzeResume(
            Long resumeId,
            Long targetRoleId,
            String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        if (!resume.getUser().getId().equals(user.getId())) {
            throw new RuntimeException(
                    "You are not authorized to analyze this resume"
            );
        }

        TargetRole targetRole = targetRoleRepository.findById(targetRoleId)
                .orElseThrow(() -> new RuntimeException("Target role not found"));

        ResumeAnalysis analysis = ResumeAnalysis.builder()
                .resume(resume)
                .targetRole(targetRole)
                .atsScore(0)
                .summary("Resume analysis pending")
                .analyzedAt(LocalDateTime.now())
                .build();

        return resumeAnalysisRepository.save(analysis);
    }
}