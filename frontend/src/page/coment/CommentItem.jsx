import {Box, Card, Flex, Heading, HStack, Textarea} from "@chakra-ui/react";

import { useContext, useState } from "react";

import {Button} from "../../components/ui/button.jsx";
import {
    DialogActionTrigger,
    DialogBody,
    DialogContent, DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger
} from "../../components/ui/dialog.jsx";
import {AuthenticationContext} from "../../components/content/AuthenticationProvider.jsx";
import {CiEdit, CiTrash} from "react-icons/ci";

function DeleteButton({ onClick }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
                <DialogTrigger asChild>
                    <Button colorPalette={"red"} size={"sm"} variant={"subtle"}>
                        <CiTrash />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>삭제 확인</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        <p>댓글을 삭제하시겠습니까?</p>
                    </DialogBody>
                    <DialogFooter>
                        <DialogActionTrigger>
                            <Button variant={"outline"}>취소</Button>
                        </DialogActionTrigger>
                        <Button colorPalette={"red"} onClick={onClick}>
                            <CiTrash />
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </DialogRoot>
        </>
    );
}

function EditButton({ comment, onEditClick }) {
    const [open, setOpen] = useState(false);
    const [newComment, setNewComment] = useState(comment.comment);

    return (
        <>
            <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
                <DialogTrigger asChild>
                    <Button colorPalette={"purple"} size={"sm"} variant={"subtle"}>
                        <CiEdit />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>댓글 수정</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        <Textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </DialogBody>
                    <DialogFooter>
                        <DialogActionTrigger>
                            <Button variant={"outline"}>취소</Button>
                        </DialogActionTrigger>
                        <Button
                            colorPalette={"purple"}
                            onClick={() => {
                                setOpen(false);
                                onEditClick(comment.id, newComment);
                            }}
                        >
                            수정
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </DialogRoot>
        </>
    );
}

export function CommentItem({ comment, onDeleteClick, onEditClick }) {
    const { hasAccess } = useContext(AuthenticationContext);

    return (
        <Card.Root>
            <Card.Header>
                <Flex justify={"space-between"}>
                    <Heading>{comment.memberId}</Heading>
                    <Heading>{comment.inserted}</Heading>
                </Flex>
            </Card.Header>
            <Card.Body>
                <Box css={{ whiteSpace: "pre" }}>{comment.comment}</Box>
            </Card.Body>
            {hasAccess(comment.memberId) && (
                <Card.Footer css={{ justifyContent: "flex-end" }}>
                    <HStack>
                        <EditButton comment={comment} onEditClick={onEditClick} />

                        <DeleteButton onClick={() => onDeleteClick(comment.id)} />
                    </HStack>
                </Card.Footer>
            )}
        </Card.Root>
    );
}