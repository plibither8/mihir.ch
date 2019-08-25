const introExpandButton = document.querySelector('section.intro button.expand');
introExpandButton.addEventListener('click', () => {
	introExpandButton.nextElementSibling.classList.remove('nodisplay');
	introExpandButton.remove();
})

const projectCards = document.querySelectorAll('section.projects .card');

for (const card of projectCards) {
	const details = card.querySelector('p.details');
	const button = card.querySelector('button');

	button.addEventListener('click', () => {
		details.classList.toggle('nodisplay');
		button.innerHTML = button.innerHTML == '++' ? '--' : '++';
	});
}
