var _ = require("application/vendor/underscore");

exports.windowFactory = function(_params) {
	var win = Ti.UI.createWindow(_.extend(_params, {}));
	return win;
};

exports.labelFactory = function(_params) {
	var label = Ti.UI.createLabel(_.extend(_params, {
		color: "#333",
		font: {
			fontSize:20,
			fontFamily: "Helvetica Neue"
		},
		textAlign: "center",
		width: "auto"
	}));

	return label;
};