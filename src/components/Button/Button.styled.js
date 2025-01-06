import styled from "styled-components";

export const ButtonWrapper = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.color ? props.color : props.theme.colors.secondary};
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1.25rem;
    padding: 1.25rem 1.875rem;
    min-width: 18.75rem;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px gray;
    }

    ${(props) => props.theme.media.mobile} {
        min-width: 100px;
    }
`