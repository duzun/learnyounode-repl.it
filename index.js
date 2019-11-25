/**
 * Trying to make `learnyounode` runnable on repl.it
 * 
 * Open http://learnyounode.duzun.repl.run/
 */

/*jshint esversion: 9*/

const { spawn } = require('child_process');
const which = require('which');
const npmWhich = require('npm-which')(process.cwd());

let proc = spawn(npmWhich.sync('learnyounode'), { stdio: 'inherit' });

// When the learnyounode process exits, try to start a SHELL
proc.on('exit', () => {
    let shell = getShellPath() || '/bin/sh';
    let args = [];
    if(getShellPath.l) args.push('-l');
    console.log(shell);
    spawn(shell, args, { stdio: 'inherit' });
});

// Find the path to a shell binary
function getShellPath() {
    let shell = process.env.ComSpec || (getShellPath.l=true,process.env.SHELL);
    if(!shell) ['zsh', 'bash', 'sh'].some((name) => {
        try { 
            shell = which.sync(name);
            return !!shell;
        } catch(err) {}
    });
    return shell;
}