package com.example.backend.dto.member;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class Member {
    private String id;
    private String password;
    private String description;
    private String email;
    private LocalDateTime inserted;
}
