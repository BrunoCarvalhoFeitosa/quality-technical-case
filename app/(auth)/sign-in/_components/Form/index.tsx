"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Flip } from "react-toastify";
import { LoaderSvg } from "@/public/svgs/LoaderSvg";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import * as Styled from "./styled";

const formSchema = z.object({
    email: z
        .string()
        .email({
            message: "Por favor, insira um endereço de e-mail válido."
        }),

    password: z
        .string()
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{7,}$/, {
            message: "Sua senha deverá conter no mínimo 7 caracteres, 1 letra maiúscula, 1 minúscula e 1 número."
        })
});

type FormValues = z.infer<typeof formSchema>;

export const Form = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }} = useForm<FormValues>({
        resolver: zodResolver(formSchema)
    });

    const handleShowOrHidePassword = () => {
        setShowPassword(!showPassword);
    };
    
    const onSubmit = (data: FormValues) => {
        setIsLoading(true);

        signIn("credentials", {
            ...data,
            redirect: false
        }).then((callback) => {
            setIsLoading(false);

            if (callback?.ok) {
                toast("Bem-vindo.", {
                    type: "success",
                    toastId: "success",
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Flip
                });

                router.push("/");

            }

            if (callback?.error) {
                toast("Erro ao autenticar usuário.", {
                    type: "error",
                    toastId: "error",
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Flip
                });
            }
        })
    };

    return (
        <Styled.Main>
            <Styled.Wrapper>
                <Styled.FormContainer>
                    <Styled.FormText>
                        <Styled.FormTextTitle>
                            Entre na sua conta
                        </Styled.FormTextTitle>
                        <Styled.FormTextDescription>
                            Faça login e tenha acesso à plataforma.
                        </Styled.FormTextDescription>
                    </Styled.FormText>
                    <Styled.FormWrapper onSubmit={handleSubmit(onSubmit)}>
                        <Styled.FormItem>
                            <Styled.FormItemLabel htmlFor="email">
                                E-mail
                            </Styled.FormItemLabel>
                            <Styled.FormItemWrapper>
                                <Styled.FormItemInput
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Exemplo: email@gmail.com"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <Styled.FormMessageError>
                                        {errors.email.message}
                                    </Styled.FormMessageError>
                                )}
                            </Styled.FormItemWrapper>
                        </Styled.FormItem>
                        <Styled.FormItem>
                            <Styled.FormItemLabel htmlFor="password">Senha</Styled.FormItemLabel>
                            <Styled.FormItemWrapper>
                                <Styled.FormItemInput
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Senha"
                                    {...register("password")}
                                />
                                <Styled.FormItemButtonPassword type="button" onClick={handleShowOrHidePassword}>
                                    {showPassword ? (
                                        <LuEye size={22} />
                                    ) : (
                                        <LuEyeOff size={22} />
                                    )}
                                </Styled.FormItemButtonPassword>
                            </Styled.FormItemWrapper>
                            {errors.password && (
                                <Styled.FormMessageError>
                                    {errors.password.message}
                                </Styled.FormMessageError>
                            )}
                        </Styled.FormItem>
                        <Styled.FormSubmitContainer>
                            <Styled.FormSubmitButton type="submit">
                                {isLoading && <LoaderSvg color="#000" />}
                                Entrar
                            </Styled.FormSubmitButton>
                        </Styled.FormSubmitContainer>
                        <Styled.FormSignInContainer>
                            <Styled.FormSignUpText>
                                Ainda não possui uma conta?
                                <Link href="/sign-up">Cadastre-se agora</Link>
                            </Styled.FormSignUpText>
                            <Styled.FormSignInSeparator>
                                <Styled.FormSignInSeparatorLine />
                                <Styled.FormSignInSeparatorText>
                                    ou
                                </Styled.FormSignInSeparatorText>
                                <Styled.FormSignInSeparatorLine />
                            </Styled.FormSignInSeparator>
                            <Styled.FormSignInOptionsContainer>
                                <Styled.FormSignInOption
                                    type="button"
                                    onClick={() => signIn("google")}
                                >
                                    <FcGoogle />
                                    Google
                                </Styled.FormSignInOption>
                                <Styled.FormSignInOption
                                    type="button"
                                    onClick={() => signIn("github")}
                                >
                                    <FaGithub />
                                    GitHub
                                </Styled.FormSignInOption>
                            </Styled.FormSignInOptionsContainer>
                        </Styled.FormSignInContainer>
                    </Styled.FormWrapper>
                </Styled.FormContainer>
            </Styled.Wrapper>
        </Styled.Main>
    );
};