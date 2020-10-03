
exports.min = function min(_array) {
  if (!_array || !_array.length) return 0;

  const array = [..._array];
  array.sort((a, b) => a - b);
  return array[0];


}


exports.max = function max (_array) {
  if (!_array || !_array.length) return 0;

  const array = [..._array];
  array.sort((a, b) => a - b);
  return array[array.length-1];
}

exports.avg1 = function avg(array) {
  if (!array || !array.length) return 0;

  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum = sum + array[i];
  }

  return sum / array.length;
  
}

exports.avg = function avg(array) {
  if (!array || !array.length) return 0;

  const sum = array.reduce((acc, item) => acc + item); 
  return sum / array.length;
}