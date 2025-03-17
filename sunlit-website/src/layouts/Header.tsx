import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-accent-dark">サンリットウエスト</span>
          <span className="ml-2 text-sm text-primary">鍼灸整骨院</span>
        </Link>

        {/* PC用ナビゲーション */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-accent-dark hover:text-primary transition duration-300">ホーム</Link>
          <Link to="/about" className="text-accent-dark hover:text-primary transition duration-300">当院について</Link>
          <Link to="/services" className="text-accent-dark hover:text-primary transition duration-300">施術メニュー</Link>
          <Link to="/contact" className="text-accent-dark hover:text-primary transition duration-300">お問い合わせ</Link>
        </nav>

        {/* 予約ボタン（PC用） */}
        <div className="hidden md:block">
          <a 
            href="tel:0312345678" 
            className="btn btn-primary hover:bg-opacity-90 transition duration-300"
          >
            ご予約・お問い合わせ
          </a>
        </div>

        {/* モバイル用メニューボタン */}
        <button 
          className="md:hidden text-accent-dark focus:outline-none" 
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* モバイル用メニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-accent-dark hover:text-primary transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link 
              to="/about" 
              className="text-accent-dark hover:text-primary transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              当院について
            </Link>
            <Link 
              to="/services" 
              className="text-accent-dark hover:text-primary transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              施術メニュー
            </Link>
            <Link 
              to="/contact" 
              className="text-accent-dark hover:text-primary transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
            <a 
              href="tel:0312345678" 
              className="btn btn-primary hover:bg-opacity-90 transition duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              ご予約・お問い合わせ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
