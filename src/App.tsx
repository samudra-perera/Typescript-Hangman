import { useState } from "react"
import words from './wordList.json'
import {HangManContainer, WinOrLoseText} from './styles/App.styles.js'
import { HangManDrawing } from "./HangManDrawing.js"
import { HangManWord } from "./HangManWord.js"
import { Keyboard } from "./Keyboard.js"

function App() {

  //State for the word that will be selected for the user
  //Function returns a random word from the words list json file
  const [wordToGuess, setWordToGuess] = useState<String>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  
  const [guessedLetters, setGuessedLetters] = useState<String[]>([])

  return (
    <HangManContainer>
      <WinOrLoseText>Win/Lose</WinOrLoseText>
      <HangManDrawing />
      <HangManWord />
      <Keyboard />
    </HangManContainer>
  )
}

export default App
