package com.resumeai.resume_ai_backend.service.impl;

import com.resumeai.resume_ai_backend.entity.TargetRoleSkill;
import com.resumeai.resume_ai_backend.repository.TargetRoleSkillRepository;
import com.resumeai.resume_ai_backend.service.interfaces.SkillMatchingService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillMatchingServiceImpl implements SkillMatchingService {

    private final TargetRoleSkillRepository targetRoleSkillRepository;

    public SkillMatchingServiceImpl(
            TargetRoleSkillRepository targetRoleSkillRepository) {

        this.targetRoleSkillRepository = targetRoleSkillRepository;
    }

    @Override
    public List<String> findMatchedSkills(
            String resumeText,
            Long targetRoleId) {

        List<TargetRoleSkill> targetRoleSkills =
                targetRoleSkillRepository.findByTargetRoleId(targetRoleId);

        String normalizedResumeText = resumeText.toLowerCase();

        return targetRoleSkills.stream()
                .map(TargetRoleSkill::getSkill)
                .map(skill -> skill.getName())
                .filter(skillName ->
                        normalizedResumeText.contains(
                                skillName.toLowerCase()
                        )
                )
                .toList();
    }

    @Override
    public List<String> findMissingSkills(
            String resumeText,
            Long targetRoleId) {

        List<TargetRoleSkill> targetRoleSkills =
                targetRoleSkillRepository.findByTargetRoleId(targetRoleId);

        String normalizedResumeText = resumeText.toLowerCase();

        return targetRoleSkills.stream()
                .map(TargetRoleSkill::getSkill)
                .map(skill -> skill.getName())
                .filter(skillName ->
                        !normalizedResumeText.contains(
                                skillName.toLowerCase()
                        )
                )
                .toList();
    }


}