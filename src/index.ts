import { logParamTypes } from "./decorators/logParamTypes";


class Demo {
  @logParamTypes
  doSomething(p1: string, p2: number) {
    return;
  }
}
