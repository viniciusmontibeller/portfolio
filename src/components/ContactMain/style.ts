import styled from "styled-components";

const Main = styled.main`
    display: flex;
    justify-content: center;
    margin: 5rem 1rem;
`

const Container = styled.main`
    margin: 1rem;
    h1{
        font-size: 3rem;
        margin-bottom: 2em;
        text-align: center;
    }
`

const Form = styled.form`
    width: 55rem;
    padding: 5em;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.shade};
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
        :hover{
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.background};
        }
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