package com.example.backend.service.borad;

import com.example.backend.dto.borad.Board;
import com.example.backend.mapper.borad.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardService {

    final BoardMapper mapper;

    public void add(Board board) {
        mapper.insert(board);
    }
}
