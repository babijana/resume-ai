package com.resumeai.resume_ai_backend.repository;

import com.resumeai.resume_ai_backend.entity.ResumeAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeAnalysisRepository
        extends JpaRepository<ResumeAnalysis, Long> {
}