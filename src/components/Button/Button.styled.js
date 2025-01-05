import styled from "styled-components";

export const ButtonWrapper = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 1.2rem;
    padding: 1.25rem 1.875rem;
    min-width: 18.75rem;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px gray;
    }
`