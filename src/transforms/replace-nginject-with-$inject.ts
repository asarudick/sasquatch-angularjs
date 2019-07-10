import services from '../data/angular-services';
import { Statement } from 'ts-morph';

export default (sources, options) => {
  sources.forEach(source => {
    const classes = source.getClasses();

    classes.forEach(c => {
      const constructors = c.getConstructors();
      constructors.forEach(constructor => {
        const body = constructor.getBody();
        const statements = body.getStatements();

        // Find ngInject
        const ngInject = statements.find((statement: Statement) => {
          return statement.getText().includes("'ngInject'");
        });

        if (!ngInject) {
          return;
        }

        ngInject.remove();

        const arr = constructor.getParameters().map(param => param.getName());

        const prop = c.addProperty({
          isStatic: true,
          name: '$inject',
          type: 'string[]',
        });
        const expression =
          '[' + arr.map(i => "'" + i.toString() + "'").join(', ') + ']';
        prop.setInitializer(expression);
      });
    });
  });
};
