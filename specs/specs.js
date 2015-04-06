describe('queenAttack', function() {
  it("is false for unequal x-values", function() {
    expect(queenAttack([1, 2], [2, 4])).to.equal(false);
  });

  it("is true for equal x-values", function() {
    expect(queenAttack([1, 2], [1, 3])).to.equal(true);
  });

  it("is false for unequal y-values", function() {
    expect(queenAttack([1, 2], [2, 4])).to.equal(false);
  });

  it("is true for equal y-values", function() {
    expect(queenAttack([1, 2], [3, 2])).to.equal(true);
  });

  it("is false for cases where both pieces are not diagonally aligned", function() {
    expect(queenAttack([1, 1], [2, 3])).to.equal(false);
  });

  it("is true for cases where both pieces are diagonally aligned", function() {
    expect(queenAttack([1, 4], [4, 7])).to.equal(true);
  });
});
