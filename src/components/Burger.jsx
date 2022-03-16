import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { getBurgerState } from "@src/store/reducers/selectors";
import { toggleBurgerActions } from "@src/store/reducers/burgerReducer/actions";

//StyledComponents
import { BurgerLine } from "@src/store/styleComponents";

const LineClose = styled(BurgerLine)`
  stroke-width: 0.393rem;
`;

const Line6 = styled(BurgerLine)`
  transform: ${props => (props.toggle ? "translateX(-18px) translateY(3px) rotate(-45deg) scale(0.7)" : "none")};
`;
const Line5 = styled(BurgerLine)`
  transform: ${props => (props.toggle ? "translateX(18px) translateY(3px) rotate(45deg) scale(0.7)" : "none")};
`;
const Line4 = styled(BurgerLine)`
  transform: ${props => (props.toggle ? "translateY(0px) rotate(-45deg) scale(0.7)" : "none")};
`;
const Line3 = styled(BurgerLine)`
  transform: ${props => (props.toggle ? "translateY(0px) rotate(45deg) scale(0.7)" : "none")};
`;
const Line2 = styled(BurgerLine)`
  transform: ${props => (props.toggle ? "translateX(-18px) translateY(-3px) rotate(45deg) scale(0.7)" : "none")};
`;
const Line1 = styled(BurgerLine)`
  transform: ${props => (props.toggle ? "translateX(18px) translateY(-3px) rotate(-45deg) scale(0.7)" : "none")};
`;

const IconClose = styled.svg`
  transform: ${props => (props.toggle ? "scale(1)" : "scale(0)")};
  transition: transform 400ms;
  width: 45px;
  height: 45px;
`;

const IconLine = styled.svg`
  cursor: pointer;
  position: absolute;
  display: block;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`;

const _Burger = styled.div`
  display: none;

  @media ${props => props.theme.breakpoints.tablet} {
    box-shadow: ${props => (props.toggle ? "0 0 0 100vw rgb(28, 134, 255), 0 0 0 100vh rgb(28, 134, 255)" : "none")};
    border-radius: ${props => (props.toggle ? "50% 50% 50% 50%" : "0")};

    position: fixed;
    right: 0;
    transform: translate(-15%, 0);
    transition: box-shadow 0.2s, border-radius 0.2s;
    cursor: pointer;
    display: block;
    width: 45px;
    height: 45px;
  }
`;

const Burger = () => {
  const { toggle } = useSelector(getBurgerState);
  const dispatch = useDispatch();

  console.log(toggle);

  return (
    <>
      <_Burger toggle={toggle} onClick={() => dispatch(toggleBurgerActions(!toggle))}>
        <IconLine version="1.1" viewBox="0 0 100 100">
          <Line1 toggle={toggle} d="M 50,35 H 30" />
          <Line2 toggle={toggle} d="M 50,35 H 70" />
          <Line3 toggle={toggle} d="M 50,50 H 30" />
          <Line4 toggle={toggle} d="M 50,50 H 70" />
          <Line5 toggle={toggle} d="M 50,65 H 30" />
          <Line6 toggle={toggle} d="M 50,65 H 70" />
        </IconLine>
        <IconClose toggle={toggle} version="1.1" viewBox="0 0 100 100">
          <LineClose d="M 34,32 L 66,68" />
          <LineClose d="M 66,32 L 34,68" />
        </IconClose>
      </_Burger>
    </>
  );
};
export default Burger;
