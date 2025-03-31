import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import styled from 'styled-components';

interface FormData {
  name: string;
  furigana: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isFirstVisit: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    furigana: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isFirstVisit: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理を実装
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <PageHeader
        title="お問い合わせ"
        description="ご予約・ご相談は、お気軽にお問い合わせください"
      />

      <Section>
        <ContactContainer>
          <ContactInfo>
            <InfoTitle>お電話でのお問い合わせ</InfoTitle>
            <PhoneNumber>03-XXXX-XXXX</PhoneNumber>
            <BusinessHours>
              <li>営業時間：9:00～20:00</li>
              <li>定休日：日曜・祝日</li>
            </BusinessHours>
            
            <InfoTitle>アクセス</InfoTitle>
            <Address>
              <p>〒000-0000</p>
              <p>東京都○○区○○1-2-3</p>
              <p>○○ビル 2F</p>
            </Address>
            <AccessInfo>
              <li>○○駅 徒歩5分</li>
              <li>駐車場2台完備</li>
            </AccessInfo>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>お問い合わせフォーム</FormTitle>
            <FormDescription>
              以下のフォームに必要事項をご入力の上、送信ボタンを押してください。
              <Required>※は必須項目です</Required>
            </FormDescription>

            <FormGroup>
              <Label>
                お名前<RequiredMark>※</RequiredMark>
              </Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="山田 太郎"
              />
            </FormGroup>

            <FormGroup>
              <Label>
                フリガナ<RequiredMark>※</RequiredMark>
              </Label>
              <Input
                type="text"
                name="furigana"
                value={formData.furigana}
                onChange={handleChange}
                required
                placeholder="ヤマダ タロウ"
              />
            </FormGroup>

            <FormGroup>
              <Label>
                メールアドレス<RequiredMark>※</RequiredMark>
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </FormGroup>

            <FormGroup>
              <Label>
                電話番号<RequiredMark>※</RequiredMark>
              </Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="090-1234-5678"
              />
            </FormGroup>

            <FormGroup>
              <Label>
                ご用件<RequiredMark>※</RequiredMark>
              </Label>
              <Select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">選択してください</option>
                <option value="予約">予約について</option>
                <option value="料金">料金について</option>
                <option value="症状">症状について</option>
                <option value="その他">その他</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>
                当院への来院<RequiredMark>※</RequiredMark>
              </Label>
              <RadioGroup>
                <RadioLabel>
                  <input
                    type="radio"
                    name="isFirstVisit"
                    value="first"
                    checked={formData.isFirstVisit === 'first'}
                    onChange={handleChange}
                    required
                  />
                  初めて
                </RadioLabel>
                <RadioLabel>
                  <input
                    type="radio"
                    name="isFirstVisit"
                    value="repeat"
                    checked={formData.isFirstVisit === 'repeat'}
                    onChange={handleChange}
                  />
                  再診
                </RadioLabel>
              </RadioGroup>
            </FormGroup>

            <FormGroup>
              <Label>
                お問い合わせ内容<RequiredMark>※</RequiredMark>
              </Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="ご予約希望の方は、ご希望の日時をご記入ください。"
              />
            </FormGroup>

            <PrivacyPolicy>
              <h4>個人情報の取り扱いについて</h4>
              <p>
                ご入力いただいた個人情報は、お問い合わせへの回答および当院からの
                お知らせの送付以外の目的では使用いたしません。
              </p>
            </PrivacyPolicy>

            <ButtonContainer>
              <Button variant="primary" size="large">
                送信する
              </Button>
            </ButtonContainer>
          </ContactForm>
        </ContactContainer>
      </Section>
    </>
  );
};

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};

  &:not(:first-child) {
    margin-top: 2rem;
  }
`;

const PhoneNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin: 1rem 0;
`;

const BusinessHours = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    font-family: "Noto Sans JP", sans-serif;
    margin-bottom: 0.5rem;
  }
`;

const Address = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  margin: 1rem 0;
  
  p {
    margin-bottom: 0.5rem;
  }
`;

const AccessInfo = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    font-family: "Noto Sans JP", sans-serif;
    margin-bottom: 0.5rem;
    padding-left: 1.2rem;
    position: relative;
    
    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const FormDescription = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  margin-bottom: 2rem;
`;

const Required = styled.span`
  font-size: 0.875rem;
  color: #e74c3c;
  margin-left: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const RequiredMark = styled.span`
  color: #e74c3c;
  margin-left: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Noto Sans JP", sans-serif;
  cursor: pointer;
  
  input {
    cursor: pointer;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const PrivacyPolicy = styled.div`
  background: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  
  h4 {
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 0.875rem;
    line-height: 1.6;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

export default ContactPage;
