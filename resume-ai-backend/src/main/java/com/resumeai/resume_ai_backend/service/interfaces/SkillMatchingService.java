package com.resumeai.resume_ai_backend.service.interfaces;

import java.util.List;

public interface SkillMatchingService {

    List<String> findMatchedSkills(
            String resumeText,
            Long targetRoleId
    );

    List<String> findMissingSkills(
            String resumeText,
            Long targetRoleId
    );
}