function reduce(arr, fn, initial) {
  if (!arr.length) {
      return initial;
  }

  var head = arr[0];
  return reduce(arr.slice(1), fn, fn(initial, head));
}

module.exports = reduce;
