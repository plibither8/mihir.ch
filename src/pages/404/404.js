// Add unnecessary funk to the 404
const random = max => Math.floor(Math.random() * max);
const h1 = document.querySelector('h1');
const colors = ['#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#B388FF', '#7C4DFF', '#651FFF', '#6200EA'];
window.setInterval(() => {
	const color1 = colors[random(colors.length)];
	const color2 = colors[random(colors.length)];
	const shadow1X = random(10);
	const shadow1Y = random(8);
	const shadow2X = random(-10);
	const shadow2Y = random(-8);
	h1.style.textShadow = `${shadow1X}px ${shadow1Y}px 0 ${color1}, ${shadow2X}px ${shadow2Y}px 0 ${color2}`
}, 100);

// Fill requested path
const pathSpan = document.querySelector('p.error span');
pathSpan.innerText = location.pathname;
