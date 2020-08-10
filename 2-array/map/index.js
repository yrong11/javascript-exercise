export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const aCode = 'a'.charCodeAt(0);
  return collection.map(item => String.fromCharCode(aCode + item - 1));
}
