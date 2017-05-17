// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const CryptoJS = require('crypto-js');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    let encrypted = CryptoJS.AES.encrypt(JSON.stringify(hook.data), 'VGM');
    hook.data = encrypted.toString();
    return Promise.resolve(hook);
  };
};
