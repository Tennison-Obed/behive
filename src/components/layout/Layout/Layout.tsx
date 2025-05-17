import React from 'react';
import { Container } from '@mui/material';
import Header from '../Header/Header';
import { LayoutContainer } from './styles';
import Navbar from '../Navbar/Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Container maxWidth="lg">
        <Header />
        {children}
      </Container>
    </LayoutContainer>
  );
};

export default Layout; 