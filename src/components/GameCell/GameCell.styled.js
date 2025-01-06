import styled from "styled-components";

export const CellStyle = styled.button`
    background-color: ${(props) => props.theme.colors.secondary};
    border: none;
    border-radius: 10px;
    box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    font-size: 3rem;
    height: 10rem;
    width: 10rem;
`