const nav = {

	__routes: [],

	routing: false,

	notLocalServer: false,

	domain: '',

	routedComponent: () => {return Div({},['Welcome to this Component'])},

	notFound: () => {
		return Div({},['Route not Found!']);
	},

	start: function () {
		window.onpopstate = function (event) {
			nav.route(document.location.pathname, event.state, false);
		}

		nav.routing = true;
		nav.redirect(window.location.pathname, window.history.state);
	},

	setRoute: function (route = '/', title = 'MyApp', component) {
		nav.__routes.push({
			route: route,
			title: title,
			component: component
		});
	},

	route: function (route, params = {}, addToHistory = true) {
		// condition for found route
		let routeFound = false;
		// find the route
		for (const key in nav.__routes) {
			if (nav.__routes.hasOwnProperty(key)) {
				const item = nav.__routes[key];
				if (item.route == route) {
					// set the document title
					document.title = item.title;
					// add to windows history
					console.log(`Navigating to ${item.route}`);
					if (addToHistory) window.history.pushState(params, item.title, nav.notLocalServer == true ? nav.domain + item.route : item.route);
					// call route component
					nav.routedComponent = () => { return item.component(params) };
					routeFound = true;
					break;
				}
			}
		}
		if (!routeFound) {
			console.log('route not found');
			nav.routedComponent = nav.notFound;
		}
		
		// set state to reflect the new route component
		// run the routed component in an eval and evaluate its value
		// setState(()=>{
		//   nav.routedComponent = nav.routedComponent == undefined ? oldRoutedComponent : nav.routedComponent;
		// });
	},

	redirect: function (route, params = {}) {
		if (params == {}) params = window.history.state;
		// condition for found route
		let routeFound = false;
		for (const key in nav.__routes) {
			if (nav.__routes.hasOwnProperty(key)) {
				const item = nav.__routes[key];
				if (item.route == route) {
					routeFound = true;
					// set the document title
					document.title = item.title;
					// replace windows history
					console.log(`Navigating to ${item.route}`);
					window.history.replaceState(params, item.title, item.route);
					// call route component
					nav.routedComponent = () => { return item.component(params) };
					routeFound = true;
					break;
				}
			}
		}
		if (!routeFound) {
			console.log('route not found');
			nav.routedComponent = nav.notFound;
		}

	},

	forward: function () {
		window.history.forward();
	},

	back: function () {
		window.history.back();
	}

}

// extracted from umd
if (typeof module === 'object' && module.exports) {
  // Node. Does not work with strict CommonJS, but
  // only CommonJS-like environments that support module.exports,
  // like Node.
  module.exports = {
    nav
  };
}
