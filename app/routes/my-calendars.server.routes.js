'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var myCalendars = require('../../app/controllers/my-calendars.server.controller');

	// My calendars Routes
    app.route('/my-calendars')
        .get(myCalendars.list);
//		.post(users.requiresLogin, myCalendars.create);

	app.route('/my-calendars/:myCalendarId')
		.get(myCalendars.read)
//		.put(users.requiresLogin, myCalendars.hasAuthorization, myCalendars.update)
//		.delete(users.requiresLogin, myCalendars.hasAuthorization, myCalendars.delete);

    app.route('/my-calendars/:myCalendarId/events')
        .get(myCalendars.eventsOfCalendar)

	// Finish by binding the My calendar middleware
	app.param('myCalendarId', myCalendars.myCalendarByID);
};
