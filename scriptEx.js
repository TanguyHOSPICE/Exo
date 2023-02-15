//Déclarations
let entertainment = document.querySelector('select');
let animalRadioButtons = document.querySelectorAll('input[type="radio"]');
let tos = document.querySelector('input[type="checkbox"]');

//Affiche la sélection choisi
entertainment.addEventListener('change', (e) => {
	console.log(`${e.target.name}: ${e.target.value}`);
});
//Changement de la var de départ
// ! Facultatif
entertainment.value = 'games';
//Pr récup la valeur d'1 btn radio il va falloir mettre 1 listener s/ chq btn radio
animalRadioButtons.forEach((animalRadioButton) => {
	animalRadioButton.addEventListener('change', (e) => {
		console.log(`${e.target.id}: ${e.target.checked}`);
	});
});
//radio par défault ici 'Autre'
// ! Facultatif
animalRadioButtons[2].checked = true;

tos.addEventListener('change', (e) => {
	console.log(`${e.target.name}: ${e.target.checked}`);
});
//Cocher par défault
// ! Facultatif
tos.checked = true;
