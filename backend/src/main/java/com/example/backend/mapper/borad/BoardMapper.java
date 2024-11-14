package com.example.backend.mapper.borad;

import com.example.backend.dto.borad.Board;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {

    @Insert("""
            INSERT INTO board
                (title,content,writer)
            VALUES (#{title},#{content},#{writer})
            """)
    int insert(Board board);
}
