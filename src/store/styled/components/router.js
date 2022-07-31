import styled from "styled-components";
import { NavLink } from "react-router-dom";

const RouterLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  transition: color 0.2s;

  ${props => props.theme.fontStyle.routers};
`;

export const RouterLinkSecondary = styled(RouterLink)`
  color: ${props => props.theme.colors.secondary};

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;
