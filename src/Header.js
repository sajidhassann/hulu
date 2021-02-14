import { useState } from 'react';
import './Header.css';
import {
  Home,
  FlashOn,
  LiveTv,
  VideoLibrary,
  Search,
  PersonOutline,
} from '@material-ui/icons';
const Header = () => {
  const [active, setActive] = useState(1);
  return (
    <div className='header'>
      <div className='header-icons'>
        {/* All icons here */}
        <div
          onClick={() => setActive(1)}
          className={`header-icon ${active === 1 ? 'header-icon--active' : ''}`}
        >
          <Home />
          <p>Home</p>
        </div>
        <div
          onClick={() => setActive(2)}
          className={`header-icon ${active === 2 ? 'header-icon--active' : ''}`}
        >
          <FlashOn />
          <p>Trending</p>
        </div>
        <div
          onClick={() => setActive(3)}
          className={`header-icon ${active === 3 ? 'header-icon--active' : ''}`}
        >
          <LiveTv />
          <p>Verified</p>
        </div>
        <div
          onClick={() => setActive(4)}
          className={`header-icon ${active === 4 ? 'header-icon--active' : ''}`}
        >
          <VideoLibrary />
          <p>Collection</p>
        </div>
        <div
          onClick={() => setActive(5)}
          className={`header-icon ${active === 5 ? 'header-icon--active' : ''}`}
        >
          <Search />
          <p>Search</p>
        </div>
        <div
          onClick={() => setActive(6)}
          className={`header-icon ${active === 6 ? 'header-icon--active' : ''}`}
        >
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img
        src='http://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png'
        alt='hulu-logo'
      />
    </div>
  );
};

export default Header;
