import { APP_URLS } from '@/config/urls';
import Link from 'next/link';
import React from 'react';
import { SocialMediaLinks } from './SocialMediaLinks';
import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='contact-us'>
        <h2>{t('Contact us')}</h2>

        <div className='contact-us__container'>
          <div className='contact-us__wrapper'>
            {/* <div className='contact-us__container-item'>
              <span className='contact-us__title'>Join us</span>

              <ul className='contact-us__list'>
                <li>
                  <a
                    href='mailto:recruitment@artis.com'
                    title='recruitment@artis.com'
                  >
                    recruitment@artis.com
                  </a>
                </li>
              </ul>
            </div> */}
            <div className='contact-us__container-item'>
              <span className='contact-us__title'>Find out more</span>

              <ul className='contact-us__list'>
                <li>
                  <a href='http://faq/' title='FAQ'>
                    {' '}
                    FAQ{' '}
                  </a>
                </li>
                <li>
                  <a href='http://blog/' title='Blog'>
                    {' '}
                    Blog{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='contact-us__wrapper'>
            <div className='contact-us__container-item'>
              <span className='contact-us__title'>On board with Artis</span>

              <ul className='contact-us__list'>
                <li>
                  <a
                    href='mailto:onboarding@artis.com'
                    title='onboarding@artis.com'
                  >
                    onboarding@artis.com
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className='contact-us__container-item'>
              <span className='contact-us__title'>Follow Us</span>

              <ul className='contact-us__list'>
                <SocialMediaLinks />
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      <footer className='footer' role='contentinfo'>
        <div className='footer__content'>
          <p className='company-long-desc'>
            Artis is a cutting-edge platform developed by industry experts in
            the fields of quantitative finance and software engineering. Our
            platform utilizes a multi-layered design and horizontally scalable
            microservice architecture to provide a secure, scalable, and highly
            customizable low-latency trading infrastructure for all market
            making needs. Artis is a robust platform that leverages the latest
            technologies to deliver exceptional performance.
          </p>
        </div>
        <div className='footer__bottom'>
          <p className='copyright'>© 2022 Artis. All rights reserved.</p>

          <div className='footer__bottom-center'>
            <Link href={APP_URLS.COOKIES_POLICY}>Cookies Policy</Link>
            <Link href={APP_URLS.PRIVACY_POLICY}>Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};
