"use client";
import * as Styled from "./styled";

interface HeroProps {
    title: string;
    description: string;
};

export const Hero = ({ title, description }: HeroProps) => {
    return (
        <Styled.HeroContainer>
            <Styled.HeroTextWrapper>
                <Styled.HeroTitle>
                    {title}
                </Styled.HeroTitle>
                <Styled.HeroDescription>
                    {description}
                </Styled.HeroDescription>
            </Styled.HeroTextWrapper>
        </Styled.HeroContainer>
    );
};