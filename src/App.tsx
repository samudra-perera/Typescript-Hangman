import { useState } from "react";
import words from "./wordList.json";
import { HangManDrawing } from "./HangManDrawing.js";
import { HangManWord } from "./HangManWord.js";
import { Keyboard } from "./Keyboard.js";
// @ts-ignore
import { HangManContainer, WinOrLoseText } from "./styles/App.styles.ts";

function App() {
  //State for the word that will be selected for the user
  //Function returns a random word from the words list json file
  const [wordToGuess, setWordToGuess] = useState<String>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<String[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => {
    return !wordToGuess.includes(letter)
  })

  return (
    <HangManContainer>
      <WinOrLoseText>Win/Lose</WinOrLoseText>
      <HangManDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangManWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </HangManContainer>
  );
}

export default App;
