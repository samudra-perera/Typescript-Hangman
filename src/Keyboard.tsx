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

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  disabled=false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <KeyboardContainer>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <LetterButton
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || isActive || disabled}
            $active={isActive}
            $inactive={isInactive}
          >
            {key}
          </LetterButton>
        );
      })}
    </KeyboardContainer>
  );
}
