import styled from "styled-components";

export const CellStyle = styled.button`
    background-color: ${(props) => props.isWinningCell ? props.theme.colors.yellow : props.theme.colors.secondary};
    border: none;
    border-radius: 2.5rem;
    box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    font-size: 3rem;
    height: 10rem;
    width: 10rem;
    padding: 3rem;

    .markedItem {
      path {
        fill: ${(props) => props.theme.colors.primary};
      }
    }

    .outlineIcon {
        path {
            stroke: ${(props) => props.theme.colors.primary};
            stroke-width: 0;
        }
    }

    &:hover {
        .outlineIcon {
            path {
                stroke-width: 2;
            }
        }
    }
`