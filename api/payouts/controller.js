const service = require('./services');

module.exports = {
  payouts(_req) {
    const { fast, exceptionHandler } = require('fast-debugger');
    fast('FAST DEBUGGER IS WORKING');
    const { expenses } = _req.body;
    return service.payouts(expenses);
  },
};
