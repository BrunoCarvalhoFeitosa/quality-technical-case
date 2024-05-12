"use client";
import { TestimonialsSvg } from "@/public/svgs/TestimonialsSvg";
import * as Styled from "./styled";

export const TestimonialsSection = () => {
    return (
        <Styled.TestimonialsContainer>
            <Styled.TestimonialsTextsContainer>
                <Styled.TestimonialsTextsLegend>
                   Opiniões
                </Styled.TestimonialsTextsLegend>
                <Styled.TestimonialsTextsTitle>
                   O que as pessoas dizem.
                </Styled.TestimonialsTextsTitle>
                <Styled.TestimonialsDescription>
                    Veja a opinião dos clientes que já 
                    consolidaram o trabalho de toda uma equipe
                    e conseguiram otimizar tempo e principalmente
                    cortar custos que eram totalmente desnecessários.
                </Styled.TestimonialsDescription>
            </Styled.TestimonialsTextsContainer>
            <Styled.TestimonialsOpinionContainer>
                <Styled.TestimonialsOpinionText>
                    &quot;Nós nos desfizemos de uma dúzia de ferramentas 
                    diferentes por causa do que a QualitIA nos proporciona.&quot;
                </Styled.TestimonialsOpinionText>
                <Styled.TestimonialsOpinionAuthor>
                    James Watt
                </Styled.TestimonialsOpinionAuthor>
                <Styled.TestimonialsOpinionWork>
                    Diretor de operações e marketing, Amazon.
                </Styled.TestimonialsOpinionWork>
            </Styled.TestimonialsOpinionContainer>
            <Styled.TestimonialsImage>
                <TestimonialsSvg width="800" height="400" />
            </Styled.TestimonialsImage>
        </Styled.TestimonialsContainer>
    );
};