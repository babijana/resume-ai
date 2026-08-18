package com.resumeai.resume_ai_backend.repository;

import com.resumeai.resume_ai_backend.entity.ResumeSkill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeSkillRepository
        extends JpaRepository<ResumeSkill, Long> {
    boolean existsByResumeIdAndSkillId(Long resumeId, Long skillId);
}