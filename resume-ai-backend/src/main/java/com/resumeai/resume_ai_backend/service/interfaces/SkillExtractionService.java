package com.resumeai.resume_ai_backend.service.interfaces;

import com.resumeai.resume_ai_backend.entity.Skill;

import java.util.List;

public interface SkillExtractionService {

    List<Skill> extractSkills(String resumeText);
}