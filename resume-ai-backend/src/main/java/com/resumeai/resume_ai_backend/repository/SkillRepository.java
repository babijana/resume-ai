package com.resumeai.resume_ai_backend.repository;

import com.resumeai.resume_ai_backend.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SkillRepository extends JpaRepository<Skill, Long> {

    Optional<Skill> findByName(String name);

    boolean existsByName(String name);
}