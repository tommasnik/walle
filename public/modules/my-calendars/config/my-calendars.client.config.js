'use strict';

// Configuring the Articles module
angular.module('my-calendars').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'My calendars', 'my-calendars', 'dropdown', '/my-calendars');
//		Menus.addMenuItem('my-calendar', 'My calendars', 'my-calendars', 'dropdown', '/my-calendars(/create)?');
		Menus.addSubMenuItem('topbar', 'my-calendars', 'List My calendars', 'my-calendars');
//		Menus.addSubMenuItem('my-calendar', 'my-calendars', 'New My calendar', 'my-calendars/create');
	}
]);