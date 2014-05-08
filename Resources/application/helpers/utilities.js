exports.getOrientation = function() {
    var pWidth = Ti.Platform.displayCaps.platformWidth;
    var pHeight = Ti.Platform.displayCaps.platformHeight;
    
    if (pWidth > pHeight) {
        return "landscape";
    } else {
        return "portrait";
    }
};