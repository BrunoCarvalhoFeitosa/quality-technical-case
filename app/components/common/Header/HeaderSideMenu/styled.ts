import styled from "styled-components";

interface HeaderSideMenuBooleanProps {
    isOpen: boolean;
};

export const HeaderSideMenuContainer = styled.div<HeaderSideMenuBooleanProps>`
    position: fixed;
    top: 0;
    right: 0;
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(100%)")};
    display: flex;
    width: 100%;
    height: 100dvh;
    transition: transform .5s;
    z-index: 9;
`;

export const HeaderSideMenuOverlay = styled.div`
    flex: 1;
    height: 100%;
    background: rgba(255, 255, 255, .9);
    cursor: pointer;
`;

export const HeaderSideMenuNavbar = styled.nav`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 100%;
    background: #A020F0;

    @media only screen and (min-width: 1024px) {
        width: 60%;
    }

    @media only screen and (min-width: 1240px) {
        width: 40%;
    }
`;

export const HeaderSideMenuNavbarLinks = styled.div`
    padding: 20px 30px;
    flex: 1;
    background: #000;
`;

export const HeaderSideMenuNavbarLinksUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    height: 100%;
    gap: 20px;
    list-style: none;
`;

export const HeaderSideMenuNavbarLinksLi = styled.li`
    font-size: 20px;
    text-transform: uppercase;
    color: #FFF;
    transform: scale(0.95);
    transition: transform .5s;
    
    &:hover {
        transform: scale(1);
    }

    @media only screen and (min-width: 1024px) {
        font-size: 35px;
    }
`;

export const HeaderSideMenuNavbarContent = styled.div`
    padding: 0 30px 10px;
    height: 30dvh;
    background: #fe9800;
`;

export const HeaderSideMenuNavbarUserArea = styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
    height: 100%;
`;

export const HeaderSideMenuNavbarUserData = styled.div`
    margin-top: auto;
    text-align: end;
`;

export const HeaderSideMenuNavbarUserName = styled.p`
    font-size: 16px;
    font-weight: 900;
`;

export const HeaderSideMenuNavbarUserEmail = styled.p`
    font-size: 14px;
`;

export const HeaderSideMenuNavbarUserCreateAt = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 5px;
`;

export const HeaderSideMenuNavbarUserCreatedLabel = styled.div`
    font-size: 14px;
`;

export const HeaderSideMenuNavbarUserCreatedDate = styled.div`
    font-size: 14px;
`;

export const HeaderSideMenuNavbarSignOutButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    text-transform: uppercase;
    color: #fe9800;
    transform: scale(0.95);
    transition: transform .5s;
    cursor: pointer;
    
    &:hover {
        transform: scale(1);
    }

    @media only screen and (min-width: 1024px) {
        font-size: 35px;
    }
`;