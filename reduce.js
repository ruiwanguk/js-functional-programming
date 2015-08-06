function countWords(inputWords) {
  return inputWords.reduce(function countEachWord(countMap, currentVal) {
    countMap[currentVal] = ++countMap[currentVal] || 1;
    return countMap;
  }, {});
}

module.exports = countWords;
