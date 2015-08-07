module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(results, item) {
    results.push(fn(item));
    return results;
  }, [])
}
