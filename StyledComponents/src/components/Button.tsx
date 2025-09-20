import styled from 'styled-components'

interface StyledButtonProps {
    primary?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${({ primary }) => primary ? "red" : "blue"};
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
    color: black;

    &:hover {
    background-color: orange;
    }
`

interface ButtonProps {
    text: string;
    primary?: boolean; // Optional boolean
}

const Button = ({ text, primary }: ButtonProps) => {
    return (
        <StyledButton primary={primary}>{text}</StyledButton>
    )
}

export default Button