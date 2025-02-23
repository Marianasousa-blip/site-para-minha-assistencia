/* Theme Switcher button. When clicked this button, the whole site changes to night or day mode*/ 
export const chk = document.getElementById('chk')

/* open and close the menu when the icon is clicked: hamburger e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}


/* When the menu item is clicked, the menu is hidden */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* Open a form when the "agende um horário" is clicked and close it when the cancel one will*/
/*const schedule = document.querySelector('.schedule')
const form = document.querySelector('.form-wrapper')
const cancel = document.querySelector('.grey')

schedule.addEventListener('click', function() {
  form.classList.add('active')
  
})

cancel.addEventListener('click', function() {
  form.classList.remove('active')
  
})


/* change the page header when scroll it */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {  
  if(window.scrollY >= navHeight) {
    // when scroll is higher than the header height
    header.classList.add('scroll')
  }else {
    // smaller than the header height
    header.classList.remove('scroll')
  }
}


/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});


/* ScrollReaveal: Show elements when scroll the page */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact links, 
  #footer .brand, #footer .social`,
 { interval: 100 })


/* Button back to top */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
}


/* Menu activated as the section turns visible on the page */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const chepointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && chepointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    }else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Automatic mask format for telephone input */


/* When scroll */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll(),
  backToTop(),
  activateMenuAtCurrentSection()
})