package com.resumeai.resume_ai_backend.controller;

import com.resumeai.resume_ai_backend.service.interfaces.ResumeService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.resumeai.resume_ai_backend.dto.ResumeResponse;
import java.util.List;
import org.springframework.core.io.Resource;

@RestController
@RequestMapping("/api/resumes")
public class ResumeController {

    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadResume(
            @RequestParam("file") MultipartFile file,
            Authentication authentication) {

        String email = authentication.getName();

        resumeService.uploadResume(file, email);

        return ResponseEntity.ok("Resume uploaded successfully");
    }
    @GetMapping
    public ResponseEntity<List<ResumeResponse>> getMyResumes(
            Authentication authentication) {

        String email = authentication.getName();

        List<ResumeResponse> resumes =
                resumeService.getMyResumes(email);

        return ResponseEntity.ok(resumes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResumeResponse> getResume(
            @PathVariable Long id,
            Authentication authentication) {

        String email = authentication.getName();

        ResumeResponse resume =
                resumeService.getResume(id, email);

        return ResponseEntity.ok(resume);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteResume(
            @PathVariable Long id,
            Authentication authentication) {

        String email = authentication.getName();

        resumeService.deleteResume(id, email);

        return ResponseEntity.ok("Resume deleted successfully");
    }

    @GetMapping("/{id}/download")
    public ResponseEntity<Resource> downloadResume(
            @PathVariable Long id,
            Authentication authentication) {

        String email = authentication.getName();

        return resumeService.downloadResume(id, email);
    }
}