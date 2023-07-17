import styled from "styled-components"

interface Closed{
    isClosed: boolean;
}

const SuccessMsg = styled.div<Closed>`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    margin-top: 1.5em;
    position: fixed;
    top: 20px;
    right: 0px;
    margin: 0em 1em;
    padding: 1em;
    border-radius: 10px;
    box-shadow: #616161 0px 5px 15px;
    border: 1px solid #616161;
    background-color: ${props => props.theme.colors.shade};
    animation: ${({ isClosed }) => isClosed ? "slide-out" : "slide-in"} 0.4s ease-in-out forwards;
    svg{
        font-size: 1.5rem;
        color: green;
    }
    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        svg{
        color: grey;
        opacity: 0.7;
    }
    }
    @keyframes slide-in {
        0%{
            opacity: 0;
            transform: translateX(100%);
        }
        100%{
            opacity: 1;
            transform: translateX(0%);
        }
    }
    @keyframes slide-out {
        0%{
            opacity: 1;
            transform: translateX(0%);
        }
        100%{
            opacity: 0;
            transform: translateX(100%);
        }
    }
`

const ToastProgress = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: rgba(0, 0, 0, 0.1);
`

const ToastProgressBar = styled.div`
    height: 100%;
    animation: progress-bar 4s linear forwards;
    background-color: green;
    @keyframes progress-bar {
        0%{
            width: 100%;
        }
        100%{
            width: 0%;
        }
    }
`

export { SuccessMsg, ToastProgress, ToastProgressBar }