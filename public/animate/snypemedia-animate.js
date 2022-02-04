window.addEventListener('load', function() {
    const textAnimationOptions = {
        rootMargin: "0px 0px -100px 0px"
    }
    const animLeft = document.querySelectorAll('.slide-left');
    const animRight = document.querySelectorAll('.slide-right');
    const animBottom = document.querySelectorAll('.slide-bottom');
    const animTop = document.querySelectorAll('.slide-top');
    const fadeIn = document.querySelectorAll('.fade-in');

    const slideAnimation = new IntersectionObserver (function(entries, textAnimation) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            }
            else {
                entry.target.classList.remove('slide-left');
                entry.target.classList.remove('slide-right');
                entry.target.classList.remove('slide-top');
                entry.target.classList.remove('slide-bottom');
                entry.target.classList.remove('fade-in');
                slideAnimation.unobserve(entry.target);
            }
        })
    }, textAnimationOptions)

    animLeft.forEach(element => {
        slideAnimation.observe(element);
    })
    animRight.forEach(element => {
        slideAnimation.observe(element);
    })
    animBottom.forEach(element => {
        slideAnimation.observe(element);
    })
    animTop.forEach(element => {
        slideAnimation.observe(element);
    })
    fadeIn.forEach(element => {
        slideAnimation.observe(element);
    })
})