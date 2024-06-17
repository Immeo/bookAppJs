import { MainView } from './viiews/main/main';

class App {
	routes = [{ path: '', views: MainView }];

	appState = {
		favorites: [],
	};

	constructor() {
		window.addEventListener('hashchange', this.route.bind(this));
		this.route();
	}

	route() {
		if (this.currentView) {
			this.currentView.destroy();
		}
		const views = this.routes.find(v => v.path === location.hash).views;
		this.currentView = new views(this.appState);
		this.currentView.render();
	}
}

new App();
