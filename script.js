/** Dans un premier temps, vous créerez une classe commune à tous les éléments input.
-Par la suite, au focus, vous devrez faire en sorte que le background de l’élément input prenne la couleur rose et que sa police prenne la couleur bleu.
-Enfin, vous créerez un élément blur qui annulera les effets du focus. */
let allInputs = document.getElementsByClassName('inputPinkOnFocus');
//*BOUCLE FOR EACH
Array.from(allInputs).forEach((input) => {
	input.addEventListener('focus', (e) => {
		e.target.style.background = 'pink';
		e.target.style.color = 'blue';
	});

	input.addEventListener('blur', (e) => {
		e.target.style.background = '';
		e.target.style.color = '';
	});
});
//*BOUCLE FOR
for (let i = 0; i < allInputs.length; i++) {
	allInputs[i].addEventListener('focus', (e) => {
		e.target.style.background = 'pink';
		e.target.style.color = 'blue';
	});

	allInputs[i].addEventListener('blur', (e) => {
		e.target.style.background = '';
		e.target.style.color = '';
	});
}
