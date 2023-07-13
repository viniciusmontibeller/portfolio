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
    padding: 1.5rem;
    a, svg{
        color: ${props => props.theme.colors.text};
    }
`
const Name = styled.div`
    h1{
        font-size: clamp(1rem, 3vw + 0.5rem, 3rem);
        line-height: 1;
    }
    div{
        border-right: 1px solid ${props => props.theme.colors.primary};
        border-left: 1px solid ${props => props.theme.colors.primary};
        display: flex;
        justify-content: space-between;
        padding: 0em .5em;
        line-height: 1;
        text-transform: uppercase;
    }
    span{
        font-size: clamp(.5rem, 1vw + 0.3rem, 1rem);
        :nth-child(3){
            margin-right: 1.5em;
        }
    }
    
`

const Menu = styled.div`
    display: none;
    width: 60px;
    height: 60px;
    align-self: flex-end;
    cursor: pointer;
    @media(max-width: 1100px){
        display: block;
    }
    :hover{
        span{
            background-color: ${props => props.theme.colors.primary},
        }
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
    @media (max-width: 700px) {
        scale: .9;
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
    @media(max-width: 1100px){
        gap: 1rem;
    }
`
const Nav = styled.nav<Open>`
    transition: .4s ease-in-out;
    @media(max-width: 1100px){
        position: absolute;
        top: 92px;
        right: ${({ isOpen }) => isOpen ? 0 : "-250px"};
        z-index: 1;
    }
`

const NavList = styled.ul<Open>`
    display: flex;
    @media(max-width: 1100px){
        max-width: 250px;
        background-color: ${props => props.theme.colors.shade};
        box-shadow: #616161 0px 5px 15px;
        border-radius: 5px;
        padding: 20px;
        flex-direction: column;
        text-align: start;
        display: ${({ isOpen }) => isOpen ? "block" : "none"};
    }
    li{
        padding: 1em 0em;
        margin: 0em 1em;
    }
    a{
        @media(max-width: 1100px){
            text-align: center;
            padding: 20px;
            display: block;
        }
    }
`

export { Head, NavList, Container, NavContainer, Menu, Hamburger, Nav, Name }