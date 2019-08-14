const projectCards = document.querySelectorAll('section.projects .card');

for (const card of projectCards) {
	const para = card.querySelector('p.details');
	const button = card.querySelector('button');

	button.addEventListener('click', () => {
		para.innerHTML = para.dataset.detailsFull;
	});
}
