

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
})


// type writer effect
const TyprWriter = function(txtElement, words, wait=3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;

}
// type method
TyprWriter.prototype.type = function() {
    // set the current index of the word
    const current = this.wordIndex % this.words.length;
    // get full text of the word
    const fullTxt = this.words[current];
    // check if deleting
    if  (this.isDeleting){
        // remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else{
        // add character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // insert text into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    // type speed
    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed /= 2;
    }
    // check if word is complete, move to next word and pause before deleting.
    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait 
        this.isDeleting = true
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false
        this.wordIndex++;
        typeSpeed=500
    }

    setTimeout(() => this.type(), typeSpeed)
}
// init on DOM load
document.addEventListener('DOMContentLoaded', init);
// initalize app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // initalize the type writer
    new TyprWriter(txtElement, words, wait);
}



// adds the poetry verse when the mouse hovers over the image.
const thePoem = document.querySelector('.Poem');
const fullText = thePoem.innerHTML;
const maxChars = 170;
const truncatedText = fullText.substring(0, maxChars) + "...";

thePoem.innerHTML = truncatedText;

thePoem.addEventListener("mouseenter", () => {
    thePoem.innerHTML = fullText;
});
thePoem.addEventListener("mouseleave", () => {
    thePoem.innerHTML = truncatedText;
});




// let properties = [
//     "flexible", "scalable", "accessible", "responsive", "fast", "secure", "visually attractive", 
// ]




