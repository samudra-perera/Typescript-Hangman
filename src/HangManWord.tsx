// @ts-ignore
import { WordContainer, LetterText } from "./styles/Word.style.ts";

type HangmanWordProps = {
    reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangManWord({ guessedLetters, wordToGuess, reveal=false }: HangmanWordProps) {
  return (
    <WordContainer>
      {wordToGuess.split("").map((letter, index) => {
        return (
          <LetterText key={index}>
            <span
              style={{
                visibility: guessedLetters.includes(letter) || reveal
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
