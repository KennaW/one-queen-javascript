describe('pigLatin', function() {
  it("returns input with 'ay' at the end", function() {
    expect(pigLatin("T")).to.equal("Tay");
  });

  it("put consenant at end of 'word', then attach ay", function() {
    expect(pigLatin("be")).to.equal("ebay");
  });

  it("put consenants at end of 'word', then attach ay", function() {
    expect(pigLatin("scram")).to.equal("amscray");
  });

  it("leave word starting with vowel as is, then attach ay", function() {
    expect(pigLatin("equal")).to.equal("equalay");
  });

  it("accepts a word starting with 'squ', puts first three letters at end of word, then attaches ay", function() {
    expect(pigLatin("squid")).to.equal("idsquay");
  });

  it("converts multiple words into pig latin", function() {
    expect(pigLatin("big strong effing squid")).to.equal("igbay ongstray effingay idsquay");
  });
});
