new fullpage("#fullpage", {
    css3: true,
    scrollingSpeed: 300,
    navigation: true,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: true,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,
});

const text = ["ReactDOM.render(<h1>Hello World!</h1>)", "res.send('Hello World!')", "System.out.println('Hello World!')"]
let count = 0
let index = 0

let currentText = '';
let letter = '';

(function type() {
    if (count === text.length) {
        count = 0
    }
    currentText = text[count]
    letter = currentText.slice(0, ++index)
    document.querySelector('#typing').textContent = letter
    if (letter.length === currentText.length) {
        count++
        index = 0
    }
    setTimeout(type, 200)

}())