import * as transforms from './transforms';

export const AngularJsModule = {
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
