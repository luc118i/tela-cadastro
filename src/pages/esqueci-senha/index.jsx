import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";

import {
  Container,
  Column,
  TitleRecover,
  SubtitleRecover,
  Row,
  Wrapper,
} from "./styles";

const EsqueciSenha = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post("/users/forgot-password", {
        email: formData.email,
      });

      if (data.success) {
        setMessage(
          "Se o e-mail estiver registrado, você receberá um link para redefinir sua senha."
        );
      } else {
        setMessage("Ocorreu um erro. Tente novamente.");
      }
    } catch (e) {
      console.error("Erro ao enviar recuperação", e);
      setMessage("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Wrapper>
            <TitleRecover>Esqueci minha senha</TitleRecover>
            <SubtitleRecover>
              Digite seu e-mail para receber um link de recuperação.
            </SubtitleRecover>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Button
                title="Enviar link de recuperação"
                $variant="secondary"
                type="submit"
              />
            </form>
            {message && <p>{message}</p>}
            <Row>
              <Button
                title="Voltar ao Login"
                $variant="secondary"
                onClick={() => navigate("/login")}
              />
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { EsqueciSenha };
