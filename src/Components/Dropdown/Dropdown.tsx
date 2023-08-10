import {useState, useRef} from 'react';

import {MdKeyboardArrowDown} from 'react-icons/md';

import './Dropdown.scss';

const Dropdown = ({title, className}: {title: string; className: string}) => {
  const [isVisibleMenu, setVisibleMenu] = useState(false);

  const menuContent = useRef<HTMLUListElement>(null);

  const toggleMenuHandle = () =>{
    if (isVisibleMenu) {
      setVisibleMenu(false);
    } else {
      setVisibleMenu(true);
      setTimeout(() => {
        menuContent.current?.classList.add('dropdown__content--open');
      }, 0);
    }
  }

  return (
    <div className="dropdown">
      <button className={`${className} dropdown__btn`} onClick={toggleMenuHandle}>
        {title}
        <MdKeyboardArrowDown tabIndex={0} className={`dropdown__icon ${isVisibleMenu ? ' dropdown__icon--open' : ''}`}/>
      </button>
      {isVisibleMenu ? (
        <ul ref={menuContent} className="dropdown__content">
          <li className="dropdown__item">
            <a
              href="#5"
              className={className}
            >
              Lorem ipsum dolor
            </a>
          </li>
          <li className="dropdown__item">
            <a
              href="#5"
              className={className}
            >
              Senen
            </a>
          </li>
          <li className="dropdown__item">
            <a
              href="#5"
              className={className}
            >
              Senen
            </a>
          </li>
          
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
