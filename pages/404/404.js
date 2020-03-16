// Add unnecessary funk to the 404
const random = max => Math.floor(Math.random() * max);
const h1 = document.querySelector('h1');
const colorList = ['#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#B388FF', '#7C4DFF', '#651FFF', '#6200EA'];

window.setInterval(() => {
	const colors = ["", ""].map(_ => colorList[random(colorList.length)]);
	const shadows = [10, 8, -10, -8].map(coord => random(coord));
	h1.style.textShadow = `${shadows[0]}px ${shadows[1]}px 0 ${colors[0]}, ${shadows[2]}px ${shadows[3]}px 0 ${colors[1]}`
}, 100);

// Fill requested path
const pathSpan = document.querySelector('p.error span');
pathSpan.innerText = location.pathname;
