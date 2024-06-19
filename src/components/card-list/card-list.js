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
		this.el.innerHTML = `<h1>Books find: ${this.parentState.numFound}</h1>`;
		for (const card of this.parentState.list) {
			this.el.append(new Card(this.appState, card).render());
		}
		return this.el;
	}
}
