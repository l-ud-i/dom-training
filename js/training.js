/* ------------------------------------ */
/* --- Exercice 1 --- */
const disappear = document.querySelector("#ex1 .exercice-sandbox :nth-child(2)");

function toggleDisplay(event) {
    disappear.classList.toggle("js-text");
    }
    document.querySelector(".js-button").addEventListener('click', toggleDisplay);


// const nav = document.querySelector("#ex1 .exercice-sandbox :nth-child(2)")
// const nav2 = document.querySelector("#ex1 .exercice-sandbox :first-child")

// nav2.addEventListener('click', function() {
//     nav.classList.toggle("js-text");
// });

/* ------------------------------------ */
/* --- Exercice 2 --- */

// window.addEventListener('scroll', function(event) {
//     let positionScroll = Math.floor(window.scrollY);
//     const newText = document.querySelector("#ex2-scroll-value")

//     newText.textContent = positionScroll;
//     console.log(positionScroll);
// });

window.addEventListener('scroll', function(event) {
    let positionScroll = Math.floor(window.scrollY);
    document.querySelector("#ex2-scroll-value").textContent = positionScroll;
    
});


/* ------------------------------------ */
/* --- Exercice 3 --- */

const icons = document.querySelector("#ex3-animals");

function changePlaceIcon(event) {
    icons.appendChild(icons.firstElementChild);
    }
    document.querySelector(".js-button-exo3").addEventListener('click', changePlaceIcon);

    
/* ------------------------------------ */
/* --- Exercice 4 --- */


/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
