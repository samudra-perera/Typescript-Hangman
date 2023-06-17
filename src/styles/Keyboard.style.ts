import { styled } from "styled-components";

const KeyboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
`;
const LetterButton = styled.button<{ $active?: boolean; $inactive: boolean }>`
  width: 100%;
  background-color: ${(props) =>
    props.$active ? "hsl(200, 100%, 50%)" : "none"};
  aspect-ratio: 1/1;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  opacity: ${(props) => (props.$inactive ? ".3" : "1")};
  color: ${(props) => (props.$active ? "white" : "black")};
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: hsl(200, 100%, 75%);
  }
`;

export { KeyboardContainer, LetterButton };
