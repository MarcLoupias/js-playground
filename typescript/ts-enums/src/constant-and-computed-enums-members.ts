'use strict';

enum CustomFileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
        // computed member
    G = "123".length
}

console.log(CustomFileAccess.None);
console.log(CustomFileAccess.Read);
console.log(CustomFileAccess.Write);
console.log(CustomFileAccess.ReadWrite);
console.log(CustomFileAccess.G);
