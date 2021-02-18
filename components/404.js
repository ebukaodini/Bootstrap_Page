const $404 = () => {

	navHome = () => {
		nav.route('/');
		location.reload();
	}

	return(
		Div({style:"width: 100%; height: 100vh;", class: 'jumbotron bg-light d-flex flex-column justify-content-center align-items-center' }, [
			Div({}, [
				Div({class:'d-block text-center text-secondary h3 font-weight-bold'},[
					'Lost ',
					Span({class: 'fa fa-question'}),
				]),
				Div({style:'cursor: pointer;', class:'text-muted h4 btn-link', onclick:'navHome();'}, ['Get Home']),
			]),
		])
	);

}
