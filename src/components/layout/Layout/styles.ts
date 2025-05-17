import styled from 'styled-components';
import { Box } from '@mui/material';

export const LayoutContainer = styled(Box)`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  transition: background-color 0.3s ease;
`; 