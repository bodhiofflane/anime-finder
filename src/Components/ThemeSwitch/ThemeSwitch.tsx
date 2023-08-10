import {useLayoutEffect, useRef} from 'react';

import './ThemeSwitch.scss';


import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'

const ThemeSwitch = () => {
  const input = useRef<HTMLInputElement>(null);

  const themeInitialization = () => {
    if(window.localStorage.getItem('theme') === null) {
      if(window.matchMedia('(prefers-color-scheme: dark)')) {
        document.documentElement.setAttribute('data-theme', 'dark-theme');
        if(input.current) input.current.checked = true;
      } else {
        document.documentElement.setAttribute('data-theme', 'light-theme');
        if(input.current) input.current.checked = false;
      }
    }
  }

  const setThemeFormLocalStorage = () => {
    if (window.localStorage.getItem('theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'light-theme');
      if (input.current) input.current.checked = false;
    }
    if (window.localStorage.getItem('theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark-theme');
      if (input.current) input.current.checked = true;
    }
  }

  const toggleThemeHandler = function(this: HTMLInputElement) {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark-theme');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light-theme');
      window.localStorage.setItem('theme', 'light');
    }
  }

  useLayoutEffect(() => {
    themeInitialization();
    setThemeFormLocalStorage();

    input.current?.addEventListener('change', toggleThemeHandler);
  }, [])

  return (
    <div className='theme-switch__box'>
      <BsFillSunFill className='theme-switch__icon'/>
      <label className="theme-switch">
        <input ref={input} type="checkbox" className='theme-switch__input'/>
        <span className='theme-switch__slider'/>
      </label>
      <BsFillMoonFill className='theme-switch__icon'/>
    </div>
  );
}
 
export default ThemeSwitch;