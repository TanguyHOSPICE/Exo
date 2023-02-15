//Déclarations
let entertainment = document.querySelector('select');
let animalRadioBtn = document.querySelectorAll('input[type="radio"]');
let tos = document.querySelectorAll('input[type="checkbox"]');

//Affiche la sélection choisi
entertainment.addEventListener('change', (e) => {
	console.log(`${e.target.name}: ${e.target.value}`);
});
