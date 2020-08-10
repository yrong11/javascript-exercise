import { parse } from '@babel/core';

export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let sum = 0;
  Object.values(source).forEach(item => (sum += parseInt(item)));
  return sum;
}
