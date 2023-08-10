import { useState, useEffect, useRef } from 'react';

import {RxHamburgerMenu, RxCross2} from 'react-icons/rx';

import './BurgerMenu.scss';

import Nav from '../Nav/Nav';
import AppLogo from '../AppLogo/AppLogo';

const BurgerMenu = () => {
  const [isVisibleMenu, setVisibleMenu] = useState(false);

  const menuContent = useRef<HTMLDivElement>(null);

  const disableScrolling = (isVisibleMenu: boolean) => {
    if(isVisibleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }

  const pressingEscHandler = (event: KeyboardEvent) => {
    if(event.key === 'Escape') {
      setVisibleMenu(false);
    }
  }

  const openMenuHandler = () => {
    setVisibleMenu(true);
    setTimeout(() => {
      menuContent.current?.classList.add('burger-menu__content--open');
    }, 0);
  }

  const closeMenuHandler = () => {
    menuContent.current?.classList.remove('burger-menu__content--open');
    setTimeout(() => {
      setVisibleMenu(false);
    }, 300)
  }


  useEffect(() => {
    disableScrolling(isVisibleMenu);
    window.addEventListener('keydown', pressingEscHandler);

    return () => {
      window.removeEventListener('keydown', pressingEscHandler);
    }
  }, [isVisibleMenu]);

  return (
    <div className='burger-menu'>
      <button className='burger-menu__button' onClick={openMenuHandler}>
        <RxHamburgerMenu className='burger-menu__icon'/>
      </button>
      {
        isVisibleMenu ?
          <div ref={menuContent} className='burger-menu__content'>
            <AppLogo/>
            <button className='burger-menu__colse' onClick={closeMenuHandler}>
              <RxCross2 className='burger-menu__icon'/>
            </button>

            <Nav/>

          </div>
        : null
      }

    </div>
  );
}
 
export default BurgerMenu;