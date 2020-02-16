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

  start() {
    var startGame = ""
    this.game.hand.forEach(card => {
      startGame += `<div class="card" data-name="${card.name}">
                      <div class="front"></div>
                      <div  class="back"><img class="superman"  src="${card.image}"></div>
                    </div>`
    })
    $(".playArea").html(startGame)
  }
}
