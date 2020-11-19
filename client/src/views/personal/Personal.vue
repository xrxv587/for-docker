<template>
	<div>
		<canvas id="canvas" width="400" height="400"></canvas>
	</div>
</template>
<style>
</style>
<script>
	import item from '../../item/item.json';

	export default {
		mounted() {
			const Letter = item['C'];
			const canvas = document.getElementById('canvas');
			const cxt = canvas.getContext('2d');
			for(let i = 0; i < Letter.length; i++) {
				for(let j = 0; j < Letter[i].length; j++) {
					cxt.beginPath();
					if (Letter[i][j] === 0 ) {
						cxt.fillStyle="white";
					} else {
						cxt.fillStyle="green";
					}
					cxt.arc(25 + j * 50, 25 + i * 50, 25, 0, Math.PI * 2, true);
					cxt.fill();
					
				}
			}
			cxt.closePath();
		}
	}
</script>