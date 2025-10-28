import { log } from "./logger.js";

console.log("Hello, world");

console.log("Arguments:", process.argv.slice(2));

setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);

log("Hello from module");