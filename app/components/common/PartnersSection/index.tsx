"use client";
import { LiaAmazon } from "react-icons/lia";
import { SiNubank, SiIfood  } from "react-icons/si";
import { IoLogoApple } from "react-icons/io5";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import * as Styled from "./styled";

export const PartnersSection = () => {
    return (
        <Styled.PartnersContainer>
            <Styled.PartnersTitle>
                Parceiros.
            </Styled.PartnersTitle>
            <Styled.PartnersUl>
                <Styled.PartnersLi>
                    <TfiMicrosoftAlt />
                </Styled.PartnersLi>
                <Styled.PartnersLi>
                    <IoLogoApple />
                </Styled.PartnersLi>
                <Styled.PartnersLi>
                    <LiaAmazon />
                </Styled.PartnersLi>
                <Styled.PartnersLi>
                    <SiNubank />
                </Styled.PartnersLi>
                <Styled.PartnersLi>
                    <SiIfood />
                </Styled.PartnersLi>
            </Styled.PartnersUl>
        </Styled.PartnersContainer>
    );
};