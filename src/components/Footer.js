/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer_top">
        <a href="#" className="resumo_fn_totop">
          <span />
        </a>
      </div>
      <div className="footer_content">
        <div className="container">
          <p>
            Copyright © 2021. All rights reserved. <br />
            Designed &amp; Developed by{' '}
            <a
              className="fn__link"
              href="https://frenify.com/"
              target="_blank"
              rel="noreferrer"
            >
              Frenify
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
