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
	 * Hangout URL
	 * @type {String|null}
	*/
	this.hangoutUrl = null;

	/**
	 * Hangout ID
	 * @type {String|null}
	*/
	this.hangoutId = null;

	/**
	 * Hangout Locale
	 * @type {String|null}
	*/
	this.hangoutLocale = null;

	/**
	 * Local participants GUID
	 * @type {String|null}
	*/
	this.localParticipantID = null;

	/**
	 * Participants container
	 * @type {Array.<gapi.hangout.Participant>}
	*/
	this.participants = [];

	/**
	 * Enabled participants container
	 * @type {Array.<gapi.hangout.Participant>}
	*/
	this.enabledParticipants = [];

	/**
	 * Application public
	 * @type {Booleon}
	*/
	this.isPublic = false;

	/**
	 * Application Visibilty
	 * @type {Booleon}
	*/
	this.appVisable = true;

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
	if(!ApiReadyEvent.isApiReady)
	{
		return;
	}

	/**
	 * Get the intial set of data from gapi
	*/
	try{
		/**
		 * Set the hangout URL to the outer context
		*/
		this.hangoutUrl = gapi.hangout.getHangoutUrl();

		/**
			 * Set the hangout ID to the outer context
		*/
		this.hangoutId = gapi.hangout.getHangoutId();

		/**
		 * Get the current locale
		*/
		this.hangoutLocale = gapi.hangout.getLocale();

		/**
		 * Get the locale participants GUID
		*/
		this.localParticipantID = gapi.hangout.getParticipantId();

		/**
		 * Get the current participants array
		*/
		this.participants = gapi.hangout.getParticipants();

		/**
		 * Get the current participants that have the enabled the application.
		*/
		this.enabledParticipants = gapi.hangout.getEnabledParticipants();

		/**
		 * Fetch the current public state
		*/
		this.isPublic = gapi.hangout.isPublic();
	}catch(e){
		console.error("Unable to collect metadata from gapi", e);
	}

	try{
		/**
		 * Bind app visibility event
		*/
		gapi.hangout.onAppVisible.add(goog.bind(this.onAppVisible, this));

		/**
		 * Monitor the participants
		*/
		gapi.hangout.onParticipantsChanged.add(goog.bind(this.onParticipantsChanged, this));

		/**
		 * Monitor the enabled participants
		*/
		gapi.hangout.onEnabledParticipantsChanged.add(goog.bind(this.onEnabledParticipantsChanged, this));

		/**
		 * Detect of the publication of the hangout has changed
		*/
		gapi.hangout.onPublicChanged.add(goog.bind(this.onPublicChanged, this));
	}catch(e){
		console.error("Unable to bind gapi events", e);
	}
}

/**
 * Fired when app visibily is changed
 * @param {gapi.hangout.AppVisibleEvent} AppVisibleEvent
*/
drop.app.prototype.onAppVisible = function(AppVisibleEvent)
{
	this.appVisable = AppVisibleEvent.isAppVisible;
}

/**
 * Fired when a user leaves or enters the application
 * @param {gapi.hangout.ParticipantsChangedEvent} ParticipantsChangedEvent
*/
drop.app.prototype.onParticipantsChanged = function(ParticipantsChangedEvent)
{
	this.participants = ParticipantsChangedEvent.participants;
}

/**
 * Fired when a user leaves or enters the application
 * @param {gapi.hangout.EnabledParticipantsChangedEvent} EnabledParticipantsChangedEvent
*/
drop.app.prototype.onEnabledParticipantsChanged = function(EnabledParticipantsChangedEvent)
{
	this.enabledParticipants = EnabledParticipantsChangedEvent.enabledParticipants;
}

/**
 * Fired when hangouts visibily is changed
 * @param {gapi.hangout.PublicChangedEvent} AppVisibleEvent
*/
drop.app.prototype.onPublicChanged = function(PublicChangedEvent)
{
	this.isPublic = AppVisibleEvent.isPublic;
}
