$(document).ready(function() {
  var memory = new Game()
  memory.createGame()
  memory.start()
  memory.log()
  $(".cards").flip()
  var num1 = ""
  var num2 = ""
  $(".cards").on("click", ".front", function(e) {
    e.preventDefault()

    //
    value = $(this)
      .find(" + .back")
      .html()
    if (num1 == "") {
      num1 += value
    } else if (num1 !== "") {
      num2 += value
    }
    if (num1 !== "" && num2 !== "" && num1 == num2) {
      console.log("Match")
      num1 = ""
      num2 = ""
    } else if (num1 !== "" && num2 !== "" && num1 !== num2) {
      console.log("Not a Match")
      num1 = ""
      num2 = ""
    }

    console.log(num1)
    console.log(num2)
  })
})
