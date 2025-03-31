import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
};

type ButtonAsButtonProps = ButtonBaseProps & {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonAsButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    children,
    href,
    ...rest
  } = props;

  if (href) {
    return (
      <Link href={href} passHref>
        <StyledButton
          as="a"
          $variant={variant}
          $size={size}
          $fullWidth={fullWidth}
          ref={ref as any}
          {...rest}
        >
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      ref={ref as any}
      {...rest}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';

const StyledButton = styled.button<{
  $variant: NonNullable<ButtonBaseProps['variant']>;
  $size: NonNullable<ButtonBaseProps['size']>;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-decoration: none;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          color: white;
          border: none;
          &:hover {
            background-color: ${theme.colors.primaryDark};
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          color: white;
          border: none;
          &:hover {
            background-color: ${theme.colors.secondaryDark};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.primaryLight};
          }
        `;
    }
  }}

  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: 0.875rem;
        `;
      case 'medium':
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: 1rem;
        `;
      case 'large':
        return `
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: 1.125rem;
        `;
    }
  }}

  ${({ $fullWidth }) =>
    $fullWidth &&
    `
    width: 100%;
  `}
`;

export default Button;
