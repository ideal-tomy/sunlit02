import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';

const SelfPayPage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>自由診療</HeroTitle>
          <HeroDescription>
            保険適用外の施術メニューを豊富にご用意。<br />
            お客様のニーズに合わせた最適な施術プランをご提案いたします。
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <Section title="施術メニュー">
        <MenuGrid>
          <MenuItem>
            <MenuImage>
              <ImagePlaceholder>美容鍼灸イメージ</ImagePlaceholder>
            </MenuImage>
            <MenuContent>
              <MenuTitle>美容鍼灸</MenuTitle>
              <MenuDescription>
                お顔のツボを刺激し、血行を促進。リフトアップ効果や肌のハリ・ツヤの改善が期待できます。
              </MenuDescription>
              <MenuDetails>
                <MenuPrice>10,000円（税込）</MenuPrice>
                <MenuTime>約60分</MenuTime>
              </MenuDetails>
            </MenuContent>
          </MenuItem>

          <MenuItem>
            <MenuImage>
              <ImagePlaceholder>全身調整イメージ</ImagePlaceholder>
            </MenuImage>
            <MenuContent>
              <MenuTitle>全身調整コース</MenuTitle>
              <MenuDescription>
                全身の気血の流れを整え、心身の調子を整えます。疲労回復や自律神経の乱れに効果的です。
              </MenuDescription>
              <MenuDetails>
                <MenuPrice>8,000円（税込）</MenuPrice>
                <MenuTime>約60分</MenuTime>
              </MenuDetails>
            </MenuContent>
          </MenuItem>

          <MenuItem>
            <MenuImage>
              <ImagePlaceholder>スポーツケアイメージ</ImagePlaceholder>
            </MenuImage>
            <MenuContent>
              <MenuTitle>スポーツケア</MenuTitle>
              <MenuDescription>
                スポーツによる筋肉の疲労や痛みを緩和し、パフォーマンス向上をサポートします。
              </MenuDescription>
              <MenuDetails>
                <MenuPrice>7,000円（税込）</MenuPrice>
                <MenuTime>約45分</MenuTime>
              </MenuDetails>
            </MenuContent>
          </MenuItem>
        </MenuGrid>
      </Section>

      <Section title="施術の特徴" backgroundColor="#f5f5f5">
        <FeatureList>
          <FeatureItem>
            <FeatureIcon>✨</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>オーダーメイド施術</FeatureTitle>
              <FeatureDescription>
                お客様の症状や目的に合わせて、最適な施術プランをご提案いたします。
              </FeatureDescription>
            </FeatureContent>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>🌿</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>自然療法</FeatureTitle>
              <FeatureDescription>
                お薬に頼らず、体本来の治癒力を引き出す自然な施術を行います。
              </FeatureDescription>
            </FeatureContent>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>👥</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>経験豊富な施術者</FeatureTitle>
              <FeatureDescription>
                豊富な経験を持つ施術者が、丁寧にカウンセリングから施術まで担当いたします。
              </FeatureDescription>
            </FeatureContent>
          </FeatureItem>
        </FeatureList>
      </Section>

      <Section title="ご予約・お支払いについて">
        <InfoGrid>
          <InfoCard>
            <InfoTitle>ご予約について</InfoTitle>
            <InfoContent>
              <InfoList>
                <InfoItem>予約優先制となっております</InfoItem>
                <InfoItem>当日予約も可能です（空き状況によります）</InfoItem>
                <InfoItem>ご予約の変更・キャンセルは前日までにご連絡ください</InfoItem>
              </InfoList>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <InfoTitle>お支払いについて</InfoTitle>
            <InfoContent>
              <InfoList>
                <InfoItem>現金・クレジットカードがご利用いただけます</InfoItem>
                <InfoItem>各種電子マネー決済も対応しております</InfoItem>
                <InfoItem>領収書の発行も承ります</InfoItem>
              </InfoList>
            </InfoContent>
          </InfoCard>
        </InfoGrid>
      </Section>

      <Section title="お子様連れの方へ">
        <KidsSection>
          <KidsImage>
            <ImagePlaceholder>キッズスペースイメージ</ImagePlaceholder>
          </KidsImage>
          <KidsContent>
            <KidsTitle>お子様と一緒に安心して通院いただけます</KidsTitle>
            <KidsDescription>
              <KidsList>
                <KidsItem>キッズスペースを完備</KidsItem>
                <KidsItem>おもちゃ・絵本を用意</KidsItem>
                <KidsItem>ベビーカーでもアクセス可能</KidsItem>
                <KidsItem>授乳スペース有り</KidsItem>
              </KidsList>
              <KidsNote>
                ※スタッフがお子様の見守りをさせていただきますが、安全のため保護者の方の付き添いをお願いしております。
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

      <CallToAction>
        <CTAContent>
          <CTATitle>まずはお気軽にご相談ください</CTATitle>
          <CTADescription>
            施術内容や料金について、ご不明な点がございましたら、<br />
            お電話またはお問い合わせフォームよりお気軽にご連絡ください。
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
    url('/images/self-pay-hero.jpg') center/cover;
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

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const MenuItem = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const MenuImage = styled.div`
  height: 200px;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const MenuContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const MenuTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const MenuDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const MenuDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const MenuPrice = styled.div`
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const MenuTime = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.textLight};
`;

const FeatureList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const FeatureDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const InfoCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const InfoTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const InfoContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InfoItem = styled.li`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.6;
  
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
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
`;

const KidsContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const KidsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const KidsDescription = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const KidsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const KidsItem = styled.li`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const KidsNote = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

const AccessSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const MapContainer = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const AccessInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const AccessDetail = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
`;

const AccessIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const AccessLabel = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const AccessText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.8;
`;

const TimeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${({ theme }) => theme.spacing.sm} 0;
  
  th, td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: ${({ theme }) => theme.spacing.xs};
    text-align: center;
  }
  
  th {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
  
  td:first-child {
    background-color: ${({ theme }) => theme.colors.background};
    font-weight: 600;
  }
`;

const TimeTableNote = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export default SelfPayPage;
