import styled from "styled-components";

const Main = styled.main`
    display: flex;
    justify-content: center;
    margin: 5rem 1rem;
`

const Container = styled.div`
    max-width: 80rem;
    width: 100%;
    padding: 1rem;
    text-align: center;
`

const Intro = styled.div`
    margin-bottom: 8rem;
    h1{
        font-size: 3rem;
        margin-bottom: 0.5em;
    }
    p{
        font-size: 1.3rem;
        letter-spacing: 1px;
    }

`

const SkillsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4em;
`

const Skill = styled.li`
    width: 20rem;
    padding: 1.5em;
    background-color: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.colors.shadow} 0px 5px 15px;
    border-radius: 0px 50px 0px 0px;
    border: 1px solid #616161;
    svg{
        /* height: 64px; */
        font-size: 4em;
        color: ${props => props.theme.colors.primary};
        margin-bottom: .1em;
    }
    h3{
        font-size: 1.4rem;
        margin-bottom: .5em;
    }
    /* p{
        letter-spacing: 2px;
    } */
`

export { Main, Container, SkillsList, Skill, Intro }