import styled from "styled-components"

const HangManContainer = styled.div`
display: flex;
max-width: 800px;
flex-direction: column;
gap: 2rem;
margin: 0 auto;
align-items: center;
`
const WinOrLoseText = styled.div`
font-size: 2rem;
text-align: center;
`

export {HangManContainer, WinOrLoseText}