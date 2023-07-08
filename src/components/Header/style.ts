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

const MenuHamburger = styled.div`
    
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

const Hamburger = styled.span`
    background-color: #000;
    position: relative;
    display: block;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;
    transform: ${({ open }) => open ? "rotate(45deg)" : ""};
    :before,
    :after{
        background-color: #000;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.2s ease-in-out;
    }
    :before{
        top: ${({ open }) => open ? 0 : "-10px"};
        transform: ${({ open }) => open ? "rotate(90deg)" : ""};
    }
    :after{
        bottom: ${({ open }) => open ? 0 : "-10px"};
        transform: ${({ open }) => open ? "rotate(90deg)" : ""};
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
    nav{
        @media(max-width: 950px){
            position: absolute;
            top: 92px;
            right: 0px;
            z-index: 1;
    }
    }
    @media(max-width: 950px){
        gap: 1rem;
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
    @media(max-width: 950px){
        display: ${({ open }) => open ? "block" : "none"};
        width: 300px;
        background-color: #fff;
        padding: 20px;
        flex-direction: column;
        text-align: start;
    }
    a{
        @media(max-width: 950px){
            text-align: center;
            padding: 20px;
            display: block;
    }
    }
`

export { Head, NavList, Container, NavContainer, MenuHamburger, Menu, Hamburger }