'use strict';

//Setting up route
angular.module('my-calendars').config(['$stateProvider',
	function($stateProvider) {
		// My calendars state routing
		$stateProvider.
		state('listMyCalendars', {
			url: '/my-calendars',
			templateUrl: 'modules/my-calendars/views/list-my-calendars.client.view.html'
		})
//		state('createMyCalendar', {
//			url: '/my-calendars/create',
//			templateUrl: 'modules/my-calendars/views/create-my-calendar.client.view.html'
//		}).
//		state('viewMyCalendar', {
//			url: '/my-calendars/:myCalendarId',
//			templateUrl: 'modules/my-calendars/views/view-my-calendar.client.view.html'
//		}).
//		state('editMyCalendar', {
//			url: '/my-calendars/:myCalendarId/edit',
//			templateUrl: 'modules/my-calendars/views/edit-my-calendar.client.view.html'
//		});
	}
]);