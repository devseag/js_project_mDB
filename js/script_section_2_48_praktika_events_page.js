/* Zadanija na urok:

1) Realizovat' funkcional, chto posle zapolnenija formy i nazhatija knopki "Podtverdit'" - 
novyj fil'm dobavljaetsja v spisok. Stranica ne dolzhna perezagruzhat'sja.
Novyj fil'm dolzhen dobavljat'sja v movieDB.movies.
Dlja poluchenija dostupa k znacheniju input - obrashhaemsja k nemu kak input.value;
P.S. Zdes' est' neskol'ko variantov reshenija zadachi, prinimaetsja ljuboj, no rabochij.

2) Esli nazvanie fil'ma bol'she, chem 21 simvol - obrezat' ego i dobavit' tri tochki

3) Pri klike na musornuju korzinu - jelement budet udaljat'sja iz spiska (slozhno)

4) Esli v forme stoit galochka "Sdelat' ljubimym" - v konsol' vyvesti soobshhenie: 
"Dobavljaem ljubimyj fil'm"

5) Fil'my dolzhny byt' otsortirovany po alfavitu */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			"Logan",
			"Liga spravedlivosti",
			"La-la ljend",
			"Oderzhimost'",
			"Skott Piligrim protiv..."
		]
	};
	
	const adv = document.querySelectorAll('.promo__adv img'),
		  poster = document.querySelector('.promo__bg'),
		  genre = poster.querySelector('.promo__genre'),
		  movieList = document.querySelector('.promo__interactive-list'),
		  addForm = document.querySelector('form.add'),
		  addInput = addForm.querySelector('.adding__input'),
		  checkBox = addForm.querySelector('[type="checkbox"');

	
	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		let newFilm = addInput.value;
		// newFilm.length >= 21 ? newFilm = newFilm.slice(0, 20) + '...' : newFilm;
		const favourite = checkBox.checked;
		// if(favourite) {
		// 	console.log('Dobavljaem ljubimyj film');
		// }

		if ( newFilm) {

			if(newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}

		if(favourite) {
			console.log('Dobavljaem ljubimyj film');
		}

			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);
	
			createMoviewList(movieDB.movies, movieList);
		}


		event.target.reset();

	});
	
	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};
	
	const makeChanges = () => {
		genre.textContent = 'DRAMA';
	
		poster.style.backgroundImage = 'url("/img/bg.jpg")';	
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	function createMoviewList(films, parent) {
		parent.innerHTML = '';
		sortArr(films);

		films.forEach((film, i) => {
			parent.innerHTML += `
			<li class="promo__interactive-item">${i + 1} ${film}
				<div class="delete"></div>
			</li>
			`;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				createMoviewList(films, parent);
			});
		});

		// addEventForClick();
	}

	deleteAdv(adv);
	makeChanges();
	createMoviewList(movieDB.movies, movieList);

	

	// const deleteElement = (event, i) => {
	// 	event.preventDefault();
	
	// 	console.log(event.target);
	// 	console.log(movieDB.movies);
	// 	console.log(i);

	// 	movieDB.movies.splice(i, 1);
	// 	createMoviewList(movieDB.movies, movieList);
		
	// 	console.log(movieDB.movies);
	// 	// event.target.removeEventListener('click', deleteElement);

	// 	};

	// clickDeleteS.forEach((clickDelete, i) => {
	// 	console.log(i);
	// 	clickDelete.addEventListener('click', deleteElement, {once: true});
		
	// });
	

// 	function addEventForClick() {
// 		let clickDeleteS = document.querySelectorAll('.promo__interactive-item .delete');
// 		clickDeleteS.forEach((clickDelete, i) => {
// 		clickDelete.addEventListener('click', function(event) {
// 			// event.preventDefault();
		
// 			console.log(event.target);
// 			console.log(i);
// 			movieDB.movies.splice(i, 1);
// 			createMoviewList(movieDB.movies, movieList);
// 			} 
// 		);
// 	});
// }

	// addEventForClick();
	
	

});