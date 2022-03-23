import React from "react";
import styled from "styled-components";
import MainPage from "./MainPage";

const Main = styled.main`
  flex: 1 1;
`;

const Content = () => {
  return (
    <>
      <Main>
        <MainPage />
      </Main>
    </>
  );
};

export default Content;
