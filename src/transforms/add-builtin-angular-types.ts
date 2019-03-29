import services from '../data/angular-services';

export default (sources, options) => {
  sources.forEach(source => {
    const classes = source.getClasses();

    classes.forEach(c => {
      const constructors = c.getConstructors();

      constructors.forEach((constructor: any) => {
        const params = constructor.getParameters();

        params.forEach(param => {
          const name = param.getName();
          const paramType = services[name];

          if (!paramType) {
            return;
          }
          param.setType(paramType);
        });
      });
    });
  });
};
