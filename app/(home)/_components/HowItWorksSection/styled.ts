import styled from "styled-components";

export const HowItWorksContainer = styled.section`
    padding: 50px 30px;
    
    @media only screen and (min-width: 1024px) {
        padding: 0 50px;
    }
`;

export const HowItWorksTextsContainer = styled.div`
    width: 100%;
`;

export const HowItWorksTextsLegend = styled.div`
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

export const HowItWorksTextsTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 900;

    @media only screen and (min-width: 1024px) {
        font-size: 50px;
    }
`;

export const HowItWorksDescription = styled.p`
    margin: 10px auto 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-align: center;
    
    @media only screen and (min-width: 1024px) {
        width: 40%;
    }
`;

export const HowItWorksStepsContainer = styled.div`
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    width: 70%;
    
    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        gap: 30px;
    }
`;

export const HowItWorksStepItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HowItWorksStepItemNumber = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: #EFEFEF;
    font-size: 22px;
    font-weight: 900;
    color: #000;
    
    @media only screen and (min-width: 1024px) {
        width: 75px;
        height: 75px;
    }
`;

export const HowItWorksStepItemTitle = styled.h4`
    font-size: 18px;
    font-weight: 900;
    color: #000;
`;

export const HowItWorksStepItemDescription = styled.p`
    margin: 8px auto 0;
    width: 100%;
    text-align: center;
    color: #333;
    
    @media only screen and (min-width: 1024px) {
        width: 70%;
    }
`;

export const HowItWorksImage = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    
    @media only screen and (min-width: 1024px) {
        margin-top: 80px;
    }

    svg {
        height: 240px;

        @media only screen and (min-width: 768px) {
            height: auto;
        }
    }
`;
