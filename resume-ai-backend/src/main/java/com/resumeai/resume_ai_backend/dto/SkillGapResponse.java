package com.resumeai.resume_ai_backend.dto;

import java.util.List;

public record SkillGapResponse(
        List<String> matchedSkills,
        List<String> missingSkills
) {
}