import { Box, Group, Textarea } from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";
import {Button} from "../../components/ui/button.jsx";

export function CommentInput({ boardId, onSaveClick }) {
    const [comment, setComment] = useState("");

    return (
        <Box>
            <Group>
                <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Button onClick={() => onSaveClick(comment)}>댓글 쓰기</Button>
            </Group>
        </Box>
    );
}