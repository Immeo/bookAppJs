import { DivComponent } from '../../common/divComponent';
import './card.css';

export class Card extends DivComponent {
	constructor(appState, cardState) {
		super();
		this.appState = appState;
		this.cardState = cardState;
	}

	#addFavorites() {
		this.appState.favorites.push(this.cardState);
	}

	#deleteFavorites() {
		this.appState.favorites = this.appState.favorites.filter(
			f => f.key !== this.cardState.key
		);
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
		if (existInFavorites) {
			this.el
				.querySelector('.button__add')
				.addEventListener('click', this.#deleteFavorites.bind(this));
		} else {
			this.el
				.querySelector('.button__add')
				.addEventListener('click', this.#addFavorites.bind(this));
		}
		return this.el;
	}
}
