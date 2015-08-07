function duckCount() {
  var args = Array.prototype.slice.call(arguments)

  return args.reduce(function isDuck(count, value) {
    if (Object.prototype.hasOwnProperty.call(value, "quack")) {
      count++;
    }
    return count;
  }, 0);
}

module.exports = duckCount;
