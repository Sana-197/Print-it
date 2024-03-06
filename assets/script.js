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

const bannerImage = document.querySelector(".banner-img"); // sélection de l'élément correspondant à l'image dans la bannière //
const bannerText = document.querySelector("#banner p"); // sélection de l'élément correspondant au texte dans la bannière//

// Fonction pour mettre à jour le Slide//
 function updateSlide(i) {
	bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
	bannerText.innerHTML = slides[i].tagLine;
}


//Ajout des bulletPoints//

 const dots = document.querySelector('.dots');// sélection de l'élément contenant les bulletpoints//
 for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");// création d'un nouveau bulletpoint//
	dot.setAttribute( "class","dot");// ajout de la classe dot au bulletpoint//
	dots.appendChild(dot);

	if (i === 0) { // si premier bullet point//
        dot.classList.add("dot_selected"); // lui ajouter la classe dot_selected pour l'afficher comme sélectionné //
    }
 }

 // définition de l'index du slide//
 let slideIndex = 0;



// Ajout d'EventListener sur la flèche gauche //

 const flecheGauche = document.querySelector(".arrow_left");
 flecheGauche.addEventListener('click', function(){
	slideIndex --;//diminution de l'index du slide//
	if (slideIndex < 0) { // Si l'index du slide' est inférieur à 0 //
		slideIndex = slides.length - 1;// Si oui  slideIndex est mis à jour pour pointer vers le dernier slide //
	}
	updateSlide(slideIndex);// mise à jour de l'affichage du slide//
	updateDots();// mis à jour des bulletpoints //

	console.log("Vous avez cliqué sur la flèche gauche !");

 });
// Ajout d'EventListener sur la flèche droite//

 const flecheDroite = document.querySelector(".arrow_right");
 flecheDroite.addEventListener('click', function(){
	 slideIndex ++;// augmentation de l'index du slide//
	 if (slideIndex >= slides.length) { // vérif si l'index dépasse la longueur du slide//
        slideIndex = 0;// si oui, revenir au premier slide // 
	 }
	 updateSlide(slideIndex); // mis à jour de l'affichage du slide//
	 updateDots(); // mis à jour des bulletpoints //

	console.log("Vous avez cliqué sur la flèche droite !");

 });

 // fonction pour mettre à jour les bulletPoints //
 function updateDots() {
	const dots = document.querySelectorAll('.dot'); // sélection de tous les bulletpoints//
	for (let i = 0; i< dots.length; i++) { // utilisation d'une boucle pour parcourir chaque élément de la liste de bulletpoints//
		const dot = dots[i]; // sélection du bulletpoint qui va être stocker dans la variable dot//
		if (i=== slideIndex) { // si le bullet point correspond au slide actif//
			dot.classList.add('dot_selected'); // on lui ajoute la classe dot_selected//
		}
		else { // sinon //
			dot.classList.remove('dot_selected'); // on lui retire la classe //
		}
	}

 }
