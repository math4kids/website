import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const Content = styled.main`
  background-color: ${theme.colors.cardBackground};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
`;

export const Layout = ({ title, children }) => {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Content>
        {children}
      </Content>
    </Container>
  );
}; 