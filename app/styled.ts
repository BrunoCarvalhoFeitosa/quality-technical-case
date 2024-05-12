import styled from "styled-components";

export const NotFoundContainer = styled.section`
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100dvh;
    background: #fe9800;
    `;
    
export const NotFoundWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    a {
        margin-top: 10px;
        padding: 18px 40px;
        background: #000;
        border-radius: 32px;
        color: #fff;
    }
`;

export const NotFoundTitle = styled.h1`
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    color: #000;
    
    @media only screen and (min-width: 1024px) {
        font-size: 52px;
    }
`;

export const NotFoundDescription = styled.p`
    font-size: 16px;
    text-align: center;
`;
