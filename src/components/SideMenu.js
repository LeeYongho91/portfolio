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
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#customers">Customers</a>
            </li>
            <li>
              <a href="#news">News &amp; Tips</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="nav_footer">
          <div className="social">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <img
                    src="svg/social/twitter.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img
                    src="svg/social/facebook.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img
                    src="svg/social/instagram.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img
                    src="svg/social/pinterest.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img
                    src="svg/social/behance.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <a href="https://frenify.com/" target="_blank" rel="noreferrer">
              Developed by Frenify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
