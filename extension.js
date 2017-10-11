
const vscode = require( 'vscode' );

function activate( context ) {
    let disposable = vscode.commands.registerCommand( 'ck4-test-mate.openTest', require( './openTest' ) );
    context.subscriptions.push( disposable );
}

// this method is called when your extension is deactivated
function deactivate() { }

exports.activate = activate;
exports.deactivate = deactivate;