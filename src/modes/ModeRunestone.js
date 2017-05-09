import MainInterface from '../MainInterface.js';

function ModeRunestone() {

}

/**
 * Scans through the page to see if this mode is applicable
 * @return {Boolean} [true if the mode is applicable on this page]
 */
ModeRunestone.prototype.isApplicable = function() {
    console.log("Checking if ModeRunestone applicable");
    if (window.location.hostname == "interactivepython.org") {
        return true;
    }
    return false;
};

ModeRunestone.prototype.initMode = function(mainInterface) {
    /**
     * Create fullscreen overlay block to hold mainInterface
     */
    var overlay = document.createElement("div");
    document.body.appendChild(overlay);
    $(overlay).css({
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: "white",
        opacity: 0,
        visibility: "hidden",
        transition: "all .5s ease",
        "z-index": 10000
    });

    // function to close overlay
    var closeOverlay = function() {
        $(overlay).css({
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "white",
            opacity: 0,
            visibility: "hidden",
            transition: "all .5s ease",
            "z-index": 10000
        });
    };

    // button inside overlay that calls the closeOverlay function
    var closeOverlayButton = document.createElement("button");
    $(closeOverlayButton).html("X");
    $(closeOverlayButton).click(closeOverlay);
    $(overlay).prepend(closeOverlayButton);

    // function to open overlay, called by speedtype-btn created below
    var openOverlay = function() {
        $(overlay).css("opacity", 1);
        $(overlay).css("visibility", "visible");
    };

    /**
     * Init buttons
     */
    $(".highlight").each(function(index) {
        var preObj = $(this).find("pre");
        var button = document.createElement("BUTTON");
        $(button).html("SpeedType");
        $(button).addClass("speedtype-btn");
        button.addEventListener('click', function() {
            openOverlay();

            //Find code to display
            //TODO: replace dummy codeToDisplay
            var codeToDisplay = "Hello World!";
            mainInterface.setCodeToDisplay(codeToDisplay);
        }, false);

        $(this).parent().prepend(button);
        // Deprecated JQuery UI solution
        // $(button).position({
        //     my: "right top",
        //     at: "right top",
        //     of: preObj
        // });

        $(this).parent().parent().addClass("speedtype-btn-container");
    });

    document.styleSheets[0].addRule('.speedtype-btn-container .speedtype-btn','display:none');
    document.styleSheets[0].addRule('.speedtype-btn-container:hover .speedtype-btn','display:inline');
    overlay.appendChild(mainInterface.getView());
};

export default ModeRunestone;
