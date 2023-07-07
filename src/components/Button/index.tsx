import { Btn } from "./style"

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    return <Btn {...props}>
        {props.children}
        </Btn>
}

export { Button }