'use strict';

//My calendars service used to communicate My calendars REST endpoints
angular.module('my-calendars')
    .factory('MyCalendars', ['$resource',
	function($resource) {
		return $resource('my-calendars/:myCalendarId', {
            myCalendarId: '@_id'
		}, {});
	}
])
    .factory('Events', ['$resource',
	function($resource) {
		return $resource('my-calendars/:myCalendarId/events', {
            myCalendarId: '@_id'
		}, {});
	}
]);