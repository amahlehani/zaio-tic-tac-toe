import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.columnBased ? "column" : "row")};
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100vw;
    padding: 0 2rem;
    background: ${(props) => props.theme.colors.primary};
    text-align: center;

    ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Title = styled.h1`
    color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
    font-size: 4rem;
    font-family: "Pacifico", cursive;
    text-align: center;

    ${(props) => props.theme.media.mobile} {
    font-size: 5rem;
  }
`
export const Subtitle = styled.h2`
    color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
    font-size: 1.5rem;
    font-weight: 200;
    text-align: center;
    padding: 10px;
`

export const Text = styled.p`
  color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.text};
  font-size: 1.2rem;
  padding: 10px;
`;