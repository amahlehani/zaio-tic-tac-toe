import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.js';
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from './Header.styled.js';
import { ReactComponent as Logo } from "../../assets/tic-tac-toe.svg";
import { useNavigate } from 'react-router-dom';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
  return (
    <HeaderWrapper>
        <Logo className='logo' onClick={() => navigate("/")} />
        <span onClick={() => toggleTheme()}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </span>
    </HeaderWrapper>
  )
}

export default Header