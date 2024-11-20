import { Box, Group, Textarea } from "@chakra-ui/react";

import {useContext, useState} from "react";
import axios from "axios";
import {Button} from "../../components/ui/button.jsx";
import {AuthenticationContext} from "../../components/content/AuthenticationProvider.jsx";

export function CommentInput({ boardId, onSaveClick }) {
    const [comment, setComment] = useState("");
    const { isAuthenticated } = useContext(AuthenticationContext);

    return (
        <Box>
            <Group>
                <Textarea
                    value={comment}
                    disabled={!isAuthenticated}
                    placeholder={isAuthenticated ? "" : "로그인 후 댓글을 남겨주세요."}
                    onChange={
                    (e) => {
                        setComment(e.target.value)
                    }}
                />
                <Button
                    disabled={!isAuthenticated}
                    onClick={() => {
                    setComment("")
                    onSaveClick(comment)
                }}>댓글 쓰기</Button>
            </Group>
        </Box>
    );
}