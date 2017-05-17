const assert = require('assert');
const app = require('../../src/app');

describe('\'warehouse-topic\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse-topic');

    assert.ok(service, 'Registered the service');
  });
});
