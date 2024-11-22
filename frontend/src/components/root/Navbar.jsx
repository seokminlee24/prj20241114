import { useNavigate } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import {AuthenticationContext} from "../content/AuthenticationProvider.jsx";
import * as PropTypes from "prop-types";


function NavbarItem({ children, ...rest }) {
    return (
        <Box
            css={{
                paddingX: "15px",
                paddingY: "10px",
            }}
            _hover={{
                bgColor: "gray.300",
                cursor: "pointer",
            }}
            {...rest}
        >
            {children}
        </Box>
    );
}

export function Navbar() {
    const navigate = useNavigate();

    // step 2 : context 사용하기
    const {id, isAdmin, isAuthenticated, logout} = useContext(AuthenticationContext)

    return (
        <Flex gap={3}>
            <NavbarItem css={{
                paddingX : "15px",
                paddingY : "10px"
            }}
                 _hover={{bgColor: "gray.300",
                 cursor:"pointer"}}
                 onClick={() => navigate("/")}>HOME</NavbarItem>
            {isAuthenticated && (
                <NavbarItem onClick={() => navigate("/add")}>작성</NavbarItem>
            )}
            <Box mx={"auto"}></Box>
            {isAuthenticated || (
                <NavbarItem onClick={() => navigate("/member/signup")}>가입</NavbarItem>
            )}

            {isAdmin && (
                <NavbarItem onClick={() => navigate("/member/list")}>회원목록</NavbarItem>
            )}

            {isAuthenticated || (
                <NavbarItem onClick={() => navigate("/member/login")}>로그인</NavbarItem>
            )}
            {isAuthenticated && (
                <NavbarItem
                    onClick={() => {
                        logout();
                        navigate("/member/login");
                    }}
                >
                    로그아웃
                </NavbarItem>
            )}
            <NavbarItem onClick={()=>navigate(`/member/${id}`)}>{id}</NavbarItem>
        </Flex>
    );
}