/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function SideMenu() {
  return (
    <div className="resumo_fn_navigation">
      <a href="#" className="closer" />

      <div className="nav_in">
        <nav id="nav">
          <h3 className="label">Menu</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;
