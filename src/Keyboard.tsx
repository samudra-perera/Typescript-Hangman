// @ts-ignore
import { KeyboardContainer, LetterButton } from "./styles/Keyboard.style.ts";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function Keyboard() {
  return (
    <KeyboardContainer>
      {KEYS.map((key) => {
        return <LetterButton>{key}</LetterButton>
      })}
    </KeyboardContainer>
  );
}
