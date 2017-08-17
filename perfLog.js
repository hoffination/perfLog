function sameHostValid(entry, type, host) {
	if (entry.initiatorType !== type) {
		return false;
	}
	return host === new URL(entry.name).host;
}

function sumReduction(array, attribute) {
	return array.reduce((a,b) => a + (b[attribute] || 0), 0);
}

function analyzePerformance() {
	const performance = window.performance;
	const navigator = window.navigator;
	
	const host = new URL(window.location.href).host;

	const entries = performance.getEntries();

	const scriptEntries = entries.filter(e => sameHostValid(e, 'script', host));
	const scriptValues = {
		totalDuration: sumReduction(scriptEntries, 'duration'),
		totalSize: sumReduction(scriptEntries, 'encodedBodySize')
	}

	const linkEntries = entries.filter(e => sameHostValid(e, 'link', host));
	const linkValues = {
		totalDuration: sumReduction(scriptEntries, 'duration'),
		totalSize: sumReduction(scriptEntries, 'encodedBodySize')
	}

	const xmlRequests = entries.filter(e => sameHostValid(e, 'xmlhttprequest', host));
	const xmlRequestValues = {
		totalDuration: sumReduction(scriptEntries, 'duration'),
		totalSize: sumReduction(scriptEntries, 'encodedBodySize')
	}

	const paintEntries = performance.getEntriesByType('paint');
	const firstPaint = paintEntries.filter(e => e.name === 'first-paint')[0].startTime;
	const firstContentfulPaint = paintEntries.filter(e => e.name === 'first-contentful-paint')[0].startTime;

	return {
		host,
		href: window.location.href,
		load: performance.timing,
		paint: { firstPaint, firstContentfulPaint },
		styles: linkValues,
		scripts: scriptValues,
		memory: performance.memory,
		xmlRequestValues,
		meta: {
			platform: navigator.platform,
			product: navigator.product,
			vendor: navigator.vendor
		}
	}
}

module.export = {
	analyzePerformance
}