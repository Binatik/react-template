import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/components/other";
import { RouterLinkSecondary } from "@src/store/styled/components/router";

import { Burger } from "@cmp/UI/Burger";
import { SecondaryButton } from "@src/store/styled/components/buttons";

const Header = ({ ...props }) => {
  const text = "This is a test template, it has no functionality, but everything is in your hands!";
  return (
    <>
      <Header.Header>
        <Container>
          <Row>
            <Navigation>
              <RouterLinkSecondary style={{ marginRight: "10px" }} {...props} to="/">
                Главная
              </RouterLinkSecondary>
              <RouterLinkSecondary {...props} to="started">
                Дополнительная
              </RouterLinkSecondary>
            </Navigation>
            <SecondaryButton onClick={() => alert(text)}>Информация</SecondaryButton>
            <Burger />
          </Row>
        </Container>
      </Header.Header>
    </>
  );
};

export { Header };

Header.Header = styled.header`
  position: absolute;
  width: 100%;
  background-color: #333333;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Row = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Navigation = styled.nav`
  margin: 10px 0;
  display: flex;
  flex: 1 1 auto;

  @media ${props => props.theme.desktopFirst.tablet} {
    position: fixed;
    opacity: 0;
  }
`;
