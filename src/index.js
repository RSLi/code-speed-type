import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.js';
import 'codemirror/mode/clike/clike.js';
import MainInterface from './MainInterface.js';
import KeyBindings from './KeyBindings.js';
import ModeGithubRaw from './modes/ModeGithubRaw.js';


$(document).ready(function() {
    console.log("Document ready. SpeedType initiating");
    var mainInterface = new MainInterface({});
    KeyBindings.initKeyBinding(mainInterface);
    prepareSpeedType(mainInterface);
});

function prepareSpeedType(mainInterface) {
    console.log("Checking url: " + window.location.hostname);
    var mode = new ModeGithubRaw();
    if (mode.isApplicable()) {
        mode.initMode(mainInterface);
    }
}
