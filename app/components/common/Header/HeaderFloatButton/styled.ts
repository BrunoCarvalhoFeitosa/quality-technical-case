import styled from "styled-components";

export const HeaderFloatContainer = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 99;
    
    @media only screen and (min-width: 1024px) {
        top: 30px;
        right: 40px;
    }
`;

export const HeaderFloatWrapper = styled.div`
    padding: 4px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border: 3px solid #000;
    background: #000;
    border-radius: 48px;
`;

export const HeaderFloatButton = styled.button`
    display: flex;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    svg {
        width: 32px;
        height: 24px;
        fill: #fff;
    }
`;

export const HeaderFloatActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const HeaderFloatLinks = styled.div`
    margin: 0 5px;
    display: flex;
    align-items: center;
    gap: 16px;
    
    @media only screen and (min-width: 1024px) {
        margin: 0 20px;
    }
`;

export const HeaderFloatLinksOption = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    border: none;
    background: none;
    outline: none;
    font-size: 16px;
    color: #fff;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        gap: 6px;
    }
`;

export const HeaderFloatActionsUser = styled.ul`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const HeaderFloatActionsUserLi = styled.li`
    font-size: 14px;
    font-weight: 600;
    color: #fff;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
`;

export const HeaderFloatPicture = styled.div`
    img {
        border-radius: 100%;
    }
`;