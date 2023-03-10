import styled from "styled-components";
/**
 * Layout
 * MH = MainHeader
 * AS = Aside
 * CT = Content
 */

export const Container = styled.div`
  display: grid;
  grid-template-columns: 208px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "AS MH"
    "AS CT";

  height: 100vh;
  min-width: 316px;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;

    grid-template-areas:
      "MH"
      "CT";
  }
`;
