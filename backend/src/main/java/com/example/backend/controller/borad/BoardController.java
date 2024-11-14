package com.example.backend.controller.borad;

import com.example.backend.dto.borad.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/board")
public class BoardController {
    public void add(@RequestBody Board board) {
        System.out.println(board);
    }
}
