'use strict';

// My calendars controller
angular.module('my-calendars').controller('MyCalendarsController', ['$scope', '$stateParams', '$location', 'Authentication', 'MyCalendars',
	function($scope, $stateParams, $location, Authentication, MyCalendars) {
		$scope.authentication = Authentication;

		// Create new My calendar
//		$scope.create = function() {
//			// Create new My calendar object
//			var myCalendar = new MyCalendars ({
//				name: this.name
//			});
//
//			// Redirect after save
//			myCalendar.$save(function(response) {
//				$location.path('my-calendars/' + response._id);
//
//				// Clear form fields
//				$scope.name = '';
//			}, function(errorResponse) {
//				$scope.error = errorResponse.data.message;
//			});
//		};
//
//		// Remove existing My calendar
//		$scope.remove = function(myCalendar) {
//			if ( myCalendar ) {
//				myCalendar.$remove();
//
//				for (var i in $scope.myCalendars) {
//					if ($scope.myCalendars [i] === myCalendar) {
//						$scope.myCalendars.splice(i, 1);
//					}
//				}
//			} else {
//				$scope.myCalendar.$remove(function() {
//					$location.path('my-calendars');
//				});
//			}
//		};
//
//		// Update existing My calendar
//		$scope.update = function() {
//			var myCalendar = $scope.myCalendar;
//
//			myCalendar.$update(function() {
//				$location.path('my-calendars/' + myCalendar._id);
//			}, function(errorResponse) {
//				$scope.error = errorResponse.data.message;
//			});
//		};

		// Find a list of My calendars
		$scope.find = function() {
			 MyCalendars.get().$promise.then(function(data) {
                console.log(data);
                 $scope.myCalendars = data.items;

            });
		};

//		// Find existing My calendar
//		$scope.findOne = function() {
//			$scope.myCalendar = MyCalendars.get({
//				myCalendarId: $stateParams.myCalendarId
//			});
//		};
	}
]);