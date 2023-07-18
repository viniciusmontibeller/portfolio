import styled from "styled-components";

const Main = styled.main`
    display: flex;
    justify-content: center;
    overflow: hidden;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80rem;
    width: 100%;
    margin: 6rem 1rem 8rem;
    border-radius: 10px;
    @media (max-width: 1050px){
        flex-direction: column-reverse;
        background-color: ${props => props.theme.colors.background};
        gap: 3rem;
    }
`

const Info = styled.section`
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.background};
    padding: 1rem;
    h1{
        font-size: 5rem;
        margin-bottom: 0.2em;
    }
    p{
        font-size: 1.3rem;
        margin-bottom: 2.5em;
    }
    @media(max-width: 700px){
        p{
            font-size: 1.15rem;
        }
    }
`

const Presentation = styled.section`
    display: flex;
    position: relative;
    justify-content: center;
    svg{
        font-size: 3rem;
    }
    @media(max-width: 1050px){
        width: 100%;
        padding: 3rem 0rem;
        padding: 2em 1em;
    }
`

const About = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    div{
        padding-bottom: 2rem;
        border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
    h1{
        font-family: 'Ysabeau Office', sans-serif;
        letter-spacing: 1px;
        font-size: 2rem;
        text-align: center;
        @media(max-width: 375px){
        font-size: 1.5rem;
        }
    }
    h3{
        text-align: center;
        font-size: 1.1rem;
        font-weight: 300;
        letter-spacing: 1px;
        @media(max-width: 1050px){
            color: ${props => props.theme.colors.primary};
        }
        @media(max-width: 375px){
        font-size: 1rem;
        }
    }
`

const FirstSquare = styled.div`
    position: absolute;
    top: -13rem;
    left: -5rem;
    right: 0;
    height: 60rem;
    width: 60rem;
    border: 5px solid ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.colors.shadow} 0px 5px 15px;
    border-radius: 5px;
    rotate: 45deg;
    z-index: -1;
    opacity: 0.8;
`

const SecondSquare = styled.div`
    position: absolute;
    top: -12rem;
    left: -5rem;
    right: 0;
    height: 60rem;
    width: 60rem;
    border: 5px solid ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.colors.shadow} 0px 5px 15px;
    border-radius: 5px;
    rotate: 15deg;
    z-index: -1;
    opacity: .8;
`

const Cta = styled.div`
    display: flex;
    gap: 4rem;
    font-family: 'Ysabeau Office', sans-serif;
    font-weight: 700;
    a{
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.background};
        border: 1px solid transparent;
        padding-block: clamp(.5em, 1vh + .5em, 1em);
        padding-inline: clamp(1.5em, 4vw + 1em, 4em);
        border-radius: 100em;
        transition: .2s ease-in-out;
        box-shadow: #616161 0px 5px 15px;
        text-transform: uppercase;
        :last-child{
            background-color: ${props => props.theme.colors.background};
            border: 1px solid ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
        }
        :hover, :focus{
            transform: translateY(-.2rem);
        }
    }
    @media (max-width: 600px){
        display: flex;
        justify-content: center;
        gap: .5rem;
    }
    @media (max-width: 375px){
        font-size: .8rem;
    }
`

export { Main, Info, Container, Presentation, Cta, FirstSquare, SecondSquare, About }