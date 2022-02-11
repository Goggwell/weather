import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='navbar__logo'>SWthR</h1>
      <ul className='navbar__list'>
        <li className='navbar__list--item'>About</li>
        <li className='navbar__list--item'>GitHub</li>
        <li className='navbar__list--item'>Settings</li>
      </ul>
    </div>
  );
};

export default Navbar;
