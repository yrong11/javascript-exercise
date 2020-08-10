import Person from './person';

export default class Worker extends Person {
  // eslint-disable-next-line class-methods-use-this
  introduce() {
    return 'I am a Worker. I have a job.';
  }
}
