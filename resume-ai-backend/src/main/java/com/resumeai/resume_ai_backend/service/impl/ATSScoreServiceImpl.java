package com.resumeai.resume_ai_backend.service.impl;

import com.resumeai.resume_ai_backend.entity.ResumeSkill;
import com.resumeai.resume_ai_backend.entity.TargetRoleSkill;
import com.resumeai.resume_ai_backend.repository.ResumeSkillRepository;
import com.resumeai.resume_ai_backend.repository.TargetRoleSkillRepository;
import com.resumeai.resume_ai_backend.service.interfaces.ATSScoreService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ATSScoreServiceImpl implements ATSScoreService {

    private final ResumeSkillRepository resumeSkillRepository;
    private final TargetRoleSkillRepository targetRoleSkillRepository;

    public ATSScoreServiceImpl(
            ResumeSkillRepository resumeSkillRepository,
            TargetRoleSkillRepository targetRoleSkillRepository) {

        this.resumeSkillRepository = resumeSkillRepository;
        this.targetRoleSkillRepository = targetRoleSkillRepository;
    }

    @Override
    public int calculateScore(
            Long resumeId,
            Long targetRoleId) {

        List<ResumeSkill> resumeSkills =
                resumeSkillRepository.findAll()
                        .stream()
                        .filter(rs ->
                                rs.getResume().getId().equals(resumeId)
                        )
                        .toList();

        List<TargetRoleSkill> targetRoleSkills =
                targetRoleSkillRepository.findAll()
                        .stream()
                        .filter(trs ->
                                trs.getTargetRole().getId().equals(targetRoleId)
                        )
                        .toList();

        int totalWeight = 0;
        int matchedWeight = 0;

        for (TargetRoleSkill targetRoleSkill : targetRoleSkills) {

            int weight = getWeight(
                    targetRoleSkill.getImportance()
            );

            totalWeight += weight;

            boolean matched = resumeSkills.stream()
                    .anyMatch(resumeSkill ->
                            resumeSkill.getSkill().getId()
                                    .equals(
                                            targetRoleSkill.getSkill().getId()
                                    )
                    );

            if (matched) {
                matchedWeight += weight;
            }
        }

        if (totalWeight == 0) {
            return 0;
        }

        return (matchedWeight * 100) / totalWeight;
    }

    private int getWeight(String importance) {

        return switch (importance.toUpperCase()) {
            case "REQUIRED" -> 3;
            case "IMPORTANT" -> 2;
            case "GOOD_TO_HAVE" -> 1;
            default -> 0;
        };
    }
}