function MainInterface(options) {
    this.options = options;
    this.topContainer = this.createTopContainer();
}

MainInterface.prototype.createTopContainer = function() {
    //create top level container DOM nodes
    var topContainer = document.createElement("div");
    var tableContainer = document.createElement("table");
    topContainer.appendChild(tableContainer);
    $(topContainer).css("width","100%");
    $(tableContainer).css("width","100%");
    //construct tableContainer <table> with rows
    var tableToolBar = document.createElement("tr");
    var tableMainEditors = document.createElement("tr");
    tableContainer.appendChild(tableToolBar);
    tableContainer.appendChild(tableMainEditors);
    //construct tableMainEditors <tr> with left and right editor <td> containers
    var leftEditorContainer = document.createElement("td");
    var rightEditorContainer = document.createElement("td");
    tableMainEditors.appendChild(leftEditorContainer);
    tableMainEditors.appendChild(rightEditorContainer);
    $(leftEditorContainer).css("width", $(document).width() / 2 + "px");
    $(rightEditorContainer).css("width", $(document).width() / 2 + "px");
    //prepare CodeMirror instances
    var leftEditor = CodeMirror(leftEditorContainer, {
        mode: "text/x-java",
        theme: "monokai",
        lineNumbers: true
    });
    var rightEditor = CodeMirror(rightEditorContainer, {
        mode: "text/x-java",
        theme: "monokai",
        lineNumbers: true
    });
    leftEditor.refresh();
    rightEditor.refresh();
    return topContainer;
};

MainInterface.prototype.getView = function() {
    return this.topContainer;
};

module.exports = MainInterface;
