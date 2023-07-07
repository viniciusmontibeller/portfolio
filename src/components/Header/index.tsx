import { NavLink } from 'react-router-dom'
import { Head, NavList, Container, NavContainer } from './style'
import { ThemeToggler } from "../ThemeToggler"


const Header = () => {
    return (
        <Head>
            <Container>
            <NavLink to="/">
                <h1>Vinicius Montibeller</h1>
            </NavLink>
            <NavContainer>
            <nav>
                <NavList>
                    <li>
                        <NavLink to="/">
                            <h3>Sobre</h3>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/projects">
                            <h3>Projetos</h3>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/skills">
                            <h3>Habilidades</h3>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact">
                            <h3>Contato</h3>
                        </NavLink>
                    </li>
                </NavList>
            </nav>
            <ThemeToggler />
            </NavContainer>
            </Container>
            
        </Head>
    )
}

export { Header }