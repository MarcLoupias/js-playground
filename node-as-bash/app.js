#!/usr/bin/env node

console.log('Using file system ...');

const fs = require('fs');

let data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque ultricies, iaculis nisi eu, ' +
    'facilisis erat. Ut non semper arcu. Pellentesque facilisis, enim et sollicitudin facilisis, enim sapien placerat ' +
    'enim, vel semper diam elit et massa. Donec tempus ante sed interdum facilisis. Cras tempus nunc sed bibendum cursus. ' +
    'Proin blandit arcu vel egestas interdum. Etiam tempus ultrices massa sed auctor. Duis ultricies velit a tortor ' +
    'ornare dapibus id et augue. Cras venenatis lacus ac neque vestibulum sagittis. Cras nisl sapien, maximus ut neque ' +
    'sit amet, volutpat viverra est. Proin a condimentum ligula. Donec in gravida lorem. Sed dictum nulla vel leo auctor, ' +
    'eu congue massa egestas. Morbi sed tincidunt ipsum. ';

data += '\n\n';

data += 'Sed eu consequat felis, eget vestibulum mauris. Pellentesque habitant morbi tristique senectus et netus et ' +
    'malesuada fames ac turpis egestas. Nulla molestie at diam ut sagittis. Proin fringilla metus at commodo porttitor. ' +
    'Suspendisse finibus id risus eu tempor. Proin viverra nulla quis porttitor dignissim. Aenean pulvinar ante sit amet ' +
    'nisl rutrum, semper malesuada urna bibendum. Pellentesque tristique nibh a elit varius, eget tincidunt quam bibendum. ' +
    'In viverra nisl eget tristique vulputate. Quisque ullamcorper risus et nisl semper pretium. Praesent eu odio semper, ' +
    'elementum leo vitae, maximus dui. Sed fringilla tellus eget congue laoreet. Sed rhoncus accumsan tellus sed porta. ' +
    'Nullam blandit, felis et pretium sagittis, risus risus cursus dolor, eu rhoncus dui ligula sit amet nisl. ' +
    'Sed interdum tellus sit amet vestibulum accumsan. Quisque facilisis justo vitae diam placerat, et rhoncus metus ' +
    'rutrum. ';

// write to a new file
fs.writeFile('lorem-ipsum.txt', data, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

// success case, the file was saved
console.log('New file saved !');
});