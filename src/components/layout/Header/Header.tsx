import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { toggleTheme } from '../../../store/slices/themeSlice';
import { HeaderContainer, Title } from './styles';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <HeaderContainer>
      <Title variant="h1" color="primary">
        Welcome to Behive
      </Title>
      <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </HeaderContainer>
  );
};

export default Header; 