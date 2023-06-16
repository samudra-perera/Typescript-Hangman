import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import { HangManDrawing } from "./HangManDrawing.js";
import { HangManWord } from "./HangManWord.js";
import { Keyboard } from "./Keyboard.js";
// @ts-ignore
import { HangManContainer, WinOrLoseText } from "./styles/App.styles.ts";

function App() {
  //State for the word that will be selected for the user
  //Function returns a random word from the words list json file
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => {
    return !wordToGuess.includes(letter);
  });

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <HangManContainer>
      <WinOrLoseText>Win/Lose</WinOrLoseText>
      <HangManDrawing numberOfGuesses={incorrectLetters.length} />
      <HangManWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          activeLetters={guessedLetters.filter((letter) => {
            return wordToGuess.includes(letter);
          })}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </HangManContainer>
  );
}

export default App;
