import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { MobileMenu } from '../MobileMenu';
import { VideoBg } from '../VideoBg';

interface IMainLayout {
  children: ReactNode;
  withVideo?: boolean;
}

export const MainLayout = ({ children, withVideo = false }: IMainLayout) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = useCallback(() => {
    setMenuOpen((old) => !old);
  }, []);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => handleCloseMenu(), [router.asPath]);

  return (
    <>
      <main>
        {withVideo && <VideoBg />}
        <MobileMenu closeMenu={handleMenu} open={menuOpen} />

        <div className='wrapper'>
          <Header openMenu={handleMenu} />
          {children}
          <Footer />
        </div>
      </main>

      <style jsx global>{`
        html {
          overflow: ${menuOpen ? 'hidden' : 'initial'};
        }
      `}</style>
    </>
  );
};
