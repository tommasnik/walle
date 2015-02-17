'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    gcal = require('google-calendar'),
    _ = require('lodash');

/**
 * Show the current My calendar
 */
exports.read = function(req, res) {
    res.jsonp(req.myCalendar);
};


/**
 * List of My calendars
 */
exports.list = function(req, res) {
    var accessToken = req.user.providerData.accessToken;
    console.log('getting gcal with access token:', accessToken);
    return gcal(accessToken).calendarList.list(function(err, data) {
        if (err) {
            console.log('error:', err);
            return res.status(500).send(err);
        }
        console.log('data:', data);
        res.jsonp(data);
    });
};

/**
 * My calendar middleware
 */
exports.eventsOfCalendar = function(req, res) {
    var accessToken = req.user.providerData.accessToken;
    console.log('getting events by ID:', req.myCalendar.id);
    var from = new Date();
    from.setDate(from.getDate()-1);
    var to = new Date();
    to.setDate(to.getDate()+20);
    return gcal(accessToken).events.list(req.myCalendar.id, {timeMin: from.toISOString(), timeMax: to.toISOString()}, function(err, data) {
        if (err) {
            console.log('error:', err);
            return res.status(500).send(err);
        }
        console.log('data:', data);
        res.jsonp(data);
    });
};

/**
 * My calendar middleware
 */
exports.myCalendarByID = function(req, res, next, id) {
    var accessToken = req.user.providerData.accessToken;
    console.log('getting gcal by ID:', id);
    return gcal(accessToken).calendarList.get(id, function(err, data) {
        if (err) {
            console.log('error:', err);
            return next(err);
        }
        console.log('data:', data);
        req.myCalendar = data;
        next();
    });
};

/**
 * My calendar authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.myCalendar.user.id !== req.user.id) {
        return res.status(403).send('User is not authorized');
    }
    next();
};
