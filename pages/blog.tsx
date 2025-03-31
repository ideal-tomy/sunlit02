import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 仮のブログデータ
const blogPosts = [
  {
    id: 1,
    title: '腰痛改善のためのストレッチ方法',
    excerpt: 'デスクワークで悩む方向けに、自宅でできる簡単なストレッチをご紹介します。',
    category: '健康コラム',
    date: '2025-03-08',
    image: '',
  },
  {
    id: 2,
    title: '春の養生法：東洋医学の観点から',
    excerpt: '季節の変わり目に体調を整えるための養生法をご紹介します。',
    category: '東洋医学',
    date: '2025-03-05',
    image: '',
  },
  {
    id: 3,
    title: '美容鍼の効果と施術後のケア',
    excerpt: '美容鍼の効果を最大限に引き出すためのアフターケアについて解説します。',
    category: '美容鍼',
    date: '2025-03-01',
    image: '',
  },
];

const BlogPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="ブログ"
        description="健康・美容に関する情報や当院からのお知らせをお届けします"
      />
      
      <Section>
        <BlogContainer>
          <MainContent>
            {blogPosts.map(post => (
              <BlogCard key={post.id}>
                <BlogImage>
                  {post.image ? (
                    <img src={post.image} alt={post.title} />
                  ) : (
                    <ImagePlaceholder>ブログ画像</ImagePlaceholder>
                  )}
                </BlogImage>
                <BlogContent>
                  <BlogMeta>
                    <Category>{post.category}</Category>
                    <Date>{post.date}</Date>
                  </BlogMeta>
                  <BlogTitle>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <ReadMore to={`/blog/${post.id}`}>
                    続きを読む →
                  </ReadMore>
                </BlogContent>
              </BlogCard>
            ))}
          </MainContent>
          
          <Sidebar>
            <SidebarSection>
              <SidebarTitle>カテゴリー</SidebarTitle>
              <CategoryList>
                <li><Link to="/blog/category/health">健康コラム</Link></li>
                <li><Link to="/blog/category/oriental">東洋医学</Link></li>
                <li><Link to="/blog/category/beauty">美容鍼</Link></li>
                <li><Link to="/blog/category/exercise">運動・ストレッチ</Link></li>
                <li><Link to="/blog/category/news">お知らせ</Link></li>
              </CategoryList>
            </SidebarSection>
            
            <SidebarSection>
              <SidebarTitle>最新の記事</SidebarTitle>
              <RecentPostList>
                {blogPosts.slice(0, 5).map(post => (
                  <li key={post.id}>
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                      <span>{post.date}</span>
                    </Link>
                  </li>
                ))}
              </RecentPostList>
            </SidebarSection>
          </Sidebar>
        </BlogContainer>
      </Section>
    </>
  );
};

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.div`
  width: 100%;
  height: 250px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Category = styled.span`
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: "Noto Sans JP", sans-serif;
`;

const Date = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-family: "Noto Sans JP", sans-serif;
`;

const BlogTitle = styled.h2`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BlogExcerpt = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const ReadMore = styled(Link)`
  font-family: "Noto Sans JP", sans-serif;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = styled.aside`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 2rem;
  }
`;

const SidebarSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SidebarTitle = styled.h3`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.5rem;
    
    a {
      font-family: "Noto Sans JP", sans-serif;
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      display: block;
      padding: 0.5rem 0;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const RecentPostList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 1rem;
    
    a {
      font-family: "Noto Sans JP", sans-serif;
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      display: block;
      
      span {
        display: block;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.accent};
        margin-top: 0.25rem;
      }
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default BlogPage;
