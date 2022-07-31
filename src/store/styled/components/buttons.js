import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: block;
  padding: 10px 20px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #fff;
  color: ${props => props.theme.colors.secondary};
  transition: color 0.2s;

  ${props => props.theme.fontStyle.buttons};
`;

export const SecondaryButton = styled(Button)`
  color: ${props => props.theme.colors.secondary};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;
