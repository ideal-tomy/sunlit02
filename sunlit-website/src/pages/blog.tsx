// src/pages/Blog.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  // スクロール検出用のuseEffect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'articles'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            setVisibleSections(prev => prev.includes(section) ? prev : [...prev, section]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // 初回実行
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // アニメーション設定
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  // ブログ記事データ
  const blogPosts = [
    {
      id: 1,
      title: '鍼灸治療で肩こりを改善する方法',
      excerpt: '現代人に多い肩こりの原因と、鍼灸治療がどのように効果を発揮するのかを解説します。',
      date: '2025-03-10',
      image: '/images/blog-1.jpg',
      category: '鍼灸治療'
    },
    {
      id: 2,
      title: '腰痛予防のためのストレッチと生活習慣',
      excerpt: '日常生活で実践できる腰痛予防のためのストレッチと、見直すべき生活習慣についてご紹介します。',
      date: '2025-03-05',
      image: '/images/blog-2.jpg',
      category: '健康アドバイス'
    },
    {
      id: 3,
      title: '自律神経の乱れを整える東洋医学的アプローチ',
      excerpt: '現代社会で増加している自律神経失調症に対する、東洋医学からのアプローチ方法を解説します。',
      date: '2025-02-28',
      image: '/images/blog-3.jpg',
      category: '東洋医学'
    },
    {
      id: 4,
      title: '季節の変わり目に起こりやすい不調とその対策',
      excerpt: '春から夏、夏から秋など季節の変わり目に体調を崩しやすい理由と、その予防法についてご紹介します。',
      date: '2025-02-20',
      image: '/images/blog-4.jpg',
      category: '季節の健康'
    },
    {
      id: 5,
      title: '子どもの姿勢改善と成長痛への対応',
      excerpt: '子どもの姿勢の悪さが引き起こす問題と、成長痛に対する当院のアプローチ方法を解説します。',
      date: '2025-02-15',
      image: '/images/blog-5.jpg',
      category: '子どもの健康'
    },
    {
      id: 6,
      title: 'スポーツ障害の予防と回復を早める鍼灸治療',
      excerpt: 'アスリートやスポーツ愛好家に多いスポーツ障害の予防と、怪我からの回復を早める鍼灸治療について解説します。',
      date: '2025-02-08',
      image: '/images/blog-6.jpg',
      category: 'スポーツ障害'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ブログ
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            健康や東洋医学に関する情報、当院からのお知らせをお届けします
          </motion.p>
        </div>
      </section>

      {/* イントロセクション */}
      <section id="intro" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate={visibleSections.includes('intro') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6 text-accent-dark">健康と東洋医学の知恵</h2>
            <p className="text-gray-600 mb-8">
              当院のブログでは、東洋医学の知恵や日常生活に取り入れられる健康法、症状別の対処法など、皆様の健康づくりに役立つ情報を定期的に発信しています。また、季節の変わり目に気をつけたいことや、当院の最新情報もお届けします。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition duration-300">すべての記事</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-300">鍼灸治療</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-300">健康アドバイス</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-300">東洋医学</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-300">季節の健康</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 記事一覧セクション */}
      <section id="articles" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-accent-dark"
            initial="hidden"
            animate={visibleSections.includes('articles') ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            最新記事
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial="hidden"
                animate={visibleSections.includes('articles') ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.1 * index }}
              >
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-primary font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-accent-dark">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:underline">
                    続きを読む →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="btn-primary">
              もっと見る
            </button>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-accent-dark">お気軽にご相談ください</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            ブログの内容に関するご質問や、ご自身の症状についてのご相談は、お電話またはお問い合わせフォームからお気軽にどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="btn-primary">
              お問い合わせ
            </Link>
            <a href="tel:0312345678" className="btn-secondary">
              電話で予約する
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;