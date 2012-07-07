var gapi = {};
gapi.client;
gapi.client.load = function(name, version, opt_callback, opt_root) {};
gapi.client.request = function(pathOrArgs) {};
gapi.client.register = function(method, opt_params) {};
gapi.client.setApiVersions = function(obj) {};
gapi.client.setApiKey = function(developerKey) {};
gapi.client.HttpRequest = function(pathOrArgs) {};
gapi.client.HttpRequest.prototype.execute = function(callback) {};
gapi.client.HttpRequest.RequestParams;
gapi.auth;
gapi.auth.authorize = function(opt_params, opt_callback) {};
gapi.auth.init = function(relayReadyContinuation) {};
gapi.auth.getToken = function(opt_key, opt_returnErrors) {};
gapi.auth.setToken = function(tokenOrKey, opt_token, opt_write) {};

gapi.hangout = {};
gapi.hangout.av = {};
gapi.hangout.av.effects = {};
gapi.hangout.data = {};
gapi.hangout.layout = {};
gapi.hangout.onair = {};
gapi.hangout.Participant = function() {
  this.id = '';
  this.hasMicrophone = false;
  this.hasCamera = false;
  this.hasAppEnabled = false;
  this.displayIndex = null;
  this.person = {};
  this.person.id = '';
  this.person.displayName = '';
  this.person.image = {};
  this.person.image.url = '';
};
gapi.hangout.getEnabledParticipants = function() {};
gapi.hangout.getHangoutUrl = function() {};
gapi.hangout.getHangoutId = function() {};
gapi.hangout.getLocale = function() {};
gapi.hangout.getStartData = function() {};
gapi.hangout.getParticipantById = function(participantId) {};
gapi.hangout.getParticipantId = function() {};
gapi.hangout.getParticipants = function() {};
gapi.hangout.hideApp = function() {};
gapi.hangout.isApiReady = function() {};
gapi.hangout.isAppVisible = function() {};
gapi.hangout.isPublic = function() {};
gapi.hangout.ApiReadyEvent = function() {
  this.isApiReady = false;
};
gapi.hangout.onApiReady = {};
gapi.hangout.onApiReady.add = function(callback) {};
gapi.hangout.onApiReady.remove = function(callback) {};
gapi.hangout.ParticipantsDisabledEvent = function() {
  this.disabledParticipants = [];
};
gapi.hangout.onParticipantsDisabled = {};
gapi.hangout.onParticipantsDisabled.add = function(callback) {};
gapi.hangout.onParticipantsDisabled.remove = function(callback) {};
gapi.hangout.ParticipantsEnabledEvent = function() {
  this.enabledParticipants = [];
};
gapi.hangout.onParticipantsEnabled = {};
gapi.hangout.onParticipantsEnabled.add = function(callback) {};
gapi.hangout.onParticipantsEnabled.remove = function(callback) {};
gapi.hangout.AppVisibleEvent = function() {
  this.isAppVisible = false;
};
gapi.hangout.onAppVisible = {};
gapi.hangout.onAppVisible.add = function(callback) {};
gapi.hangout.onAppVisible.remove = function(callback) {};
gapi.hangout.PublicChangedEvent = function() {
  this.isPublic = false;
};
gapi.hangout.onPublicChanged = {};
gapi.hangout.onPublicChanged.add = function(callback) {};
gapi.hangout.onPublicChanged.remove = function(callback) {};
gapi.hangout.EnabledParticipantsChangedEvent = function() {
  this.enabledParticipants = [];
};
gapi.hangout.onEnabledParticipantsChanged = {};
gapi.hangout.onEnabledParticipantsChanged.add = function(callback) {};
gapi.hangout.onEnabledParticipantsChanged.remove = function(callback) {};
gapi.hangout.ParticipantsAddedEvent = function() {
  this.addedParticipants = [];
};
gapi.hangout.onParticipantsAdded = {};
gapi.hangout.onParticipantsAdded.add = function(callback) {};
gapi.hangout.onParticipantsAdded.remove = function(callback) {};
gapi.hangout.ParticipantsChangedEvent = function() {
  this.participants = [];
};
gapi.hangout.onParticipantsChanged = {};
gapi.hangout.onParticipantsChanged.add = function(callback) {};
gapi.hangout.onParticipantsChanged.remove = function(callback) {};
gapi.hangout.ParticipantsRemovedEvent = function() {
  this.removedParticipants = [];
};
gapi.hangout.onParticipantsRemoved = {};
gapi.hangout.onParticipantsRemoved.add = function(callback) {};
gapi.hangout.onParticipantsRemoved.remove = function(callback) {};
gapi.hangout.av.clearAvatar = function(participantId) {};
gapi.hangout.av.getParticipantAudioLevel = function(participantId) {};
gapi.hangout.av.getAvatar = function(participantId) {};
gapi.hangout.av.getCameraMute = function() {};
gapi.hangout.av.getMicrophoneMute = function() {};
gapi.hangout.av.getParticipantVolume = function(participantId) {};
gapi.hangout.av.getVolumes = function() {};
gapi.hangout.av.hasCamera = function() {};
gapi.hangout.av.hasMicrophone = function() {};
gapi.hangout.av.hasSpeakers = function() {};
gapi.hangout.av.isParticipantAudible = function(participantId) {};
gapi.hangout.av.isParticipantVisible = function(participantId) {};
gapi.hangout.av.CameraMuteEvent = function() {
  this.isCameraMute = false;
};
gapi.hangout.av.onCameraMute = {};
gapi.hangout.av.onCameraMute.add = function(callback) {};
gapi.hangout.av.onCameraMute.remove = function(callback) {};
gapi.hangout.av.HasCameraEvent = function() {
  this.hasCamera = false;
};
gapi.hangout.av.onHasCamera = {};
gapi.hangout.av.onHasCamera.add = function(callback) {};
gapi.hangout.av.onHasCamera.remove = function(callback) {};
gapi.hangout.av.HasMicrophoneEvent = function() {
  this.hasMicrophone = false;
};
gapi.hangout.av.onHasMicrophone = {};
gapi.hangout.av.onHasMicrophone.add = function(callback) {};
gapi.hangout.av.onHasMicrophone.remove = function(callback) {};
gapi.hangout.av.HasSpeakersEvent = function() {
  this.hasSpeakers = false;
};
gapi.hangout.av.onHasSpeakers = {};
gapi.hangout.av.onHasSpeakers.add = function(callback) {};
gapi.hangout.av.onHasSpeakers.remove = function(callback) {};
gapi.hangout.av.MicrophoneMuteEvent = function() {
  this.isMicrophoneMute = false;
};
gapi.hangout.av.onMicrophoneMute = {};
gapi.hangout.av.onMicrophoneMute.add = function(callback) {};
gapi.hangout.av.onMicrophoneMute.remove = function(callback) {};
gapi.hangout.av.VolumesChangedEvent = function() {
  this.volumes = {};
};
gapi.hangout.av.onVolumesChanged = {};
gapi.hangout.av.onVolumesChanged.add = function(callback) {};
gapi.hangout.av.onVolumesChanged.remove = function(callback) {};
gapi.hangout.av.requestParticipantMicrophoneMute = function(participantId) {};
gapi.hangout.av.setParticipantAudioLevel = function(participantId, audioLevel) {
};
gapi.hangout.av.setAvatar = function(participantId, imageUrl) {};
gapi.hangout.av.setCameraMute = function(muted) {};
gapi.hangout.av.clearCameraMute = function() {};
gapi.hangout.av.setMicrophoneMute = function(muted) {};
gapi.hangout.av.clearMicrophoneMute = function() {};
gapi.hangout.av.setParticipantAudible = function(participantId, audible) {};
gapi.hangout.av.setParticipantVisible = function(participantId, visible) {};
gapi.hangout.av.effects.AudioResource = function() {};
gapi.hangout.av.effects.AudioResource.prototype.createSound =
    function(opt_params) {};
