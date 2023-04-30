Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'bitd-foundry-de',
			lang: 'de',
			dir: 'compendium'
		}); 
	}
});
