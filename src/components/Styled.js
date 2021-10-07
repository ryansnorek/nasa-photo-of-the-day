import styled from 'styled-components'

export const StyledTimeTravel = styled.div`
    * {
        color: #dee6df;
        font-family: sans-serif;
        background-color: ${props => props.theme.spaceGrey};
        margin: 0 auto;
        
    }

    h1 {
        font-size: 3.3rem;
        padding-top: 12%;
    }

    h4, h5{
        padding: 2%;
    }

    button {
        color: ${props => props.theme.spaceGreen};
        font-weight: bold;
        padding: 1.6%
    }
    button:hover {
        text-shadow: 0 0 20px ${props => props.theme.spaceGreen};
    }

    p {
        line-height: 1.5;
        padding: 2% 12% 12% 12%;
    }

    img {
        width: 42%;
        border: 3px solid #4f4f4f;
    }
   
`