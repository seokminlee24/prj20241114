import { useState } from "react";
import { Box, Input, Stack } from "@chakra-ui/react";
import { Field } from "../../components/ui/field.jsx";
import { Button } from "../../components/ui/button.jsx";

export function MemberLogin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClick() {
    axios.post("/api/member/login", { id, password }).then().catch().finally();
  }

  return (
    <Box>
      <h3>로그인</h3>
      <Stack gap={5}>
        <Field label={"아이디"}>
          <Input
            valaue={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Field>
        <Field label={"암호"}>
          <Input
            valaue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Field>
        <Button onClick={handleLoginClick}>로그인</Button>
      </Stack>
    </Box>
  );
}
