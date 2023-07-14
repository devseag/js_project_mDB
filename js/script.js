/* Zadanija na urok:

1) Udalit' vse reklamnye bloki so stranicy (pravaja chast' sajta)

2) Izmenit' zhanr fil'ma, pomenjat' "komedija" na "drama"

3) Izmenit' zadnij fon postera s fil'mom na izobrazhenie "bg.jpg". Ono lezhit v papke img.
Realizovat' tol'ko pri pomoshhi JS

4) Spisok fil'mov na stranice sformirovat' na osnovanii dannyh iz jetogo JS fajla.
Otsortirovat' ih po alfavitu 

5) Dobavit' numeraciju vyvedennyh fil'mov */

'use strict';

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
	//   genre = poster.getElementsByClassName('promo__genre');
	  genre = poster.querySelector('.promo__genre'),
	  movieList = document.querySelector('.promo__interactive-list');
	//   promo_interactive_title = document.querySelector('.promo__interactive-list'),
	//   promo = document.querySelectorAll('.promo__interactive-item'),
	//   promo_delete = document.querySelector('.promo__interactive-item .delete');

adv.forEach(item => {
	item.remove();
});

// adv.forEach(function(item) {
// 	item.remove();
// });

// const genre = document.querySelectorAll('.promo__content .promo__bg .promo__genre');
// const genre = document.getElementsByClassName('promo__genre');

// genre[0].replaceWith('<div class="promo__genre">DRAMA</div>');
// genre[0].innerHTML = '<div class="promo__genre">DRAMA</div>';
// genre[0].textContent = 'DRAMA';
genre.textContent = 'DRAMA';


// background:url("../img/mars.webp")
// console.log(poster);
poster.style.backgroundImage = 'url("/img/bg.jpg")';

// console.log(promo);
// console.log(promo_delete);

// promo.forEach((item, i) => {
// 	console.log(item);
// 	// item.replaceWith(movieDB.movies.sort()[i]);
// 	item.textContent = movieDB.movies.sort()[i]; //.after(promo_delete);
// });

// promo.forEach((item, i) => {
// 	item.insertAdjacentHTML('afterend', '<div class="delete"></div>');
// });

// console.log(promo_interactive_title);

// promo_interactive_title.style.listStyleType = 'decimal';

// promo.forEach((item, i) => {
// 	item.after(promo_delete);
// });




console.log(movieList);
movieList.innerHTML = '';

movieDB.movies.sort();




// console.log(poster.innerHTML);

// listStyleType decimal

// const li = document.createElement('li');
// // li.classList.add('black');
// movieList.append(li);




movieDB.movies.forEach((film, i) => {
	movieList.innerHTML += `
	<li class="promo__interactive-item">${i + 1} ${film}
		<div class="delete"></div>
	</li>
	`;
});