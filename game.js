$(document).ready(function() {
  var memory = new Game()
  memory.createGame()
  memory.start()
  var name1 = null
  var name2 = null
  var guesses = 20
  var matches = 0
  $(".card").flip()
  $(".playArea").on("click", ".card", function(e) {
    e.preventDefault()

    values = $(this)

    if (name1 == null) {
      name1 = values
    } else {
      name2 = values
      if (name1.data("name") == name2.data("name")) {
        name1.off(".flip").click(false)
        name2.off(".flip").click(false)
        name1 = null
        name2 = null
        guesses = guesses
        matches++
        if (matches === 10) {
          setTimeout(function() {
            $(".playArea").html(`<div class="win">
                                <h1>Congratulations<h1>
                                <h1>You are SUPER!<h1>
                                <h1>Game Over<h1>
                              </div>`)
          }, 1500)
        }
      } else if (name1.data("name") !== name2.data("name")) {
        guesses--
        setTimeout(function() {
          name1.flip(false)
          name2.flip(false)
          name1 = null
          name2 = null
        }, 1500)
        if (guesses === 0) {
          $(".playArea").html(`<div class="lose">
                                  <h1>I'm sorry<h1>
                                  <h1>You ran out of Guesses<h1>
                                  <h1>Game Over<h1>
                                </div>`)
        }
      }
    }
    $("#guesses").html(`Guesses remaining: ${guesses}`)
  })
})
