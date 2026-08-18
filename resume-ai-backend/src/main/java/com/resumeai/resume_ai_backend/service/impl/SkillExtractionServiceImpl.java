package com.resumeai.resume_ai_backend.service.impl;

import com.resumeai.resume_ai_backend.entity.Skill;
import com.resumeai.resume_ai_backend.repository.SkillRepository;
import com.resumeai.resume_ai_backend.service.interfaces.SkillExtractionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillExtractionServiceImpl implements SkillExtractionService {

    private final SkillRepository skillRepository;

    public SkillExtractionServiceImpl(
            SkillRepository skillRepository) {

        this.skillRepository = skillRepository;
    }

    @Override
    public List<Skill> extractSkills(String resumeText) {

        if (resumeText == null || resumeText.isBlank()) {
            return List.of();
        }

        String normalizedText = resumeText.toLowerCase();

        List<Skill> allSkills = skillRepository.findAll();

        return allSkills.stream()
                .filter(skill ->
                        normalizedText.contains(
                                skill.getName().toLowerCase()
                        )
                )
                .toList();
    }
}