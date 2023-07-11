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
        /* margin-bottom: 3em; */
        letter-spacing: 1px;
    }
    a{
        color: ${props => props.theme.colors.primary};
        border-bottom: 1px solid transparent;
        transition: .2s ease-in;
        :hover{
            border-bottom: 1px solid ${props => props.theme.colors.primary};
        }
    }
`

const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`

const ProjectCard = styled.div`
    display: flex;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 1px solid #616161;
    /* background-color: ${props => props.theme.colors.shade}; */
    box-shadow: #616161 0px 5px 15px;
    h3{
        font-size: 1.7rem;
    }
    p{
        font-size: 1.3rem;
    }
    :nth-child(even){
        flex-direction: row-reverse;
    }
`
const ImgContainer = styled.div`
    max-height: 25rem;
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
        scale: .5;
    }
`

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em;
`

const ProjectSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    span{
        border-right: 1px solid ${props => props.theme.colors.primary};
        border-left: 1px solid ${props => props.theme.colors.primary};
        padding: 0em 0.5em;
    }
`

const ProjectSource = styled.div`
    display: flex;
    gap: 2rem;
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
        z-index: 2;
        :hover{
            color: ${props => props.theme.colors.background};
            div{
                opacity: 1;
                transform: scale(1);
                background-color: ${props => props.theme.colors.primary};
            }
        }
    }
    
`

export { Main, Container, ProjectCard, ProjectsSection, ProjectInfo, ImgContainer, Info,ProjectSkills, ProjectSource }