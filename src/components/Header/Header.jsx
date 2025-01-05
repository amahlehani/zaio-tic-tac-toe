import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.js';
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from './Header.styled.js';
import { ReactComponent as Logo } from "../../assets/tic-tac-toe.svg";

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
        <Logo className='logo' />
        <span onClick={() => toggleTheme()}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </span>
    </HeaderWrapper>
  )
}

export default Header