const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Ajout des bulletPoints//

 const dots = document.querySelector('.dots');
 for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.setAttribute( "class","dot");
	dots.appendChild(dot);

	if (i === 0) {
        dot.classList.add("dot_selected");
    }
 }



// Ajout d'EventListener sur la flèche gauche //

 const flecheGauche = document.querySelector(".arrow_left");
 flecheGauche.addEventListener('click', function(){

	console.log("Vous avez cliqué sur la flèche gauche !");

 });
// Ajout d'EventListener sur la flèche droite//

 const flecheDroite = document.querySelector(".arrow_right");
 flecheDroite.addEventListener('click', function(){

	console.log("Vous avez cliqué sur la flèche droite !");

 });
