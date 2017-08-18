module.exports = function(config) {
	config.set({
		preprocessors: {
			'**/*.html': ['html2js'],
			'**/*.json': ['json_fixtures'],
		},
		files: [
			'build/perf-log-web-test.js',
			'test/unit/specs/**/*.js',
			{
				pattern: 'test/unit/fixtures/**/*',
			},
		],
		exclude: [],
		frameworks: [
			'jasmine',
			'fixture'
		],
		customLaunchers: {
			ChromeHeadless: {
				base: 'Chrome',
				flags: [
					'--headless',
					'--disable-gpu',
					// Without a remote debugging port, Google Chrome exits immediately.
					'--remote-debugging-port=9222',
				],
			}
		},
		browsers: [
			'ChromeHeadless',
			'Chrome'
		],
		plugins: [
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-fixture',
			'karma-html2js-preprocessor',
			'karma-json-fixtures-preprocessor',
			'karma-ng-html2js-preprocessor',
			'karma-story-reporter',
			'karma-junit-reporter',
		],
		reporters: [
			'story',
			'junit'
		],
		junitReporter: {
			outputFile: 'build/test-results.xml',
			useBrowserName: false
		},
		jsonFixturesPreprocessor: {
			variableName: '__json__'
		},
		ngHtml2JsPreprocessor: {
			stripPrefix: 'dist',
			prependPrefix: '',
			moduleName: 'templates'
		}
	});
};
