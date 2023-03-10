import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.h2<{ lineColor: string }>`
  color: ${(props) => props.theme.colors.white};

  &::after {
    display: block;
    content: "";
    width: 40px;
    border-bottom: 8px solid ${(props) => props.lineColor};
  }

  @media (max-width: 420px) {
    font-size: 20px;
    &::after {
      display: block;
      content: "";
      width: 40px;
      border-bottom: 4px solid ${(props) => props.lineColor};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;

  @media (max-width: 420px) {
    width: 100%;
    justify-content: space-between;
    margin-top: 28px;
  }
`;
