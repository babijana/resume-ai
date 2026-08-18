package com.resumeai.resume_ai_backend.service.impl;

import com.resumeai.resume_ai_backend.entity.*;
import com.resumeai.resume_ai_backend.repository.*;
import com.resumeai.resume_ai_backend.service.interfaces.PdfTextExtractionService;
import com.resumeai.resume_ai_backend.service.interfaces.ResumeAnalysisService;
import com.resumeai.resume_ai_backend.service.interfaces.SkillExtractionService;
import org.springframework.stereotype.Service;
import com.resumeai.resume_ai_backend.service.interfaces.ATSScoreService;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ResumeAnalysisServiceImpl implements ResumeAnalysisService {

    private final ResumeAnalysisRepository resumeAnalysisRepository;
    private final ResumeRepository resumeRepository;
    private final TargetRoleRepository targetRoleRepository;
    private final UserRepository userRepository;
    private final PdfTextExtractionService pdfTextExtractionService;
    private final SkillExtractionService skillExtractionService;
    private final ATSScoreService atsScoreService;
    private final ResumeSkillRepository resumeSkillRepository;
    public ResumeAnalysisServiceImpl(
            ResumeAnalysisRepository resumeAnalysisRepository,
            ResumeRepository resumeRepository,
            TargetRoleRepository targetRoleRepository,
            UserRepository userRepository,
            PdfTextExtractionService pdfTextExtractionService,
            SkillExtractionService skillExtractionService,
            ResumeSkillRepository resumeSkillRepository,
            ATSScoreService atsScoreService) {

        this.resumeAnalysisRepository = resumeAnalysisRepository;
        this.resumeRepository = resumeRepository;
        this.targetRoleRepository = targetRoleRepository;
        this.userRepository = userRepository;
        this.pdfTextExtractionService = pdfTextExtractionService;
        this.skillExtractionService = skillExtractionService;
        this.resumeSkillRepository = resumeSkillRepository;
        this.atsScoreService = atsScoreService;
    }

    @Override
    public ResumeAnalysis analyzeResume(
            Long resumeId,
            Long targetRoleId,
            String email) {

        // 1. Find the logged-in user
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 2. Find the resume
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        // 3. Check that the resume belongs to the logged-in user
        if (!resume.getUser().getId().equals(user.getId())) {
            throw new RuntimeException(
                    "You are not authorized to analyze this resume"
            );
        }

        // 4. Extract text from the PDF
        String resumeText;

        try {
            resumeText = pdfTextExtractionService.extractText(
                    resume.getFilePath()
            );
        } catch (Exception e) {
            throw new RuntimeException(
                    "Failed to extract text from resume",
                    e
            );
        }

        // 5. Extract skills from the resume text
        List<Skill> extractedSkills =
                skillExtractionService.extractSkills(resumeText);
        for (Skill skill : extractedSkills) {

            boolean alreadyExists =
                    resumeSkillRepository.existsByResumeIdAndSkillId(
                            resume.getId(),
                            skill.getId()
                    );

            if (!alreadyExists) {

                ResumeSkill resumeSkill = ResumeSkill.builder()
                        .resume(resume)
                        .skill(skill)
                        .build();

                resumeSkillRepository.save(resumeSkill);
            }


        }
        int atsScore =
                atsScoreService.calculateScore(
                        resume.getId(),
                        targetRoleId
                );


        // 6. Find the target role
        TargetRole targetRole = targetRoleRepository.findById(targetRoleId)
                .orElseThrow(() -> new RuntimeException("Target role not found"));

        // 7. Create resume analysis
        ResumeAnalysis analysis = ResumeAnalysis.builder()
                .resume(resume)
                .targetRole(targetRole)
                .atsScore(atsScore)
                .summary("Resume analysis completed")
                .analyzedAt(LocalDateTime.now())
                .build();

        // 8. Save analysis
        return resumeAnalysisRepository.save(analysis);
    }
}