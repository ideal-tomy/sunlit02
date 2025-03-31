import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterLogo>サンリットウエスト鍼灸整骨院</FooterLogo>
          <FooterAddress>
            〒000-0000<br />
            東京都○○区○○1-2-3<br />
            TEL: 03-XXXX-XXXX
          </FooterAddress>
        </FooterSection>

        <FooterSection>
          <FooterTitle>診療時間</FooterTitle>
          <BusinessHours>
            <tbody>
              <tr>
                <th>月・火・水・金</th>
                <td>9:00～13:00 / 15:00～20:00</td>
              </tr>
              <tr>
                <th>木・土</th>
                <td>9:00～13:00</td>
              </tr>
              <tr>
                <th>日曜・祝日</th>
                <td>休診</td>
              </tr>
            </tbody>
          </BusinessHours>
        </FooterSection>

        <FooterSection>
          <FooterTitle>メニュー</FooterTitle>
          <FooterNav>
            <StyledLink href="/acupuncture">鍼灸治療</StyledLink>
            <StyledLink href="/self-pay">自由診療</StyledLink>
            <StyledLink href="/insurance">保険診療</StyledLink>
            <StyledLink href="/staff">スタッフ紹介</StyledLink>
            <StyledLink href="/blog">お知らせ</StyledLink>
            <StyledLink href="/contact">ご予約・お問い合わせ</StyledLink>
          </FooterNav>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>© {new Date().getFullYear()} サンリットウエスト鍼灸整骨院</Copyright>
      </FooterBottom>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl} 0 0;
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FooterLogo = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FooterAddress = styled.address`
  font-style: normal;
  line-height: 1.8;
`;

const FooterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const BusinessHours = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: ${({ theme }) => theme.spacing.xs};
    text-align: left;
  }
  
  th {
    font-weight: normal;
    white-space: nowrap;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  transition: opacity ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    opacity: 0.8;
  }
`;

const FooterBottom = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Copyright = styled.p`
  font-size: 0.875rem;
`;

export default Footer;
