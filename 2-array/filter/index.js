function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(item => item % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter(function(item, index, collection) {
    return collection.indexOf(item, 0) == index;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
