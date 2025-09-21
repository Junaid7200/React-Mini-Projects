import styled from 'styled-components';

const StyledIcon = styled.div<{primary?: boolean}>`
    font-size: 24px;
    color: ${(props) => props.primary ? 'green' : 'yellow'};
`

export default function Icon({ primary }: { primary?: boolean }) {
    return <StyledIcon primary={primary}>yoyo⭐</StyledIcon>;
}