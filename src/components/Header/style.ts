import styled from "styled-components"

const Head = styled.header`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80rem;
    width: 100%;
    padding: 1rem;
    a, svg{
        color: ${props => props.theme.colors.text};
    }
`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    a, svg{
        :hover{
            color: ${props => props.theme.colors.primary};
        }
    }
`

const NavList = styled.ul`
    display: flex;
    li{
        padding: 1em 0em;
        margin: 0em 1em;
        border-bottom: 1px solid transparent;
        transition: .2s ease-in-out;
        :hover{
            border-bottom: 1px solid ${props => props.theme.colors.primary};
        }
    }
`

export { Head, NavList, Container, NavContainer }