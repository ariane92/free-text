import styled from 'styled-components';

export const Container = styled.div`
    padding-bottom: 10px;
    border-bottom: 8px solid var(--red);
    padding-right: 10px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
export const Box = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    input {
        flex: 1;
        margin-left: 20px;
        font-size: 20px;
        border: none;
        height: 100%;
    }

    button {
        width: 80px;
        height: 40px !important;
        margin-top: 20px !important;
        margin-left: auto !important;
    }
`;
