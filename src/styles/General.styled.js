import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100wd;
    padding: 0 2rem;
    background: ${(props) => props.theme.colors.primary};
`

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: 3rem;
    font-family: "Pacifico", cursive;
    text-align: center;
`
export const Subtitle = styled.h2`
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: 200;
    text-align: center;
`