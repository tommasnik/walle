'use strict';

// My calendars controller
angular.module('my-calendars').controller('MyCalendarsController', ['$scope', '$stateParams', '$location', 'Authentication', 'MyCalendars', 'Events',
	function($scope, $stateParams, $location, Authentication, MyCalendars, Events) {
		$scope.authentication = Authentication;

		// Find a list of My calendars
		$scope.find = function() {
			 MyCalendars.get().$promise.then(function(data) {
                console.log(data);
                 $scope.myCalendars = data.items;

            });
		};

//		// Find existing My calendar
		$scope.findOne = function() {
			$scope.myCalendar = MyCalendars.get({
				myCalendarId: $stateParams.myCalendarId
			});

            $scope.events = Events.get({myCalendarId: $stateParams.myCalendarId});
		};
	}
]);