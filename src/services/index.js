const warehouseTopic = require('./warehouse-topic/warehouse-topic.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(warehouseTopic);
};
