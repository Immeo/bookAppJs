import onChange from 'on-change';
import { AbtrackView } from '../../common/view.js';

export class MainView extends AbtrackView {
	state = {
		list: [],
		loading: false,
		searchQuery: undefined,
		offset: 0,
	};

	constructor(appState) {
		super();
		this.appState = appState;
		this.appState = onChange(this.appState, this.appStateHook.bind(this));
		this.setTitle('find book');
	}

	appStateHook(path) {
		if (path === 'favorites') {
			console.log(path);
		}
	}

	render() {
		const main = document.createElement('div');
		main.innerHTML = `
            <h1>Find book</h1>
            <div>length list  books:${this.appState.favorites.length}
            </div>
        `;
		this.app.innerHTML = '';
		this.app.appendChild(main);
		this.appState.favorites.push('12345');
	}
}
