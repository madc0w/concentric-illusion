const speedFactor = 2.8;
const ringWidth = 24;
const ringSpacing = 60;
const ringColor = '#000';

let t = 0;

function load() {
	canvas = document.getElementById('canvas');
	canvas.height = innerHeight - 20;
	canvas.width = innerWidth - 20;
	ctx = canvas.getContext('2d');
	paint();
}

function paint() {
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.lineWidth = ringWidth;
	ctx.strokeStyle = ringColor;
	const maxR = Math.sqrt((canvas.width / 2) ** 2 + (canvas.height / 2) ** 2);
	const center = {
		// x: canvas.width / 2 + Math.sin(t / 12) * 200,
		// y: canvas.height / 2 + Math.cos(t / 12) * 200,
		x: canvas.width / 2,
		y: canvas.height / 2,
	};
	for (let i = 0; i < maxR / (ringWidth + ringSpacing); i++) {
		const r = (i * (ringWidth + ringSpacing) + t * speedFactor) % maxR;
		ctx.beginPath();
		ctx.arc(center.x, center.y, r, 0, 2 * Math.PI);
		ctx.stroke();
	}

	t++;
	requestAnimationFrame(paint);
}
