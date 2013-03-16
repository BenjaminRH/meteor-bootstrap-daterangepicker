Package.describe({
	summary: "This date range picker component for Twitter Bootstrap creates a dropdown menu from which a user can select a range of dates."
});

Package.on_use(function (api) {
	api.add_files([
		'lib/bootstrap-daterangepicker/daterangepicker.css',
		'lib/bootstrap-daterangepicker/date.js',
		'lib/bootstrap-daterangepicker/daterangepicker.js'
		], 'client');
});