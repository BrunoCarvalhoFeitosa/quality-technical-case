import styled from "styled-components";

export const ListContainer = styled.div`
    width: 100%;
    padding: 50px 20px;
`;

export const ListUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;

    @media only screen and (min-width: 720px) {
        flex-direction: row;
    } 
`;

export const ListLi = styled.li`
    flex: 1;
    width: 100%;
    padding: 20px 25px;
    border: 1px solid #efefef;
    border-radius: 12px;

    @media only screen and (min-width: 1023px) {
        width: 60%
    }
`;

export const ListInfo = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ListInfoImage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50vw;
    background: #eee;

    img {
        opacity: .6;
    }
    
    @media only screen and (min-width: 720px) {
        height: 12vw;
    }
`;

export const ListInfoDataBold = styled.div`
    font-size: 18px;
    font-weight: 900;
`;

export const ListInfoData = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    height: 35px;
    font-size: 14px;
    text-align: center;
`;

export const ListInfoCopyButton = styled.button`
    background: black;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background: #fe9800;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    outline: none;
    transform: scale(0.95);
    transition: transform .3s;
    cursor: pointer;
`;