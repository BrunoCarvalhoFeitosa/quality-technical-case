"use client";
import { Fragment } from "react";
import Link from "next/link";
import { PiCopyFill } from "react-icons/pi";
import * as Styled from "./styled"

interface HeaderLogoProps {
    isOpen: boolean;
};

export const HeaderLogo = ({ isOpen }: HeaderLogoProps) => {
    return (
        <Fragment>
            {!isOpen && (
                <Styled.HeaderLogo>
                    <Link href="/">
                        <PiCopyFill size={40} />
                    </Link>
                </Styled.HeaderLogo>
            )}
        </Fragment>
    );
};
