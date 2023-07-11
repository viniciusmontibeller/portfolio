import pokedex from '../../assets/projects/pokedex.gif'
import pokedexImg from '../../assets/projects/pokedex.img.png'
import interactiveCardForm from "../../assets/projects/interactive-card-form.gif"
import interactiveCardFormImg from "../../assets/projects/interactive-card-form.img.png"
import fetchGithub from "../../assets/projects/fetch-github.gif"
import fetchGithubImg from "../../assets/projects/fetch-github.img.png"
import { Main, Container, ProjectCard, ProjectsSection, ProjectInfo, ImgContainer, Info, ProjectSkills, ProjectSource } from "./style"
import { useState } from "react"

const ProjectsMain = () => {

    const [playingPokedex, setPlayingPokedex] = useState(false)
    const [playingCardForm, setPlayingCardForm] = useState(false)
    const [playingFetchGitHub, setPlayingFetchGitHub] = useState(false)

    return (
        <Main>
            <Container>
                <Info>
                    <h1>Projetos</h1>
                    <p>Esses foram alguns projetos selecionados que demonstram minhas habilidades como Desenvolvedor Web Frontend. Caso deseje ver todos os meus projetos acesse o meu <a href='https://github.com/viniciusmontibeller' target='_blank'>GitHub</a>.
                    </p>
                </Info>

            <ProjectsSection>
                <ProjectCard 
                onMouseEnter={() => setPlayingPokedex(true)}
                onMouseLeave={() => setPlayingPokedex(false)}
                >
                    <ImgContainer>
                        <a href="">
                            {playingPokedex ? <img src={pokedex} alt="Projeto Pokédex"/> : <img src={pokedexImg} alt="Projeto Pokédex"/>}
                        </a>
                    </ImgContainer>
                    <ProjectInfo>
                        <h3>
                            Pokédex
                        </h3>
                        <p>
                            A Pokédex é uma aplicação baseada na franquia mundial Pokémon, e consiste em uma lista de Pokémons e suas características, utilizando React.JS e testes com Jest e Testing Library. Para cada pokemon temos também uma página interna para maiores detalhes.
                        </p>
                        <ProjectSkills>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>React</span>
                            <span>Jest</span>
                            <span>Testing Library</span>
                            <span>Styled-Components</span>
                        </ProjectSkills>
                        <ProjectSource>
                            <a href='https://pokedex-59w8cvabd-viniciusmontibeller.vercel.app/'>
                                Live Site
                                <div></div>
                            </a>
                            <a href='https://github.com/viniciusmontibeller/pokedex'>
                                Repositório
                                <div></div>    
                            </a>
                        </ProjectSource>
                    </ProjectInfo>
                </ProjectCard>
                <ProjectCard
                onMouseEnter={() => setPlayingCardForm(true)}
                onMouseLeave={() => setPlayingCardForm(false)}
                >
                    <ImgContainer>
                        <a href="">
                            {playingCardForm ? <img src={interactiveCardForm} alt="Formulário de cartão interativo"/> : <img src={interactiveCardFormImg}/>}
                        </a>
                    </ImgContainer>
                    <ProjectInfo>
                        <h3>
                            Formulário de cartão interativo
                        </h3>
                        <p>
                            Projeto realizado para validar as informações de cartão de um usuário. Possui ainda uma resposta interativa do prenchimento em tempo real para o usuário ter uma melhor experiência no formulário.
                        </p>
                        <p>
                            Projeto feito com: HTML, CSS, React, Styled-Components, React Hook Form e Zod pra validação.
                        </p>
                        <ProjectSource>
                            <a href='https://interactive-card-details-form-2cvx8pjnx-viniciusmontibeller.vercel.app/'>
                                Live Site
                                <div></div>
                            </a>
                            <a href='https://github.com/viniciusmontibeller/interactive-card-details-form' >
                                Repositório
                                <div></div>
                            </a>
                        </ProjectSource>
                    </ProjectInfo>
                </ProjectCard>
                <ProjectCard
                onMouseEnter={() => setPlayingFetchGitHub(true)}
                onMouseLeave={() => setPlayingFetchGitHub(false)}
                >
                    <ImgContainer>
                        <a href="">
                            {playingFetchGitHub ? <img src={fetchGithub} alt="Buscador de usuários do GitHub"/>: <img src={fetchGithubImg} alt="Buscador de usuários do GitHub"/>}
                        </a>
                    </ImgContainer>
                    <ProjectInfo>
                        <h3>
                            Buscador de usuários do GitHub
                        </h3>
                        <p>
                            Nesse projéto o foco é a qualidade do consumo de um API, onde foi utilizado a API do GitHub para fazer uma busca de usuários, seus repositórios, e outras infomrações adicionais disponíveis.<br/>
                            Projeto feito com: HTML, CSS, JavaScript
                        </p>
                        <ProjectSource>
                            <a href='https://viniciusmontibeller.github.io/projeto-inicial-fetch-github-api/'>
                                Live Site
                                <div></div>
                            </a>
                            <a href='https://github.com/viniciusmontibeller/projeto-inicial-fetch-github-api' >
                                Repositório
                                <div></div>
                            </a>
                        </ProjectSource>
                    </ProjectInfo>
                </ProjectCard>
            </ProjectsSection>
            </Container>
        </Main>
    )
}



export { ProjectsMain }