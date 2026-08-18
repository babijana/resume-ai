package com.resumeai.resume_ai_backend.controller;

import com.resumeai.resume_ai_backend.entity.ResumeAnalysis;
import com.resumeai.resume_ai_backend.service.interfaces.ResumeAnalysisService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/resume-analysis")
public class ResumeAnalysisController {

    private final ResumeAnalysisService resumeAnalysisService;

    public ResumeAnalysisController(
            ResumeAnalysisService resumeAnalysisService) {

        this.resumeAnalysisService = resumeAnalysisService;
    }

    @PostMapping("/{resumeId}/analyze")
    public ResponseEntity<ResumeAnalysis> analyzeResume(
            @PathVariable Long resumeId,
            @RequestParam Long targetRoleId,
            Authentication authentication) {

        String email = authentication.getName();

        ResumeAnalysis analysis =
                resumeAnalysisService.analyzeResume(
                        resumeId,
                        targetRoleId,
                        email
                );

        return ResponseEntity.ok(analysis);
    }
}