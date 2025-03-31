import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ServiceCardProps } from '../../utils/types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imagePath, link }) => {
  return (
    <CardContainer to={link}>
      <ImageContainer>
        {imagePath ? (
          <CardImage src={imagePath} alt={title} />
        ) : (
          <ImagePlaceholder>
            施術イメージ
          </ImagePlaceholder>
        )}
      </ImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled(Link)`
  display: block;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 1rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.1rem;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CardTitle = styled.h3`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export default ServiceCard;
