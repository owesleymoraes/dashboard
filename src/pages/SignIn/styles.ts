import styled from "styled-components";

export const ContainerSignIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const LogoLogin = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const LabelLogo = styled.h2`
  color: ${(props) => props.theme.colors.white};
  margin-left: 8px;
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;
  border: 1px solid;
  padding: 28px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 40px;

  &:after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }
`;
