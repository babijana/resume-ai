package com.resumeai.resume_ai_backend.service.impl;

import com.resumeai.resume_ai_backend.dto.LoginRequest;
import com.resumeai.resume_ai_backend.dto.LoginResponse;
import com.resumeai.resume_ai_backend.dto.RegisterRequest;
import com.resumeai.resume_ai_backend.entity.User;
import com.resumeai.resume_ai_backend.repository.UserRepository;
import com.resumeai.resume_ai_backend.service.interfaces.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.resumeai.resume_ai_backend.service.JwtService;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public UserServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           JwtService jwtService) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @Override
    public void register(RegisterRequest request) {

        // Check whether the email is already registered
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Email already exists"
            );
        }

        // Create User object from the request
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .university(request.getUniversity())
                .degree(request.getDegree())
                .build();

        // Save the user to the database
        userRepository.save(user);
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        // Find user by email
        Optional<User> userOptional =
                userRepository.findByEmail(request.getEmail());

        // Email doesn't exist
        if (userOptional.isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid email or password"
            );
        }

        User user = userOptional.get();

        // Check password
        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid email or password"
            );
        }

        // Login successful
        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(token);
    }
}