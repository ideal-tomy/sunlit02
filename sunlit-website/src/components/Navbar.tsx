import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // メニュー項目
  const menuItems = [
    { name: '鍼灸', path: '/acupuncture' },
    { name: '自由診療', path: '/private-treatment' },
    { name: '保険診療', path: '/insurance' },
    { name: 'スタッフ紹介', path: '/staff' },
    { name: 'ブログ', path: '/blog' },
    { name: 'お問い合わせ', path: '/contact' },
  ];

  // モバイルメニューの開閉
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 現在のページかどうかをチェック
  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-accent-dark' : 'text-white'}`}>サンリットウエスト鍼灸整骨院</span>
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary-light'}
                  ${isCurrentPage(item.path) ? 'font-bold' : 'font-medium'}
                  transition-colors duration-200
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 予約ボタン（デスクトップ） */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn-primary"
            >
              ご予約はこちら
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="メニューを開く"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    text-gray-700 hover:text-primary py-2 px-4 rounded
                    ${isCurrentPage(item.path) ? 'bg-gray-100 font-bold' : 'font-medium'}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                ご予約はこちら
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
