"use client";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import * as Styled from "./styled";

export const HeroSection = () => {
  return (
    <Styled.HeroContainer>
        <Styled.HeroTextContainer>
            <Styled.HeroTextTitle>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        strings: [
                            "Fotos randômicas",
                            "Usuários randômicos",
                            "Posts randômicos"
                        ],
                    }}
                />
                <Styled.HeroTextComplementTitle>
                    para utilizar em suas aplicações de graça.
                </Styled.HeroTextComplementTitle>
            </Styled.HeroTextTitle>
            <Styled.HeroTextDescription>
                Um <strong>gerador de usuários</strong> oferece uma série de vantagens
                que podem ser benéficas para uma variedade de propósitos, desde o
                desenvolvimento de aplicativos e websites até testes e simulações.
                Simplifica o processo de criação de conjuntos de dados de usuários
                para testes e desenvolvimento de aplicativos. Em vez de criar
                manualmente cada usuário, os desenvolvedores podem gerar
                automaticamente uma grande quantidade de dados de usuário com apenas
                alguns cliques.
            </Styled.HeroTextDescription>
            <Styled.HeroAppOptions>
                <Styled.HeroAppOptionsUl>
                    <Styled.HeroAppOptionsLi>
                        <Link href="/generate-peoples">Pessoas</Link>
                    </Styled.HeroAppOptionsLi>
                    <Styled.HeroAppOptionsLi>
                        <Link href="/generate-images">Imagens</Link>
                    </Styled.HeroAppOptionsLi>
                </Styled.HeroAppOptionsUl>
            </Styled.HeroAppOptions>
      </Styled.HeroTextContainer>
      <Styled.HeroImagesContainer />
    </Styled.HeroContainer>
  );
};
