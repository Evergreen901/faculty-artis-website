import { CONSTANTS } from '@/config/constants';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MainLayout } from '../components/layout/MainLayout';

const mockData = [
  {
    h1: 'Cookies Policy',
    p: [
      'Artis provides premium software solutions and consultation' +
        ' for startups, institutions, and exchanges in the digital asset space.' +
        ' We are a for-client market maker, working closely with our clients to meet their' +
        ' specific requirements with a tailored and synchronized approach.',

      'Artis provides premium software solutions and consultation for startups,' +
        ' institutions, and exchanges in the digital asset space.' +
        ' We are a for-client market maker, working closely with our clients to meet' +
        ' their specific requirements with a tailored and synchronized approach.',
    ],
  },
  {
    h2: 'Contact us',
    p: [
      'Artis provides premium software solutions and consultation for startups,' +
        ' institutions, and exchanges in the digital asset space.' +
        ' We are a for-client market maker, working closely with our' +
        ' clients to meet their specific requirements with a tailored and synchronized approach.',

      'Artis Trading Ltd (registered company number 10882520) and Artis Asia Pte.' +
        ' Ltd. (registered company number 202108542H) are proprietary trading firms providing' +
        ' liquidity in various cryptoassets and, in the case of Artis Asia Pte.' +
        ' Ltd, certain derivatives referencing cryptoassets.Artis Trading Ltd and Artis Asia Pte.' +
        ' Ltd do not engage in the management of any cryptoassets or fiat currency on behalf of investors,' +
        ' nor do they hold fiat currency or cryptoassets on behalf of investors or customers.' +
        ' Neither Artis Trading Ltd nor Artis Asia Pte.' +
        ' Ltd are authorised or regulated by any regulatory authority,' +
        ' meaning any party trading with either Artis Trading Ltd or Artis Asia Pte.' +
        ' Ltd may not benefit from the protections typically provided when trading with regulated entities,' +
        ' such as any compensation or ombudsman schemes.' +
        'Artis Trading Limited is registered with the Financial Conduct Authority ("FCA") as a Cryptoasset' +
        ' firm and complies with the Money Laundering, Terrorist Financing and Transfer' +
        ' for Funds (Information on the Payer) Regulations 2017 as amended.' +
        ' The Firm Reference Number is 928764.The material provided on this website' +
        ' is provided for information purposes only and does not constitute' +
        ' an offer or solicitation for the purchase of any cryptoassets' +
        ' or any form of financial instruments referencing cryptoassets.' +
        ' The information on this website is not directed at nor intended for distribution to,' +
        ' or use by, any person resident in any country or jurisdiction where such' +
        ' distribution or use would be contrary to local law or regulation.',

      'Artis provides premium software solutions and consultation for startups,' +
        ' institutions, and exchanges in the digital asset space.' +
        ' We are a for-client market maker, working closely with our clients' +
        ' to meet their specific requirements with a tailored and synchronized approach.',
    ],
  },
  {
    h3: 'Contact us',
    p: [
      'Artis provides premium software solutions and consultation' +
        ' for startups, institutions, and exchanges in the digital asset space.' +
        ' We are a for-client market maker, working closely with our clients to meet their' +
        ' specific requirements with a tailored and synchronized approach.',

      'Artis provides premium software solutions and consultation for startups,' +
        ' institutions, and exchanges in the digital asset space.' +
        ' We are a for-client market maker, working closely with our clients to meet' +
        ' their specific requirements with a tailored and synchronized approach.',
    ],
  },
];

export default function CookiesPolicy() {
  return (
    <MainLayout>
      <section className='page-cookies-policy'>
        <article>
          <h1 className='page-cookies-policy__head-1'>{mockData[0].h1}</h1>
          {mockData[0].p &&
            mockData[0].p.map((paragraph, index) => {
              return (
                <p key={index} className='page-cookies-policy__paragraph'>
                  {paragraph}
                </p>
              );
            })}

          <h2 className='page-cookies-policy__head-2'>{mockData[1].h2}</h2>
          {mockData[1].p &&
            mockData[1].p.map((paragraph, index) => {
              return (
                <p key={index} className='page-cookies-policy__paragraph'>
                  {paragraph}
                </p>
              );
            })}

          <h3 className='page-cookies-policy__head-3'>{mockData[2].h3}</h3>
          {mockData[2].p &&
            mockData[2].p.map((paragraph, index) => {
              return (
                <p key={index} className='page-cookies-policy__paragraph'>
                  {paragraph}
                </p>
              );
            })}
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
