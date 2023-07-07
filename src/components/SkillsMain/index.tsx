import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTypescript } from "react-icons/bi"
import { SiStyledcomponents, SiJest } from "react-icons/si"
import { Main, Container, SkillsList, Skill, Intro } from "./style"

const SkillsMain = () => {
    return (
        <Main>
            <Container>
                <Intro>
                    <h1>Habilidades</h1>
                    <p>Minhas habilidades estão fundamentadas em HTML, CSS e JavaScript, com foco principal no desenvolvimento com React. Além disso, possuo conhecimento em bibliotecas e frameworks complementares, como Styled-Components, Jest, React-Router-Dom, entre outros, que enriquecem meu conjunto de ferramentas.
                    </p>
                </Intro>

            <section>
                <SkillsList>
                    <Skill>
                        <BiLogoHtml5  />
                        <h3>HTML</h3>
                        <p>Por ser a base de contrução da web, utilizo o HTML para fortalecer a estrutura com uso da semântica e atributos descritivos para leitores de tela.</p>
                    </Skill>
                    <Skill>
                        <BiLogoCss3/>
                        <h3>CSS</h3>
                        <p>CSS é responsável pela estilização, e descreve como os elementos devem ser renderizados. Faço uso dessa tecnologia para proporcionar uma experiência agradável e enriquecedora para os usuários.</p>
                    </Skill>
                    <Skill>
                        <BiLogoJavascript />
                        <h3>JavaScript</h3>
                        <p>É responsável por deixar nossas aplicações interativas e dinâmicas, sendo base de outras tecnologias e amplamente usado no mercado.</p>
                    </Skill>
                    <Skill>
                        <BiLogoReact style={{fontSize: "4em"}}/>
                        <h3>React</h3>
                        <p>Faço uso e dessa livraria de JavaScript como minha principal ferramenta de trabalho, pela simplifação e escalabilidade que ela proporciona pelo uso de componentes.</p>
                    </Skill>
                    <Skill>
                        <SiStyledcomponents />
                        <h3>Styled-Components</h3>
                        <p>Com o React sendo peça central de atuação, nada melhor do que utilizar do Syled-Components para usufruir de todo o poder do CSS também em componentes. 
                        </p>
                    </Skill>
                    <Skill>
                        <SiJest />
                        <h3>Jest</h3>
                        <p>Ferramenta principal para realização de testes automatizados, muitas vezes em combinação com o Testing Library para ampliar os testes voltados ao usário.</p>
                    </Skill>
                    <Skill>
                        <BiLogoTypescript />
                        <h3>Typescript</h3>
                        <p>Como superset do JavaScript se torna ideal para garantir melhor qualidade, segurança, produtividade e  escalabilidade dos meus projetos</p>
                    </Skill>
                </SkillsList>
            </section>
            </Container>
        </Main>
    )
}

export { SkillsMain }