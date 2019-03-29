import { Module } from 'sasquatch';
import * as transforms from './transforms';

export const AngularJsModule: Module = {
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
