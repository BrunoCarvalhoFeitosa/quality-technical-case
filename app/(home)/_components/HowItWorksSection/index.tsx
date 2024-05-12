"use client";
import { StepsSvg } from "@/public/svgs/StepsSvg";
import * as Styled from "./styled";

export const HowItWorksSection = () => {
    return (
        <Styled.HowItWorksContainer>
            <Styled.HowItWorksTextsContainer>
                <Styled.HowItWorksTextsLegend>
                   Processo
                </Styled.HowItWorksTextsLegend>
                <Styled.HowItWorksTextsTitle>
                   Como funciona.
                </Styled.HowItWorksTextsTitle>
                <Styled.HowItWorksDescription>
                    Cadastre-se, é fácil, rápido e totalmente seguro. 
                    Faça login com o e-mail e senha cadastrados. 
                    Tenha acesso a todas as nossas ferramentas que irão
                    otimizar o trabalho da sua equipe.
                </Styled.HowItWorksDescription>
            </Styled.HowItWorksTextsContainer>
            <Styled.HowItWorksStepsContainer>
                <Styled.HowItWorksStepItem>
                    <Styled.HowItWorksStepItemNumber>
                        1
                    </Styled.HowItWorksStepItemNumber>
                    <Styled.HowItWorksStepItemTitle>
                        Cadastre-se
                    </Styled.HowItWorksStepItemTitle>
                    <Styled.HowItWorksStepItemDescription>
                        Cadastre-se em nosso site, é rapido e fácil.
                    </Styled.HowItWorksStepItemDescription>
                </Styled.HowItWorksStepItem>
                <Styled.HowItWorksStepItem>
                    <Styled.HowItWorksStepItemNumber>
                        2
                    </Styled.HowItWorksStepItemNumber>
                    <Styled.HowItWorksStepItemTitle>
                        Faça login
                    </Styled.HowItWorksStepItemTitle>
                    <Styled.HowItWorksStepItemDescription>
                        Entre na sua conta e tenha acesso completo.
                    </Styled.HowItWorksStepItemDescription>
                </Styled.HowItWorksStepItem>
                <Styled.HowItWorksStepItem>
                    <Styled.HowItWorksStepItemNumber>
                        3
                    </Styled.HowItWorksStepItemNumber>
                    <Styled.HowItWorksStepItemTitle>
                        Use nossos serviços
                    </Styled.HowItWorksStepItemTitle>
                    <Styled.HowItWorksStepItemDescription>
                        Utilize nossos serviços de geração de pessoas e imagens.
                    </Styled.HowItWorksStepItemDescription>
                </Styled.HowItWorksStepItem>
            </Styled.HowItWorksStepsContainer>
            <Styled.HowItWorksImage>
                <StepsSvg width="800" height="400" />
            </Styled.HowItWorksImage>
        </Styled.HowItWorksContainer>
    );
};