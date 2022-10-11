// write code to inject content to the doc,
// to add work exprience as list of a list wrapped in a section.


const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const para = document.getElementById('#poetry');
const poem = document.getElementById('#poImage');



btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
})

// adds the poetry verse when the mouse hovers over the image.

poem.addEventListener('click', () =>{
    prompt('welcome to poetry')

})


// doctionary for the properties of the products that i love creating.

let properties = [
    "flexible", "scalable", "accessible", "responsive", "fast", "secure", "visually attractive", 
]

for (let index = 0; index < properties.length; index++) {
    // const property = properties[index];
    let jump = document.getElementsByClassName('.jump');
    function name(params) {
        
    }

}



