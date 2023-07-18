import styled from "styled-components"

const Main = styled.main`
    display: flex;
    justify-content: center;
    margin: 5rem 1rem;
`

const Container = styled.div`
    max-width: 80rem;
    width: 100%;
    padding: 1rem;
    
`

const Info = styled.div`
    text-align: center;
    margin-bottom: 8rem;
    h1{
        font-size: 3rem;
        margin-bottom: 0.5em;
    }
    p{
        font-size: 1.3rem;
        letter-spacing: 1px;
    }
    a{
        color: ${props => props.theme.colors.primary};
        border-bottom: 1px solid transparent;
        transition: .2s ease-in;
        :hover, :focus{
            border-bottom: 1px solid ${props => props.theme.colors.primary};
        }
    }
    @media(max-width: 700px){
        h1{
            font-size: 2.3rem;
        }
        p{
            font-size: 1.15rem;
        }
    }
`

const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 6rem;
    .hidden{
        opacity: 0;
        filter: blur(5px);
        transition: all 1s;
        :nth-child(odd){
            transform: translateX(-100%);
        }
        :nth-child(even){
            transform: translateX(100%)
        }
    }
    .show{
        opacity: 1;
        filter: blur(0);
        transform: translateX(0);
        :nth-child(even), :nth-child(odd){
            transform: translateX(0);
        }
    }
    @media(prefers-reduced-motion){
        .hidden{
            transition: none;
        }
    }
`

const ProjectCard = styled.div`
    display: flex;
    border-radius: 10px;
    border: 1px solid #616161;
    background-color: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.colors.shadow} 0px 5px 15px;
    :nth-child(even){
        flex-direction: row-reverse;
        @media(max-width: 1000px){
        flex-direction: column;
    }
    }
    :hover, :focus{
        img{
            filter: grayscale(0);
        }
    }
    @media(max-width: 1000px){
        flex-direction: column;
    }
    
`
const ImgContainer = styled.div`
    max-height: 32rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    a{
        display: block;
        line-height: 0;
    }
    img{
        transition: .5s ease-in-out;
        scale: 60%;
        filter: grayscale(70%);
        @media(max-width: 700px){
        scale: 35%;
    }
    }
    @media(max-width: 700px){
        max-height: 15rem;
    }
`

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em;
    h3{
        font-family: 'Ysabeau Office', sans-serif;
        font-size: 2.5rem;
        margin-bottom: .5em;
    }
    p{
        font-size: 1.2rem;
        margin-bottom: 1.5em;
        font-weight: 300;
    }
    @media(max-width: 700px){
        h3{
            font-size: 1.5rem;
        }
        p{
            font-size: 0.9rem;
        }
    }
`

const ProjectSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2em;
    font-weight: 100;
    span{
        border-right: 1px solid ${props => props.theme.colors.primary};
        border-left: 1px solid ${props => props.theme.colors.primary};
        padding: 0em 0.5em;
    }
    @media(max-width: 700px){
        font-size: .8rem;
    }
`

const ProjectSource = styled.div`
    display: flex;
    gap: 2rem;
    font-size: 1.3rem;
    font-family: 'Ysabeau Office', sans-serif;
    div{
        transition: .5s ease-in-out;
        position: absolute;
        top: 0; 
        right: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        background-color: ${props => props.theme.colors.background};
        transform: scale(.5);
        opacity: 0;
        z-index: -1;
    }
    a{ 
        transition: .5s ease-in-out;
        position: relative;
        color: ${props => props.theme.colors.primary};
        padding: 0.5em;
        border-radius: 10px;
        transition: .3s ease-in-out;
        border: 1px solid ${props => props.theme.colors.primary};
        :hover, :focus{
            color: ${props => props.theme.colors.background};
            div{
                opacity: 1;
                transform: scale(1);
                background-color: ${props => props.theme.colors.primary};
            }
        }
    }
    @media(max-width: 700px){
        font-size: 1.1rem;
    }
    
`
export { Main, Container, ProjectCard, ProjectsSection, ProjectInfo, ImgContainer, Info,ProjectSkills, ProjectSource }