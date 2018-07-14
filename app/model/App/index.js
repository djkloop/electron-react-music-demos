import { observable, action, runInAction } from 'mobx';

export default class AppStore {
  @observable count = 1;

  @action.bound
  increment() {
    this.count += 1;
  }

  @action.bound
  decrement() {
    this.count -= 1;
  }

  @action.bound
  incrementAsync() {
    setTimeout(() => {
      runInAction('increment', () => {
        this.count += 1;
      });
    }, 1000);
  }
}
