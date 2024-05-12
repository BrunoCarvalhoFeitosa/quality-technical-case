"use client";
import Link from "next/link";
import { formatDate } from "date-fns";
import { ptBR } from "date-fns/locale";
import { SafeUser } from "@/app/types/SafeUser";
import { ImExit } from "react-icons/im";
import * as Styled from "./styled";
import { signOut } from "next-auth/react";

interface HeaderSideMenuProps {
    currentUser?: SafeUser | null;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const HeaderSideMenu = ({ currentUser, isOpen, setIsOpen }: HeaderSideMenuProps) => {
    const handleCloseSideMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Styled.HeaderSideMenuContainer isOpen={isOpen}>
            <Styled.HeaderSideMenuOverlay
                role="button"
                onClick={handleCloseSideMenu}
            />
            <Styled.HeaderSideMenuNavbar>
                <>
                    <Styled.HeaderSideMenuNavbarContent>
                        {currentUser && (
                            <Styled.HeaderSideMenuNavbarUserArea>
                                <Styled.HeaderSideMenuNavbarUserData>
                                    <Styled.HeaderSideMenuNavbarUserName>
                                        {currentUser.name}
                                    </Styled.HeaderSideMenuNavbarUserName>
                                    <Styled.HeaderSideMenuNavbarUserEmail>
                                        {currentUser.email}
                                    </Styled.HeaderSideMenuNavbarUserEmail>
                                    <Styled.HeaderSideMenuNavbarUserCreateAt>
                                        <Styled.HeaderSideMenuNavbarUserCreatedLabel>
                                            Conta criada em:
                                        </Styled.HeaderSideMenuNavbarUserCreatedLabel>
                                        <Styled.HeaderSideMenuNavbarUserCreatedDate>
                                            {formatDate(new Date(currentUser.createdAt), "dd 'de' MMMM 'de' yyyy", {
                                                locale: ptBR
                                            })}
                                        </Styled.HeaderSideMenuNavbarUserCreatedDate>
                                    </Styled.HeaderSideMenuNavbarUserCreateAt>
                                </Styled.HeaderSideMenuNavbarUserData>
                            </Styled.HeaderSideMenuNavbarUserArea>
                        )}
                    </Styled.HeaderSideMenuNavbarContent>
                    <Styled.HeaderSideMenuNavbarLinks>
                        <Styled.HeaderSideMenuNavbarLinksUl>
                            <Styled.HeaderSideMenuNavbarLinksLi>
                                <Link href="/">
                                    Início
                                </Link>
                            </Styled.HeaderSideMenuNavbarLinksLi>
                            <Styled.HeaderSideMenuNavbarLinksLi>
                                <Link href="/contact">
                                    Contato
                                </Link>
                            </Styled.HeaderSideMenuNavbarLinksLi>
                            <Styled.HeaderSideMenuNavbarLinksLi>
                                <Link href="/about">
                                    Sobre nós
                                </Link>
                            </Styled.HeaderSideMenuNavbarLinksLi>
                            <Styled.HeaderSideMenuNavbarLinksLi>
                                <Link href="/generate-peoples">
                                    Gerador de pessoas
                                </Link>
                            </Styled.HeaderSideMenuNavbarLinksLi>
                            <Styled.HeaderSideMenuNavbarLinksLi>
                                <Link href="/generate-images">
                                    Gerador de imagens
                                </Link>
                            </Styled.HeaderSideMenuNavbarLinksLi>
                            {currentUser && (
                                <Styled.HeaderSideMenuNavbarLinksLi>
                                    <Styled.HeaderSideMenuNavbarSignOutButton onClick={() => signOut()}>
                                        Finalizar sessão
                                    </Styled.HeaderSideMenuNavbarSignOutButton>
                                </Styled.HeaderSideMenuNavbarLinksLi>
                            )}
                        </Styled.HeaderSideMenuNavbarLinksUl>
                    </Styled.HeaderSideMenuNavbarLinks>
                </>
            </Styled.HeaderSideMenuNavbar>
        </Styled.HeaderSideMenuContainer>
    );
};