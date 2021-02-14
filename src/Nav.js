import { useState } from 'react';
import './Nav.css';
import fetch from './requests';
const Nav = ({ setSelected }) => {
  const [active, setActive] = useState('Trending');
  return (
    <div className='nav'>
      <h2
        className={active === 'Trending' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.trending);
        }}
      >
        Trending
      </h2>
      <h2
        className={active === 'Top Rated' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.topRated);
        }}
      >
        Top Rated
      </h2>
      <h2
        className={active === 'Action' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.actionMovies);
        }}
      >
        Action
      </h2>
      <h2
        className={active === 'Comedy' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.comedyMovies);
        }}
      >
        Comedy
      </h2>
      <h2
        className={active === 'Horror' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.horrorMovies);
        }}
      >
        Horror
      </h2>
      <h2
        className={active === 'Romance' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.romanceMovies);
        }}
      >
        Romance
      </h2>
      <h2
        className={active === 'Mystery' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.mystery);
        }}
      >
        Mystery
      </h2>
      <h2
        className={active === 'Sci-fi' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.sciFi);
        }}
      >
        Sci-fi
      </h2>
      <h2
        className={active === 'Western' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.western);
        }}
      >
        Western
      </h2>
      <h2
        className={active === 'Animated' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.animated);
        }}
      >
        Animated
      </h2>
      <h2
        className={active === 'Tv' ? 'active-h2' : ''}
        onClick={(e) => {
          setActive(e.target.innerText);
          setSelected(fetch.tv);
        }}
      >
        Tv
      </h2>
    </div>
  );
};

export default Nav;
