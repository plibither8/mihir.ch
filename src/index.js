// Lazy-load offscreen images
import 'lazysizes';

// Expand the "Psst! ++" button
const introExpandButton = document.querySelector('#intro button.expand');
introExpandButton.addEventListener('click', () => {
	introExpandButton.nextElementSibling.classList.remove('nodisplay');
	introExpandButton.remove();
});

// Expand/collapse projects' "++" buttons
const projectCards = document.querySelectorAll('#projects .card');
for (const card of projectCards) {
	const details = card.querySelector('div.details');
	const button = card.querySelector('button');

	button.addEventListener('click', () => {
		details.classList.toggle('nodisplay');
		button.innerHTML = button.innerHTML == '++' ? '--' : '++';
	});
}
