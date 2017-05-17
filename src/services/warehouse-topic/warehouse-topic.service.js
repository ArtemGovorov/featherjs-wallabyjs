// Initializes the `warehouse-topic` service on path `/warehouse-topic`
const createService = require('feathers-nedb');
const createModel = require('../../models/warehouse-topic.model');
const hooks = require('./warehouse-topic.hooks');
const filters = require('./warehouse-topic.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'warehouse-topic',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warehouse-topic', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('warehouse-topic');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
