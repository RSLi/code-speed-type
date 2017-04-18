import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.js';
import 'codemirror/mode/clike/clike.js';
import MainInterface from './MainInterface.js';
import KeyBindings from './KeyBindings.js';


$(document).ready(function() {
    console.log("Document ready. SpeedType initiating");
    var mainInterface = new MainInterface({});
    KeyBindings.initKeyBinding(mainInterface);
    document.body.appendChild(mainInterface.getView());
});
