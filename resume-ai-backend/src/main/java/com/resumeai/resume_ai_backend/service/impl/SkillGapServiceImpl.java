package com.resumeai.resume_ai_backend.service.impl;

import com.resumeai.resume_ai_backend.dto.SkillGapResponse;
import com.resumeai.resume_ai_backend.entity.ResumeSkill;
import com.resumeai.resume_ai_backend.entity.TargetRoleSkill;
import com.resumeai.resume_ai_backend.repository.ResumeSkillRepository;
import com.resumeai.resume_ai_backend.repository.TargetRoleSkillRepository;
import com.resumeai.resume_ai_backend.service.interfaces.SkillGapService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillGapServiceImpl implements SkillGapService {

    private final ResumeSkillRepository resumeSkillRepository;
    private final TargetRoleSkillRepository targetRoleSkillRepository;

    public SkillGapServiceImpl(
            ResumeSkillRepository resumeSkillRepository,
            TargetRoleSkillRepository targetRoleSkillRepository) {

        this.resumeSkillRepository = resumeSkillRepository;
        this.targetRoleSkillRepository = targetRoleSkillRepository;
    }

    @Override
    public SkillGapResponse analyzeSkillGap(
            Long resumeId,
            Long targetRoleId) {

        List<ResumeSkill> resumeSkills =
                resumeSkillRepository.findAll()
                        .stream()
                        .filter(rs ->
                                rs.getResume().getId().equals(resumeId)
                        )
                        .toList();

        List<TargetRoleSkill> requiredSkills =
                targetRoleSkillRepository.findAll()
                        .stream()
                        .filter(trs ->
                                trs.getTargetRole().getId().equals(targetRoleId)
                        )
                        .toList();

        List<String> resumeSkillNames =
                resumeSkills.stream()
                        .map(rs -> rs.getSkill().getName())
                        .toList();

        List<String> matchedSkills =
                requiredSkills.stream()
                        .map(trs -> trs.getSkill().getName())
                        .filter(resumeSkillNames::contains)
                        .toList();

        List<String> missingSkills =
                requiredSkills.stream()
                        .map(trs -> trs.getSkill().getName())
                        .filter(skill -> !resumeSkillNames.contains(skill))
                        .toList();

        return new SkillGapResponse(
                matchedSkills,
                missingSkills
        );
    }
}