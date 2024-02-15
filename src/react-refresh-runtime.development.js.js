

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-refresh-runtime.production.min.js');
} else {
  module.exports = require('./react-refresh-runtime.development.js');
}
