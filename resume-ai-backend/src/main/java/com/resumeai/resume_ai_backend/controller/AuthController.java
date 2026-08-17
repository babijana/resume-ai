package com.resumeai.resume_ai_backend.controller;

import com.resumeai.resume_ai_backend.dto.LoginRequest;
import com.resumeai.resume_ai_backend.dto.LoginResponse;
import com.resumeai.resume_ai_backend.dto.RegisterRequest;
import com.resumeai.resume_ai_backend.service.interfaces.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        userService.register(request);

        return "User Registered Successfully";

    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        return userService.login(request);
    }

}