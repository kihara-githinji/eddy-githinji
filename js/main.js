// write code to inject content to the doc,
// to add work exprience as list of a list wrapped in a section.


const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
})

// code for the dark/light theme swich as moon.

const trip = document.getElementById("darkSwitch")


trip.addEventListener('click', () => {
    trip.classList.toggle('dark');
})

