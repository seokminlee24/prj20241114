import { Box, Table, TableRoot } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export function BoardList() {
  const [boardList, setBoardList] = useState("");

  useEffect(() => {
    axios
      .get("/api/board/list")
      .then((res) => res.data)
      .then((date) => setBoardList(date));
  }, []);

  return (
    <Box>
      <h3>게시물 목록</h3>
      {/*    게시물들을 테이블로*/}
      {/*{boardList.map((board) => (
        <li>
          {board.title},{board.writer}
        </li>
      ))}*/}
      <TableRoot interactive>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>번호</Table.ColumnHeader>
            <Table.ColumnHeader>제목</Table.ColumnHeader>
            <Table.ColumnHeader>작성자</Table.ColumnHeader>
            <Table.ColumnHeader>작성일자</Table.ColumnHeader>
          </Table.Row>
          <Table.Body>
            {boardList.map((board) => (
              <Table.Row>
                <Table.Cell>{board.id}</Table.Cell>
                <Table.Cell>{board.title}</Table.Cell>
                <Table.Cell>{board.writer}</Table.Cell>
                <Table.Cell>{board.inserted}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Header>
      </TableRoot>
    </Box>
  );
}
