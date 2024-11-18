import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Table } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function MemberList() {
  const [memberList, setMemberList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 회원목록 요청
    axios.get("/api/member/list").then((res) => setMemberList(res.data));
  }, []);

  if (!memberList || memberList.length === 0) {
    return <Spinner />;
  }

  // 테이블 행 클릭시 회원정보 보기로 이동
  function handleRowClick(id) {
    navigate(`/api/member/${id}`);
  }

  return (
    <div>
      <h3>회원목록</h3>

      <Table.Root interactive>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>가입일시</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {memberList.map((member) => (
            <Table.Row
              key={member.id}
              onClick={() => {
                handleRowClick(member.id);
              }}
            >
              <Table.Cell>{member.id}</Table.Cell>
              <Table.Cell>{member.inserted}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
