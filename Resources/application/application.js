var APP = {};

APP.init = function() {
	var win = Ti.UI.createWindow({
		backgroundColor: "#fff"
	});

	var label = Ti.UI.createLabel({
		color: "#333",
		text: "Hello TiConf",
		font: {
			fontSize:20,
			fontFamily: "Helvetica Neue"
		},
		textAlign: "center",
		width: "auto"
	});
	win.add(label);

	win.open();
};

module.exports = APP;