package com.resumeai.resume_ai_backend.service.interfaces;

import java.io.IOException;

public interface PdfTextExtractionService {

    String extractText(String filePath) throws IOException;
}