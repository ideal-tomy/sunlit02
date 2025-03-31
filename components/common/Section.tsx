import React from 'react';
import styled from 'styled-components';
import { SectionProps } from '../../utils/types';

const Section: React.FC<SectionProps> = ({
  title,
  description,
  children,
  backgroundColor,
  padding
}) => {
  return (
    <StyledSection $backgroundColor={backgroundColor} $padding={padding}>
      <SectionContent>
        {title && <SectionTitle>{title}</SectionTitle>}
        {description && <SectionDescription>{description}</SectionDescription>}
        {children}
      </SectionContent>
    </StyledSection>
  );
};

const StyledSection = styled.section<{
  $backgroundColor?: string;
  $padding?: string;
}>`
  width: 100%;
  background-color: ${({ $backgroundColor, theme }) => $backgroundColor || theme.colors.background};
  padding: ${({ $padding }) => $padding || '4rem 0'};
`;

const SectionContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const SectionTitle = styled.h2`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const SectionDescription = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;

export default Section;
