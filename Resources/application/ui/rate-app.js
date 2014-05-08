var _ = require("application/vendor/underscore");
var uiHelper = require("application/helpers/ui");

var currentRating = null;

var setRating = function(id) {
    currentRating = parseInt(id.replace("star", ""), 10) + 1;
};

exports.open = function() {
    var win = uiHelper.windowFactory({
        backgroundColor: "#fff",
        layout: "vertical"
    }, {
        onClose: function() {
            starWrapper.removeEventListener("click", onStarTap);
            button.removeEventListener('click', onButtonTap);

            win = null;
            label = null;
            button = null;
            onButtonTap = null;
            onStarTap = null;
            starWrapper = null;
            i = null;
        }
    });

    var label = uiHelper.labelFactory({
        top: "45%",
        text: "Rate my app"
    });
    win.add(label);

    var starWrapper = Ti.UI.createView({
        layout: "horizontal",
        top: "10dp",
        width: "145dp",
        height: "24dp"
    });

    win.add(starWrapper);

    for (var i = 0; i < 6; i++) {
        starWrapper.add(Ti.UI.createImageView({
            id: "star" + i,
            height: "24dp",
            width: "24dp",
            left: "5dp",
            image: "/images/star.png",
            opacity: 0.5
        }));
    }

    var onStarTap = function(e) {
        _.each(starWrapper.getChildren(), function(child) {
            child.setOpacity(0.5);
        });
        e.source.setOpacity(1);
        setRating(e.source.id);
        Ti.API.info(currentRating);
    };

    starWrapper.addEventListener("click", onStarTap);

    var button = Titanium.UI.createButton({
        title: 'Close Rating',
        top: 10,
        width: 100,
        height: 50
    });

    var onButtonTap = function() {
        win.close();
    };
    
    button.addEventListener('click', onButtonTap);

    win.add(button);

    win.open();
};