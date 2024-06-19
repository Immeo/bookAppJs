import onChange from 'on-change';
import { AbtrackView } from '../../common/view.js';
import { CardList } from '../../components/card-list/card-list.js';
import { Header } from '../../components/header/header.js';

export class favoritesView extends AbtrackView {
	constructor(appState) {
		super();
		this.appState = appState;
		this.appState = onChange(this.appState, this.appStateHook.bind(this));
	}

	destroy() {
		onChange.unsubscribe(this.appState);
	}

	appStateHook(path) {
		if (path === 'favorites') {
			this.render();
		}
	}

	render() {
		const main = document.createElement('div');
		main.innerHTML = `
			<h1>Favourites</h1>
		`;
		main.append(
			new CardList(this.appState, { list: this.appState.favorites }).render()
		);
		this.app.innerHTML = '';
		this.app.append(main);
		this.renderHeader();
	}

	renderHeader() {
		const header = new Header(this.appState).render();
		this.app.prepend(header);
	}
}
