Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'bitd-babele-de',
			lang: 'de',
			dir: 'compendium'
		}); 
	}
});
