package com.resumeai.resume_ai_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "target_role_skills")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TargetRoleSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "target_role_id", nullable = false)
    private TargetRole targetRole;

    @ManyToOne
    @JoinColumn(name = "skill_id", nullable = false)
    private Skill skill;

    private String importance;
}