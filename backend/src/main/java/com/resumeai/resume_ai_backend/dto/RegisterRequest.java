package com.resumeai.resume_ai_backend.dto;

import lombok.Data;

@Data
public class RegisterRequest {

        private String firstName;
        private String lastName;
        private String email;
        private String password;
        private String phone;
        private String university;
        private String degree;
}