import { useParams } from "react-router-dom";
import { Box, Input, Spinner, Stack, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Field } from "../../components/ui/field.jsx";
import { Button } from "../../components/ui/button.jsx";

export function BoardEdit() {
  const [board, setBoard] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/board/view/${id}`)
      .then((res) => res.data)
      .then((data) => setBoard(data));
  }, []);

  const handleSaveClick = () => {
    axios.put("/api/board/update", board);
  };

  if (board === null) {
    return <Spinner />;
  }

  return (
    <Box>
      <h3>{id}번 게시물 수정</h3>

      <Stack gap={5}>
        <Field label={"제목"}>
          <Input
            value={board.title}
            onChange={(e) => setBoard({ ...board, title: e.target.value })}
          />
        </Field>
        <Field label={"본문"}>
          <Textarea
            value={board.content}
            onChange={(e) => setBoard({ ...board, content: e.target.value })}
          />
        </Field>
        <Button onClick={handleSaveClick}>저장</Button>
      </Stack>
    </Box>
  );
}
