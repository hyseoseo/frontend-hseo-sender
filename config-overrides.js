const {
  useBabelRc,
  removeModuleScopePlugin,
  override,
} = require('customize-cra')

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc(), removeModuleScopePlugin())
