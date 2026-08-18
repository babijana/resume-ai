package com.resumeai.resume_ai_backend.service.interfaces;

import com.resumeai.resume_ai_backend.entity.ResumeAnalysis;

public interface ResumeAnalysisService {

    ResumeAnalysis analyzeResume(
            Long resumeId,
            Long targetRoleId,
            String email
    );
}