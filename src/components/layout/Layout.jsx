import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: ${props => props.theme.colors.other.primary};
  overflow: hidden;
`;

const Main = styled.main`
  padding-top: 100px;
  flex: 1 1;
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
};

export { Layout };
