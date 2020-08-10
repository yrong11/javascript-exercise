import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    let s = `${super.introduce()} I am a Teacher.`;
    if (!this.klass) s += ` I teach No Class.`;
    else s += ` I teach Class ${this.klass}.`;
    return s;
  }
}
