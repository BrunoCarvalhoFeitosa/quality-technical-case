"use client";
import { OptimizeWorkSvg } from "@/public/svgs/OptimizeWorkSvg";
import * as Styled from "./styled";

export const OptimizeWorkSection = () => {
    return (
        <Styled.OptimizeWorkContainer>
            <Styled.OptimizeWorkTextsContainer>
                <Styled.OptimizeWorkTextsLegend>
                   Otimização
                </Styled.OptimizeWorkTextsLegend>
                <Styled.OptimizeWorkTextsTitle>
                   Otimize o trabalho.
                </Styled.OptimizeWorkTextsTitle>
                <Styled.OptimizeWorkTextsDescription>
                   Otimize o trabalho de toda a sua equipe com as 
                   nossas ferramentas. Sabemos que tempo é dinheiro 
                   e por isso criamos uma ferramenta que facilita processos,
                   melhora todo o fluxo e otimiza o tempo de trabalho.
                </Styled.OptimizeWorkTextsDescription>
            </Styled.OptimizeWorkTextsContainer>
            <Styled.OptimizeWorkImage>
                <OptimizeWorkSvg width="800" height="400" />
            </Styled.OptimizeWorkImage>
        </Styled.OptimizeWorkContainer>
    );
};