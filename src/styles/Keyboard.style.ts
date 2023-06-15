import { styled } from "styled-components";

const KeyboardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    gap:.5rem;
`
const LetterButton = styled.button`
     width: 100%;
     background-color: none;
     aspect-ratio: 1/1;
     font-size: 2.5rem;
     text-transform: uppercase;
     padding: .5rem;
     font-weight: bold;
     cursor: pointer;
     color: black;
     &:hover:not(:disabled),
     &:focus:not(:disabled) {
        background-color: hsl(200, 100%, 75%);
     }
`

export {KeyboardContainer, LetterButton}