import styled from "styled-components";

export const FormContainer = styled.section`
    padding: 60px 30px;
    width: 100%;
`;

export const FormWrapper = styled.form`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px 0;
    
    @media only screen and (min-width: 1240px) {
        width: 50%;
    }
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

    &:disabled {
        cursor: not-allowed;
        opacity: .5;
    }

    &::placeholder {
        font-size: 14px;
        color: #DDD;
    }

    &:focus {
        outline: none;
        border: 1px solid #CCC;
    }
`;

export const FormItemTextArea = styled.textarea`
    border-radius: 8px;
    width: 100%;
    height: 150px;
    border: 1px solid #EEE;
    padding: 10px;
    font-size: 16px;
    resize: none;

    &::input-placeholder: {
        font-family: "Inter";
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