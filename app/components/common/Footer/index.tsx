"use client";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { PiCopyFill } from "react-icons/pi";
import * as Styled from "./styled";

export const Footer = () => {
    return (
        <Styled.FooterContainer>
            <Styled.FooterInstitutionalLinks>
                    <Styled.FooterInstitutionalLinksUl>
                        <Styled.FooterInstitutionalLinksLi>
                            <Link href="/">
                                <PiCopyFill size={40} />
                            </Link>
                        </Styled.FooterInstitutionalLinksLi>
                        <Styled.FooterInstitutionalLinksLi>
                            <Link href="/">
                                Home
                            </Link>
                        </Styled.FooterInstitutionalLinksLi>
                        <Styled.FooterInstitutionalLinksLi>
                            <Link href="/contact">
                                Contato
                            </Link>
                        </Styled.FooterInstitutionalLinksLi>
                        <Styled.FooterInstitutionalLinksLi>
                            <Link href="/about">
                                Sobre nós
                            </Link>
                        </Styled.FooterInstitutionalLinksLi>
                        <Styled.FooterInstitutionalLinksLi>
                            <Link href="/generate-peoples">
                                Gerador de pessoas
                            </Link>
                        </Styled.FooterInstitutionalLinksLi>
                        <Styled.FooterInstitutionalLinksLi>
                            <Link href="/generate-images">
                                Gerador de imagens
                            </Link>
                        </Styled.FooterInstitutionalLinksLi>
                        <Styled.FooterInstitutionalLinksLi>
                            <Link href="/sign-in">
                                Entre
                            </Link>
                        </Styled.FooterInstitutionalLinksLi>
                        <Styled.FooterInstitutionalLinksLi>
                            <Link href="/sign-up">
                                Cadastre-se
                            </Link>
                        </Styled.FooterInstitutionalLinksLi>
                    </Styled.FooterInstitutionalLinksUl>
                </Styled.FooterInstitutionalLinks>
            <Styled.FooterCopyrightContainer>
                    <Styled.FooterCopyrightDate>
                        2024, todos os direitos reservados.
                    </Styled.FooterCopyrightDate>
                    <Styled.FooterSocialMedias>
                        <Styled.FooterSocialMediasUl>
                            <Styled.FooterSocialMediasLi>
                                <Link href="https://github.com/BrunoCarvalhoFeitosa">
                                    <SiGithub size={26} />
                                </Link>
                            </Styled.FooterSocialMediasLi>
                            <Styled.FooterSocialMediasLi>
                                <Link href="https://br.linkedin.com/in/bruno-carvalho-feitosa">
                                    <FaLinkedin size={26} />
                                </Link>
                            </Styled.FooterSocialMediasLi>
                        </Styled.FooterSocialMediasUl>
                    </Styled.FooterSocialMedias>
            </Styled.FooterCopyrightContainer>
        </Styled.FooterContainer>
    );
};