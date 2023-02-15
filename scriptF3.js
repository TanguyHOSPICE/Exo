/**Contrôlez le format de l'e-mail à l'aide de l'expression régulière suivante : /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/.
 Contrôlez que le mot de passe comporte au moins 8 caractères.
 Une fois ces conditions respectées, le formulaire peut être validé.*/
//=====Declaration formulaire - Start
(function () {
	let form = document.getElementsByTagName('form');

	form.addEventListener(
		'submit',
		(e) => {
			Array.from(form.elements).forEach((input) => {
				if (input.type !== 'submit') {
					if (!validateFields(input)) {
						e.preventDefault();
						e.stopPropagation();
					}
				}
			});
		},
		false
	);
})();
//=====Declaration formulaire - End
