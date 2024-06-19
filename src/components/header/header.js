import { DivComponent } from '../../common/divComponent';
import './header.css';

export class Header extends DivComponent {
	constructor(appState) {
		super();
		this.appState = appState;
	}

	render() {
		this.el.classList.add('header');
		this.el.innerHTML = `
			<div>
				<img src="/static/find-books.svg" alt="Logotype" />
			</div>
			<div class="menu">
				<a class="menu__item" href="/">
					<img src="/static/search.svg" alt="Search book icon" />
					Search book
				</a>
				<a class="menu__item link__favorites" href="#favorite">
					<img src="/static/favorites.svg" alt="Favorites icon" />
					Favorites
					<div class="menu__counter">
						${this.appState.favorites.length}
					</div>
				</a>
			</div>
		`;
		return this.el;
	}
}
