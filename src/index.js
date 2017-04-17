import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.js';
import 'codemirror/mode/clike/clike.js';
import MainInterface from './MainInterface.js';


$(document).ready(function() {
    console.log("Document ready. SpeedType initiating");
    var mainInterface = new MainInterface({});
    document.body.appendChild(mainInterface.getView());
});
