import CustomChart from '@/components/Chart';
import { Cursor } from '@/components/Cursor';
import { MainLayout } from '@/components/layout/MainLayout';
import { PartnersLogo } from '@/components/PartnersLogo';
import { CONSTANTS } from '@/config/constants';
import { APP_URLS } from '@/config/urls';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import chart from '../mocks/chart.json';
import partners from '../mocks/partners.json';
import pros from '../mocks/pros.json';
import services from '../mocks/services.json';

export default function Home() {
  const { t } = useTranslation();

  const [activeFact, setActiveFact] = useState(0);

  const handleFact = (index: number) => setActiveFact(index);

  return (
    <MainLayout withVideo>
      {/* Head Text Section */}
      <section className='head-text'>
        <div id='circle' />
        <div className='head-text__content'>
          <p>
            <strong>Artis</strong> offers a variety of secondary market
            solutions through our proprietary <strong>market-making</strong>{' '}
            platform. Structured to meet the specific needs of our clients.
          </p>
        </div>

        <Link
          href={APP_URLS.ABOUT_US}
          className='btn btn-red'
          target=''
          title='Read More'
        >
          Read More
        </Link>

        <Cursor />
      </section>

      {/* Chart Section */}
      <section className='charts'>
        <h2>{t('Facts')}</h2>

        <div className='charts__labels'>
          <ul className='charts__labels-list'>
            {chart.data.map((item, index) => {
              return (
                <li onClick={() => handleFact(index)} key={index}>
                  <span
                    className={`name-charts ${
                      activeFact === index ? 'active' : ''
                    }`}
                  >
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className='chart'>
            <CustomChart
              lineData={chart.data[activeFact].chartData.data}
              lineLabels={chart.data[activeFact].chartData.labels}
              valueTemplate={chart.data[activeFact].valueTemplate}
            />
          </div>
        </div>
      </section>

      {/* Our Pros Section */}
      <section className='our-pros'>
        <ul className='our-pros__list'>
          {pros.data.map((item, index) => {
            return (
              <li key={index}>
                <div className='our-pros__list-item'>
                  <Image
                    unoptimized
                    width='90'
                    height='90'
                    src={item.icon}
                    alt=''
                  />
                  <div className='our-pros__list-content'>
                    <span className='our-pros__list-name'>{item.title}</span>
                    <p className='our-pros__list-description'>{item.desc}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Content Text Section */}
      <section className='content-text'>
        <div className='content-text__shadow'></div>
        <main>
          <p>
            <strong>Artis</strong> is a trading firm that specializes in
            low-latency algorithms and advanced technologies such as machine
            learning, AI, market psychology, and Bayesian statistics.
          </p>
          <p>
            Our proprietary frameworks enable us to implement a variety of
            strategies for market making and arbitrage, including market neutral
            and long/short strategies that are based on factors such as order
            flow, market depth, and market microstructure.
          </p>
        </main>
      </section>

      {/* Services Section */}
      <section id='services' className='services'>
        <h2>{t('Services')}</h2>
        <div className='services__container'>
          <ul className='services__list'>
            {services.data.map((item, index) => {
              return (
                <li key={index}>
                  <div className='services__list-item'>
                    {/* <span className='services__number'>
                      {index >= 10 ? '0' + index : '00' + index}
                    </span> */}
                    <div className='services__name'>
                      <span className='services__name-container'>
                        {item.title}
                      </span>
                    </div>
                    <div className='services__description'>
                      <span className='services__description-container'>
                        {item.desc}
                      </span>
                    </div>
                    {/* <div className='services__hover'>
                        <a href='http://test/' className='services__hover-link'>
                          View{' '}
                        </a>
                      </div> */}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className='our-partners'>
        <div className='our-partners__heading'>
          <h2>{t('Our Partners')}</h2>

          <div className='our-partners__heading-link'>
            <Link href={APP_URLS.OUR_PARTNERS}>{t('view all')}</Link>
          </div>
        </div>

        <PartnersLogo partners={partners.data} />
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
