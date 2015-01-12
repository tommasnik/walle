'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    gcal = require('google-calendar'),
    _ = require('lodash');

/**
 * Create a My calendar
 */
//exports.create = function(req, res) {
//	var myCalendar = new MyCalendar(req.body);
//	myCalendar.user = req.user;
//
//	myCalendar.save(function(err) {
//		if (err) {
//			return res.status(400).send({
//				message: errorHandler.getErrorMessage(err)
//			});
//		} else {
//			res.jsonp(myCalendar);
//		}
//	});
//};

/**
 * Show the current My calendar
 */
exports.read = function(req, res) {
    res.jsonp(req.myCalendar);
};

/**
 * Update a My calendar
 */
//exports.update = function(req, res) {
//	var myCalendar = req.myCalendar ;
//
//	myCalendar = _.extend(myCalendar , req.body);
//
//	myCalendar.save(function(err) {
//		if (err) {
//			return res.status(400).send({
//				message: errorHandler.getErrorMessage(err)
//			});
//		} else {
//			res.jsonp(myCalendar);
//		}
//	});
//};

/**
 * Delete an My calendar
 */
//exports.delete = function(req, res) {
//	var myCalendar = req.myCalendar ;
//
//	myCalendar.remove(function(err) {
//		if (err) {
//			return res.status(400).send({
//				message: errorHandler.getErrorMessage(err)
//			});
//		} else {
//			res.jsonp(myCalendar);
//		}
//	});
//};

/**
 * List of My calendars
 */
exports.list = function(req, res) {
    var accessToken = req.user.providerData.accessToken;
    console.log('getting gcal with access token:', accessToken);
    return gcal(accessToken).calendarList.list(function(err, data) {
        if (err) {
            console.log('error:', err)
            return res.status(500).send(err);
        }
        console.log('data:', data);
        res.jsonp(data);
    });
};

/**
 * My calendar middleware
 */
//exports.myCalendarByID = function(req, res, next, id) {
//	MyCalendar.findById(id).populate('user', 'displayName').exec(function(err, myCalendar) {
//		if (err) return next(err);
//		if (! myCalendar) return next(new Error('Failed to load My calendar ' + id));
//		req.myCalendar = myCalendar ;
//		next();
//	});
//};

/**
 * My calendar authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.myCalendar.user.id !== req.user.id) {
        return res.status(403).send('User is not authorized');
    }
    next();
};
