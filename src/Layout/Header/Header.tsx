import {useState, useEffect, useLayoutEffect, useCallback} from 'react';

import AppLogo from '../../Components/AppLogo/AppLogo';
import BurgerMenu from '../../Components/BurgerMenu/BurgerMenu';
import ThemeSwitch from '../../Components/ThemeSwitch/ThemeSwitch';
import './Header.scss';
import Nav from '../../Components/Nav/Nav';

const Header = () => {
  const [isMobileViewPort, setViewPort] = useState<boolean | null>(null);
  const mobileWidth = 768;

  const portInitialization = (mobileWidth: number) => {
    if (window.innerWidth > 768) setViewPort(false);
    if (window.innerWidth <= 768) setViewPort(true);
  };

  const toggleVersionHandler = useCallback(() => {
    console.log(window.innerWidth, 'toggle');
    if (window.innerWidth > mobileWidth && isMobileViewPort) setViewPort(false);
    if (window.innerWidth <= mobileWidth && !isMobileViewPort) setViewPort(true);
  }, [isMobileViewPort]);

  useLayoutEffect(() => {
    console.log(window.innerWidth, 'useLayoutEffect');
    portInitialization(mobileWidth);
  }, []);

  useEffect(() => {
    console.log(window.innerWidth, 'useEffect');
    window.addEventListener('resize', toggleVersionHandler);
    return () => {
      window.removeEventListener('resize', toggleVersionHandler);
    };
  }, [isMobileViewPort, toggleVersionHandler]);



  return (
    <header className="header">
      {isMobileViewPort ? <BurgerMenu /> : null}
      <AppLogo />
      {!isMobileViewPort ? <Nav /> : null}
      <ThemeSwitch />
    </header>
  );
};

export default Header;
