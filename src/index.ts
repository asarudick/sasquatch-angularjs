import * as transforms from './transforms';

export default {
  plugin: {
    transforms,
  },
  transforms: {
    use: {
      AddBuiltInAngularTypes: {},
      AddBuiltInAngularTypesNgInject: {},
      ReplaceNgInjectWith$inject: {},
    },
  },
};
