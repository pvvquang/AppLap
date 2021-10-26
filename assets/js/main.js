const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)

// Header menu tablet/mobile
{
    let headerMenu = $('.header-menu');
    let navMenu = $('.nav');
    let overLay = $('.overlay');
    let btnClose = $('.close-btn');
    let navLinks = [...$$('.header .nav-link')];

    headerMenu.onclick = () => {
        navMenu.classList.add('show');
        navMenu.classList.remove('hide');
        overLay.style.display = 'block';
    }
    btnClose.onclick = () => {
        navMenu.classList.remove('show');
        navMenu.classList.add('hide');
        overLay.style.display = 'none';
    }
    overLay.onclick = () => {
        navMenu.classList.remove('show');
        navMenu.classList.add('hide');
        overLay.style.display = 'none';
    }
    navLinks.forEach(
        item => item.onclick = () => {
            navMenu.classList.remove('show');
            navMenu.classList.add('hide');
            overLay.style.display = 'none';
        } 
    )
}

// Sales nav-link 
{
    let salesLinks = [...$$('.sales-nav-link')]
    salesLinks.forEach( item => item.onclick = (e) => {
        e.preventDefault();
        $('.sales-nav-link.active').classList.remove('active')
        item.classList.add('active')
    })
}

// Collapse FAQ
{
    let plusBtns = [...$$('.plus')]
    let minusBtns = [...$$('.minus')]
    let faqItem = [...$$('.FAQ-item')]
    let titleBtns = [...$$('.FAQ-item .title')]
    
    plusBtns.forEach( (btn, index) => btn.onclick = (e)=> { 
        e.stopPropagation()
        console.log(e.target)
        faqItem[index].classList.add('active');
    })
    minusBtns.forEach( (minusBtn , index) => minusBtn.onclick = (e)=> {
        e.stopPropagation()
        console.log(e.target)
        faqItem[index].classList.remove('active');
    })
    titleBtns.forEach((titleBtn, index) => titleBtn.onclick = ()=> {
        faqItem[index].classList.toggle('active');
    })

}
// Load window
// Check element in viewport 
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && (rect.top < (window.innerHeight || document.documentElement.clientHeight) - 200)
    );
}

{
    $('body').onload = ()=> {
        // Banner
        $('.banner-content').classList.add('fade-left')
        $('.banner-img').classList.add('fade-right')
        $('.backTop').classList.add('fade')
        // Company
        if(isInViewport($('.company'))) {
            $('.company').classList.add('fade-up')
        }
        // Features
        if(isInViewport($('.features'))) {
            $('.features-img').classList.add('circleLeft')
            $('.features-content').classList.add('fade-down')
        }
        // Smart
        if(isInViewport($('.smart'))) {
            $('.smart-info').classList.add('fade-up')
            $('.smart-list').classList.add('fade-down')
        }
        // Designed
        if(isInViewport($('.designed'))){
            $('.designed-img').classList.add('fade-left')
            $('.designed-content').classList.add('circleO')
        }
        // WhyChoose
        if(isInViewport($('.whyChoose'))) {
            $('.whyChoose-content').classList.add('fade-down')
            $('.whyChoose-list').classList.add('fade-up')
        }
        // Ulimate
        if(isInViewport($('.ulimate'))) {
            $('.ulimate-main').classList.add('fade-left')
            $('.ulimate-img').classList.add('circleRight')
        }
        // Sales
        if(isInViewport($('.sales'))) {
            $('.sales-title').classList.add('fade-down')
            $('.sales-nav').classList.add('circleO')
            $('.sales-list').classList.add('fade-left')
        }
        // Rating
        if(isInViewport($('.rating'))) {
            $('.rating-img').classList.add('circleO')
            $('.rating-content').classList.add('circleRight')
        }
        // FAQ
        if(isInViewport($('.FAQ'))) {
            $('.FAQ-main').classList.add('fade-up')
        }
        // Download
        if(isInViewport($('.download'))) {
            $('.download').classList.add('fade-down')
        }
    }
    window.onscroll = ()=> {
        // Header Sticky
        let header = $('.header');
        if(window.pageYOffset > header.offsetTop) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')
        }
        // Company
        if(isInViewport($('.company'))) {
            $('.company').classList.add('fade-up')
        }
        // Features
        if(isInViewport($('.features'))) {
            $('.features-img').classList.add('circleLeft')
            $('.features-content').classList.add('fade-down')
        }
        // Smart
        if(isInViewport($('.smart'))) {
            $('.smart-info').classList.add('fade-up')
            $('.smart-list').classList.add('fade-down')
        }
        // Designed
        if(isInViewport($('.designed'))){
            $('.designed-img').classList.add('fade-left')
            $('.designed-content').classList.add('circleO')
        }
        // WhyChoose
        if(isInViewport($('.whyChoose'))) {
            $('.whyChoose-content').classList.add('fade-down')
            $('.whyChoose-list').classList.add('fade-up')
        }
        // Ulimate
        if(isInViewport($('.ulimate'))) {
            $('.ulimate-main').classList.add('fade-left')
            $('.ulimate-img').classList.add('circleRight')
        }
        // Sales
        if(isInViewport($('.sales'))) {
            $('.sales-title').classList.add('fade-down')
            $('.sales-nav').classList.add('circleO')
            $('.sales-list').classList.add('fade-left')
        }
        // Rating
        if(isInViewport($('.rating'))) {
            $('.rating-img').classList.add('circleO')
            $('.rating-content').classList.add('circleRight')
        }
        // FAQ
        if(isInViewport($('.FAQ'))) {
            $('.FAQ-main').classList.add('fade-up')
        }
        // Download
        if(isInViewport($('.download'))) {
            $('.download').classList.add('fade-down')
        }
    }
}
