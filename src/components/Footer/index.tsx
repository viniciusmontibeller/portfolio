import { SocialMedia } from "../SocialMedia"
import { PiCopyrightThin } from "react-icons/pi"
import { Foot, Container, Copyright } from "./style"

const Footer = () => {
    return (
        <Foot>
            <Container>
                <Copyright>
                    <PiCopyrightThin />
                    <p>by Vinicius Montibeller 
                    <br /> 
                    All rights reserved
                    </p>
                </Copyright>
                <SocialMedia />
            </Container>
        </Foot>
    )
}

export { Footer }