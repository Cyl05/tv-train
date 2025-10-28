import path from 'node:path';

const filePath = '/filse/vscode/talview/training/node/app.js';

console.log("Base name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));

console.log("Joined path:", path.join('folder', 'subfolder', 'file.txt'));
