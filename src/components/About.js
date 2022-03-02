/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc" />
          </div>

          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>이용호</th>
                  </tr>
                  <tr>
                    <th>GitHub</th>
                    <th>https://github.com/LeeYongho91</th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>010-9223-7229</th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>skyks4848@naver.com</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              <div className="resumo_fn_cv_btn">
                <a href="img/cvFile.png" download>
                  <span className="icon">
                    <img src="svg/inbox.svg" alt="" className="fn__svg" />
                    <img src="svg/arrow.svg" alt="" className="fn__svg arrow" />
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          <div className="resumo_fn_tabs">
            <div className="tab_header">
              <ul>
                <li className="active">
                  <a href="#tab1">Experience</a>
                </li>

                <li>
                  <a href="#tab3">Skills</a>
                </li>
              </ul>
            </div>

            <div className="tab_content">
              <div id="tab1" className="tab_item active">
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>위메이드</h5>
                          <span>( 2019.10 — 2021.10 )</span>
                        </div>
                        <h3>게임 서버개발 및 관리자페이지 개발</h3>
                        <p>
                          - javascript, jquery, vue.js 및 php 기반으로
                          관리자페이지 작업 <br /> - php, python, mysql, mongodb
                          기반으로 실시간 게임 api 작업
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="tab3" className="tab_item">
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item" data-value="50">
                    <div className="item_in">
                      <h3 className="progress_title">JAVASCRIPT</h3>
                      <span className="progress_percent" />
                      <div className="bg_wrap">
                        <div className="progress_bg" />
                      </div>
                    </div>
                  </div>

                  <div className="progress_item" data-value="50">
                    <div className="item_in">
                      <h3 className="progress_title">HTML &amp; CSS</h3>
                      <span className="progress_percent" />
                      <div className="bg_wrap">
                        <div className="progress_bg" />
                      </div>
                    </div>
                  </div>

                  <div className="progress_item" data-value="50">
                    <div className="item_in">
                      <h3 className="progress_title">REACT</h3>
                      <span className="progress_percent" />
                      <div className="bg_wrap">
                        <div className="progress_bg" />
                      </div>
                    </div>
                  </div>

                  <div className="progress_item" data-value="50">
                    <div className="item_in">
                      <h3 className="progress_title">NODE.JS</h3>
                      <span className="progress_percent" />
                      <div className="bg_wrap">
                        <div className="progress_bg" />
                      </div>
                    </div>
                  </div>

                  <div className="progress_item" data-value="50">
                    <div className="item_in">
                      <h3 className="progress_title">PHP</h3>
                      <span className="progress_percent" />
                      <div className="bg_wrap">
                        <div className="progress_bg" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="resumo_fn_desc">
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
