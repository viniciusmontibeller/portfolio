import { Link } from 'react-router-dom'
import { Main, Info, Container, Presentation, Cta, FirstSquare, SecondSquare, About } from './style'
import { SocialMedia } from '../SocialMedia'
import CV from "../../assets/cv/ViniciusMontibellerDesenvolvedorFrontendReactCV.pdf"

const AboutMain = () => {
    return (
        <Main>
            <Container>
            <Info>
                <h1>Olá,</h1>
                <p>
                Sou um Desenvolvedor Web Frontend Júnior dedicado, atencioso e detalhista. Possuo uma afinidade natural para perceber e analisar padrões, bem como uma habilidade para abordar problemas de forma criativa e inovadora. Estou verdadeiramente apaixonado pela área e, além de satisfeito com a minha escolha, tenho uma constante vontade de evoluir e me desenvolver cada vez mais.
                <br/>
                <br/>
                Como Desenvolvedor Web com foco especializado em Frontend, minhas habilidades como HTML, CSS, JavaScript, React, TypeScript, Git, Styled-Components são voltadas a transformar design estáticos em interfaces dinâmicas, e também a utiliziação de Jest e Testing Library para testes automatizados.
                </p>
                <Cta>
                    <Link to="/projects"> 
                        Projetos
                    </Link>
                    <a 
                    href={CV}
                    download="ViniciusMontibellerDesenvolvedorFrontend">
                        Baixar CV
                    </a>
                </Cta>
            </Info>

            <Presentation>
                <FirstSquare/>
                <SecondSquare/>
                <About>
                    <div>
                        <h1>Vinicius Montibeller</h1>
                        <h3>Desenvolvedor Web Frontend</h3>
                    </div>
                    <SocialMedia />
                </About>
            </Presentation>
            </Container>
        </Main>
        
    )
}

export { AboutMain }