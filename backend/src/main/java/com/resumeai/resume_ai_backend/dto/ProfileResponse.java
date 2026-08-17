package com.resumeai.resume_ai_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProfileResponse {

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String university;
    private String degree;
}