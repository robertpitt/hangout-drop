/**
 * Name: Hangout Drop
 * Description: Real-time sharing application for all forms of media.
*/

goog.require("goog.dom");
goog.require("goog.style");
goog.require("drop.app")
goog.provide("drop");
goog.provide("drop.config");

/**
 * Server Based domain
*/
drop.config.base_domain = "hangoutdrop.appspot.com";

/**
 * static path
*/
drop.config.static_path = "/s/";

/**
 * Instantiate the application
*/
new drop.app();