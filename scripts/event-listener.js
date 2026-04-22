input = document.getElementById('body');

input.addEventListener("keydown", function (event) {

  if (event.key === "d" || event.key === "D") {
    world.character.moveRight();
  }
});