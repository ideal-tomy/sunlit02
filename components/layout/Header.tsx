import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../common/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <StyledLink href="/">
          サンリットウエスト鍼灸整骨院
        </StyledLink>

        <MenuButton onClick={toggleMenu} aria-expanded={isMenuOpen}>
          <span className="visually-hidden">メニュー</span>
          <MenuIcon isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        </MenuButton>

        <Nav isOpen={isMenuOpen}>
          <NavList>
            <NavItem>
              <StyledNavLink href="/acupuncture" $isActive={router.pathname === '/acupuncture'}>
                鍼灸治療
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink href="/self-pay" $isActive={router.pathname === '/self-pay'}>
                自由診療
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink href="/insurance" $isActive={router.pathname === '/insurance'}>
                保険診療
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink href="/staff" $isActive={router.pathname === '/staff'}>
                スタッフ紹介
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink href="/blog" $isActive={router.pathname === '/blog'}>
                お知らせ
              </StyledNavLink>
            </NavItem>
          </NavList>
          <ContactButton>
            <Button variant="primary" size="small" href="/contact">
              ご予約・お問い合わせ
            </Button>
          </ContactButton>
        </Nav>
      </HeaderContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  padding: ${({ theme }) => theme.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MenuIcon = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 20px;
  position: relative;
  
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
    transition: all ${({ theme }) => theme.transitions.medium};
    
    &:first-child {
      top: ${({ isOpen }) => (isOpen ? '9px' : '0')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
    }
    
    &:nth-child(2) {
      top: 9px;
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }
    
    &:last-child {
      top: ${({ isOpen }) => (isOpen ? '9px' : '18px')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
    }
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled.li`
  list-style: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
  }
`;

const StyledNavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.text)};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 4px;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const ContactButton = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    
    > * {
      width: 100%;
    }
  }
`;

export default Header;
