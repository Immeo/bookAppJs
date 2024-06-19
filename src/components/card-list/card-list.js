import { DivComponent } from '../../common/divComponent';
import { Card } from '../card/card';

export class CardList extends DivComponent {
	constructor(appState, parentState) {
		super();
		this.appState = appState;
		this.parentState = parentState;
	}

	render() {
		if (this.parentState.loading) {
			this.el.innerHTML = '<div class"card__list__loader">Loading...</div>';
			return this.el;
		}
		if (
			this.parentState.numFound != undefined &&
			this.parentState.numFound > 0
		) {
			this.el.innerHTML = `<h1>Books find: ${this.parentState.numFound}</h1>`;
		}
		const cardGrid = document.createElement('div');
		cardGrid.classList.add('card__grid');
		this.el.appendChild(cardGrid);
		for (const card of this.parentState.list) {
			cardGrid.append(new Card(this.appState, card).render());
		}
		return this.el;
	}
}
