package com.resumeai.resume_ai_backend.controller;

import com.resumeai.resume_ai_backend.service.interfaces.SkillMatchingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skill-matching")
public class SkillMatchingController {

    private final SkillMatchingService skillMatchingService;

    public SkillMatchingController(
            SkillMatchingService skillMatchingService) {

        this.skillMatchingService = skillMatchingService;
    }

    @GetMapping("/matched")
    public List<String> getMatchedSkills(
            @RequestParam Long targetRoleId,
            @RequestParam String resumeText) {

        return skillMatchingService.findMatchedSkills(
                resumeText,
                targetRoleId
        );
    }

    @GetMapping("/missing")
    public List<String> getMissingSkills(
            @RequestParam Long targetRoleId,
            @RequestParam String resumeText) {

        return skillMatchingService.findMissingSkills(
                resumeText,
                targetRoleId
        );
    }
}