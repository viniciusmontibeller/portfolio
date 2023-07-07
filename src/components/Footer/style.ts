import styled from "styled-components";

const Foot = styled.footer`
    background-color: ${props => props.theme.colors.shade};
    display: flex;
    justify-content: center;
`

const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    max-width: 80rem;
    width: 100%;
    padding: 1rem;
`

const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    p{
        font-size: 0.6rem;
    }
    svg{
        font-size: 1.1rem;
    }
`

export { Foot, Container, Copyright } 