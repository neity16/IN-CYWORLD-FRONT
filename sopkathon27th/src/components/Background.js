import React from 'react'
import styled, {css} from 'styled-components';

const BackgroundTemplate = styled.div`
    position: relative;
    ${props =>
        css`
         background-image: url('/images/Question_${props.num}.png');   
        `
    }
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 9.1%;
`;

function Background({children, num}) {
    return (
            <BackgroundTemplate num={num}>
                {children}
            </BackgroundTemplate>
    )
}

export default Background
