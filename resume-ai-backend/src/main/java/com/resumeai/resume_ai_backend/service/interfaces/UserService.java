package com.resumeai.resume_ai_backend.service.interfaces;

import com.resumeai.resume_ai_backend.dto.LoginRequest;
import com.resumeai.resume_ai_backend.dto.RegisterRequest;
import com.resumeai.resume_ai_backend.dto.LoginResponse;

public interface UserService {

    void register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}