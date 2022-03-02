/* eslint-disable no-undef */
/* eslint-disable no-void */
/* eslint-disable radix */
/* eslint-disable no-bitwise */
/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-empty */
/* eslint-disable no-var */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
!(function (o) {
  var e = {
    root: o(':root'),
    init() {
      e.BgImg(),
        e.imgToSVG(),
        e.rightPanelScroll(),
        e.rightNav(),
        e.tabs(),
        e.progress(),
        e.cursor(),
        e.portfolioCarousel(),
        e.testimonialCarousel(),
        e.loadBlogPosts(),
        e.movingPlaceholder(),
        e.contactForm(),
        e.scrollToAnchor(),
        e.pageWidthAnimation(),
        e.modal(),
        e.typed();
    },
    typed() {
      o('.animated_title').each(function () {
        const e = o(this);
        const t = e.find('.title_in');
        if (t !== '') {
          const n = [];
          t.each(function () {
            n.push(o(this).text());
          }),
            e.typed({
              strings: n,
              loop: !0,
              smartBackspace: !1,
              typeSpeed: 40,
              startDelay: 700,
              backDelay: 3e3,
            });
        }
      });
    },
    modal() {
      const e = this;
      const t = o('.resumo_fn_modalbox');
      const n = o('.modal_item');
      const a = t.find('.closer,.extra_closer');
      const s = t.find('.fn__nav');
      t
        .find('.extra_closer')
        .on('mouseenter', () => {
          t.addClass('hovered');
        })
        .on('mouseleave', () => {
          t.removeClass('hovered');
        }),
        n.on('click', function () {
          const n = o(this);
          const a = n.find('.fn__hidden').html();
          const r = n.closest('.modal_items');
          const i = n.attr('data-index');
          const l = r.attr('data-from');
          return (
            s.attr('data-index', i),
            s.attr('data-from', l),
            o('body').addClass('modal'),
            t.addClass('opened'),
            t.find('.modal_in').html(a),
            e.modal_prevnext(s, t),
            e.imgToSVG(),
            e.BgImg(),
            !1
          );
        }),
        e.modal_prevnext(s, t),
        a.on(
          'click',
          () => (
            t.removeClass('opened hovered'),
            t.find('.modal_in').html(''),
            o('body').removeClass('modal'),
            !1
          ),
        );
    },
    modal_prevnext(e, t) {
      const n = this;
      e.find('a')
        .off()
        .on('click', function () {
          const a = o(this);
          const s = e.attr('data-from');
          let r = parseInt(e.attr('data-index'));
          const i = o(`.modal_items[data-from="${s}"]`);
          const l = parseInt(i.attr('data-count'));
          a.hasClass('prev') ? r-- : r++, r < 1 && (r = l), r > l && (r = 1);
          const c = i.find(`.modal_item[data-index="${r}"] .fn__hidden`).html();
          return (
            e.removeClass('disabled'),
            e.attr('data-index', r),
            setTimeout(() => {
              t.find('.modal_in').fadeOut(500, function () {
                o(this).html('').html(c).fadeIn(500);
              });
            }, 500),
            o('.resumo_fn_modalbox .modal_content')
              .stop()
              .animate({ scrollTop: 0 }, 500, 'swing'),
            n.modal_prevnext(e, t),
            n.imgToSVG(),
            n.BgImg(),
            !1
          );
        });
    },
    scrollToAnchor() {
      o('a[href^="#"]')
        .not('[href="#"]')
        .not('[href^="#tab"]')
        .on('click', function () {
          const e = o(this);
          const t = o(e.attr('href'));
          if (t.length)
            return (
              o('html, body').animate({ scrollTop: t.offset().top }, 1e3),
              o('#nav ul li').css({ transitionDelay: '0ms' }),
              o('.resumo_fn_wrapper').removeClass('nav-opened nav-hover-close'),
              o('.resumo_fn_navigation .nav_footer').removeClass('ready'),
              !1
            );
        }),
        o('.resumo_fn_totop').on('click', () => {
          o('html, body').animate({ scrollTop: 0 }, 1500);
        });
    },
    pageWidthAnimation() {
      e.changeWidth(),
        o(window).on('scroll', () => {
          e.changeWidth();
        });
    },
    changeWidth() {
      const t = o(window).scrollTop();
      let n = 0;
      t > 0 && !o('body').hasClass('scrolled')
        ? (o('body').addClass('scrolled'), n++)
        : t === 0 &&
          o('body').hasClass('scrolled') &&
          (o('body').removeClass('scrolled'), n++),
        n > 0 &&
          setTimeout(() => {
            e.portfolioCarousel(), e.testimonialCarousel();
          }, 500);
    },
    contactForm() {
      o('#send_message').on('click', () => {
        const e = o('.resumo_fn_contact .contact_form');
        const t = o('#name').val();
        const n = o('#email').val();
        const a = o('#message').val();
        const s = o('#phone').val();
        const r = e.find('.success');
        const i = r.data('success');
        const l = e.data('email');
        return (
          r.empty(),
          t === '' || n === '' || a === '' || l === '' || s === ''
            ? o('.empty_notice').slideDown(500).delay(2e3).slideUp(500)
            : o.post(
                'modal/contact.html',
                {
                  ajax_name: t,
                  ajax_email: n,
                  ajax_emailto: l,
                  ajax_message: a,
                  ajax_phone: s,
                },
                o => {
                  r.append(o),
                    r.find('.contact_error').length
                      ? r.slideDown(500).delay(2e3).slideUp(500)
                      : (r.append(`<span class='contact_success'>${i}</span>`),
                        r.slideDown(500).delay(4e3).slideUp(500)),
                    o === '' && e[0].reset();
                },
              ),
          !1
        );
      });
    },
    movingPlaceholder() {
      o('.resumo_fn_contact .input_wrapper').each(function () {
        const e = o(this);
        const t = e.find('input, textarea');
        t.val() === '' && e.removeClass('active'),
          t
            .on('focus', () => {
              e.addClass('active');
            })
            .on('blur', () => {
              t.val() === '' && e.removeClass('active');
            });
      });
    },
    loadBlogPosts() {
      o('.resumo_fn_blog_list .load_more a')
        .on('mousedown', function () {
          const e = o(this);
          const t = e.find('.text');
          if (e.hasClass('done'))
            return e.addClass('hold'), t.text(e.attr('data-no')), !1;
        })
        .on('mouseup', function () {
          const e = o(this);
          const t = e.find('.text');
          if (e.hasClass('done'))
            return e.removeClass('hold'), t.text(e.attr('data-done')), !1;
        })
        .on('mouseleave', function () {
          const e = o(this);
          const t = e.find('.text');
          if (e.hasClass('done'))
            return e.removeClass('hold'), t.text(e.attr('data-done')), !1;
        }),
        o('.resumo_fn_blog_list .load_more a').on('click', function () {
          const e = o(this);
          const t = e.find('.text');
          return (
            !e.hasClass('loading') &&
            !e.hasClass('done') &&
            (e.addClass('loading'),
            setTimeout(() => {
              e
                .closest('.resumo_fn_blog_list')
                .find('.be_animated')
                .each((e, t) => {
                  setTimeout(() => {
                    o(t).addClass('fadeInTop done');
                  }, 100 * e);
                }),
                e.addClass('done').removeClass('loading'),
                t.text(e.attr('data-done'));
            }, 1500),
            !1)
          );
        });
    },
    testimonialCarousel() {
      o('.resumo_fn_testimonials .owl-carousel').each(function () {
        const e = o(this);
        const t = e.closest('.resumo_fn_testimonials');
        e.owlCarousel({
          autoplay: !0,
          autoplayTimeout: 7e3,
          smartSpeed: 1e3,
          margin: 20,
          nav: !1,
          loop: !0,
          items: 1,
          dots: !1,
        }),
          e.trigger('refresh.owl.carousel'),
          e.on('changed.owl.carousel', () => {
            e.trigger('stop.owl.autoplay'), e.trigger('play.owl.autoplay');
          });
        const n = t.find('.my__nav .prev');
        const a = t.find('.my__nav .next');
        n.off().on('click', () => (e.trigger('prev.owl'), !1)),
          a.off().on('click', () => (e.trigger('next.owl'), !1));
      }),
        e.imgToSVG(),
        e.BgImg();
    },
    portfolioCarousel() {
      o('#portfolio .owl-carousel').each(function () {
        const e = o(this);
        const t = e.closest('#portfolio');
        e.owlCarousel({
          autoplay: !0,
          autoplayTimeout: 7e3,
          smartSpeed: 1e3,
          margin: 20,
          nav: !1,
          loop: !0,
          autoWidth: !0,
          items: 4,
          dots: !1,
          responsive: {
            0: { autoWidth: !1, items: 1 },
            700: { autoWidth: !0, items: 4 },
          },
        }),
          e.trigger('refresh.owl.carousel'),
          e.on('changed.owl.carousel', () => {
            e.trigger('stop.owl.autoplay'), e.trigger('play.owl.autoplay');
          });
        const n = t.find('.my__nav .prev');
        const a = t.find('.my__nav .next');
        n.off().on('click', () => (e.trigger('prev.owl'), !1)),
          a.off().on('click', () => (e.trigger('next.owl'), !1));
      }),
        e.imgToSVG(),
        e.BgImg();
    },
    cursor() {
      if (o('.frenify-cursor').length) {
        const n = document.querySelector('.cursor-inner');
        const a = document.querySelector('.cursor-outer');
        const e = "a, input[type='submit'], .cursor-link, button, .modal_item";
        const t = '.owl-carousel, .swiper-container, .cursor-link';
        (window.onmousemove = function (o) {
          (a.style.transform = `translate(${o.clientX}px, ${o.clientY}px)`),
            (n.style.transform = `translate(${o.clientX}px, ${o.clientY}px)`),
            o.clientY,
            o.clientX;
        }),
          o('body').on('mouseenter', e, () => {
            n.classList.add('cursor-hover'), a.classList.add('cursor-hover');
          }),
          o('body').on('mouseleave', e, function () {
            (o(this).is('a') && o(this).closest('.cursor-link').length) ||
              (n.classList.remove('cursor-hover'),
              a.classList.remove('cursor-hover'));
          }),
          (n.style.visibility = 'visible'),
          (a.style.visibility = 'visible'),
          o('body')
            .on('mouseenter', t, () => {
              n.classList.add('cursor-slider'),
                a.classList.add('cursor-slider');
            })
            .on('mouseleave', t, () => {
              n.classList.remove('cursor-slider'),
                a.classList.remove('cursor-slider');
            }),
          o('body')
            .on('mousedown', t, () => {
              n.classList.add('mouse-down'), a.classList.add('mouse-down');
            })
            .on('mouseup', t, () => {
              n.classList.remove('mouse-down'),
                a.classList.remove('mouse-down');
            }),
          o('body')
            .on('mouseenter', '.dark-section', () => {
              n.classList.add('dark'), a.classList.add('dark');
            })
            .on('mouseleave', '.dark-section', () => {
              n.classList.remove('dark'), a.classList.remove('dark');
            });
      }
    },
    progress() {
      o('.resumo_fn_progress_bar').each(function () {
        const t = o(this);
        t.waypoint({
          handler() {
            e.progressF(t);
          },
          offset: '90%',
        });
      });
    },
    progressF(e) {
      e.find('.progress_item').each(function (e) {
        const t = o(this);
        const n = parseInt(t.data('value'));
        const a = t.find('.progress_percent');
        t.find('.progress_bg').css({ width: `${n}%` }),
          setTimeout(() => {
            t.addClass('open'), a.html(`${n}%`).css({ right: `${100 - n}%` });
          }, 500 * e);
      });
    },
    recallProgress(o) {
      o.find('.progress_bg').css({ width: '0%' }),
        o.find('.progress_percent').html('').css({ right: '100%' }),
        o.find('.progress_item').removeClass('open'),
        e.progress();
    },
    tabs() {
      o('.resumo_fn_tabs .tab_header a')
        .off()
        .on('click', function () {
          const t = o(this);
          const n = t.parent();
          const a = t.closest('.resumo_fn_tabs');
          return (
            !n.hasClass('active') &&
            (n.siblings().removeClass('active'),
            a.find('.tab_content').children().removeClass('active'),
            n.addClass('active'),
            o(t.attr('href')).addClass('active'),
            e.recallProgress(a),
            !1)
          );
        });
    },
    rightNav() {
      const e = o('.resumo_fn_navigation .closer,.resumo_fn_nav_overlay');
      const t = o('.resumo_fn_nav_overlay');
      const n = o('.resumo_fn_right .menu_trigger');
      const a = o('.resumo_fn_wrapper');
      const s = o('.resumo_fn_navigation .nav_footer');
      const r = o('#nav ul li');
      const i = 200 * (r.length + 1) + 700;
      n.on(
        'click',
        () => (
          a.addClass('nav-opened'),
          r.each((e, t) => {
            o(t).css({ transitionDelay: `${200 * e + 700}ms` });
          }),
          setTimeout(() => {
            s.addClass('ready');
          }, i),
          !1
        ),
      ),
        e.on(
          'click',
          () => (
            r.css({ transitionDelay: '0ms' }),
            a.removeClass('nav-opened nav-hover-close'),
            s.removeClass('ready'),
            !1
          ),
        ),
        t
          .on('mouseenter', () => {
            a.addClass('nav-hover-close');
          })
          .on('mouseleave', () => {
            a.removeClass('nav-hover-close');
          });
    },
    rightPanelScroll() {
      const e = o('.resumo_fn_right .right_in');
      const t = o('.resumo_fn_navigation .nav_in');
      const n = o('#nav');
      const a = o('.resumo_fn_navigation .nav_footer');
      e.css({ height: o(window).height() }),
        n.css({ height: t.height() - a.outerHeight() }),
        o().niceScroll &&
          (e.niceScroll({
            touchbehavior: !1,
            cursorwidth: 0,
            autohidemode: !0,
            cursorborder: '0px solid #333',
          }),
          n.niceScroll({
            touchbehavior: !1,
            cursorwidth: 0,
            autohidemode: !0,
            cursorborder: '1px solid #333',
          }));
    },
    imgToSVG() {
      o('img.fn__svg').each(function () {
        const e = o(this);
        const t = e.attr('class');
        const n = e.attr('src');
        o.get(
          n,
          n => {
            let a = o(n).find('svg');
            void 0 !== t && (a = a.attr('class', `${t} replaced-svg`)),
              e.replaceWith(a);
          },
          'xml',
        );
      });
    },
    BgImg() {
      o('*[data-bg-img]').each(function () {
        const e = o(this);
        const t = e.attr('data-bg-img');
        void 0 !== t && e.css({ backgroundImage: `url(${t})` });
      }),
        o('*[data-fn-bg-img]').each(function () {
          const e = o(this);
          const t = e.attr('data-fn-bg-img');
          void 0 !== t && e.css({ backgroundImage: `url(${t})` });
        });
    },
  };
  o(document).ready(() => {
    e.init();
  }),
    o(window).on('resize', () => {
      e.rightPanelScroll();
    }),
    o(window).on('load', () => {
      setTimeout(() => {}, 10);
    }),
    o(window).on('scroll', () => {});
})(jQuery);
