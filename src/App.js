/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import Introduction from './components/Introduction';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import RightContent from './components/RightContent';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="resumo_fn_wrapper">
      <div className="resumo_fn_modalbox">
        <a className="extra_closer" href="#" />
        <div className="box_inner">
          <a className="closer" href="#">
            <span />
          </a>
          <div className="modal_content">
            <div className="modal_in" />

            {/* <div className="fn__nav" data-from="" data-index="">
              <a href="#" className="prev">
                <span className="text">Prev</span>
                <span className="arrow_wrapper">
                  <span className="arrow" />
                </span>
              </a>
              <a href="#" className="next">
                <span className="text">Next</span>
                <span className="arrow_wrapper">
                  <span className="arrow" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="resumo_fn_content">
        <div className="resumo_fn_left">
          <div className="resumo_fn_page">
            <Introduction />

            <About />

            <Portfolio />
          </div>
          <Footer />
        </div>

        <RightContent />
      </div>

      <a href="#" className="resumo_fn_nav_overlay" />
      <SideMenu />

      <div
        className="frenify-cursor cursor-outer"
        data-default="yes"
        data-link="yes"
        data-slider="yes"
      >
        <span className="fn-cursor" />
      </div>
      <div
        className="frenify-cursor cursor-inner"
        data-default="yes"
        data-link="yes"
        data-slider="yes"
      >
        <span className="fn-cursor">
          <span className="fn-left" />
          <span className="fn-right" />
        </span>
      </div>
    </div>
  );
}

export default App;
