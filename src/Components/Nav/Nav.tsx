import Dropdown from '../Dropdown/Dropdown';

import './Nav.scss';

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <a
          href="#1"
          className="nav__link"
        >
          All-anime
        </a>
      </li>
      <li className="nav__item">
        <a
          href="#2"
          className="nav__link"
        >
          Random-anime
        </a>
      </li>
      <li className="nav__item">

        <Dropdown title='Genres' className='nav__link'/>

      </li>
      <li className="nav__item">
        <a
          href="#4"
          className="nav__link"
        >
          About-project
        </a>
      </li>
    </ul>
  );
}
 
export default Nav;