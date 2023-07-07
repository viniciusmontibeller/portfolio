import { Link } from 'react-router-dom'
import { Main, Info, Container, ImgContainer, Cta } from './style'

const AboutMain = () => {
    return (
        <Main>
            <Container>
            <Info>
                <h1>Olá, <br/> sou Vinicius</h1>
                <h2>Desenvolvedor Web Frontend</h2>
                <p>
                Sou um Desenvolvedor Web Frontend Júnior dedicado, atencioso, e um pouco perfeccionista. Sempre gostei de perceber e analizar padrões, e também de realizar coisas repetidas de diversar formas, ou seja, estou na área certa, mas além de satisfeito tenho uma constante vontade de crescer na área.
                <br/>
                Como Desenvolvedor Web com foco especializado em Frontend, minhas habilidades como HTML, CSS, JavaScript, React, TypeScript, Git, Styled-Components são voltadas a transformar design estáticos em interfaces dinâmicas, e também a utiliziação de Jest e Testing Library para testes automatizados.
                </p>
                <Cta>
                    <Link to="/projects"> 
                        Projetos
                    </Link>
                    <Link to="/contact">
                        Contato
                    </Link>
                </Cta>
            </Info>

            <ImgContainer>
                <img src="http://placekitten.com/400/500" />
            </ImgContainer>
            </Container>
        </Main>
        
    )
}

export { AboutMain }