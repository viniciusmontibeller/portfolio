import styled from "styled-components";

const SocialList = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
    font-size: 2rem;
    a{
        position: relative;
        z-index: 2;
        :hover{
            div{
                transform: scale(1.25);
                opacity: 1;
                background-color: ${props => props.theme.colors.primary};
            }
        }
    }
    div{
        transition: .3s ease-in-out;
        transform: scale(.5);
        opacity: 0;
        background-color: ${props => props.theme.colors.shade};
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        border-radius: 50%;
        z-index: -1;
    }
    svg{
        display: block;
        /* border-bottom: 1px solid transparent; */
        /* padding-bottom: .1em; */
        transition: .3s ease-in-out;
        color: ${props => props.theme.colors.text};
        z-index: 2;
        :hover{
            /* border-bottom: 1px solid ${props => props.theme.colors.primary}; */
            color: ${props => props.theme.colors.background}
        }
    }
    
`

export { SocialList }