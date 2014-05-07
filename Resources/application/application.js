var social = require("dk.napp.social");

var uiHelper = require("application/helpers/ui");

var APP = {};

APP.init = function() {
	var win = uiHelper.windowFactory({
		backgroundColor: "#fff"
	}, {
		onClose: function() {
			win = null;
			label = null;
		}
	});

	var label = uiHelper.labelFactory({
		text: "Hello TiConf"
	});
	win.add(label);

	win.open();
};

module.exports = APP;