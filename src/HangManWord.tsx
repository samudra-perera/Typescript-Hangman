// @ts-ignore
import { WordContainer, LetterText } from "./styles/Word.style.ts";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangManWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <WordContainer>
      {wordToGuess.split("").map((letter, index) => {
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
