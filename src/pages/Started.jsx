import React from "react";

import { Container } from "@src/store/styled/components/other";
import { SecondaryParagraph } from "@src/store/styled/components/texts";

const Started = () => {
  return (
    <>
      <Container>
        <SecondaryParagraph>Дополнительная страница</SecondaryParagraph>
        <SecondaryParagraph>Additional page</SecondaryParagraph>
        <br />
        <SecondaryParagraph>В этом шаблоне отсутствует typeScript</SecondaryParagraph>
        <SecondaryParagraph>There is no TypeScript in this template</SecondaryParagraph>
      </Container>
    </>
  );
};

export { Started };
