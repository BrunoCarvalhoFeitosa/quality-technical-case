import styled from "styled-components";

export const OptimizeWorkContainer = styled.section`
    padding: 30px 20px;
    width: 100%;

    @media only screen and (min-width: 1024px) {
        padding: 120px 50px;
    }
`;

export const OptimizeWorkTextsContainer = styled.div`
    width: 100%;
`;

export const OptimizeWorkTextsLegend = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: #000;

    &::before {
        content: "";
        display: block;
        width: 25px;
        height: 1px;
        background: #000;
    }
`;

export const OptimizeWorkTextsTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 900;
    
    @media only screen and (min-width: 1024px) {
        font-size: 50px;
    }
`;

export const OptimizeWorkTextsDescription = styled.p`
    margin: 10px auto 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        margin: 10px auto 50px;
        width: 40%;
    }
`;

export const OptimizeWorkImage = styled.div`
    display: flex;
    justify-content: center;

    svg {
        height: 240px;

        @media only screen and (min-width: 768px) {
            height: auto;
        }
    }
`;