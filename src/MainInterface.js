function MainInterface(options) {
    this.options = options;
    this.topContainer = this.createTopContainer();
    this.switchCount = 0;
    this.editorState = {};
    this.editorState.typing = false;
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
    this.leftEditorContainer = leftEditorContainer;
    this.rightEditorContainer = rightEditorContainer;
    tableMainEditors.appendChild(leftEditorContainer);
    tableMainEditors.appendChild(rightEditorContainer);
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
    this.leftEditor = leftEditor;
    this.rightEditor = rightEditor;

    //TODO: fix styling issue
    $(".CodeMirror").css('font-size',"20pt"); // make font small to fit more code in one screen
    $(leftEditorContainer).css("height", $(window).height() + "px");
    $(rightEditorContainer).css("height", $(window).height() + "px");
    $(".CodeMirror").css("height", $(window).height() + "px");
    leftEditor.setSize("100%", "100%");
    rightEditor.setSize("100%", "100%");
    $(rightEditorContainer).hide(); // hide coding window initially
    return topContainer;
};

MainInterface.prototype.getView = function() {
    return this.topContainer;
};

MainInterface.prototype.switchPanel = function() {
    if (this.editorState.typing) {
        $(this.rightEditorContainer).hide();
        $(this.leftEditorContainer).show();
        this.editorState.typing = false;
        this.switchCount = this.switchCount + 1;
        console.log("switchCount: " + this.switchCount);
        this.leftEditor.refresh();
        this.leftEditor.focus();
    } else {
        $(this.leftEditorContainer).hide();
        $(this.rightEditorContainer).show();
        this.editorState.typing = true;
        this.rightEditor.refresh();
        this.rightEditor.focus();
    }

}

module.exports = MainInterface;
