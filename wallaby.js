module.exports = function () {
  return {
    files: [
      'src/**/*.js'
    ],

    tests: [
      'test/**/*test.js'
    ],

    setup: function () {
        var chai = require('chai');
        var chaiAsPromise = require('chai-as-promised');
        chai.use(chaiAsPromise);
        global.expect = chai.expect;
        global.assert = chai.assert;
    },

    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
