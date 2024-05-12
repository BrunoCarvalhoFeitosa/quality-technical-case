"use client";
import Image from "next/image";
import Link from "next/link";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { SafeUser } from "@/app/types/SafeUser";
import * as Styled from "./styled";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

interface HeaderFloatButtonProps {
    currentUser?: SafeUser | null;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const HeaderFloatButton = ({ currentUser, isOpen, setIsOpen }: HeaderFloatButtonProps) => {
    const defaultProfileImage: string = "/images/image-standard-user.jpg";
    const pathname = usePathname();
    const showFloatButton = !pathname?.includes("sign-in") && !pathname?.includes("sign-up");

    const handleOpenSideMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Fragment>
            {showFloatButton && (
                <Styled.HeaderFloatContainer>
                    <Styled.HeaderFloatWrapper>
                        <Styled.HeaderFloatButton onClick={handleOpenSideMenu}>
                            {isOpen ? <RiCloseFill /> : <RiMenuFill />}
                        </Styled.HeaderFloatButton>
                        <Styled.HeaderFloatActions>
                            {currentUser ? (
                                <Styled.HeaderFloatLinks>
                                    <Styled.HeaderFloatLinksOption>
                                        Olá, {currentUser.name?.split(" ")[0]}
                                    </Styled.HeaderFloatLinksOption>
                                </Styled.HeaderFloatLinks>
                            ) : (
                                <Styled.HeaderFloatLinks>
                                    <Styled.HeaderFloatLinksOption>
                                        <Link href="/sign-in">
                                            Entre
                                        </Link>
                                    </Styled.HeaderFloatLinksOption>
                                    <Styled.HeaderFloatLinksOption>
                                        <Link href="sign-up">
                                            Cadastre-se
                                        </Link>
                                    </Styled.HeaderFloatLinksOption>
                                </Styled.HeaderFloatLinks>
                            )}
                            <Styled.HeaderFloatPicture>
                                {currentUser ? (
                                    <Image
                                        src={currentUser.image ? currentUser.image : defaultProfileImage}
                                        alt={currentUser.name ?? "Foto de usuário"}
                                        title={currentUser.name ?? "Foto de usuário"}
                                        width={45}
                                        height={45}
                                    />
                                ) : (
                                    <Image
                                        src={defaultProfileImage}
                                        alt="Foto de usuário"
                                        title="Foto de usuário"
                                        width={45}
                                        height={45}
                                    />
                                )}
                            </Styled.HeaderFloatPicture>
                        </Styled.HeaderFloatActions>
                    </Styled.HeaderFloatWrapper>
                </Styled.HeaderFloatContainer>
            )}
        </Fragment>
    );
};