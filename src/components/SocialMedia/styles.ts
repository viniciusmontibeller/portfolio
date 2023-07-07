import styled from "styled-components";

const SocialList = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
    font-size: 1.7rem;
    svg{
        display: block;
    }
    a{
        color: ${props => props.theme.colors.text};
        transition: .2s ease-in-out;
        :hover{
            color: ${props => props.theme.colors.primary}
        }
    }
`

export { SocialList }