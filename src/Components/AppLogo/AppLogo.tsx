import './AppLogo.scss';

import {ReactComponent as SearchIcon } from '../../assets/svg/search-icon.svg';

const AppLogo = () => {
  return (
    <div className="app-logo">
      <a className='app-logo__link' href="#3">
        <h1 className='app-logo__title'>Anime-Finder</h1>
        <SearchIcon className='app-logo__icon'/>
      </a>
    </div>
  );
}
 
export default AppLogo;