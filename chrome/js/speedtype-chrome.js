/**
 * Author: Siwei "Robert" Li (RSLi)
 * Scanning code on web to create speed code typing practice!
 */

function SpeedType(options) {
    if (options) {
        this.init(options);
    }
}

SpeedType.prototype.init = function(options) {
    this.options = options;
    if (options.language) {
        this.language = options.language;
    } else {
        this.language = "clike";
    }
    this.createEditor();

    //if passed in origElem to be appended, replace it
    if (this.options.origElem) {
        this.appendElement(this.options.origElem);
    }

    this.editor.refresh();
};

//for debug purpose
SpeedType.prototype.toString = function() {
    return '[SpeedType] - with options: ' + options;
};

//Create CodeMirror instance within wrapper elements
SpeedType.prototype.createEditor = function() {
    this.containerDiv = document.createElement('div');
    this.editorDiv = document.createElement('div');

    //Order DOM elements
    this.containerDiv.appendChild(this.editorDiv);

    //Call CodeMirror API to create editor object
    this.editor = CodeMirror(this.editorDiv, {
        value: "",
        lineNumbers: true,
        mode: this.language,
        theme: "base16-light",
        indentUnit: 4,
        matchBrackets: true,
        autoMatchParens: true,
        extraKeys: {"Tab": "indentMore", "Shift-Tab": "indentLess"}
    });

    return this.containerDiv;
};

SpeedType.prototype.appendElement = function(elem) {
    elem.appendChild(this.containerDiv);
};

/**
 * Send code pieces through post request to a remote server's implementation of SpeedType
 */
SpeedType.remoteDisplay = function(codeString, remoteURL, options) {
    var form = document.createElement("FORM");

    var field_code = document.createElement("input");
    field_code.setAttribute("type", "hidden");
    field_code.setAttribute("name", 'content');
    field_code.setAttribute("value", codeString);

    var field_options = document.createElement("input");
    field_options.setAttribute("type", "hidden");
    field_options.setAttribute("name", 'options');
    field_options.setAttribute("value", options);

    form.appendChild(field_code);
    form.appendChild(field_options);

    form.method = 'post';
    form.action = remoteURL;

    document.body.appendChild(form);
    form.submit();
};

/**
 * Display Standard SpeedType from Standard Sphinx code-block/high-light directive
 * TODO: Modal option for smaller screen
 * TODO: Verticle option for longer code pieces
 */
SpeedType.sphinxDisplay = function(preObj, options) {
    speedType = new SpeedType(options);
    $(preObj).parent().append(speedType.containerDiv);
};

/**
 * Create button on each Sphinx code-block that can display SpeedType
 */
SpeedType.sphinxPageInit = function() {
    $(".highlight").each(function(index) {
        var preObj = $(this).find("pre");
        var button = document.createElement("BUTTON");
        $(button).html("SpeedType");
        button.addEventListener('click', function() {
            SpeedType.sphinxDisplay(preObj, {
                'language': 'text/x-java' //TODO: Automatic language detection
            });
        }, false);

        $(this).parent().prepend(button);
        $(button).position({
            my: "right top",
            at: "right top",
            of: preObj
        })
    });
};

/**
 * Execute initialization method
 */
$(document).ready(SpeedType.sphinxPageInit);
