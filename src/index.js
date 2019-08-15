const navButton = document.querySelector('nav button');
const links = document.querySelector('nav .links');

function navToggleCheck() {
	if (window.getComputedStyle(links).display == 'none') {
		links.classList.add('nodisplay');
		links.style.display = 'block';
	}
}

navToggleCheck();
navButton.addEventListener('click', () => {
	navToggleCheck();
	links.classList.toggle('nodisplay');
});

const projectCards = document.querySelectorAll('section.projects .card');

for (const card of projectCards) {
	const para = card.querySelector('p.details');
	const button = card.querySelector('button');

	button.addEventListener('click', () => {
		para.innerHTML = para.dataset.detailsFull;
	});
}
