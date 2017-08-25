var window;

function stripScripts(input) {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

const serialDoc = require("jsdom").serializeDocument;
const fs = require('fs');
const userHTML = stripScripts(fs.readFileSync(require.resolve("../index.html"), {encoding: "utf-8"}));
const userScript = fs.readFileSync(require.resolve("../main.js"), {encoding: "utf-8"});
const jsdom = require("jsdom");

// create an event emitter for log and error events
const virtualConsole = jsdom.createVirtualConsole();

// add an event emitter handler to log console from the virutal DOM
virtualConsole.on("log", function(message) {
  console.log("console.log called within virtual DOM ->", message);
});

// add an event emitter handler to log error from the virutal DOM
// all jsdomError will go here by default
virtualConsole.on("error", function(message) {
  console.log("console.error called within virtual DOM ->", message);
});

function loadWindow() {
  const document = jsdom.jsdom(userHTML, {virtualConsole});
  window = document.defaultView;
  const scriptEl = document.createElement("script");
  scriptEl.textContent = userScript;
  document
    .body
    .appendChild(scriptEl);
  return window;
}

module.exports = {
  serialDoc,
  jsdom,
  window,
  loadWindow
}
