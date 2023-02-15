/**Contrôlez le format de l'e-mail à l'aide de l'expression régulière suivante : /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/.
 Contrôlez que le mot de passe comporte au moins 8 caractères.
 Une fois ces conditions respectées, le formulaire peut être validé.*/
//=====Declaration formulaire - Start
(function () {
	'use strict';
	let form = document.getElementById('form');

	form.addEventListener(
		'submit',
		(e) => {
			Array.from(form.elements).forEach((input) => {
				if (input.type !== 'submit') {
					if (!validateFields(input)) {
						e.preventDefault();
						e.stopPropagation();

						input.classList.remove('is-valid');
						input.classList.add('is-invalid');
					} else {
						input.classList.remove('is-invalid');
						input.classList.add('is-valid');
					}
				}
			});
		},
		false
	);
})();
//=====Declaration formulaire - End
//=====Functions Validations - Start
function validateRequired(input) {
	return !(input.value == null || input.value == '');
}
function validateTxt(input) {
	return input.value.match(' /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*.w{2,4}))$/');
}
function validateEmail(input) {
	let EMAIL = input.value;
	let POSAT = EMAIL.indexOf('@');
	let POSDOT = EMAIL.lastIndexOf('.');

	return !(POSAT < 1 || POSDOT - POSAT < 2);
}
//=====Functions Validations - End
//===Validation formulaire - Start
const validateFields = (input) => {
	let fieldName = input.name;

	if (fieldName == 'email') {
		if (!validateRequired(input)) {
			return false;
		}
		if (!validateEmail(input)) {
			return false;
		}
		return true;
	}
};
