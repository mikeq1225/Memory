class Game {
  constructor() {
    this.game = new Display()
  }

  createGame() {
    var deck = new Deck()
    deck.create()
    deck.shuffle()
    this.deal(deck.deck)
  }

  deal(cards) {
    cards.forEach(card => {
      this.game.recieveCard(card)
    })
  }
  log() {
    console.log(this.game.hand)
  }

  start() {
    var startGame = ""
    this.game.hand.forEach(card => {
      startGame += `<div class="cards">${card.face}</div>`
    })
    $(".playArea").html(startGame)
  }
}
