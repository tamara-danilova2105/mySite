gsap.to('#text', {
    text: 'Front-end Developer',
    duration: 2,
    ease: 'power1.in',
    repeat: 1,
    repeatDelay: 1
})

// скролл
const links = document.querySelectorAll('.item');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const ID = e.target.getAttribute('href').substr(1);
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})

// слайды

const back = document.querySelector('#back');
const next = document.querySelector('#next');

const plane = document.querySelector('#plane');
const russia = document.querySelector('#russia');
const web = document.querySelector('#web');
const camera = document.querySelector('#camera');
const cat = document.querySelector('#cat');

const word = document.querySelector('span');

const loveWord = [
    'JavaScript',
    'фотографию',
    'котиков',
    'путешествовать',
    'Россию'
];

const images = [
    "web-programming.png",
    "camera.png",
    "happy.png",
    "plane.png",
    "russia.png",
    "web-programming.png",
    "camera.png",
    "happy.png",
    "plane.png"
];

let i = 0;

// next.addEventListener('click', nextImages)


function nextImages() {
    i++;
    if (i > 4) {
        i=0;
    }

    web.src=images[i];
    word.textContent = loveWord[i];
    plane.src=images[i+3];
    russia.src=images[i+4];
    camera.src=images[i+1];
    cat.src=images[i+2];

    gsap.from('#web', {rotation: 360});
}

setInterval(nextImages, 3000)

// back.addEventListener('click', () => {
//     i--;
//     if (i < 0) {
//         i = 4;
//     }

//     web.src=images[i];
//     word.textContent = loveWord[i];
//     plane.src=images[i+2];
//     russia.src=images[i+1]
//     camera.src=images[i+4];
//     cat.src=images[i+3];
// })


