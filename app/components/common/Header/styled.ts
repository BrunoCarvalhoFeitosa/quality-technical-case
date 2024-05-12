import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    @media only screen and (min-width: 1240px) {
        padding: 20px 60px;
    }
`;