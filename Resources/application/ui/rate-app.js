var _ = require("application/vendor/underscore");
var uiHelper = require("application/helpers/ui");
var utilities = require("application/helpers/utilities");
var ratings = require("application/helpers/ratings");

var setRating = function(id) {
    ratings.currentRating = parseInt(id.replace("star", ""), 10) + 1;
};

exports.open = function() {
    var win = uiHelper.windowFactory({
        backgroundColor: "#fff",
        layout: "vertical"
    }, {
        onClose: function() {
            starWrapper.removeEventListener("click", onStarTap);
            button.removeEventListener('click', onButtonTap);
            Ti.Gesture.removeEventListener("orientationchange", onOrientationChange);

            win = null;
            orientationLabel = null;
            onOrientationChange = null;
            label = null;
            button = null;
            onButtonTap = null;
            onStarTap = null;
            starWrapper = null;
            i = null;
        }
    });

    var orientationLabel = uiHelper.labelFactory({
        top: "45%",
        text: "Orientation: " + utilities.getOrientation()
   });
    win.add(orientationLabel);

    var onOrientationChange = function() {
        orientationLabel.setText("Orientation: " + utilities.getOrientation());
    };

    Ti.Gesture.addEventListener("orientationchange", onOrientationChange);

    var label = uiHelper.labelFactory({
        top: "10dp",
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

    for (var i = 0; i < 5; i++) {
        starWrapper.add(Ti.UI.createImageView({
            id: "star" + i,
            height: "24dp",
            width: "24dp",
            left: "5dp",
            image: "/images/star.png",
            opacity: (ratings.currentRating - 1 === i) ? 1 : 0.5
        }));
    }

    var onStarTap = function(e) {
        _.each(starWrapper.getChildren(), function(child) {
            child.setOpacity(0.5);
        });
        e.source.setOpacity(1);
        setRating(e.source.id);
        Ti.API.info(ratings.currentRating);
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