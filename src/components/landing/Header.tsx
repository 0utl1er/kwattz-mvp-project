
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto px-4 py-12 lg:py-24">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl">
          {t('hero.subtitle')}
        </p>
        <Link
          to="/kwattz-signup"
          className="px-8 py-4 bg-[#C3FF44] rounded-md text-[#111F54] font-bold text-lg hover:bg-white transition duration-300"
        >
          {t('hero.cta')}
        </Link>
      </div>
    </section>
  );
};

export default Header;
