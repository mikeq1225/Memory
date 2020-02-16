//creating a deck of cards
class Deck {
  constructor() {
    this.deck = []
  }
  create() {
    const cardValue = [
      { name: "logo1", image: "assets/superman_PNG50.png", value: 1 },
      { name: "logo2", image: "assets/superman2.png", value: 2 },
      { name: "logo3", image: "assets/superman3.png", value: 3 },
      { name: "logo4", image: "assets/superman4.png", value: 4 },
      { name: "logo5", image: "assets/superman5.png", value: 5 },
      { name: "logo6", image: "assets/superman6.png", value: 6 },
      { name: "logo7", image: "assets/superman7.png", value: 7 },
      { name: "logo8", image: "assets/superman8.png", value: 8 },
      { name: "logo9", image: "assets/superman9.png", value: 9 },
      { name: "logo10", image: "assets/superman10.png", value: 10 }
    ]

    cardValue.forEach(face => {
      this.deck.push(new Card(face.image, face.name))
      this.deck.push(new Card(face.image, face.name))
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
