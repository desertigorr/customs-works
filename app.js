gsap.from('.navigation-socials', {y: -50, opacity: 0, duration: 1, delay: .7})
gsap.from('.navigation-socials__link', {opacity: 0, stagger: .3, delay: .9})

gsap.from('.navigation-content', {y: -50, opacity: 0, duration: 1, stagger: .3})
gsap.from('.navigation-content__link', {opacity: 0, stagger: -.3, delay: 1})

gsap.from('.cover-info__img', {x: 200, opacity: 0, duration: .8, delay: .7})
gsap.from('.cover-info__content', {x: -200, opacity: 0, duration: .8, delay: 1})