gapi.hangout.av.effects.AudioResource.prototype.getUrl = function() {};
gapi.hangout.av.effects.AudioResource.prototype.play = function(opt_params) {};
gapi.hangout.av.effects.FaceTrackingData = function() {
  this.hasFace;
  this.leftEye;
  this.leftEyebrowLeft;
  this.leftEyebrowRight;
  this.lowerLip;
  this.mouthCenter;
  this.mouthLeft;
  this.mouthRight;
  this.noseRoot;
  this.noseTip;
  this.pan;
  this.rightEye;
  this.rightEyebrowLeft;
  this.rightEyebrowRight;
  this.roll;
  this.tilt;
  this.upperLip;
};
gapi.hangout.av.effects.onFaceTrackingDataChanged = {};
gapi.hangout.av.effects.onFaceTrackingDataChanged.add = function(callback) {};
gapi.hangout.av.effects.onFaceTrackingDataChanged.remove =
    function(callback) {};
gapi.hangout.av.effects.FaceTrackingFeature = {
  LEFT_EYE: 'left_eye_center',
  LEFT_EYEBROW_LEFT: 'left_eyebrow_left',
  LEFT_EYEBROW_RIGHT: 'left_eyebrow_right',
  LOWER_LIP: 'lip_lower',
  MOUTH_CENTER: 'mouth_center',
  MOUTH_LEFT: 'mouth_left',
  MOUTH_RIGHT: 'mouth_right',
  NOSE_ROOT: 'nose_root',
  NOSE_TIP: 'nose_tip',
  RIGHT_EYE: 'right_eye_center',
  RIGHT_EYEBROW_LEFT: 'right_eyebrow_left',
  RIGHT_EYEBROW_RIGHT: 'right_eyebrow_right',
  UPPER_LIP: 'lip_upper'
};
gapi.hangout.av.effects.FaceTrackingOverlay = function() {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.getImageResource =
    function() {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.getOffset = function() {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.getRotateWithFace =
    function() {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.getRotation =
    function() {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.getScale = function() {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.getScaleWithFace =
    function() {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.getTrackingFeature =
    function() {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.isVisible = function() {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.setOffset =
    function(value, opt_y) {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.setRotateWithFace =
    function(shouldRotate) {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.setRotation =
    function(rotation) {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.setScale =
    function(scale) {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.setScaleWithFace =
    function(shouldScale) {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.setTrackingFeature =
    function(feature) {};
gapi.hangout.av.effects.FaceTrackingOverlay.prototype.setVisible =
    function(visible) {};
gapi.hangout.av.effects.ImageResource = function() {};
gapi.hangout.av.effects.ImageResource.prototype.createFaceTrackingOverlay =
    function(opt_params) {};
gapi.hangout.av.effects.ImageResource.prototype.createOverlay =
    function(opt_params) {};
gapi.hangout.av.effects.ImageResource.prototype.getUrl = function() {};
gapi.hangout.av.effects.ImageResource.prototype.showFaceTrackingOverlay =
    function(opt_params) {};
gapi.hangout.av.effects.ImageResource.prototype.showOverlay =
    function(opt_params) {};
gapi.hangout.av.effects.Overlay = function() {};
gapi.hangout.av.effects.Overlay.prototype.getImageResource = function() {};
gapi.hangout.av.effects.Overlay.prototype.getPosition = function() {};
gapi.hangout.av.effects.Overlay.prototype.getRotation = function() {};
gapi.hangout.av.effects.Overlay.prototype.getScale = function() {};
gapi.hangout.av.effects.Overlay.prototype.isVisible = function() {};
gapi.hangout.av.effects.Overlay.prototype.setPosition =
    function(value, opt_y) {};
gapi.hangout.av.effects.Overlay.prototype.setRotation = function(rotation) {};
gapi.hangout.av.effects.Overlay.prototype.setScale =
    function(value, opt_reference) {};
gapi.hangout.av.effects.Overlay.prototype.setVisible = function(visible) {};
gapi.hangout.av.effects.ScaleReference = {
  HEIGHT: 'height',
  WIDTH: 'width'
};
gapi.hangout.av.effects.Sound = function() {};
gapi.hangout.av.effects.Sound.prototype.getAudioResource = function() {};
gapi.hangout.av.effects.Sound.prototype.getVolume = function() {};
gapi.hangout.av.effects.Sound.prototype.isLooped = function() {};
gapi.hangout.av.effects.Sound.prototype.play = function() {};
gapi.hangout.av.effects.Sound.prototype.setLoop = function(loop) {};
gapi.hangout.av.effects.Sound.prototype.setVolume = function(volume) {};
gapi.hangout.av.effects.Sound.prototype.stop = function() {};
gapi.hangout.av.effects.createAudioResource = function(url) {};
gapi.hangout.av.effects.createImageResource = function(url) {};
gapi.hangout.data.clearValue = function(key) {};
gapi.hangout.data.getKeys = function() {};
gapi.hangout.data.getValue = function(key) {};
gapi.hangout.data.getState = function() {};
gapi.hangout.data.getStateMetadata = function() {};
gapi.hangout.data.setValue = function(key, value) {};
gapi.hangout.data.StateChangedEvent = function() {
  this.addedKeys = [];
  this.metadata = {};
  this.removedKeys = [];
  this.state = {};
};
gapi.hangout.data.onStateChanged = {};
gapi.hangout.data.onStateChanged.add = function(callback) {};
gapi.hangout.data.onStateChanged.remove = function(callback) {};
gapi.hangout.data.submitDelta = function(opt_updates, opt_removes) {};
gapi.hangout.data.MessageReceivedEvent = function() {
  this.senderId = '';
  this.message = '';
};
gapi.hangout.data.onMessageReceived = {};
gapi.hangout.data.onMessageReceived.add = function(callback) {};
gapi.hangout.data.onMessageReceived.remove = function(callback) {};
gapi.hangout.data.sendMessage = function(message) {};
gapi.hangout.layout.createParticipantVideoFeed = function(participantId) {};
gapi.hangout.layout.dismissNotice = function() {};
gapi.hangout.layout.displayNotice = function(message, opt_permanent) {};
gapi.hangout.layout.getDefaultVideoFeed = function() {};
gapi.hangout.layout.getVideoCanvas = function() {};
gapi.hangout.layout.hasNotice = function() {};
gapi.hangout.layout.isChatPaneVisible = function() {};
gapi.hangout.layout.ChatPaneVisibleEvent = function() {
  this.isChatPaneVisible = false;
};
gapi.hangout.layout.onChatPaneVisible = {};
gapi.hangout.layout.onChatPaneVisible.add = function(callback) {};
gapi.hangout.layout.onChatPaneVisible.remove = function(callback) {};
gapi.hangout.layout.HasNoticeEvent = function() {
  this.hasNotice = false;
};
gapi.hangout.layout.onHasNotice = {};
gapi.hangout.layout.onHasNotice.add = function(callback) {};
gapi.hangout.layout.onHasNotice.remove = function(callback) {};
gapi.hangout.layout.setChatPaneVisible = function(visible) {};
gapi.hangout.layout.VideoCanvas = function() {};
gapi.hangout.layout.VideoCanvas.prototype.getAspectRatio = function() {};
gapi.hangout.layout.VideoCanvas.prototype.getHeight = function() {};
gapi.hangout.layout.VideoCanvas.prototype.getPosition = function() {};
gapi.hangout.layout.VideoCanvas.prototype.getSize = function() {};
gapi.hangout.layout.VideoCanvas.prototype.getWidth = function() {};
gapi.hangout.layout.VideoCanvas.prototype.getVideoFeed = function() {};
gapi.hangout.layout.VideoCanvas.prototype.isVisible = function() {};
gapi.hangout.layout.VideoCanvas.prototype.setHeight =
    function(height) {};
gapi.hangout.layout.VideoCanvas.prototype.setPosition =
    function(value, opt_top) {};
gapi.hangout.layout.VideoCanvas.prototype.setVideoFeed = function(feed) {};
gapi.hangout.layout.VideoCanvas.prototype.setVisible = function(visible) {};
gapi.hangout.layout.VideoCanvas.prototype.setWidth =
    function(width) {};
gapi.hangout.layout.DisplayedParticipantChangedEvent =
    function() {
  this.displayedParticipant = '';
};
gapi.hangout.layout.DefaultVideoFeed = function() {};
gapi.hangout.layout.DefaultVideoFeed.prototype.onDisplayedParticipantChanged = {};
gapi.hangout.layout.DefaultVideoFeed.prototype.onDisplayedParticipantChanged.add =
    function(callback) {};
gapi.hangout.layout.DefaultVideoFeed.prototype.onDisplayedParticipantChanged.remove =
    function(callback) {};
gapi.hangout.layout.VideoFeed = function() {};
gapi.hangout.layout.VideoFeed.prototype.getDisplayedParticipant =
    function() {};
gapi.hangout.onair.isOnAirHangout = function() {};
gapi.hangout.onair.isBroadcasting = function() {};
gapi.hangout.onair.BroadcastingChangedEvent = function() {
  this.isBroadcasting = false;
};
gapi.hangout.onair.onBroadcastingChanged = {};
gapi.hangout.onair.onBroadcastingChanged.add = function(callback) {};
gapi.hangout.onair.onBroadcastingChanged.remove = function(callback) {};