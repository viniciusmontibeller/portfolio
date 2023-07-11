import styled from "styled-components";

const Main = styled.main`
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80rem;
    width: 100%;
    margin: 7rem 1rem 8rem;
    padding: 1rem;
`

const Info = styled.div`
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 5rem;
        margin-bottom: 0.2em;
    }
    h2{
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 2em;
    }
    p{
        font-size: 1.3rem;
        margin-bottom: 2.5em;
    }
`

const ImgContainer = styled.div`
    position: relative;
    
`

const FirstSquare = styled.div`
    position: absolute;
    top: -10rem;
    left: -5rem;
    right: 0;
    height: 30rem;
    width: 30rem;
    border: 5px solid ${props => props.theme.colors.primary};
    border-radius: 5px;
    rotate: 45deg;
    z-index: -1;
`

const SecondSquare = styled.div`
    position: absolute;
    top: -10rem;
    left: -5rem;
    right: 0;
    height: 30rem;
    width: 30rem;
    border: 5px solid ${props => props.theme.colors.primary};
    border-radius: 5px;
    /* rotate: 15deg; */
    z-index: -1;
`

const Cta = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    a{
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.background};
        border: 1px solid transparent;
        padding: 1em 4em;
        border-radius: 100em;
        transition: .2s ease-in-out;
        box-shadow: #616161 0px 5px 15px;
        :last-child{
            background-color: ${props => props.theme.colors.background};
            border: 1px solid ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
        }
        :hover{
            transform: translateY(-.2rem);
        }
    }
`

export { Main, Info, Container, ImgContainer, Cta, FirstSquare, SecondSquare }