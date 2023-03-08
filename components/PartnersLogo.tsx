import React from 'react';

type Partner = {
  logo: string;
  title: string;
  link: string;
};

interface IPartnersLogo {
  partners: Partner[];
}

export const PartnersLogo = ({ partners }: IPartnersLogo) => {
  return (
    <ul className='our-partners__list'>
      {partners.map((item, index) => {
        return (
          <li key={index}>
            <a target='_blank' href={item.link} rel='noreferrer'>
              <img
                src={item.logo}
                alt={item.title}
                title={item.title}
                width='80px'
                height='50px'
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
