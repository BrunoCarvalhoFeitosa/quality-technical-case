import styled from "styled-components";

export const OurMissionContainer = styled.section`
    padding: 40px 20px;
    width: 100%;
    
    @media only screen and (min-width: 1024px) {
        padding: 150px 20px 0;
    }
`;

export const OurMissionWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    gap: 45px;
    
    @media only screen and (min-width: 1024px) {
        width: 60%;
    }
`;

export const OurMissionNumber = styled.span`
    font-size: 70px;
    font-weight: 900;
    color: #ddd;
`;

export const OurMissionTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 400;
    text-align: center;

    strong {
        color: #ddd;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 40px;
    }
`;