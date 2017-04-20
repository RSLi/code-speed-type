import MainInterface from '../MainInterface.js';

function ModeGithubRaw() {

}

/**
 * Scans through the page to see if this mode is applicable
 * @return {Boolean} [true if the mode is applicable on this page]
 */
ModeGithubRaw.prototype.isApplicable = function() {
    console.log("Checking if ModeGithubRaw applicable");
    if (window.location.hostname == "raw.githubusercontent.com") {
        return true;
    }
    return false;
};

ModeGithubRaw.prototype.initMode = function(mainInterface) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", window.location.href, false); // synchronous
    xmlHttp.send(null);
    var codeToDisplay = xmlHttp.responseText;
    //TODO: Validate input
    mainInterface.setCodeToDisplay(codeToDisplay);
    $(document.body).empty();
    document.body.appendChild(mainInterface.getView());
};

export default ModeGithubRaw;
