const projectCards = document.querySelectorAll('section.projects .card');

for (const card of projectCards) {
	const button = card.querySelector('button');
	const ellipsis = card.querySelector('span.ellipsis');
	const hidden = card.querySelector('span.hidden');

	button.addEventListener('click', () => {
		ellipsis.remove();
		button.remove();
		hidden.classList.remove('hidden');
	});
}
