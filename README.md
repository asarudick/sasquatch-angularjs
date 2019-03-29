# sasquatch-angularjs

Sasquatch transforms for AngularJS.

## Installation

- Install globally: `npm i sasquatch-angularjs`

## Usage

In your `sasquatch.config.ts`, add this import:

```
import {AngularJsModule} from 'sasquatch-angularjs';
```

and add the imported module to the modules array:

```
modules: [StandardModule, AngularJsModule],
```

## Configuration

By default, all transforms will be executed. If you want to override the transforms used, simply overwrite the `transforms` property of the imported module. e.g.

```
import {Module} from 'sasquatch';
import {AngularJsModule} from 'sasquatch-angularjs';

const myModule: Module = {
  ...AngularJsModule,
  transforms: {
    use: {
      AddBuiltInAngularTypes: {

      }
    }
  }
}

```

and add to your modules

```
modules: [StandardModule, myModule],
```
