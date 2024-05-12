"use client";
import { useRef, useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Flip, toast } from "react-toastify";
import { getAddress } from "@/app/actions/getAddress";
import { phoneFormatMask, postalCodeFormatMask } from "@/app/helpers/formatters";
import { LoaderSvg } from "@/public/svgs/LoaderSvg";
import * as Styled from "./styled";

const formSchema = z.object({
    name: z
        .string()
        .min(7, {
            message: "Por favor, insira seu nome completo."
        })
        .max(70, {
            message: "O valor máximo é de 70 caracteres."
        })
        .regex(/^[A-Za-z ]*$/, {
            message: "Por favor, insira insira somente letras."
        }),

    email: z
        .string()
        .email({
            message: "Por favor, insira um endereço de e-mail válido."
        }),

    phone: z
        .string()
        .min(14,"Por favor, insira um número telefônico válido.")
        .max(15, "Por favor, insira um número telefônico válido."),

    postalCode: z
        .string()
        .min(9, {
            message: "Por favor insira corretamente seu código postal."
        })
        .max(9, {
            message: "Por favor insira corretamente seu código postal."
        }),

    addressStreet: z
        .string()
        .min(1),

    addressNeighborhood: z
        .string()
        .min(1),

    addressCity: z
        .string()
        .min(1),

    addressState: z
        .string()
        .min(1),

    message: z
        .string()
        .min(10, {
            message: "O mínimo de caracteres para preenchimento da mensagem é 10."
        })
        .max(150, {
            message: "O maxímo de caracteres para preenchimento da mensagem é 150."
        })
});

type FormValues = z.infer<typeof formSchema>;

