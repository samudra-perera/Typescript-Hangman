// @ts-ignore
import { WordContainer, LetterText } from "./styles/Word.style.js";

export function HangManWord() {
  const word = "test";
  const guessedLetters = ["t"];
  return (
    <WordContainer>
      {word.split("").map((letter, index) => {
        return (
          <LetterText key={index}>
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
            >
              {letter}
            </span>
          </LetterText>
        );
      })}
    </WordContainer>
  );
}
