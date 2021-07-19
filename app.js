const translate = document.querySelectorAll(".translate");
const WelcomeText = document.querySelector(".WelcomeText");
const header = document.querySelector("header");
const opacity = document.querySelectorAll(".opacity");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    content.style.transform = `translateY(${scroll / (section.offsetHeight + sectionY.top) * 63 - 60}px)`;
    image_container.style.transform = `translateY(${scroll / (section.offsetHeight + sectionY.top) * -63 + 60}px)`;
    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section.offsetHeight);
    })

    WelcomeText.style.opacity = - scroll / (header.offsetHeight / 2) + 1;
    shadow.style.height = `${scroll * 0.6 + 270}px`;

  

})