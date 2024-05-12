import styled from "styled-components";

export const PartnersContainer = styled.section`
    padding: 30px 20px;
    width: 100%;
`;

export const PartnersTitle = styled.h1`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 900;
    
    @media only screen and (min-width: 1024px) {
        font-size: 40px;
    }
`;

export const PartnersUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const PartnersLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: #FAEBD7;
    transition: transform .5s;
    cursor: pointer;

    &:hover {
        transform: translateY(-12px);
    }

    svg {
        width: 30px;
        height: 30px;
    }
`;