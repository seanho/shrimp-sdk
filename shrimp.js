var request = require('request');

function alertProxy(message) {
  if (global.alert) {
    global.alert(message);
  } else {
    console.log(message);
  }
}

function debugProxy(data) {
  if (global.debug) {
    global.debug(data);
  } else {
    console.log(data);
  }
}

function requestProxy(options, callback) {
  if (global.request) {
    global.request(options, callback);
  } else {
    request(options, callback);
  }
}

function showProxy(data) {
  if (global.show) {
    global.show(data);
  } else {
    console.log(data);
  }
}

function setEntry(func) {
  global.entry = func;
}

module.exports = {
  alert: alertProxy,
  debug: debugProxy,
  request: requestProxy,
  show: showProxy,
  setEntry: setEntry
};
