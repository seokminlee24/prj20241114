import {Stack} from "@chakra-ui/react";
import {CommentInput} from "./CommentInput.jsx";
import {CommentList} from "./CommentList.jsx";

export function CommentContainer({ boardId }) {
    return (<div>
        <Stack gap={5}>
            <h3>댓글</h3>
            <CommentInput boardId={boardId}/>
            <CommentList/>
        </Stack>
    </div>);
}