import { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import { Button } from "../Button"
import { Main, Container, Form, InputField } from "./style"

type Form = {
    user_name: string;
    user_about: string;
    user_email: string;
    user_message: string;
    // e: React.FormEvent<HTMLFormElement>
}

const ContactMain = () => {
    const { register , handleSubmit, formState: {errors}} = useForm<Form>({
        mode: "onBlur",
    })

    const form = useRef<HTMLFormElement>(null!);

    const sendEmail:SubmitHandler<Form> = (data) => {
            e.preventDefault();
            console.log(data)
    
            emailjs
                .sendForm(
                    "service_jeqoqns",
                    "template_gw1d28e",
                    form.current,
                    "rvYLu-bxauz9FTDtC"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text)
                    }
                )
                e.currentTarget.reset()
        };

    return (
        <Main>
            <Container >
            <h1>Contato</h1>
            <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <InputField >
                    <label htmlFor="nome">Nome<span>*</span></label>
                    <input id="nome" {...register("user_name", {
                        required: "Campo obrigatório",
                        minLength: {
                            value: 3,
                            message: "Nesserário mínimo de 3 caracteres"
                        }
                    })}/>
                    {errors.user_name && <span>{errors.user_name?.message}</span>}
                </InputField>
                <InputField >
                    <label htmlFor="assunto">Assunto</label>
                    <input id="assunto" {...register("user_about")}/>
                </InputField>
                <InputField >
                    <label htmlFor="email">Email<span>*</span></label>
                    <input id="email" {...register("user_email", {
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Formato de e-mail inválido"},
                        required: "Campo obrigatório"
                        })}/>
                        {errors.user_email && <span>{errors.user_email?.message}</span>}
                </InputField>
                <InputField >
                    <label htmlFor="mensagem">Mensagem<span>*</span></label>
                    <textarea 
                        id="mensagem"
                        rows={8}
                        {...register("user_message", {
                            required: "Campo obrogatório"
                        })}
                        />
                        {errors.user_message && <span>{errors.user_message?.message}</span>}
                </InputField>
                <Button>Enviar</Button>
            </Form>
            </Container>
        </Main>
    )
}

export { ContactMain }