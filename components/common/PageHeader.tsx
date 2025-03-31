import React from 'react';
import styled from 'styled-components';
import { PageHeaderProps } from '../../utils/types';

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, imagePath }) => {
  return (
    <HeaderContainer $imagePath={imagePath}>
      <HeaderOverlay />
      <HeaderContent>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<{ $imagePath?: string }>`
  width: 100%;
  height: 300px;
  background-image: ${({ $imagePath }) => 
    $imagePath ? `url(${$imagePath})` : 'linear-gradient(45deg, #4A6572, #547b8c)'};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: bold;
  letter-spacing: 0.05em;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export default PageHeader;
