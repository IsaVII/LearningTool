import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between px-6 py-4">
      <nav className="flex gap-4">
        <a href="/">{t('header.home')}</a>
        <a href="/learning">{t('header.learning')}</a>
      </nav>

      {/* Language toggle sits in the header alongside nav/theme toggle */}
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
