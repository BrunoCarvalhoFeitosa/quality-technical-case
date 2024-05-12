import styled from "styled-components";

export const HeroContainer = styled.section`
    width: 100%;
    padding: 160px 20px 60px;
    background: #fe9800;

    @media only screen and (min-width: 1024px) {
        padding: 160px 60px 60px;
    }
`;

export const HeroTextWrapper = styled.div`
    width: 100%;

    @media only screen and (min-width: 1024px) {
        margin: 0 auto;
        width: 65%;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    color: #000;

    @media only screen and (min-width: 1024px) {
        font-size: 62px;
    }
`;

export const HeroDescription = styled.p`
    margin: 12px 0;
    font-size: 18px;
    text-align: center;
    color: #333;
`;