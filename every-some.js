function checkUserValid(goodUsers) {
  return function testAllValid(users) {
    return users.every(function testValid(user) {
      return goodUsers.some(function idEquals(goodUser) {
        return goodUser.id === user.id;
      });
    });
  }
}

module.exports = checkUserValid;
