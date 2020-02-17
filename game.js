$(document).ready(function() {
  var memory = null
  var name1 = null
  var name2 = null
  var guesses = null
  var matches = null
  $(".aroundStart").on("click", function(e) {
    e.preventDefault()
    $("body")
      .removeClass("backImage2")
      .addClass("backImage1")
    $("#guesses")
      .removeClass("guesses2")
      .addClass("guesses")
    $("#aroundStart")
      .removeClass("aroundStart2")
      .addClass("aroundStart")
    $("#startGame")
      .removeClass("startGame2")
      .addClass("startGame")

    $(".playArea").css("display", "grid")
    memory = new Game()
    memory.createGame()
    memory.start()
    $(".card").flip()
    $("#guesses").html(`Guesses remaining: 20`)
    $(".startGame").html(`New Game`)
    name1 = null
    name2 = null
    guesses = 20
    matches = 0
  })

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
            $(".playArea").css("display", "block").html(`<div class="win">
                                <h1>Congratulations<h1>
                                <h2>You proved your self to be a valuable resource to the <strong>Justice League</strong!<h2>
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
          if (guesses === 0) {
            $("#aroundStart")
              .removeClass("aroundStart")
              .addClass("aroundStart2")
            $("#startGame")
              .removeClass("startGame")
              .addClass("startGame2")
            $("#guesses")
              .removeClass("guesses")
              .addClass("guesses2")
            $("body")
              .removeClass("backImage1")
              .addClass("backImage2")
            $(".playArea").css("display", "block").html(`<div class="lose">
                                    <h1>Thank you<h1>
                                    <h2>Your pathetic attempt at this game has allowed me to beat Superman and conquer the world!<h2>
                                    <h1>Game Over!!!!<h1>
                                  </div>`)
          }
        }, 1500)
      }
    }
    $("#guesses").html(`Guesses remaining: ${guesses}`)
  })
})
