document.querySelector("#userInput").addEventListener("keyup", function( event ){
  event.preventDefault()
  if (event.keyCode == 13)
    console.log("excellent")
})
