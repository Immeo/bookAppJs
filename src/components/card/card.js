import { DivComponent } from '../../common/divComponent';
import './card.css';

export class Card extends DivComponent {
	constructor(appState, cardState) {
		super();
		this.appState = appState;
		this.cardState = cardState;
	}

	addFavorite() {
		this.el.querySelector('button__add').addEventListener('click', () => {
			if (
				this.el.querySelector('.card__title').innerText !=
				this.appState.favorites.indexOf(
					this.el.querySelector('card__title').innerText
				)
			) {
				this.appState.favorites.push(
					this.el.querySelector('.card__title').innerText
				);
				this.el.querySelector('.button__add').classList.add('button__active');
			}
		});
	}

	removeFavorite() {
		this.el.querySelector('.button__add').addEventListener('click', () => {
			if (
				this.el.querySelector('.card__title').innerText ==
				this.appState.favorites.indexOf(
					this.el.querySelector('.card__title').innerText
				)
			) {
				this.appState.favorites.splice(
					this.el.querySelector('.card__title').innerText,
					1
				);
				this.el
					.querySelector('.button__add')
					.classList.remove('button__active');
			}
		});
	}

	render() {
		const existInFavorites = this.appState.favorites.some(
			f => f.key === this.cardState.key
		);
		this.el.classList.add('card');
		this.el.innerHTML = `
			<div class="card__image">
				<img src="https://covers.openlibrary.org/b/olid/${
					this.cardState.cover_edition_key
				}-M.jpg" alt="Cover ${this.cardState.title}" />
			</div>
			<div class="card__info">
				<div class="card__tag">
					${this.cardState.subject ? this.cardState.subject[0] : 'Not specified'}
				</div>
				<div class="card__name">
					${this.cardState.title}
				</div>
				<div class="card__author">
					${this.cardState.author_name ? this.cardState.author_name[0] : 'Not specified'}
				</div>
				<div class="card__footer">
					<button class="button__add ${existInFavorites ? 'button__active' : ''}">
						${
							existInFavorites
								? '<img src="/static/favorites.svg" />'
								: '<img src="/static/favorites-white.svg" />'
						}
					</button>
				</div>
			</div>
		`;

		return this.el;
	}
}
