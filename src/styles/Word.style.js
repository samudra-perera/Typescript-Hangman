import { styled } from "styled-components";

const WordContainer = styled.div`
    display: flex;
    gap: .25em;
    font-size: 6rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
`

const LetterText = styled.span`
    border-bottom: .1em solid black;
`

export {WordContainer, LetterText}