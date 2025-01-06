import React, { useContext } from 'react';
import { CellStyle } from './GameCell.styled';
import { GameContext } from '../../contexts/GameContext';
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";
import { checkForWinner } from '../../utils/GameUtils';
import { ReactComponent as IconX } from "../../assets/icon-x.svg";
import { ReactComponent as IconO } from "../../assets/icon-o.svg";
import { ReactComponent as IconXOutline } from "../../assets/icon-x-outlined.svg";
import { ReactComponent as IconOOutline } from "../../assets/icon-o-outlined.svg";
import { SfxContext } from "../../contexts/SfxContext";

function GameCell({cellItem, index, isWinningCell}) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { hoverSfx, clickSfx, winSfx } = useContext(SfxContext);
  const { handleModal } = useContext(ModalContext);

  const handleCellClick = () => {
    clickSfx();
    updateBoard(index);
    const result = checkForWinner(game.board);
    console.log(result);
    if (result) {
      roundComplete(result);
      if (result !== "draw") {
        winSfx();
      }
      setTimeout(() => {
        handleModal(<RoundOverModal />);
      }, 2000);
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={handleCellClick} onMouseEnter={() => hoverSfx()}>
      {game.turn === "x" ? (
        <IconXOutline className="outlineIcon" />
      ) : (
        <IconOOutline className="outlineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell