import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

//StyledComponents
import { Container } from "@src/store/styleComponents";

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <h2>Header</h2>
          <Burger />
        </Container>
      </header>
    </>
  );
};

export default Header;
