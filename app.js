new fullpage("#fullpage", {
    css3: true,
    scrollingSpeed: 300,
    navigation: true,
    autoScrolling: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const social = section.querySelector('div');
        const t1 = new TimelineMax({
            delay: 0.5
        });
        t1.fromTo(social, 0.5, {
            y: '50',
            opacity: '0'
        }, {
            y: 0,
            opacity: '1'
        });
    },
});

const text_desktop = ["ReactDOM.render(<h1>Hello World!</h1>)", "res.send('Hello World!')", "System.out.println('Hello World!')"]
let count_desktop = 0
let index_desktop = 0

let currentText_desktop = '';
let letter_desktop = '';

(function type_desktop() {
    if (count_desktop === text_desktop.length) {
        count_desktop = 0
    }
    currentText_desktop = text_desktop[count_desktop]
    letter_desktop = currentText_desktop.slice(0, ++index_desktop)
    document.querySelector('#typing-desktop').textContent = letter_desktop
    if (letter_desktop.length === currentText_desktop.length) {
        count_desktop++
        index_desktop = 0
    }
    setTimeout(type_desktop, 200)

}())

//Mobile View

const text_mobile = ["Hello World!"]
let count_mobile = 0
let index_mobile = 0

let currentText_mobile = '';
let letter_mobile = '';

(function type_mobile() {
    if (count_mobile === text_mobile.length) {
        count_mobile = 0
    }
    currentText_mobile = text_mobile[count_mobile]
    letter_mobile = currentText_mobile.slice(0, ++index_mobile)
    document.querySelector('#typing-mobile').textContent = letter_mobile
    if (letter_mobile.length === currentText_mobile.length) {
        count_mobile++
        index_mobile = 0
    }
    setTimeout(type_mobile, 400)

}())


const social = document.getElementById("social");
const socialContainer = document.getElementById("social-container");
social.addEventListener("click", onClick)

function onClick() {
    if (socialContainer.style.display === "none") {
        socialContainer.style.display = "block";
        social.style.animation = "none";
    } else {
        socialContainer.style.display = "none";
        social.style.animation = "zoom 1.5s infinite ease";
    }
}