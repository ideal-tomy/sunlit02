import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import styled from 'styled-components';

const StaffPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="スタッフ紹介"
        description="経験豊富な専門スタッフが、皆様の健康をサポートいたします"
      />
      
      <Section
        title="院長紹介"
        description="患者様一人ひとりに寄り添った施術を心がけています"
      >
        <DirectorProfile>
          <ProfileImage>
            <ImagePlaceholder>院長写真</ImagePlaceholder>
          </ProfileImage>
          <ProfileContent>
            <ProfileName>
              <span className="position">院長</span>
              <span className="name">山田 太郎</span>
              <span className="qualification">鍼灸師・柔道整復師</span>
            </ProfileName>
            <ProfileDescription>
              20年以上の臨床経験を持ち、数多くの患者様の症状改善をサポートしてまいりました。
              東洋医学と現代医学の知識を組み合わせた独自のアプローチで、
              一人ひとりに最適な治療プランをご提案いたします。
            </ProfileDescription>
            <Qualifications>
              <li>国家資格 はり師・きゅう師</li>
              <li>国家資格 柔道整復師</li>
              <li>日本スポーツ協会公認アスレティックトレーナー</li>
            </Qualifications>
          </ProfileContent>
        </DirectorProfile>
      </Section>

      <Section
        title="スタッフ紹介"
        description="専門的な知識と技術を持ったスタッフが在籍しています"
        backgroundColor="#f5f5f5"
      >
        <StaffGrid>
          <StaffCard>
            <StaffImage>
              <ImagePlaceholder>スタッフ写真</ImagePlaceholder>
            </StaffImage>
            <StaffInfo>
              <StaffName>
                <span className="name">鈴木 花子</span>
                <span className="qualification">鍼灸師</span>
              </StaffName>
              <StaffDescription>
                女性特有の症状や美容鍼を得意としています。
                リラックスできる施術を心がけています。
              </StaffDescription>
            </StaffInfo>
          </StaffCard>

          <StaffCard>
            <StaffImage>
              <ImagePlaceholder>スタッフ写真</ImagePlaceholder>
            </StaffImage>
            <StaffInfo>
              <StaffName>
                <span className="name">佐藤 健一</span>
                <span className="qualification">柔道整復師</span>
              </StaffName>
              <StaffDescription>
                スポーツ整体を専門とし、アスリートのケアから
                一般の方の症状改善まで幅広く対応いたします。
              </StaffDescription>
            </StaffInfo>
          </StaffCard>

          <StaffCard>
            <StaffImage>
              <ImagePlaceholder>スタッフ写真</ImagePlaceholder>
            </StaffImage>
            <StaffInfo>
              <StaffName>
                <span className="name">田中 美咲</span>
                <span className="qualification">鍼灸師</span>
              </StaffName>
              <StaffDescription>
                丁寧なカウンセリングと施術で、
                心と体の調和を取り戻すお手伝いをいたします。
              </StaffDescription>
            </StaffInfo>
          </StaffCard>
        </StaffGrid>
      </Section>
    </>
  );
};

const DirectorProfile = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  margin: 2rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
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

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileName = styled.div`
  margin-bottom: 1.5rem;
  
  .position {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.accent};
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .name {
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .qualification {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ProfileDescription = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const Qualifications = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    font-family: "Noto Sans JP", sans-serif;
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
    
    &:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const StaffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const StaffCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StaffImage = styled.div`
  width: 100%;
  height: 300px;
`;

const StaffInfo = styled.div`
  padding: 1.5rem;
`;

const StaffName = styled.div`
  margin-bottom: 1rem;
  
  .name {
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary};
    display: block;
    margin-bottom: 0.25rem;
  }
  
  .qualification {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const StaffDescription = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 0.95rem;
  line-height: 1.8;
`;

export default StaffPage;
