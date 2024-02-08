let i = 0;
let target = document.getElementById("demo");
let text = target.innerHTML;
target.innerHTML = " ";
let speed = 75; //speed duration of effect in millisec

typeWriter(); //to call function
function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
