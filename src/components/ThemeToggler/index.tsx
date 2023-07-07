import { Button } from "../Button"
import { BsSun, BsMoon} from "react-icons/bs"
import dark from "../../styles/themes/dark"
import light from "../../styles/themes/light"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { ToggleContext } from "../../App"


const ThemeToggler = () => {
    const {title} = useContext(ThemeContext)
    const setTheme = useContext(ToggleContext)

    return (
        <Button onClick={() => setTheme(title === "light" ? dark : light)}>
            {title === "light" ? <BsMoon/> : <BsSun/>}
        </Button>
    )
}

export { ThemeToggler }