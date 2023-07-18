import styled from "styled-components";

const Main = styled.main`
    display: flex;
    justify-content: center;
    margin: 5rem 0rem;
    @media (min-width: 550px) {
        margin: 5rem 1rem;
    }
`

const Container = styled.main`
    margin: 1rem 0rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 3rem;
        margin-bottom: 2em;
        text-align: center;
    }
    @media (min-width: 550px) {
        margin: 1rem;
    }
`

const Form = styled.form`
    max-width: 55rem;
    width: 100%;
    padding: 5em;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.shade};
    animation: fade-in 1s ease-in-out forwards;
    @keyframes fade-in {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    label{
        font-size: 1.3rem;
    }
    textarea{
        resize: none;
    }
    input, textarea{
        font-size: 1.3rem;
        border: none;
        padding: 0.5em 0em;
        color: ${props => props.theme.colors.primary};
        border-bottom: 2px solid ${props => props.theme.colors.background};
        background-color: ${props => props.theme.colors.shade};
        outline: none;
        transition: .2s ease-in-out;
        :hover,
        :focus{
            border-bottom: 2px solid ${props => props.theme.colors.primary};
        }
    }
    button{
        color: ${props => props.theme.colors.text};
        border: 1px solid ${props => props.theme.colors.primary};
        padding: .5em 2em;
        transition: .2s ease-in-out;
        :hover, :focus{
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.background};
        }
    }
    @media (max-width: 600px) {
        padding: 2.5em;
    }

`
const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;
    label{
        span{
            color: ${props => props.theme.colors.primary};
        }
        margin-bottom: 0.5em;
    }
    span{
        color: red;
        line-height: 0;
        transform: translateY(1em);
    }
`

export { Main, Container, Form, InputField}