import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Section from '@/components/common/Section';

// ヒーローセクションのスタイル
const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.medium};
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: ${({ theme }) => theme.transitions.medium};
`;

const StyledHeroSection = styled.div<{ $backgroundImage: string }>`
  position: relative;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  display: block;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: scale(1.02);
  }

  &:hover ${HeroOverlay} {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &:hover ${HeroContent} {
    transform: translateY(-10px);
  }
`;

const HeroTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
`;

// 特徴セクションのスタイル
const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  text-align: center;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

// サービスセクションのスタイル
const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ServiceContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const StyledServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

// キッズセクションのスタイル
const KidsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const KidsImage = styled.div`
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const KidsContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const KidsTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const KidsDescription = styled.div``;

const KidsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const KidsItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;

  &:before {
    content: "✓";
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
  }
`;

const KidsNote = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-style: italic;
`;

// プレースホルダー
const ImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textLight};
`;

// アクセスセクションのスタイル
const AccessSection = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const MapContainer = styled.div`
  position: relative;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const AccessInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const AccessDetail = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
  }
`;

const AccessIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  flex-shrink: 0;
`;

const AccessLabel = styled.h4`
  font-size: 1rem;
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const AccessText = styled.p`
  font-size: 1.125rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const TimeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 0.875rem;

  th, td {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  th {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: normal;
  }

  td {
    color: ${({ theme }) => theme.colors.text};
  }

  tr:nth-child(even) td {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const TimeTableNote = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.sm};
`;

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroContainer>
        <Link href="/insurance" passHref legacyBehavior>
          <StyledHeroSection $backgroundImage="/images/insurance-treatment.jpg">
            <HeroOverlay />
            <HeroContent>
              <HeroTitle>保険診療</HeroTitle>
              <HeroDescription>
                健康保険を使って治療を受けることができます。腰痛、肩こり、捻挫など、日常的な症状に対する治療を提供しています。
              </HeroDescription>
            </HeroContent>
          </StyledHeroSection>
        </Link>
        <Link href="/self-pay" passHref legacyBehavior>
          <StyledHeroSection $backgroundImage="/images/beauty-treatment.jpg">
            <HeroOverlay />
            <HeroContent>
              <HeroTitle>自由診療</HeroTitle>
              <HeroDescription>
                美容鍼灸や自由診療のメニューをご用意しています。お客様一人一人のニーズに合わせた施術プランをご提案します。
              </HeroDescription>
            </HeroContent>
          </StyledHeroSection>
        </Link>
      </HeroContainer>

      <Section title="当院の特徴">
        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>👨‍⚕️</FeatureIcon>
            <FeatureTitle>経験豊富な施術者</FeatureTitle>
            <FeatureDescription>
              国家資格を持つ経験豊富な施術者が、丁寧な施術を提供いたします。
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>⏰</FeatureIcon>
            <FeatureTitle>柔軟な診療時間</FeatureTitle>
            <FeatureDescription>
              平日夜間も営業。お仕事帰りの方もお気軽にご来院いただけます。
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>💭</FeatureIcon>
            <FeatureTitle>丁寧なカウンセリング</FeatureTitle>
            <FeatureDescription>
              症状や生活習慣を詳しくお伺いし、最適な治療プランをご提案します。
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>✨</FeatureIcon>
            <FeatureTitle>清潔な環境</FeatureTitle>
            <FeatureDescription>
              衛生管理を徹底し、快適な空間で施術を受けていただけます。
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section title="診療案内">
        <ServiceGrid>
          <ServiceCard>
            <ServiceImage>
              <ImagePlaceholder>鍼灸治療イメージ</ImagePlaceholder>
            </ServiceImage>
            <ServiceContent>
              <ServiceTitle>鍼灸治療</ServiceTitle>
              <ServiceDescription>
                伝統的な東洋医学の考えに基づき、体の不調を改善します。
              </ServiceDescription>
              <Link href="/acupuncture" passHref legacyBehavior>
                <StyledServiceLink>詳しく見る</StyledServiceLink>
              </Link>
            </ServiceContent>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage>
              <ImagePlaceholder>自由診療イメージ</ImagePlaceholder>
            </ServiceImage>
            <ServiceContent>
              <ServiceTitle>自由診療</ServiceTitle>
              <ServiceDescription>
                美容鍼灸や各種自由診療メニューをご用意しています。
              </ServiceDescription>
              <Link href="/self-pay" passHref legacyBehavior>
                <StyledServiceLink>詳しく見る</StyledServiceLink>
              </Link>
            </ServiceContent>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage>
              <ImagePlaceholder>保険診療イメージ</ImagePlaceholder>
            </ServiceImage>
            <ServiceContent>
              <ServiceTitle>保険診療</ServiceTitle>
              <ServiceDescription>
                健康保険を使って治療を受けることができます。
              </ServiceDescription>
              <Link href="/insurance" passHref legacyBehavior>
                <StyledServiceLink>詳しく見る</StyledServiceLink>
              </Link>
            </ServiceContent>
          </ServiceCard>
        </ServiceGrid>
      </Section>

      <Section title="お子様連れの方へ">
        <KidsSection>
          <KidsImage>
            <ImagePlaceholder>キッズスペースイメージ</ImagePlaceholder>
          </KidsImage>
          <KidsContent>
            <KidsTitle>お子様と一緒に安心して通院できます</KidsTitle>
            <KidsDescription>
              <KidsList>
                <KidsItem>キッズスペース完備</KidsItem>
                <KidsItem>おむつ交換台あり</KidsItem>
                <KidsItem>ベビーカーでアクセス可能</KidsItem>
                <KidsItem>授乳スペースあり</KidsItem>
                <KidsItem>絵本・おもちゃを用意</KidsItem>
              </KidsList>
              <KidsNote>
                ※キッズスペースは新型コロナウイルス感染予防のため、現在利用を制限している場合があります。
              </KidsNote>
            </KidsDescription>
          </KidsContent>
        </KidsSection>
      </Section>

      <Section title="アクセス">
        <AccessSection>
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208110.80596040838!2d139.08687988671875!3d35.4119092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185533352d2663%3A0x8aaf62a1b1e27869!2z44K144Oz44Oq44OD44OI44Km44Ko44K544OI6Y2854G45pW06aqo6Zmi!5e0!3m2!1sja!2sjp!4v1741448816542!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="院の場所"
            />
          </MapContainer>
          <AccessInfo>
            <AccessDetail>
              <AccessIcon>📍</AccessIcon>
              <div>
                <AccessLabel>住所</AccessLabel>
                <AccessText>
                  〒123-4567<br />
                  東京都八王子市XXXXXX 1-2-3<br />
                  XXXXXビル 2F
                </AccessText>
              </div>
            </AccessDetail>
            <AccessDetail>
              <AccessIcon>🚃</AccessIcon>
              <div>
                <AccessLabel>最寄り駅</AccessLabel>
                <AccessText>
                  JR中央線「八王子駅」徒歩5分<br />
                  京王線「京王八王子駅」徒歩7分
                </AccessText>
              </div>
            </AccessDetail>
            <AccessDetail>
              <AccessIcon>📞</AccessIcon>
              <div>
                <AccessLabel>電話番号</AccessLabel>
                <AccessText>03-XXXX-XXXX</AccessText>
              </div>
            </AccessDetail>
            <AccessDetail>
              <AccessIcon>🕒</AccessIcon>
              <div>
                <AccessLabel>診療時間</AccessLabel>
                <TimeTable>
                  <thead>
                    <tr>
                      <th>診療時間</th>
                      <th>月</th>
                      <th>火</th>
                      <th>水</th>
                      <th>木</th>
                      <th>金</th>
                      <th>土</th>
                      <th>日</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>9:00-12:30</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>15:00-20:00</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>△</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </TimeTable>
                <TimeTableNote>
                  △：15:00-18:00　休診日：日曜・祝日
                </TimeTableNote>
              </div>
            </AccessDetail>
          </AccessInfo>
        </AccessSection>
      </Section>
    </main>
  );
};

export default HomePage;
