var dfuLocationMapper = {
	multiplier: 4,
	locationTypes: [
		'DungeonLabyrinth',
		'DungeonKeep',
		'DungeonRuin',
		'Graveyard',
		'Coven',
		'HomeFarms',
		'HomeWealthy',
		'HomePoor',
		'ReligionTemple',
		'ReligionCult',
		'Tavern',
		'TownCity',
		'TownHamlet',
		'TownVillage'
	],
	chunks: [],
	init: function() {
		var el, i, j;
		//Create location type filter buttons
		var buttonsEl = document.getElementById('dfu-location-buttons');
		for(i = 0; i < this.locationTypes.length; i++) {
			el = document.createElement('button');
			el.type = 'button';
			el.setAttribute('data-type', this.locationTypes[i]);
			el.addEventListener('click', function() {
				var els = document.getElementsByClassName(this.getAttribute('data-type'));
				for(var i = 0; i < els.length; i++) {
					els[i].classList.toggle('hide');
				}
			});
			el.innerHTML = this.locationTypes[i];
			buttonsEl.appendChild(el);
		}
		for(i = 0; i < 500; i = i + 50) {
			for(j = 0; j < 1000; j = j + 50) {
				this.chunks[this.chunks.length] = {
					yMin: i,
					yMax: i + 49,
					xMin: j,
					xMax: j + 49,
					minPosX: 1000,
					maxPosX: -1,
					minPosY: 500,
					maxPosY: -1
				};
			}
		}

		/*

		 */

		var elDetails;
		var pixelX, pixelY;
		var map = document.getElementById('location-layer');
		var dfLocations, k;
		for(i = 0; i < dfRegions.length; i++) {
			//Skip any region that isn't Daggerfall
			//if(dfRegions[i].name != 'Daggerfall') {
				//continue;
			//}
			//Place all locations of the current region
			dfLocations = dfRegions[i].locations;
			for(var j = 0; j < dfLocations.length; j++) {

				pixelY = dfLocations[j].mapPixelY;
				pixelX = dfLocations[j].mapPixelX;
				el = document.createElement('div');
				el.className = 'pixel ' + dfLocations[j].locationType;
				el.style.top = (pixelY * this.multiplier) + 'px';
				el.style.left = (pixelX * this.multiplier) + 'px';
				elDetails = document.createElement('div');
				elDetails.className = 'pixel-details';
				elDetails.innerHTML = '<p>' + dfLocations[j].name + '<br />';
				elDetails.innerHTML += 'X: ' + dfLocations[j].mapPixelX + ' - Y: ' + dfLocations[j].mapPixelY + '</p>';
				if(dfLocations[j].locationType != 'TownCity' && 2 == 3) {
					el.className += ' hide';
				} else {
					for(k = 0; k < this.chunks.length; k++) {
						if(
							pixelY <= this.chunks[k].yMax && pixelY >= this.chunks[k].yMin &&
							pixelX <= this.chunks[k].xMax && pixelX >= this.chunks[k].xMin
						) {
							if(pixelY < this.chunks[k].minPosY) {
								this.chunks[k].minPosY = pixelY;
							}
							if(pixelY > this.chunks[k].maxPosY) {
								this.chunks[k].maxPosY = pixelY;
							}
							if(pixelX < this.chunks[k].minPosX) {
								this.chunks[k].minPosX = pixelX;
							}
							if(pixelX > this.chunks[k].maxPosX) {
								this.chunks[k].maxPosX = pixelX;
							}
						}
					}
				}
				el.appendChild(elDetails);
				map.appendChild(el);
			}
		}
		//
		var roadLayer = document.getElementById('road-layer');
		var chunk, center, road;
		var positions = [];
		for(i = 0; i < this.chunks.length; i++) {
			chunk = this.chunks[i];
			if(chunk.maxPosX == -1 && chunk.maxPosY == -1) {
				continue;
			}
			center = [
				Math.round((chunk.minPosX + chunk.maxPosX) / 2),
				Math.round((chunk.minPosY + chunk.maxPosY) / 2)
			];
			positions[positions.length] = center;
			road = document.createElement('div');
			road.className = 'road center';
			road.style.left = (center[0] * this.multiplier) + 'px';
			road.style.top = (center[1] * this.multiplier) + 'px';
			roadLayer.appendChild(road);
		}

		var startEnd, distance, traveled, maxDistance;
		maxDistance = 75;
		if(2 == 3) {
			for (i = 0; i < positions.length - 1; i++) {
				for (k = i + 1; k < positions.length; k++) {
					startEnd = [
						positions[i],
						positions[k]
					];
					distance = [
						startEnd[0][0] - startEnd[1][0],
						startEnd[0][1] - startEnd[1][1]
					];
					if (Math.abs(distance[0]) > maxDistance || Math.abs(distance[1]) > maxDistance) {
						continue;
					}
					traveled = [0, 0];
					while (distance[0] != 0 || distance[1] != 0) {
						road = document.createElement('div');
						road.className = 'road';
						if (Math.abs(distance[0]) > Math.abs(distance[1])) {
							if (distance[0] > 0) {
								traveled[0]--;
								distance[0]--;
							} else if (distance[0] < 0) {
								traveled[0]++;
								distance[0]++;
							}
						} else {
							if (distance[1] > 0) {
								traveled[1]--;
								distance[1]--;
							} else if (distance[1] < 0) {
								traveled[1]++;
								distance[1]++;
							}
						}
						if (distance[0] == 0 && distance[1] == 0) {
							continue;
						}
						road.style.left = ((startEnd[0][0] + traveled[0]) * this.multiplier) + 'px';
						road.style.top = ((startEnd[0][1] + traveled[1]) * this.multiplier) + 'px';
						roadLayer.appendChild(road);
					}
				}
			}
		}
	}
};

window.addEventListener('DOMContentLoaded', function() {
	dfuLocationMapper.init();
});