package com.resumeai.resume_ai_backend.repository;

import com.resumeai.resume_ai_backend.entity.TargetRoleSkill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TargetRoleSkillRepository
        extends JpaRepository<TargetRoleSkill, Long> {
}