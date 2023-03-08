import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { APP_URLS } from '../config/urls';
import { Nav } from './Nav';

interface IHeader {
  openMenu: () => void;
}

export const Header = ({ openMenu }: IHeader) => {
  return (
    <header className='header' role='banner'>
      <div className='logo'>
        <Link href={APP_URLS.HOME}>
          <Image
            src='/assets/images/logo.svg'
            alt='Logo'
            unoptimized
            width='103'
            height='22'
            className='logo-img'
          />
        </Link>
      </div>

      <Nav />

      <button className='header-menu__button' onClick={openMenu}>
        menu
      </button>
    </header>
  );
};
