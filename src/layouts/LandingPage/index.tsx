import React from 'react';
import { Box, Container } from '@mui/material';
// import Navbar from '../../components/layout/Navbar/Navbr';
import { LayoutContainer } from './styles';
import Navbar from '../../components/Navbar/Nav';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </LayoutContainer>
  );
};

export default MainLayout; 