/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            {/* <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div> */}
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Featured Projects</h3>
          </div>
        </div>
      </div>

      <div className="container noright">
        <div className="roww">
          <div className="portfolio-section modal_items">
            <div className="portfolio-01">
              <div className="portfolio-title">온라인 쇼핑몰</div>
              <div className="main-img-tag">
                <div className="main-img ">
                  <img src="img/portfolio/01/main.png" alt="" />
                </div>
              </div>

              <div className="portfolio-desc">
                <p>
                  프론트 - HTML CSS JAVASCRIPT REACT <br />
                  <br />
                  백엔드 - NODE.JS EXPRESS TYPESCRIPT MONGODB
                </p>

                <div className="modal_item">
                  {/* <a href="#">프로젝트 자세히보기</a> */}
                  <div className="fn__hidden">
                    <p className="fn__cat">WEB, MOBILE, ONLINE</p>
                    <h3 className="fn__title">온라인 쇼핑몰</h3>
                    <hr />
                    <p className="modal_p">
                      프론트 - HTML CSS JAVASCRIPT REACT <br />
                      <br />
                      백엔드 - NODE.JS EXPRESS TYPESCRIPT MONGODB
                      <br /> <br />
                      프론트 & 백엔드 기여도 - 100% <br />
                      <br />
                      HTML, CSS 사용하여 PC 및 모바일 반응형 작업하였습니다.
                      <br />
                      <br />
                      프론트는 REACT를 사용하였으며 REDUX로 상태관리하였습니다.
                      <br />
                      <br />
                      백엔드는 NODE.JS, TYPESCRIPT, EXPRESS, 데이터베이스는
                      MONGODB 사용하였습니다.
                    </p>
                    <hr />
                    {/* <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img="img/portfolio/01/main.png"
                      />
                    </div> */}
                    <div className="modal-content">
                      <div className="modal-title">MAIN</div>
                      <div className="modal-layout">
                        <div className="modal-card">
                          <span>PC</span>
                          <div className="modal-img">
                            <img src="img/portfolio/01/main.png" alt="" />
                          </div>
                        </div>

                        <div className="modal-card">
                          <span>모바일</span>
                          <div className="modal-img">
                            <img src="img/portfolio/01/05.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div className="modal-content">
                      <div className="modal-title">LOGIN</div>
                      <div className="modal-layout">
                        <div className="modal-card">
                          <span>PC</span>
                          <div className="modal-img">
                            <img src="img/portfolio/01/01.png" alt="" />
                          </div>
                        </div>

                        <div className="modal-card">
                          <span>모바일</span>
                          <div className="modal-img">
                            <img src="img/portfolio/01/08.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="modal-content">
                      <div className="modal-title">CART</div>
                      <div className="modal-layout">
                        <div className="modal-card">
                          <span>PC</span>
                          <div className="modal-img">
                            <img src="img/portfolio/01/02.png" alt="" />
                          </div>
                        </div>

                        <div className="modal-card">
                          <span>모바일</span>
                          <div className="modal-img">
                            <img src="img/portfolio/01/06.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="modal-content">
                      <div className="modal-title">SHOP</div>
                      <div className="modal-layout">
                        <div className="modal-card">
                          <span>PC</span>
                          <div className="modal-img">
                            <img src="img/portfolio/01/03.png" alt="" />
                          </div>
                        </div>

                        <div className="modal-card">
                          <span>모바일</span>
                          <div className="modal-img">
                            <img src="img/portfolio/01/09.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="modal-content">
                      <div className="modal-title">PRODUCT</div>
                      <div className="modal-layout">
                        <div className="modal-card">
                          <span>PC</span>
                          <div className="modal-img">
                            <img src="img/portfolio/01/04.png" alt="" />
                          </div>
                        </div>

                        <div className="modal-card">
                          <span>모바일</span>
                          <div className="modal-img">
                            <img src="img/portfolio/01/07.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://glacial-castle-88801.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  웹사이트 바로가기
                </a>
              </div>
            </div>
            <div className="portfolio-02">
              <div className="portfolio-title">관리자 사이트</div>
              <div className="main-img-tag">
                <div className="main-img">
                  <img src="img/portfolio/02/main.png" alt="" />
                </div>
              </div>

              <div className="portfolio-desc">
                <p>
                  프론트 - HTML CSS JAVASCRIPT REACT <br />
                  <br />
                  백엔드 - NODE.JS EXPRESS TYPESCRIPT MONGODB
                </p>
                <div className="modal_item">
                  {/* <a href="#">프로젝트 자세히보기</a> */}
                  <div className="fn__hidden">
                    <p className="fn__cat">WEB, ONLINE</p>
                    <h3 className="fn__title">관리자 사이트</h3>
                    {/* <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img="img/portfolio/01/main.png"
                      />
                    </div> */}
                    <p className="modal_p">
                      프론트 - HTML CSS JAVASCRIPT REACT <br />
                      <br />
                      백엔드 - NODE.JS EXPRESS TYPESCRIPT MONGODB
                      <br /> <br />
                      프론트 & 백엔드 기여도 - 100% <br />
                      <br />
                      HTML, CSS, MATERIAL UI 사용하여 템플릿 작업 하였습니다.
                      <br />
                      <br />
                      프론트는 REACT를 사용하였으며 REDUX로 상태관리하였습니다.
                      <br />
                      <br />
                      백엔드는 NODE.JS, TYPESCRIPT, EXPRESS, 데이터베이스는
                      MONGODB 사용하였습니다.
                    </p>
                    <hr />

                    <div className="modal-content">
                      <div className="modal-title">MAIN</div>
                      <div className="modal-layout">
                        <div className="modal-card">
                          <div className="modal-img">
                            <img src="img/portfolio/02/main.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="modal-content">
                      <div className="modal-title">HISTORYS</div>
                      <div className="modal-layout">
                        <div className="modal-card">
                          <div className="modal-img">
                            <img src="img/portfolio/02/01.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="modal-content">
                      <div className="modal-title">UPLOAD</div>
                      <div className="modal-layout">
                        <div className="modal-card">
                          <div className="modal-img">
                            <img src="img/portfolio/02/02.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div className="modal-content">
                      <div className="modal-title">USERS</div>
                      <div className="modal-layout">
                        <div className="modal-card">
                          <div className="modal-img">
                            <img src="img/portfolio/02/03.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <a
                  href="https://frozen-stream-44606.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  웹사이트 바로가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container noright">
        <div className="roww">
          <div
            className="owl-carousel modal_items"
            data-from="portfolio"
            data-count="1"
          >
            <div className="item modal_item" data-index="1">
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="" />
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/01/main.png"
                />
              </div>
              <div className="title_holder">
                <p>WEB, MOBILE, ONLINE</p>
                <h3>온라인 쇼핑몰</h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">WEB, MOBILE, ONLINE</p>
                <h3 className="fn__title">온라인 쇼핑몰</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="" />
                  <div
                    className="abs_img"
                    data-bg-img="img/portfolio/01/main.png"
                  />
                </div>
                zzzz
              </div>
            </div>
            <div className="item modal_item" data-index="2">
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="" />
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/02/main.png"
                />
              </div>
              <div className="title_holder">
                <p>WEB, ONLINE</p>
                <h3>관리자사이트</h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">WEB, ONLINE</p>
                <h3 className="fn__title">관리자사이트</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="" />
                  <div
                    className="abs_img"
                    data-bg-img="img/portfolio/02/main.png"
                  />
                </div>
                ddddd
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Portfolio;
