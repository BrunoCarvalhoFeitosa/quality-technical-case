import styled from "styled-components";

export const TestimonialsContainer = styled.section`
    padding: 30px 20px;
    width: 100%;

    @media only screen and (min-width: 1024px) {
        padding: 120px 50px;
    }
`;

export const TestimonialsTextsContainer = styled.div`
    width: 100%;
`;

export const TestimonialsTextsLegend = styled.div`
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

export const TestimonialsTextsTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 900;

    @media only screen and (min-width: 1024px) {
        font-size: 50px;
    }
`;

export const TestimonialsDescription = styled.p`
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

export const TestimonialsOpinionContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    
    @media only screen and (min-width: 1024px) {
        width: 40%;
    }
`;

export const TestimonialsOpinionText = styled.div`
    font-family: sans-serif;
    font-size: 25px;
    text-align: center;
`;

export const TestimonialsOpinionAuthor = styled.p`
    margin-top: 20px;
    font-size: 14px;
    font-weight: bold;
    text-align: end;
`;

export const TestimonialsOpinionWork = styled.p`
    margin-top: 2px;
    font-size: 14px;
    text-align: end;
`;

export const TestimonialsImage = styled.div`
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