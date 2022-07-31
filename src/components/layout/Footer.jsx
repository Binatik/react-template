import React from "react";

import { Container } from "@src/store/styled/components/other";
import { SecondaryParagraph } from "@src/store/styled/components/texts";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <SecondaryParagraph>Footer</SecondaryParagraph>
        </Container>
      </footer>
    </>
  );
};

export { Footer };
