/**
 * TODO: Keybindings initialized within MainInterface
 */
import MainInterface from './MainInterface.js';

var KeyBindings = {
    initKeyBinding: function(mainInterface) {
        if (!(mainInterface instanceof MainInterface)) {
            throw "initKeyBinding missing MainInterface instance";
        }
        var keyBindingSwitchPanel = function(e) {
            if (e.ctrlKey) {
                mainInterface.switchPanel();
            }
        };
        document.addEventListener('keydown', keyBindingSwitchPanel, false);
    }
};

export default KeyBindings;
