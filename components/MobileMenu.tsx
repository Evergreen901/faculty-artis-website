import React from 'react';
import { Nav } from './Nav';
import { SocialMediaLinks } from './SocialMediaLinks';

interface IMobileMenu {
  open: boolean;
  closeMenu: () => void;
}

export const MobileMenu = ({ open, closeMenu }: IMobileMenu) => {
  return (
    <div className='mobile-menu'>
      <div className={`mobile-menu__container ${open ? 'active' : ''}`}>
        <div className='mobile-menu__button-close'>
          <button onClick={closeMenu}>close</button>
        </div>

        <Nav />

        {/* <div className='contact-us__container-item'>
          <span className='contact-us__title'>Follow Us</span>

          <ul className='contact-us__list'>
            <SocialMediaLinks />
          </ul>
        </div> */}
      </div>
    </div>
  );
};
