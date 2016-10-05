// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
let vscode = require( 'vscode' );

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate( context ) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log( 'ck4-test-mate" is now active!' );

    let disposable = vscode.commands.registerCommand( 'ck4-test-mate.openTest', require( './openTest' ) );

    context.subscriptions.push( disposable );
}

// this method is called when your extension is deactivated
function deactivate() {
    console.log( 'Extension deactivated' );
}

exports.activate = activate;

exports.deactivate = deactivate;