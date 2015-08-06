function doubleAll(numbers) {
    return numbers.map(function double(currentVal) {
        return currentVal * 2;
    });
}

module.exports = doubleAll;
