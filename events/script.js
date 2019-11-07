// on cible la class css
const box = document.querySelector('.box');

// puis on lui attache un l'evenement au CLICK 
box.addEventListener('click', function () {

    let first = 'opening';
    let second = 'open';

    // si this (.box) a la class css first (.opening)
    if (this.classList.contains(first)) {
        // si this a la class .opening 
        // alors on switch les class first et second pour inverser l'anim css des class
        first = 'open';
        second = 'opening';
    }

    // on créer la var self pour garder le context de .box
    // depuis ES6 il y a une autre façon de le faire via un fonction fléché
    // cette façon nous permet de garder le scope du this, sans creer un var de context
    var self = this;

    this.classList.toggle(first);

    // car la function dans setTimeout n'as pas de context donné
    setTimeout(function () {
         
        self.classList.toggle(second);

    }, 500);

});