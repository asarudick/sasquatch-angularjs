import * as transforms from './transforms';

export default {
  plugin: {
    transforms,
  },
  transforms: {
    use: {
      // Disabled by default.
      // AddBuiltInAngularTypes: {},
      // AddBuiltInAngularTypesNgInject: {},
      // ReplaceNgInjectWith$inject: {},
    },
  },
};
