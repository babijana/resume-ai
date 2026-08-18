package com.resumeai.resume_ai_backend.service.interfaces;

import com.resumeai.resume_ai_backend.dto.SkillGapResponse;

public interface SkillGapService {

    SkillGapResponse analyzeSkillGap(
            Long resumeId,
            Long targetRoleId
    );
}