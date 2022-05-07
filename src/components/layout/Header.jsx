import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Container } from "@src/store/styled/styleComponents";

import { Burger } from "@cmp/UI/Burger";

const Link = styled(NavLink)`
  margin: 15px 0 0 0;
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const Header = ({ ...props }) => {
  return (
    <>
      <header>
        <Container>
          <Link {...props} to="/">
            Главная
          </Link>
          <Link {...props} to="started">
            Дополнительная
          </Link>
          <Burger />
        </Container>
      </header>
    </>
  );
};

export { Header };
