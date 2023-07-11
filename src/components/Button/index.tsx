import { Btn } from "./style"

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean
}

const Button = (props: ButtonProps) => {
    return <Btn {...props}>
        {props.children}
        </Btn>
}

export { Button }