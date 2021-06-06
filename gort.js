// gort

import MemoryStream from 'memory-stream';

const example = {
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Program",
            "program": "${workspaceFolder}/index.js",
            "request": "launch",
            "skipFiles": [ "<node_internals>/**" ],
            "type": "pwa-node"
        },
        {
            "type": "pwa-node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [ "<node_internals>/**" ],
            "program": "${workspaceFolder}\\index.js"
        }
    ]
} 



// controls use of C1 control characters
export const C1 = false    

export const APC = C1 ? "\x9F" : "\x1B\x5F"
export const ST =  C1 ? "\x9C" : "\x1B\x5C"

function safeString(string) {
    return JSON.stringify(string);
}

export function stringify( obj, options = {} ) {
    const stream = new MemoryStream()
        .on('finish', x => console.log(stream.toString()));
    
    if (Array.isArray(obj)) {
        const len = obj.length;
        stream.write(len.toString() + '[ ');
        obj.forEach(value => stringify( value ))
        stream.write( '] ');
        return stream.toString();
    }
}

const x = stringify( [1, 2, 3, "jeran"] )

// console.log(`Hello world${APC}{0: good}${ST}!`)
