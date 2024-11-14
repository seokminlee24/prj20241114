package com.example.backend.service.borad;

import com.example.backend.dto.borad.Board;
import com.example.backend.mapper.borad.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardService {

    final BoardMapper mapper;


    public List<Board> list() {
        return mapper.selectAll();
    }

    public Board get(int id) {
        return mapper.selectById(id);
    }

    public Map<String, Object> add(Board board) {
        int cnt = mapper.insert(board);

        if (cnt == 1) {
            return Map.of("message", Map.of("type", "success",
                            "text", STR."\{board.getId()} 번 게시물이 등록되었습니다"),
                    "data", board);
        } else {
            return Map.of("message", Map.of("type", "warning",
                    "text", "게시물 등록이 실패하였습니다."));
        }
    }
}
