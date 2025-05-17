import styled from 'styled-components';
import { Box, Button, Typography, List } from '@mui/material';

export const NavbarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Logo = styled(Typography)`
  font-size: 1.75rem;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -0.02em;
`;

export const NavLinks = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const NavButton = styled(Button)`
  text-transform: none;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;
  min-width: 120px;
`;

export const MobileMenu = styled(List)`
  padding: ${({ theme }) => theme.spacing.lg};
  
  & .MuiListItem-root {
    padding: ${({ theme }) => theme.spacing.md};
  }
`; 