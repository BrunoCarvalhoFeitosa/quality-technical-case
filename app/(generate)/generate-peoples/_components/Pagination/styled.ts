import styled from "styled-components";

export const PaginationContainer = styled.div`
    padding: 0 20px 100px;
    display: flex;
`;

export const PaginationUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: hidden;
`;

export const PaginationLi = styled.li`
    box-sizing: border-box;
    
`;

export const PaginationButton = styled.button`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fe9800;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    outline: none;
    transform: scale(0.95);
    transition: transform .3s;
    cursor: pointer;

    &:hover {
        transform: scale(1);
    }
`;