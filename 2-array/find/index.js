export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  return collection.find(item => item.age < 20).name;
}
