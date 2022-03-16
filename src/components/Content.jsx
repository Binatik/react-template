import React from "react";
import styled from "styled-components";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const Main = styled.main`
  flex: 1 1;
`;

const Content = () => {
  return (
    <>
      <Main>
        <Container>
          <h2>Main</h2>
        </Container>
      </Main>
    </>
  );
};

export default Content;
