import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ProgressContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${theme.colors.progressBackground};
  border-radius: ${theme.borderRadius.sm};
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: ${theme.colors.primary};
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

export const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  return (
    <ProgressContainer>
      <Progress progress={progress} />
    </ProgressContainer>
  );
}; 