$(document).ready(function() {
  var memory = new Game()
  memory.createGame()
  memory.start()
  var name1 = ""
  var name2 = ""
  $(".card").flip()
  $(".playArea").on("click", ".card", function(e) {
    e.preventDefault()

    values = $(this).data("name")

    if (name1 == "") {
      name1 += values
    } else if (name1 !== "") {
      name2 += values
    }
    if (name1 !== "" && name2 !== "" && name1 == name2) {
      console.log("Match")

      name1 = ""
      name2 = ""
    } else if (name1 !== "" && name2 !== "" && name1 !== name2) {
      console.log("Not a Match")

      name1 = ""
      name2 = ""
    }

    console.log(name1)
    console.log(name2)
  })
})

//
// var values = $(this)
//   .find("+ .back")
//   .getAttribute("user-id")

// $(".cardPaused").off(".flip")

// $(this)
//   .parent()
//   .off(".flip")
// $(this)
//   .parents()
//   .addClass("cardFlipped")

// setTimeout(function() {
//   $(this)
//     .parent()
//     .off(".flip")
//   $(this)
//     .find("+ .back")
//     .data("name")
//     .off(".flip")
// }, 2000)

// setTimeout(function() {
//   $(this).removeClass("cardFlipped")
//   $(this)
//     .find("+ .back")
//     .data("name")
//     .removeClass("cardFlipped")
// }, 2000)
