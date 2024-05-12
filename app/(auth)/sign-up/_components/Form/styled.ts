import styled from "styled-components";

export const Main = styled.section`
    width: 100%;

    @media only screen and (max-width: 1024px) {
        margin-top: 70px;
    }
`;

export const Wrapper = styled.div`
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    @media only screen and (min-width: 1024px) {
        padding: 170px 0 80px;
        min-height: 80dvh;
    }
`;

export const FormContainer = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 20px 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px 0;
    width: 90%;
    border: 1px solid #EFEFEF;
    border-radius: 12px;
    background: #FFF;
    z-index: 1;

    @media only screen and (min-width: 1240px) {
        max-width: 580px;
    }
`;

export const FormLogo = styled.div`
    width: 100%;

    a {
        display: flex;
        transform: translateX(-10px);
        width: fit-content;
    }
`;

export const FormText = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const FormTextTitle = styled.h1`
    font-size: 26px;
    font-weight: 700;
    color: #333;

    @media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
`;

export const FormTextDescription = styled.p`
    font-size: 13px;
    color: #555;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
`;

export const FormWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px 0;
`;

export const FormItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px 0;
    margin-bottom: 10px;
    width: 100%;
`;

export const FormItemLabel = styled.label`
    font-size: 14px;
    color: #555;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
`;

export const FormItemWrapper = styled.div`
    position: relative;
`;

export const FormItemInput = styled.input`
    width: 100%;
    border: 1px solid #EEE;
    border-radius: 8px;
    height: 45px;
    padding: 0 34px 0 12px;
    font-size: 16px;

    &::placeholder {
        font-size: 14px;
        color: #DDD;
    }

    &:focus {
        outline: none;
        border: 1px solid #CCC;
    }
`;

export const FormItemButtonPassword = styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    svg {
        stroke: #CCC;
    }
`;

export const FormMessageError = styled.span`
    font-size: 12px;
    color: red;
`;

export const FormSubmitContainer = styled.div`
    width: 100%;
`;

export const FormSubmitButton = styled.button`
    position: relative;
    width: 100%;
    height: 55px;
    background: linear-gradient(90deg, rgba(254, 152, 0 ,1) 0%, rgba(238, 221, 130, 1) 72%);
    border: none;
    border-radius: 8px;
    font-size: 18px;
    color: #000;
    transition: opacity .5s;
    cursor: pointer;

    &:hover {
        opacity: .84;
    }

    > svg {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 4px;
        width: 35px;
    }
`;

export const FormAdviceContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

export const FormAdviceText = styled.p`
    font-size: 10px;
    text-align: center;
    color: #CCC;

    @media only screen and (min-width: 1024px) {
        font-size: 12px;
    }
`;

export const FormSignInContainer = styled.div`
    width: 100%;
`;

export const FormSignInText = styled.p`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 13px;
    text-align: center;
    color: #CCC;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        font-size: 14px;
    }

    a {
        margin-left: 4px;
        font-weight: 600;
        text-decoration: underline;
        color: #1A73E8;
    }
`;

export const FormSignInSeparator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 10px;
    margin: 25px 0;
`;

export const FormSignInSeparatorLine = styled.div`
    flex: 1;
    height: 1px;
    background: #EFEFEF;
`;

export const FormSignInSeparatorText = styled.div`
    font-size: 14px;
    color: #CCC;
`;

export const FormSignInOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const FormSignInOption = styled.button`
    position: relative;
    width: 100%;
    height: 50px;
    background: #FFF;
    border: 1px solid #EFEFEF;
    border-radius: 8px;
    font-size: 18px;
    color: #555;
    transition: background .5s;
    cursor: pointer;

    &:hover {
        background: #EFEFEF;
    }

    > svg {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 4px;
        width: 26px;
        height: 26px;
    }
`;