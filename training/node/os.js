import os from 'node:os';

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());

console.log("Free memory (MB):", (os.freemem() / 1024 / 1024).toFixed(2));

console.log("Home directory:", os.homedir());
