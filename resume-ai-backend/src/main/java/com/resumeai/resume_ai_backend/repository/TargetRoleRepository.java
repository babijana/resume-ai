package com.resumeai.resume_ai_backend.repository;

import com.resumeai.resume_ai_backend.entity.TargetRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TargetRoleRepository extends JpaRepository<TargetRole, Long> {

    Optional<TargetRole> findByName(String name);

    boolean existsByName(String name);
}