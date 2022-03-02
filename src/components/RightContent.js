/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function RightContent() {
  return (
    <div className="resumo_fn_right">
      <a href="#" className="menu_trigger">
        <span className="text">Menu</span>
        <span className="hamb">
          <span />
          <span />
          <span />
        </span>
      </a>

      <div className="right_in">
        <div className="right_top">
          <div className="border1" />
          <div className="border2" />

          <div className="img_holder">
            <img src="img/thumb/square.jpg" alt="" />
            <div className="abs_img" data-bg-img="img/photo.jpg" />
          </div>
          <div className="title_holder">
            <h5>Hi There! I am</h5>
            <h3>
              <span className="animated_title">
                <span className="title_in">LEE YONG HO</span>
                <span className="title_in">Web Developer</span>
              </span>
            </h3>
          </div>
        </div>
        <div className="right_bottom">
          <span className="circle" />
          <span className="text">
            <a
              href="https://github.com/LeeYongho91"
              target="_blank"
              rel="noreferrer"
            >
              GitHub 바로가기
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RightContent;
