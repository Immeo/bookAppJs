import { DivComponent } from '../../common/divComponent';
import './search.css';

export class Search extends DivComponent {
	constructor(state) {
		super();
		this.state = state;
	}

	render() {
		this.el.classList.add('search');
		this.el.innerHTML = `
			<div class="search__wrapper">
                <input
                type="text"
                name="search_book"
                class="search__book_input"
                placeholder="Find a book or an author.."
                value="${this.state.searchQuery ? this.state.searchQuery : ''}"
                />
                <img src="/static/search.svg" alt="Seacrch icon" />
            </div>
            <button aria-label="search"><img src="/static/search-white.svg" alt="Seacrch icon" /></button>
		`;
		return this.el;
	}
}
