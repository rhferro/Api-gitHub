import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

import GitLogo from "../../components/assets/images/github.svg";

import { Container, Logo, Title, Form, Input, Button } from "./styles";

export default function MainPage() {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <Logo src={GitLogo} alt="Logo do GitHub" />
      <Title>API GitHub</Title>
      <Form>
        <Input
          placeholder="Usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
