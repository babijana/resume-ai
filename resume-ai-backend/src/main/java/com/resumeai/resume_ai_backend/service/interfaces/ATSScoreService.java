package com.resumeai.resume_ai_backend.service.interfaces;

public interface ATSScoreService {

    int calculateScore(
            Long resumeId,
            Long targetRoleId
    );
}