//creating a deck of cards
class Deck {
  constructor() {
    this.deck = []
  }
  create() {
    const cardValue = [1, 2, 3]
    const cardDesign = ["A", "B"]

    cardValue.forEach(face => {
      cardDesign.forEach(design => {
        this.deck.push(new Card(face, design))
        // this.deck.push(new Card(face, design))
      })
    })
  }

  shuffle() {
    var currentIndex = this.deck.length,
      tempValue,
      randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      tempValue = this.deck[currentIndex]
      this.deck[currentIndex] = this.deck[randomIndex]
      this.deck[randomIndex] = tempValue
    }
  }
}
