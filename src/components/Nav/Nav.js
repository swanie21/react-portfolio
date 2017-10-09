import React from 'react';
import Styles from './style.scss';

function Nav () {
  return (
    <nav>
      <ul className={ Styles['nav'] }>
        <li className={ Styles['nav__item'] }>About</li>
        <li className={ Styles['nav__item'] }>Projects</li>
        <li className={ Styles['nav__item'] }>
          <a href="https://github.com/swanie21" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li className={ Styles['nav__item'] }>
          <a href="mailto:kswanie21@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
