import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  margin-top: 40px;
  margin-left: auto;
`;

export const Column = styled.div`
  flex: 1;
  max-width: 100%;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
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

export const TitleLogin = styled.p`
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const SubtitleLogin = styled.p`
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;

export const SubtitleRecover = styled.p`
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 30px;
  color: #888;
`;

export const TitleRecover = styled.h1`
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 30px;
  color: #ffffdf;
`;

export const EsqueciText = styled(Link)`
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #e5e044;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export const CriarText = styled(Link)`
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #23dd7a;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;
