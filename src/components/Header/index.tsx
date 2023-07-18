import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Head, NavList, Container, NavContainer, Menu, Hamburger, Nav, Name } from './style'
import { ThemeToggler } from "../ThemeToggler"

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <Head>
            <Container>
            <NavLink to="/">
                <Name>
                    <h1>Vinicius Montibeller</h1>
                    <div>
                            <span>D</span>
                            <span>e</span>
                            <span>v</span>
                            <span>F</span>
                            <span>r</span>
                            <span>o</span>
                            <span>n</span>
                            <span>t</span>
                            <span>e</span>
                            <span>n</span>
                            <span>d</span>
                       
                    </div>
                </Name>
            </NavLink>
            <NavContainer>
            <Nav isOpen={open}>
                <NavList isOpen={open}>
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
            </Nav>
            <ThemeToggler />
            
            <Menu onClick={() => setOpen(!open)}>
                <Hamburger isOpen={open}/>
            </Menu>
           
            </NavContainer>
            </Container>
            
        </Head>
    )
}

export { Header }