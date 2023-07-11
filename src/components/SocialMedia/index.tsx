import { BiLogoLinkedin, BiLogoWhatsapp, BiLogoGithub } from 'react-icons/bi'
import { SocialList } from './styles'

const SocialMedia = () => {
    return (
        <nav>
            <SocialList>
                <li>
                    <a href="https://www.linkedin.com/in/vinicius-montibeller/" target="_blank">
                        <BiLogoLinkedin/>
                        <div></div>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/554799117177" target="_blank">
                        <BiLogoWhatsapp/>
                        <div></div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/viniciusmontibeller" target="_blank">
                        <BiLogoGithub/>
                        <div></div>
                    </a>
                </li>
            </SocialList>
        </nav>
    )
}

export { SocialMedia }