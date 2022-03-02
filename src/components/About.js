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
            <p className="desc">
              I'm a Freelancer Front-end Developer with over 12 years of
              experience. I'm from San Francisco. I code and create web elements
              for amazing people around the world. I like work with new people.
              New people are new experiences.
            </p>
          </div>

          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Bruce Wilson</th>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <th>4th April 1990</th>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <th>31 years</th>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <th>San Francisco</th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+3846923442364">(+38) 469 2344 2364</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="https://frenify.net/cdn-cgi/l/email-protection#0a6c786f64636c737e6f6b674a6d676b636624696567">
                        <span
                          className="__cf_email__"
                          data-cfemail="afc9ddcac1c6c9d6dbcacec2efc8c2cec6c381ccc0c2"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <th>Skype</th>
                    <th>
                      <a href="skype:brucewilson.90">brucewilson.90</a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              <div className="resumo_fn_cv_btn">
                <a href="img/cv.jpg" download>
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
                  <a href="#tab2">Education</a>
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
                          <h5>Frenify LLC</h5>
                          <span>( 2018 — Today )</span>
                        </div>
                        <h3>Sr. Front-end Engineer</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{' '}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Google LLC</h5>
                          <span>( 2016 — 2018 )</span>
                        </div>
                        <h3>Front-end Developer</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{' '}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Twitter LLC</h5>
                          <span>( 2016 — 2011 )</span>
                        </div>
                        <h3>Graphic Designer</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{' '}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="tab2" className="tab_item">
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Frenify University</h5>
                          <span>( 2014 — 2017 )</span>
                        </div>
                        <h3>Computer Science</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{' '}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Edu University</h5>
                          <span>( 2011 — 2014 )</span>
                        </div>
                        <h3>Master Degree</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{' '}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Clolumbia College</h5>
                          <span>( 2007 — 2011 )</span>
                        </div>
                        <h3>Bachelor Degree</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{' '}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="tab3" className="tab_item">
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item" data-value="92">
                    <div className="item_in">
                      <h3 className="progress_title">Adobe Photoshop</h3>
                      <span className="progress_percent" />
                      <div className="bg_wrap">
                        <div className="progress_bg" />
                      </div>
                    </div>
                  </div>

                  <div className="progress_item" data-value="95">
                    <div className="item_in">
                      <h3 className="progress_title">HTML5 &amp; CSS3</h3>
                      <span className="progress_percent" />
                      <div className="bg_wrap">
                        <div className="progress_bg" />
                      </div>
                    </div>
                  </div>

                  <div className="progress_item" data-value="80">
                    <div className="item_in">
                      <h3 className="progress_title">WordPress</h3>
                      <span className="progress_percent" />
                      <div className="bg_wrap">
                        <div className="progress_bg" />
                      </div>
                    </div>
                  </div>

                  <div className="progress_item" data-value="85">
                    <div className="item_in">
                      <h3 className="progress_title">Adobe Illustrator</h3>
                      <span className="progress_percent" />
                      <div className="bg_wrap">
                        <div className="progress_bg" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="resumo_fn_desc">
                  <p>
                    A freelance creative designer with a love for minimal
                    design, clean typography and well-written code, located in
                    San Francisco. Provide high quality and cost effective
                    offshore web and software development services. Wide range
                    of web and software development services across the world.
                  </p>
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
