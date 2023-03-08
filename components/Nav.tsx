import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { APP_URLS } from '../config/urls';

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <nav className='nav' role='navigation'>
      <ul>
        <li>
          <Link scroll={false} href='#services' className='close-mobile'>
            {t('Services')}
          </Link>
        </li>
        <li>
          <Link href={APP_URLS.OUR_PARTNERS}>{t('Our Partners')}</Link>
        </li>
        <li>
          <Link href={APP_URLS.ABOUT_US}>{t('About Us')}</Link>
        </li>
      </ul>
    </nav>
  );
};
