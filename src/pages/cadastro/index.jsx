import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleCadastro,
  SubtitleCadastro,
  Wrapper,
  ErrorMessage,
} from "./styles";

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      confirmSenha: "",
    },
  });

  const senha = watch("senha");

  const onSubmit = async (formData) => {
    console.log("Dados do formulário:", formData);
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Crie sua conta</TitleCadastro>
            <SubtitleCadastro>
              Preencha os campos abaixo para criar sua conta
            </SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome"
                leftIcon={<MdPerson />}
                name="nome"
                control={control}
                rules={{
                  required: "Nome é obrigatório",
                }}
              />
              {errors.nome && (
                <ErrorMessage>{errors.nome.message}</ErrorMessage>
              )}

              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
                rules={{
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "E-mail inválido",
                  },
                }}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}

              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
                rules={{
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "Senha deve ter no mínimo 6 caracteres",
                  },
                }}
              />
              {errors.senha && (
                <ErrorMessage>{errors.senha.message}</ErrorMessage>
              )}

              <Input
                type="password"
                placeholder="Confirme sua senha"
                leftIcon={<MdLock />}
                name="confirmSenha"
                control={control}
                rules={{
                  required: "Confirmação de senha é obrigatória",
                  validate: (value) =>
                    value === senha || "As senhas não conferem",
                }}
              />
              {errors.confirmSenha && (
                <ErrorMessage>{errors.confirmSenha.message}</ErrorMessage>
              )}

              <Button
                title="Cadastrar"
                $variant="secondary"
                type="submit"
                disabled={isSubmitting}
              />
            </form>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
