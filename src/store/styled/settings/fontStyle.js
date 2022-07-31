import { breakpoints } from "./breakpoints";

export const fontStyle = {
  routers: `
    font-size: 1.5rem;

    @media (max-width: ${breakpoints.medium}px) {
      font-size: 1.9rem;
    },
  `,

  links: `
    font-size: 1.5rem;

    @media (max-width: ${breakpoints.medium}px) {
      font-size: 1.3rem;
    },
  `,

  buttons: `
    font-size: 1.2rem;

    @media (max-width: ${breakpoints.medium}px) {
      font-size: 1rem;
    },
  `,

  titles: `
  font-size: 1.8rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 1.5rem;
  },
  `,

  subTitles: `
  font-size: 1.5rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 1.1rem;
  },
  `,

  paragraphs: `
  font-size: 1.1rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 0.9rem;
  },
  `,
};
