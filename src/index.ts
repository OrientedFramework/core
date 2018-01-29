import { Injectable } from './decorators/injectable';

@Injectable({name: 'myName'})
class Person { 

  constructor(public name : string, public surname : string) { 
    this.name = name;
    this.surname = surname;
  }
}

var p = new Person("remo", "jansen");
console.log(p.name);
/*
console.log(Reflect.getMetadata('design:type', d.doSomething));
console.log(Reflect.getMetadata('design:paramtypes', d.doSomething));
console.log(Reflect.getMetadata('design:returntype', d.doSomething));
*/