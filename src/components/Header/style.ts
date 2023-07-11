import styled from "styled-components"

interface Open{
    isOpen: boolean;
}

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

const Menu = styled.div`
    display: none;
    width: 60px;
    height: 60px;
    align-self: flex-end;
    cursor: pointer;
    @media(max-width: 950px){
        display: block;
    }
`

const Hamburger = styled.span<Open>`
    background-color: ${props => props.theme.colors.text};
    position: relative;
    display: block;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: transform 0.5s ease-in-out;
    transform: ${({ isOpen }) => isOpen ? "rotate(45deg)" : ""};
    :before,
    :after{
        background-color: ${props => props.theme.colors.text};
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.2s ease-in-out;
    }
    :before{
        top: ${({ isOpen }) => isOpen ? 0 : "-10px"};
        transform: ${({ isOpen }) => isOpen ? "rotate(90deg)" : ""};
    }
    :after{
        bottom: ${({ isOpen }) => isOpen ? 0 : "-10px"};
        transform: ${({ isOpen }) => isOpen ? "rotate(90deg)" : ""};
    }
`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    a, svg{
        transition: .2s ease-in-out;
        :hover{
            color: ${props => props.theme.colors.primary};
        }
    }
    /* nav a.active{
            color: ${props => props.theme.colors.primary};
        } */
    @media(max-width: 950px){
        gap: 1rem;
    }
`
const Nav = styled.nav<Open>`
    transition: .5s ease-in-out;
    @media(max-width: 950px){
        transition: .5s linear;
        position: absolute;
        top: 92px;
        right: ${({ isOpen }) => isOpen ? 0 : "-250px"};
        z-index: 1;
    }
`

const NavList = styled.ul<Open>`
    display: flex;
    transition: .5s ease-in-out;
    @media(max-width: 950px){
        max-width: 250px;
        background-color: ${props => props.theme.colors.shade};
        padding: 20px;
        flex-direction: column;
        text-align: start;
    }
    li{
        padding: 1em 0em;
        margin: 0em 1em;
    }
    a{
        @media(max-width: 950px){
            text-align: center;
            padding: 20px;
            display: block;
        }
    }
`

export { Head, NavList, Container, NavContainer, Menu, Hamburger, Nav }