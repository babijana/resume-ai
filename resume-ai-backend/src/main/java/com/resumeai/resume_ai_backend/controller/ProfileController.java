package com.resumeai.resume_ai_backend.controller;

import com.resumeai.resume_ai_backend.dto.ProfileResponse;
import com.resumeai.resume_ai_backend.entity.User;
import com.resumeai.resume_ai_backend.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {

    private final UserRepository userRepository;

    public ProfileController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/api/profile")
    public ProfileResponse getProfile(Authentication authentication) {

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return new ProfileResponse(
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPhone(),
                user.getUniversity(),
                user.getDegree()
        );
    }
}