import styled from "styled-components";

const Paragraph = styled.p`
  display: block;
  color: ${props => props.theme.colors.secondary};

  ${props => props.theme.fontStyle.paragraphs};
`;

export const SecondaryParagraph = styled(Paragraph)`
  color: ${props => props.theme.colors.other.secondary};
`;
