import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Create a status bar item
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);

    // Update the status bar item with the project name
    function updateProjectName() {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (workspaceFolders) {
            const projectName = workspaceFolders[0].name; // Assuming we're using the first workspace folder
            statusBarItem.text = `$(file-code) ${projectName}`;
            statusBarItem.show();
        }
    }

    // Initial update
    updateProjectName();

    // Subscribe to workspace folder changes
    context.subscriptions.push(vscode.workspace.onDidChangeWorkspaceFolders(updateProjectName));
}

export function deactivate() {}
