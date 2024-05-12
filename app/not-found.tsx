"use client";
import Link from "next/link";
import * as Styled from "./styled";

const NotFoundPage = () => {
    return (
        <main>
            <Styled.NotFoundContainer>
                <Styled.NotFoundWrapper>
                    <Styled.NotFoundTitle>
                        Página não encontrada
                    </Styled.NotFoundTitle>
                    <Styled.NotFoundDescription>
                        A página que você procura não existe ou foi removida.
                    </Styled.NotFoundDescription>
                    <Link href="/">
                        Retornar para home
                    </Link>
                </Styled.NotFoundWrapper>
            </Styled.NotFoundContainer>
        </main>
    );
};

export default NotFoundPage;