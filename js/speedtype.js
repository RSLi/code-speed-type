/**
 * Author: Siwei "Robert" Li (RSLi)
 * Date: February 23rd, 2017
 * Updated: February 23rd, 2017
 */

//TODO: Support language other than java
//TODO: be able to bind to other code pieces, to check whether code typed is consistant
//TODO: record time used when start typing

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
