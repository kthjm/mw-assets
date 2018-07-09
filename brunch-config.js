module.exports = {
  paths: {
    watched: ['assets'],
    public: '.dist/brunch'
  },
  files: {},
  npm: {
    compilers: []
  },
  plugins: {
    on: [],
    off: [],
    autoReload: { enabled: true }
  },
  modules: {},
  conventions: {},
  watcher: {},
  server: {},
  hooks: {
    preCompile () {},
    onCompile (generatedFiles, changedAssets) {}
  }
}