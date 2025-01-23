import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const StyledButton = styled.button`
  padding: ${props => props.size === 'large' ? '15px 30px' : '10px 20px'};
  font-size: ${props => props.size === 'large' ? '1.2em' : '1em'};
  background-color: ${props => theme.colors[props.variant || 'primary']};
  color: ${theme.colors.textLight};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${props => theme.colors[`${props.variant || 'primary'}Hover`]};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
}; 