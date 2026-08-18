package com.resumeai.resume_ai_backend.controller;

import com.resumeai.resume_ai_backend.dto.SkillGapResponse;
import com.resumeai.resume_ai_backend.service.interfaces.SkillGapService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/skill-gap")
public class SkillGapController {

    private final SkillGapService skillGapService;

    public SkillGapController(SkillGapService skillGapService) {
        this.skillGapService = skillGapService;
    }

    @GetMapping("/{resumeId}")
    public ResponseEntity<SkillGapResponse> analyzeSkillGap(
            @PathVariable Long resumeId,
            @RequestParam Long targetRoleId) {

        SkillGapResponse response =
                skillGapService.analyzeSkillGap(
                        resumeId,
                        targetRoleId
                );

        return ResponseEntity.ok(response);
    }
}