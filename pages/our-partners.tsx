import { MainLayout } from '@/components/layout/MainLayout';
import { PartnersLogo } from '@/components/PartnersLogo';
import { CONSTANTS } from '@/config/constants';
import { GetStaticProps } from 'next';
import partners from '../mocks/partners.json';
import testimonials from '../mocks/testimonials.json';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function OurPartners() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <section className='page-our-partners'>
        <h1 className='page-our-partners__head'>{t('Our Partners')}</h1>
        <p className='page-our-partners__head-text'>
          Artis provides premium software solutions and consultation for
          startups, institutions, and exchanges in the digital asset space. We
          are a for-client market maker, working closely with our clients to
          meet their specific requirements with a tailored and synchronized
          approach.
        </p>
      </section>

      <section className='page-our-partners'>
        <PartnersLogo partners={partners.data} />
      </section>

      <section className='page-our-partners'>
        <h2>{t('Testimonials')}</h2>
        <div className='page-our-partners__testimonials'>
          {testimonials.data.map((item, index) => {
            return (
              <div key={index} className='page-our-partners__testimonials-form'>
                <div className='page-our-partners__testimonials-form-head'>
                  <img
                    className='page-our-partners__testimonials-form-head-img'
                    src='/assets/images/image-10.png'
                    alt=''
                  />
                  <div className='page-our-partners__testimonials-form-head-title'>
                    <p className='page-our-partners__testimonials-form-head-title-text'>
                      {item.title}
                    </p>
                  </div>
                </div>
                {item.text.map((paragraph, index) => {
                  return (
                    <p
                      key={index}
                      className='page-our-partners__testimonials-form-text'
                    >
                      {paragraph.p}
                    </p>
                  );
                })}
                <div className='page-our-partners__testimonials-form-people'>
                  {item.people.map((men, index) => {
                    return (
                      <div
                        key={index}
                        className='page-our-partners__testimonials-form-men'
                      >
                        <img
                          className='page-our-partners__testimonials-form-men-img'
                          src='/assets/images/image-10.png'
                          alt=''
                        />
                        <div>
                          <p className='page-our-partners__testimonials-form-men-name'>
                            {men.name}
                          </p>
                          <p className='page-our-partners__testimonials-form-men-role'>
                            {men.role}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button className='page-our-partners__testimonials-form-button'>
                  {t('Open project')}
                </button>
              </div>
            );
          })}
        </div>
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
