import React from 'react';
import { Typography, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { toggleTheme } from '@store/slices/themeSlice';
import { ButtonContainer, Container } from './styles';
import Hero from '@components/home/Hero';

const Home: React.FC = () => {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  return (
    <Container>
     <Hero></Hero>
      <ButtonContainer>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
          Secondary Button
        </Button>
        <Button onClick={() => dispatch(toggleTheme())} sx={{ ml: 2 }}>
          Toggle Theme
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Home; 