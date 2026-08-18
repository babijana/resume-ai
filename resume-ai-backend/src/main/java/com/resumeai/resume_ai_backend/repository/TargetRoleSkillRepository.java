package com.resumeai.resume_ai_backend.repository;

import com.resumeai.resume_ai_backend.entity.TargetRoleSkill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TargetRoleSkillRepository
        extends JpaRepository<TargetRoleSkill, Long> {

    List<TargetRoleSkill> findByTargetRoleId(Long targetRoleId);
}