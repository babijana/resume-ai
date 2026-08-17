package com.resumeai.resume_ai_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "target_roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TargetRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(length = 1000)
    private String description;
}