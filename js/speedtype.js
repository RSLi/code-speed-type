/**
 * Author: Siwei "Robert" Li (RSLi)
 * Date: February 23rd, 2017
 * Updated: February 23rd, 2017
 *
 * TODO: be able to bind to other code pieces, to check whether code typed is consistant, and to record time used when start typing
 */

function SpeedType(options) {
    if (options) {
        this.init(options);
    }
}

SpeedType.prototype.init = function(options) {
    this.options = options;
    this.createEditor();
};

//for debug purpose
SpeedType.prototype.toString = function() {
    return '[SpeedType] - with options: ' + options;
};

//Create CodeMirror instance
SpeedType.prototype.createEditor = function() {
    this.containerDiv = document.createElement('div');
    this.editorDiv = document.createElement('div');

    //Order DOM elements
    this.options.origElem.appendChild(containerDiv);
    this.containerDiv.appendChild(this.editorDiv);

    //Call CodeMirror API to create editor object
    this.editor = CodeMirror(editorDiv, {
        lineNumbers: true,
        extraKeys: {"Tab": "indentMore", "Shift-Tab": "indentLess"}
    });
    
};
