import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Column = styled.div`
  flex: 1;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  margin-top: 40px;
  margin-left: auto; /* Posiciona o formulário à direita */
`;

export const Title = styled.h2`
  font-family: "Roboto Mono", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 90%;
  margin-bottom: 40px;
  line-height: 44px;
  font-style: italic;

  color: #ffffff;
`;

export const TitleCadastro = styled.p`
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const SubtitleCadastro = styled.p`
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 14px;
  color: #ff4d4f;
  margin-top: 4px;
`;
