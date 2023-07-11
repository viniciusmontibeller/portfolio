import { BsCheck2Circle } from "react-icons/bs"
import { IoCloseOutline } from "react-icons/io5"
import { SuccessMsg, ToastProgress, ToastProgressBar } from "./style"
import { useEffect, useState} from "react"

const SuccessMessage = () => {
    const [dismissed, setDismissed] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setDismissed(true);
        }, 4000);
    }, [dismissed])

    const handleClick = () => {
        setDismissed(true)
    }

    return(
        <SuccessMsg isClosed={dismissed}>
            <BsCheck2Circle/>
            <p>Mensagem enviada com sucesso</p>
            <button onClick={handleClick}><IoCloseOutline/></button>
            <ToastProgress>
                <ToastProgressBar></ToastProgressBar>
            </ToastProgress>
        </SuccessMsg>
    )
}

export { SuccessMessage }