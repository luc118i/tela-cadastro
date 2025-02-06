import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import { useLocation } from "react-router-dom"; // Para verificar a página atual

import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
} from "./styles";

const Header = ({ autenticado }) => {
  const location = useLocation(); //

  const isCadastroPage = location.pathname === "/cadastro";

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          )}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              {/* Não renderizar "Cadastrar" se já estiver na página de cadastro */}
              {!isCadastroPage && (
                <>
                  <MenuRight href="/">Home</MenuRight>
                  <Button title="Entrar" />
                  <Button title="Cadastrar" />
                </>
              )}
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
