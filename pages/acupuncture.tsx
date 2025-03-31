import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Section from '../components/common/Section';

const AcupuncturePage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>鍼灸治療</HeroTitle>
          <HeroDescription>
            伝統的な東洋医学の考えに基づき、<br />
            一人ひとりの体質や症状に合わせた施術を提供いたします。
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <Section title="特徴">
        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>🎯</FeatureIcon>
            <FeatureTitle>的確な施術</FeatureTitle>
            <FeatureDescription>
              長年の経験と実績に基づき、お客様の症状に合わせた最適な施術を提供します。
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🌿</FeatureIcon>
            <FeatureTitle>自然治癒力の活用</FeatureTitle>
            <FeatureDescription>
              体本来の持つ自然治癒力を引き出し、根本的な改善を目指します。
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>👥</FeatureIcon>
            <FeatureTitle>丁寧なカウンセリング</FeatureTitle>
            <FeatureDescription>
              お客様のお悩みをしっかりとお聞きし、最適な治療プランをご提案します。
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section title="施術の流れ" backgroundColor="#f5f5f5">
        <ProcessList>
          <ProcessItem>
            <ProcessNumber>1</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>問診・カウンセリング</ProcessTitle>
              <ProcessDescription>
                症状や生活習慣、治療歴などについて詳しくお伺いします。
              </ProcessDescription>
            </ProcessContent>
          </ProcessItem>

          <ProcessItem>
            <ProcessNumber>2</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>検査・診断</ProcessTitle>
              <ProcessDescription>
                触診や各種検査を行い、症状の原因を特定します。
              </ProcessDescription>
            </ProcessContent>
          </ProcessItem>

          <ProcessItem>
            <ProcessNumber>3</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>施術</ProcessTitle>
              <ProcessDescription>
                診断結果に基づき、最適な治療を行います。
              </ProcessDescription>
            </ProcessContent>
          </ProcessItem>

          <ProcessItem>
            <ProcessNumber>4</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>アフターケア</ProcessTitle>
              <ProcessDescription>
                日常生活でのケア方法や予防法についてアドバイスいたします。
              </ProcessDescription>
            </ProcessContent>
          </ProcessItem>
        </ProcessList>
      </Section>

      <Section title="料金案内">
        <PriceTable>
          <thead>
            <tr>
              <th>メニュー</th>
              <th>料金（税込）</th>
              <th>所要時間</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>初診料</td>
              <td>1,000円</td>
              <td>-</td>
            </tr>
            <tr>
              <td>鍼灸治療 基本コース</td>
              <td>6,000円</td>
              <td>約40分</td>
            </tr>
            <tr>
              <td>鍼灸治療 スペシャルコース</td>
              <td>8,000円</td>
              <td>約60分</td>
            </tr>
            <tr>
              <td>美容鍼</td>
              <td>10,000円</td>
              <td>約60分</td>
            </tr>
          </tbody>
        </PriceTable>
        <PriceNote>
          ※ 保険適用の場合は料金が異なります。詳しくは<Link to="/insurance">保険診療ページ</Link>をご確認ください。
        </PriceNote>
      </Section>

      <CallToAction>
        <CTAContent>
          <CTATitle>まずはお気軽にご相談ください</CTATitle>
          <CTADescription>
            症状や施術についてのご不安な点、ご不明な点などございましたら、<br />
            お電話またはお問い合わせフォームよりご連絡ください。
          </CTADescription>
          <CTAButtons>
            <Button variant="primary" size="large" as={Link} to="/contact">
              ご予約・お問い合わせ
            </Button>
            <PhoneNumber>
              <PhoneIcon>📞</PhoneIcon>
              03-XXXX-XXXX
            </PhoneNumber>
          </CTAButtons>
        </CTAContent>
      </CallToAction>
    </>
  );
};

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/acupuncture-hero.jpg') center/cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.25rem;
  line-height: 1.8;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const FeatureCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeatureDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.6;
`;

const ProcessList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ProcessItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProcessNumber = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: 1.25rem;
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto;
  }
`;

const ProcessContent = styled.div`
  flex: 1;
`;

const ProcessTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ProcessDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
`;

const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  
  th, td {
    padding: ${({ theme }) => theme.spacing.md};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  
  th {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: normal;
  }
  
  td {
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    th, td {
      padding: ${({ theme }) => theme.spacing.sm};
      font-size: 0.875rem;
    }
  }
`;

const PriceNote = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${({ theme }) => theme.spacing.md};
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

const CallToAction = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const CTAContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const CTADescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    
    br {
      display: none;
    }
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: 1.5rem;
  font-weight: bold;
`;

const PhoneIcon = styled.span`
  font-size: 1.5rem;
`;

export default AcupuncturePage;
