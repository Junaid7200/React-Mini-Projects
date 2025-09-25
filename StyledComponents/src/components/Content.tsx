import styled, { keyframes } from 'styled-components'
import Button from './Button'
import Icon from './Icon'


const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`

const Title = styled.h1`
    color: #aac9f0;
    animation: 5s ${fadeIn} ease-in;
`

const Section = styled.div`
    background-color: #f0d1aa;
    display: flex;
    justify-content: center;
    color: #f0aeaa;
    border-radius: 15px; 
    flex-direction: column;
    gap: 10px;
    animation: 2s ${rotate} linear infinite;
`

const Content = () => {
    return (
        <Section>
            <Title>💅 Section</Title>
            <Button primary text="text me first"/>
            <Button text="text me second"/>
            <Icon primary/>
            <Icon />
        </Section>
    )
}

export default Content

//Mini Challenge
// In this mini challenge I would like you to help me out for the next section by
// adding two plain white buttons with the words 'Click me' in each below the word
// Section. Please use the approach we have learnt today. 
// We will need this for the next scrim.