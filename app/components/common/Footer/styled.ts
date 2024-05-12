import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #FAEBD7;
    
    @media only screen and (min-width: 1024px) {
        height: 340px;
    }
`;

export const FooterInstitutionalLinks = styled.div`
    margin: auto auto 50px;
    display: flex;
    justify-content: space-between;
    width: 85%;
`;
export const FooterInstitutionalLinksUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    
    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
`;
export const FooterInstitutionalLinksLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;

    a {
        width: fit-content;
    }
`;

export const FooterCopyrightContainer = styled.div`
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 85%;
    border-top: 0.1px solid #CCC;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
`;
export const FooterCopyrightDate = styled.p`
    font-size: 16px;
`;

export const FooterSocialMedias = styled.div`
    box-sizing: border-box;
`;

export const FooterSocialMediasUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const FooterSocialMediasLi = styled.li`
    transition: opacity .5s;    

    &:hover {
        opacity: .7;
    }
`;