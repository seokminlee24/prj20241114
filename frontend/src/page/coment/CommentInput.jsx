import { Box, Group, Textarea } from "@chakra-ui/react";

import { useContext, useState } from "react";
import {AuthenticationContext} from "../../components/content/AuthenticationProvider.jsx";
import {Button} from "../../components/ui/button.jsx";
import {FaPaperPlane} from "react-icons/fa";


export function CommentInput({ boardId, onSaveClick }) {
    const [comment, setComment] = useState("");
    const { isAuthenticated } = useContext(AuthenticationContext);

    return (
        <Box>
            <Group h={125} attached w={"100%"}>
                <Textarea
                    h={127}
                    flex={1}
                    value={comment}
                    disabled={!isAuthenticated}
                    placeholder={
                        isAuthenticated
                            ? "댓글을 남겨주세요."
                            : "로그인 후 댓글을 남겨주세요."
                    }
                    onChange={(e) => setComment(e.target.value)}
                />
                <Button
                    h={125}
                    disabled={!isAuthenticated}
                    onClick={() => {
                        setComment("");
                        onSaveClick(comment);
                    }}
                    variant={"surface"}
                    colorPalette={"blue"}
                >
                    <FaPaperPlane />
                </Button>
            </Group>
        </Box>
    );
}