import { useState } from 'react';
import { Input } from '@/components/Input';
import { MainLayout } from '@/components/layout/MainLayout';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';
import { GetStaticProps } from 'next';
import { CONSTANTS } from '@/config/constants';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function AboutUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });

  const handleSubmit = () => {
    console.log('submitting', formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((old) => ({ ...old, [name]: value }));
  };

  return (
    <MainLayout>
      <section className='about-us'>
        <h2>Learn with Artis</h2>

        <div className='about-us__text-blocks'>
          <div className='about-us__text-blocks__content'>
            <p>
              <strong>Artis</strong> provides leading secondary market solutions
              via a proprietary <strong>market making</strong> platform
              structured to meet specific client needs
            </p>
          </div>

          <div className='about-us__text-blocks__text-container'>
            <p>
              At Artis, we are a client-focused market maker that works closely
              with our clients to provide tailored and synchronized solutios
              that meet their specific requirements.
            </p>
            <p>
              Our key strength is our ability to structure our services around
              the needs of our clients, regardless of market conditions or the
              stage of development of their business. By taking a customized
              approach to each step of the process, we help our clients achieve
              their critical goals and milestones, build their user base,
              increase the number of token holders, and extend their financial
              runway.
            </p>
          </div>
        </div>

        <div className='about-us__forms'>
          <div className='about-us__forms__block red'>
            <div>
              <h3>{t('Join us')}</h3>
              <p>{t('If you have any questions')}</p>
            </div>

            <ul className='about-us__forms__block__list'>
              <SocialMediaLinks />
            </ul>
          </div>

          <div className='about-us__forms__block'>
            <div className='about-us__forms__block__form'>
              <Input
                value={formData.name}
                name='name'
                placeholder={t('Your name')}
                label={t('Your name')}
                type='text'
                onChange={handleChange}
              />
              <Input
                value={formData.email}
                name='email'
                placeholder={t('Email')}
                label={t('Email')}
                type='email'
                onChange={handleChange}
              />
              <Input
                value={formData.question}
                name='question'
                onChange={handleChange}
                placeholder={t('Your questions')}
                label={t('Your questions')}
                type='text'
              />
            </div>
            <button onClick={handleSubmit} className='btn btn-red'>
              {t('Send')}
            </button>
          </div>
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
