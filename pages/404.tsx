import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { GetStaticProps } from 'next';
import { CONSTANTS } from '@/config/constants';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Custom404() {
  const { t } = useTranslation();
  return (
    <MainLayout withVideo>
      <section>
        <article>
          <h1>{t('Page not found')}</h1>
          <h2>
            <Link href='/'>{t('Return home?')}</Link>
          </h2>
        </article>
      </section>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? CONSTANTS.DEFAULT_LOCALE, [
        'common',
      ])),
    },
  };
};
