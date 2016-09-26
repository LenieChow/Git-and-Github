// Javascript to be added
document.addEventListener('DOMContentLoaded', init);

function init(){
  var button = document.getElementById('button-yellow');
  button.addEventListener('click',mailingAlert);
  function mailingAlert () {
    prompt("Enter your email");
  }
}
