addEventListener("keydown", function(event){
  keys[event.keyCode] = true;
});
addEventListener("keyup", function(event){
  keys[event.keyCode] = false;
})             