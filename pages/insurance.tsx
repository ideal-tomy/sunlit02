import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import styled from 'styled-components';

const InsurancePage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="保険診療"
        description="健康保険を使って受けられる施術のご案内"
      />
      
      <Section
        title="保険診療について"
        description="国民健康保険・社会保険が適用される施術をご提供しています"
      >
        <InfoContainer>
          <InfoContent>
            <h3>保険適用の条件</h3>
            <ConditionList>
              <li>医師の同意書がある場合</li>
              <li>外傷性の負傷の場合</li>
              <li>慢性的な疼痛がある場合</li>
            </ConditionList>
            <Note>
              ※保険診療の場合、施術内容や回数に制限がございます。
              詳しくは当院スタッフにお問い合わせください。
            </Note>
          </InfoContent>
          <InfoImage>
            <ImagePlaceholder>施術イメージ</ImagePlaceholder>
          </InfoImage>
        </InfoContainer>
      </Section>

      <Section
        title="施術内容"
        description="症状に合わせて最適な治療プランをご提案いたします"
        backgroundColor="#f5f5f5"
      >
        <TreatmentGrid>
          <TreatmentItem>
            <TreatmentTitle>はり治療</TreatmentTitle>
            <TreatmentDescription>
              経絡やツボに細い鍼を刺して血行を促進し、
              自然治癒力を高める治療法です。
            </TreatmentDescription>
          </TreatmentItem>
          <TreatmentItem>
            <TreatmentTitle>きゅう治療</TreatmentTitle>
            <TreatmentDescription>
              もぐさを使って経穴を温め、血行を促進させ、
              体の調子を整える治療法です。
            </TreatmentDescription>
          </TreatmentItem>
          <TreatmentItem>
            <TreatmentTitle>マッサージ治療</TreatmentTitle>
            <TreatmentDescription>
              筋肉の緊張をほぐし、血行を促進させることで、
              痛みやコリを改善します。
            </TreatmentDescription>
          </TreatmentItem>
        </TreatmentGrid>
      </Section>

      <Section
        title="ご予約・お問い合わせ"
        description="保険診療に関するご質問は、お気軽にお問い合わせください"
      >
        <ContactContainer>
          <Button variant="primary" size="large">
            ご予約はこちら
          </Button>
          <ContactInfo>
            <p>お電話でのご予約・お問い合わせ</p>
            <PhoneNumber>03-XXXX-XXXX</PhoneNumber>
            <BusinessHours>
              営業時間：9:00～20:00（日曜・祝日休み）
            </BusinessHours>
          </ContactInfo>
        </ContactContainer>
      </Section>
    </>
  );
};

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const InfoContent = styled.div`
  h3 {
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
  }
`;

const ConditionList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  
  li {
    font-family: "Noto Sans JP", sans-serif;
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 1rem;
    
    &:before {
      content: "●";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.accent};
      font-size: 0.8rem;
    }
  }
`;

const Note = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  padding: 1rem;
  background: #fff7e6;
  border-radius: 8px;
`;

const InfoImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans JP", sans-serif;
`;

const TreatmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const TreatmentItem = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TreatmentTitle = styled.h4`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  text-align: center;
`;

const TreatmentDescription = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  line-height: 1.8;
  text-align: center;
`;

const ContactContainer = styled.div`
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  
  p {
    font-family: "Noto Sans JP", sans-serif;
    margin-bottom: 0.5rem;
  }
`;

const PhoneNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0.5rem 0;
`;

const BusinessHours = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  color: ${({ theme }) => theme.colors.text};
`;

export default InsurancePage;
