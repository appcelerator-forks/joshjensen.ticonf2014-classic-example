var social = require("dk.napp.social");

var uiHelper = require("application/helpers/ui");

var APP = {};

APP.init = function() {
    var win = uiHelper.windowFactory({
        backgroundColor: "#fff",
        layout: "vertical"
    }, {
        onClose: function() {
            win = null;
            label = null;
            button = null;
        }
    });

    var label = uiHelper.labelFactory({
        top: "45%",
        text: "Hello TiConf"
    });
    win.add(label);

    var button = Titanium.UI.createButton({
        title: 'Rate this app',
        top: 10,
        width: 100,
        height: 50
    });
    
    button.addEventListener('click', function(e) {
        require("application/ui/rate-app").open();
    });

    win.add(button);

    win.open();
};

module.exports = APP;