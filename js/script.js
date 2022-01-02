let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
};

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
};

// SEARCH FORM

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
};

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};




window.onload = () =>{
    
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};



var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});


// products slider
var swiper = new Swiper(".product-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {
    0: {
        slidesPerView: 1,
  
    },
    640: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 3,

    },
    1024: {
      slidesPerView: 4,

    },
  },
});
//product slider

// reviews slider
var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {
    0: {
        slidesPerView: 1,
  
    },
    640: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 3,

    },
    
  },
});
// reviews slider

// blogs slider
var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 10,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {
    0: {
        slidesPerView: 1,
  
    },
    768: {
      slidesPerView: 2,

    },
    991: {
      slidesPerView: 3,

    },
    
  },
});
// blogs slider