export const Form = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const apiKey = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema)
    });

    const handlePostalCodeAutocomplete = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
        postalCodeFormatMask(ev)
        const postalCode = (ev.target as HTMLInputElement).value.replace(/\D/g, "");

        if (postalCode.length === 8) {
            const search = await getAddress(postalCode);

            if (!search) {
                toast("Código postal inválido.", {
                    type: "error",
                    toastId: "error",
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Flip
                });                

                return;
            }

            const { data } = search;
            setValue("addressStreet", data.logradouro);
            setValue("addressNeighborhood", data.bairro);
            setValue("addressCity", data.localidade);
            setValue("addressState", data.uf);
        }
    }

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
    
        try {
            if (formRef.current) {
                const formData = new FormData(formRef.current);
                const form = formRef.current;
    
                formData.append("addressStreet", data.addressStreet);
                formData.append("addressNeighborhood", data.addressNeighborhood);
                formData.append("addressCity", data.addressCity);
                formData.append("addressState", data.addressState);
    
                await emailjs.sendForm(serviceId, templateId, form, apiKey);
    
                reset();
                toast("Sucesso ao enviar mensagem, em breve retornaremos contato.", {
                    type: "success",
                    toastId: "success",
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Flip
                });
            } else {
                throw new Error("Form reference is null.");
            }
    
            setIsLoading(false);
        } catch (error) {
            console.error("Error while send email: ", error);
            setIsLoading(false);
            reset();
    
            toast("Erro ao enviar a mensagem, tente novamente.", {
                type: "error",
                toastId: "error",
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Flip
            });
        }
    };
    

    return (
        <Styled.FormContainer>
            <Styled.FormWrapper ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <Styled.FormItem>
                    <Styled.FormItemLabel htmlFor="name">
                        Nome completo
                    </Styled.FormItemLabel>
                    <Styled.FormItemWrapper>
                        <Styled.FormItemInput
                            type="text"
                            autoComplete="off"
                            placeholder="Nome completo"
                            {...register("name")}
                        />
                        {errors.name && (
                            <Styled.FormMessageError>
                                {errors.name.message}
                            </Styled.FormMessageError>
                        )}
                    </Styled.FormItemWrapper>
                </Styled.FormItem>
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
                    <Styled.FormItemLabel htmlFor="phone">
                        Telefone
                    </Styled.FormItemLabel>
                    <Styled.FormItemWrapper>
                        <Styled.FormItemInput
                            type="text"
                            autoComplete="off"
                            placeholder="Exemplo: (11) 9999-9999 / (11) 99999-9999"
                            onKeyUp={(ev) => phoneFormatMask(ev)}
                            {...register("phone")}
                        />
                        {errors.phone && (
                            <Styled.FormMessageError>
                                {errors.phone.message}
                            </Styled.FormMessageError>
                        )}
                    </Styled.FormItemWrapper>
                </Styled.FormItem>
                <Styled.FormItem>
                    <Styled.FormItemLabel htmlFor="postalCode">
                        CEP
                    </Styled.FormItemLabel>
                    <Styled.FormItemWrapper>
                        <Styled.FormItemInput
                            type="text"
                            autoComplete="off"
                            placeholder="Exemplo: 99999-999"
                            onKeyUp={handlePostalCodeAutocomplete}
                            {...register("postalCode")}
                        />
                        {errors.postalCode && (
                            <Styled.FormMessageError>
                                {errors.postalCode.message}
                            </Styled.FormMessageError>
                        )}
                    </Styled.FormItemWrapper>
                </Styled.FormItem>
                <Styled.FormItem>
                    <Styled.FormItemLabel htmlFor="addressStreet">
                        Rua
                    </Styled.FormItemLabel>
                    <Styled.FormItemWrapper>
                        <Styled.FormItemInput
                            type="text"
                            autoComplete="off"
                            placeholder="Rua"
                            disabled
                            {...register("addressStreet")}
                        />
                        {errors.addressStreet && (
                            <Styled.FormMessageError>
                                {errors.addressStreet.message && (
                                    <Fragment>Este campo será autopreenchido a partir do CEP.</Fragment>
                                )}
                            </Styled.FormMessageError>
                        )}
                    </Styled.FormItemWrapper>
                </Styled.FormItem>
                <Styled.FormItem>
                    <Styled.FormItemLabel htmlFor="addressNeighborhood">
                        Bairro
                    </Styled.FormItemLabel>
                    <Styled.FormItemWrapper>
                        <Styled.FormItemInput
                            type="text"
                            autoComplete="off"
                            placeholder="Bairro"
                            disabled
                            {...register("addressNeighborhood")}
                        />
                        {errors.addressNeighborhood && (
                            <Styled.FormMessageError>
                                {errors.addressNeighborhood.message && (
                                    <Fragment>Este campo será autopreenchido a partir do CEP.</Fragment>
                                )}
                            </Styled.FormMessageError>
                        )}
                    </Styled.FormItemWrapper>
                </Styled.FormItem>
                <Styled.FormItem>
                    <Styled.FormItemLabel htmlFor="addressCity">
                        Cidade
                    </Styled.FormItemLabel>
                    <Styled.FormItemWrapper>
                        <Styled.FormItemInput
                            type="text"
                            autoComplete="off"
                            placeholder="Cidade"
                            disabled
                            {...register("addressCity")}
                        />
                        {errors.addressCity && (
                            <Styled.FormMessageError>
                                {errors.addressCity.message && (
                                    <Fragment>Este campo será autopreenchido a partir do CEP.</Fragment>
                                )}
                            </Styled.FormMessageError>
                        )}
                    </Styled.FormItemWrapper>
                </Styled.FormItem>
                <Styled.FormItem>
                    <Styled.FormItemLabel htmlFor="addressState">
                        Estado
                    </Styled.FormItemLabel>
                    <Styled.FormItemWrapper>
                        <Styled.FormItemInput
                            type="text"
                            autoComplete="off"
                            placeholder="Estado"
                            disabled
                            {...register("addressState")}
                        />
                        {errors.addressState && (
                            <Styled.FormMessageError>
                                {errors.addressState.message && (
                                    <Fragment>Este campo será autopreenchido a partir do CEP.</Fragment>
                                )}
                            </Styled.FormMessageError>
                        )}
                    </Styled.FormItemWrapper>
                </Styled.FormItem>
                <Styled.FormItem>
                    <Styled.FormItemLabel htmlFor="message">
                        Mensagem
                    </Styled.FormItemLabel>
                    <Styled.FormItemWrapper>
                        <Styled.FormItemTextArea
                            autoComplete="off"
                            placeholder="Deixe sua mensagem aqui..."
                            {...register("message")}
                        />
                        {errors.message && (
                            <Styled.FormMessageError>
                                {errors.message.message}
                            </Styled.FormMessageError>
                        )}
                    </Styled.FormItemWrapper>
                </Styled.FormItem>
                <Styled.FormSubmitContainer>
                    <Styled.FormSubmitButton type="submit">
                        {isLoading && <LoaderSvg color="#000" />}
                        Enviar mensagem
                    </Styled.FormSubmitButton>
                </Styled.FormSubmitContainer>
            </Styled.FormWrapper>
        </Styled.FormContainer>
    )
}