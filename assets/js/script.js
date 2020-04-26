window.addEventListener('keydown', function(e){
	if(e.repeat) return;

	let keyPressed = document.querySelector('.key-pressed');

	const bgArray = [
		'red',
		'blue',
		'green'
	];

	const tile = document.querySelector(`.tile[data-key="${e.keyCode}"]`);
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	if(!audio) return;
	
	audio.currentTime = 0;
	audio.play();

	tile.classList.add('active');

	audio.addEventListener('ended', () => {
		tile.classList.remove('active');
	});

	const body = document.querySelector('body');

	body.style.backgroundColor = tile.dataset.color;

});
