
export interface InjectableConfig {
  name:string
}

export function Injectable(config: InjectableConfig) {
  return <returnFunc extends Function>(target: returnFunc): returnFunc => {
    // The new constructor that we define
    var ctor: Function;

    ctor = function () {
      this.name = config.name 
    };

    ctor.prototype = Object.create(target.prototype);
    ctor.prototype.constructor = target;
    return <returnFunc>ctor;
  }
}
