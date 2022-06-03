const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
const image = document.querySelector('#image')
const title = document.querySelector('#title')
const text = document.querySelector('#text')
let index = 0
const mediaQuery = window.matchMedia("(min-width: 700px)")

let array;

    if (mediaQuery.matches) {
        array = [
        {   
        image: './images/desktop-image-hero-1.jpg',
        title: 'Discover innovative ways to decorate',
        text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {   
        image: './images/desktop-image-hero-2.jpg',
        title: 'We are available all across the globe',
        text: 'With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.'
    },
    {   
        image: './images/desktop-image-hero-3.jpg',
        title: 'Manufactured with the best materials',
        text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    },
]
} else {
    array = [
        {   
            image: './images/mobile-image-hero-1.jpg',
            title: 'Discover innovative ways to decorate',
            text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        },
        {   
            image: './images/mobile-image-hero-2.jpg',
            title: 'We are available all across the globe',
            text: 'With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.'
        },
        {   
            image: './images/mobile-image-hero-3.jpg',
            title: 'Manufactured with the best materials',
            text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
        },
    ]
}

image.src = array[index]["image"];
title.innerHTML = array[index]["title"];
text.innerHTML = array[index]["text"];

nextBtn.addEventListener('click', () => {
    if (index === 2) {
        index = 0
        image.src = array[index].image
        title.textContent = array[index].title
        text.textContent = array[index].text
    } else {
        index++
        image.src = array[index].image
        title.textContent = array[index].title
        text.textContent = array[index].text
    } 
})

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--
        image.src = array[index].image
        title.textContent = array[index].title
        text.textContent = array[index].text
    } else if (index === 0) {
        index = 2
        image.src = array[index].image
        title.textContent = array[index].title
        text.textContent = array[index].text
    }
})


// Navbar toggler

    const toggleImg = document.querySelector('.toggle-img');
    const toggleBtn = document.querySelector('.toggle-btn');
    toggleBtn.addEventListener("click", ()=> {
        if (toggleImg.getAttribute('src') === './images/icon-hamburger.svg') {
            toggleImg.setAttribute('src','./images/icon-close.svg')
            document.querySelector('.navbar').classList.toggle('active')
            document.querySelector('nav').classList.toggle('active')
            document.querySelector('.logo-img').classList.toggle('active')
        } else {
            toggleImg.setAttribute('src', './images/icon-hamburger.svg')
        document.querySelector('.navbar').classList.toggle('active')
        document.querySelector('nav').classList.toggle('active')
        document.querySelector('.logo-img').classList.toggle('active')
    }
});



