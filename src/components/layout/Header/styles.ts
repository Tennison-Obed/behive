import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`; 