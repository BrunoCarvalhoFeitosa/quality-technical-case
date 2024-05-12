import styled from "styled-components";

export const HeroContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }

    @media screen and (min-width: 1480px) {
        min-height: 100dvh;
    }
`;

export const HeroTextContainer = styled.aside`
    padding: 120px 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #FAEBD7;

    @media screen and (min-width: 1240px) {
        padding: 0 200px 0 60px;
        width: 60%;
        height: auto;
    }
`;

export const HeroTextTitle = styled.h1`
    font-size: 32px;
    font-weight: 900;
    line-height: 48px;
    color: #000;

    @media screen and (min-width: 1240px) {
        font-size: 68px;
        line-height: 78px;
    }
`;

export const HeroTextComplementTitle = styled.span`
    font-size: 32px;
    font-weight: 900;
    line-height: 48px;
    color: #000;

    @media screen and (min-width: 1240px) {
        font-size: 68px;
        line-height: 78px;
    }
`;

export const HeroTextDescription = styled.p`
    margin-top: 20px;
    font-size: 14px;
    color: #000;

    @media screen and (min-width: 1240px) {
        font-size: 16px;
    }
`;
    
export const HeroImagesContainer = styled.div`
    display: none;
    
    @media screen and (min-width: 1240px) {
        display: flex;
        flex: 1;
        height: auto;
        background: #fe9800;
    }
`;

export const HeroAppOptions = styled.div`
    margin: 10px 0;
    width: 100%;
`;

export const HeroAppOptionsUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-x: auto;
    padding: 22px 0;
`;
export const HeroAppOptionsLi = styled.li`

a {
    padding: 10px 20px;
    border-radius: 32px;
    background: #B89AF2;
    font-weight: 700;
    }
`;