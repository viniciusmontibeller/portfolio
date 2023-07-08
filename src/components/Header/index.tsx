import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Head, NavList, Container, NavContainer, MenuHamburger, Menu, Hamburger } from './style'
import { ThemeToggler } from "../ThemeToggler"


const Header = () => {
    const [open, setOpen] = useState(false)
    console.log(open)

    return (
        <Head>
            <Container>
            <NavLink to="/">
                <h1>Vinicius Montibeller</h1>
            </NavLink>
            <NavContainer>
            <nav>
                <NavList open={open}>
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
            <MenuHamburger>
                <Menu onClick={() => setOpen(!open)}>
                    <Hamburger open={open}/>
                </Menu>
            </MenuHamburger>
            </NavContainer>
            </Container>
            
        </Head>
    )
}

export { Header }