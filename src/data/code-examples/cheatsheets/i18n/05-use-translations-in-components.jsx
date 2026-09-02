import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <nav>
      <a href="/">{t('header.home')}</a>
      <a href="/learning">{t('header.learning')}</a>
      <a href="/cheatsheets">{t('header.cheatsheets')}</a>
    </nav>
  );
}

export default Header;
