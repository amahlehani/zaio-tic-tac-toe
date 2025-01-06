import { createContext, useState } from "react";


export const GameContext = createContext({});

export const GameContextProvider = (props) => {
    const [game, setGame] = useState({
        board: [1,2,3,4,5,6,7,8,9]
    });

    const updateBoard = (index) => {
        let updateBoard = game.board;
        updateBoard[index] = "x";
        setGame({
            ...game,
            board: updateBoard,
        })
    }

    return (
        <GameContext.Provider value={{ game, updateBoard }}>
            {props.children}
        </GameContext.Provider>
    )
}