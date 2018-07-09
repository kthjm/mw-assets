const Funnel = require('broccoli-funnel')
const Merge = require('broccoli-merge-trees')

module.exports = new Merge([
  new Funnel('assets')
])