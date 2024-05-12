"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SafeUser } from "@/app/types/SafeUser";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderFloatButton } from "./HeaderFloatButton";
import { HeaderSideMenu } from "./HeaderSideMenu";
import * as Styled from "./styled";

interface HeaderProps {
    currentUser?: SafeUser | null;
};

export const Header = ({ currentUser }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <Styled.HeaderContainer>
            <HeaderLogo isOpen={isOpen} />
            <HeaderFloatButton
                currentUser={currentUser}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <HeaderSideMenu
                currentUser={currentUser}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </Styled.HeaderContainer>
    );
};
