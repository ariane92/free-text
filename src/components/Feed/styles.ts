import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: min(601px, 100%);

    @media (min-width: 500px) {
        border-left: 1px solid var(--gray);
        border-right: 1px solid var(--gray);
    }
`;

export const Header = styled.div`
    z-index: 2;
    position: sticky;
    top: 0;
    background: var(--primary);

    display: flex;
    text-align: left;

    padding: 8px 0 9px 13px;
    border-bottom: 1px solid var(--gray);
`;

export const PageInfo = styled.div`
    display: flex;
    flex-direction: row;

    > strong {
        font-size: 19px;
    }
`;
