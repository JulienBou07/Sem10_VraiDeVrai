const piton = document.querySelectorAll(".piton");
const modale = document.querySelector(".modale");

for (let i = 0; i < piton.length; i++) {
    piton[i].addEventListener("click", ouvertModale);
}

function ouvertModale() {
    modale.style.display = "block";
    modale.addEventListener("click", fermerModale);
}

function fermerModale() {
    modale.style.display = "none";
    console.log("greg")
}
