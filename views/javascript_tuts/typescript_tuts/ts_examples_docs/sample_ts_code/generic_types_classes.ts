class DataStorage<T> {
  private data: T[] = [];

  addData(item: T) {
    this.data.push(item);
  }

  removeData(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

//create diffrent Storages
const stringStorage = new DataStorage<string>();
stringStorage.addData('2');
stringStorage.addData(2); //error only takes string but

const numberStorage = new DataStorage<number>();
numberStorage.addData('2'); //error only takes string but
numberStorage.addData(2);
