/**Une fois la checkbox cochée, une fenêtre pop-up indiquant "Vous acceptez de recevoir la newsletter" apparaît :

Dans le cas où l’utilisateur ne souhaite pas recevoir de newsletter, il pourra sélectionner le bouton radio "non".

Affichez un message dans le span #message indiquant le pays sélectionné lorsque le choix du pays sera modifié.
*/
let checkbox = document.querySelector('input[type="checkbox"]');
let radio = document.querySelectorAll('input[name="btn-radio"]');
let select = document.getElementById('pays');
let span = document.getElementById('message');

checkbox.addEventListener('change', (e) => {
	if (e.target.checked) {
		alert('Vous acceptez de recevoir la newsletter');
		for (item of radio) {
			if (item.value == 'oui') {
				item.checked = true;
			}
		}
	} else {
		for (item of radio) {
			item.checked = item.value === 'non';
		}
	}
});

select.addEventListener('change', (e) => {
	span.innerText += `Vous avez indiqué être en ${e.target.value}`;
});
