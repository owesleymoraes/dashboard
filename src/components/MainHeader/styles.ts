import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  grid-area: MH;
  background-color: ${(props) => props.theme.colors.secundary};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;

export const WrapperToggle = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
