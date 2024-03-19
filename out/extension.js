"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
var vscode = require("vscode");
function activate(context) {
    // Create a status bar item
    var statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    // Update the status bar item with the project name
    function updateProjectName() {
        var workspaceFolders = vscode.workspace.workspaceFolders;
        if (workspaceFolders) {
            var projectName = workspaceFolders[0].name; // Assuming we're using the first workspace folder
            statusBarItem.text = "$(file-code) ".concat(projectName);
            statusBarItem.show();
        }
    }
    // Initial update
    updateProjectName();
    // Subscribe to workspace folder changes
    context.subscriptions.push(vscode.workspace.onDidChangeWorkspaceFolders(updateProjectName));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
