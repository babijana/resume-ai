package com.resumeai.resume_ai_backend.service.interfaces;
import com.resumeai.resume_ai_backend.dto.ResumeResponse;
import org.springframework.web.multipart.MultipartFile;
import com.resumeai.resume_ai_backend.entity.Resume;
import java.util.List;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;

public interface ResumeService {
    void uploadResume(MultipartFile file, String email);
    List<ResumeResponse> getMyResumes(String email);
    ResumeResponse getResume(Long resumeId, String email);
    void deleteResume(Long resumeId, String email);
    ResponseEntity<Resource> downloadResume(Long resumeId, String email);

}
