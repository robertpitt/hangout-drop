/**
 * Name: Hangout Drop
 * Description: Real-time sharing application for all forms of media.
*/

goog.provide("drop.app");

/**
 * Drop Application, secondry entry point
 * @constructor
*/
drop.app = function()
{
	/**
	 * Bind {gapi.hangout.ApiReadyEvent} event
	*/
	gapi.hangout.onApiReady.add(goog.bind(this.onApiReady, this));
}

/**
 * @param {gapi.hangout.ApiReadyEvent} ApiReadyEvent
*/
drop.app.prototype.onApiReady = function(ApiReadyEvent)
{
	if(ApiReadyEvent.isApiReady)
	{
	}
}