import { Box, HStack, Table, TableRoot } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../components/ui/pagination.jsx";

export function BoardList() {
  //const [boardList, setBoardList] = useState("");
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get("/api/board/list", {
        params: searchParams,
      })
      .then((res) => res.data)
      .then((date) => setBoardList(date));
  }, []);

  // searchParams
  console.log(searchParams.toString());
  // page 번호
  const pageParam = searchParams.get("page") ? searchParams.get("page") : "1";
  const page = Number(pageParam);

  function handleRowClick(id) {
    navigate(`/view/${id}`);
  }

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
        </Table.Header>
        <Table.Body>
          {boardList.map((board) => (
            <Table.Row onClick={() => handleRowClick(board.id)} key={board.id}>
              <Table.Cell>{board.id}</Table.Cell>
              <Table.Cell>{board.title}</Table.Cell>
              <Table.Cell>{board.writer}</Table.Cell>
              <Table.Cell>{board.inserted}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </TableRoot>
      <Box>
        <PaginationRoot count={1500} pageSize={10} page={page}>
          <HStack>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </Box>
    </Box>
  );
}
