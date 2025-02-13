const [$btnYes, $btnNo] = document.getElementsByClassName("button");
const $buttonsContainer =
  document.getElementsByClassName("buttons-container")[0];
const $movingText = document.getElementById("moving-text");
const $display1 = document.querySelector(".display1");
const $display2 = document.querySelector(".display2");

const movingTextPostions = [
  { top: "50%", left: "50%" },
  { top: "60%", left: "30%" },
  { top: "80%", left: "40%" },
  { top: "70%", left: "40%" },
  { top: "30%", left: "30%" },
  { top: "86%", left: "28%" },
  { top: "65%", left: "34%" },
  { top: "89%", left: "39%" },
  { top: "77%", left: "47%" },
  { top: "86%", left: "36%" },
];
const movingTextWords = ["play the song","are you sure ?", "think twice","one more","absoulte nej","bisous ?","are you sure ?", "Jag älskar dig","one more","Vad heter du?","please ?","are you sure ?", "come on think thrice","Jag saknar dig","I wish i was there","bisous ?","i hope you're enjoying the song"];
let clickCount = 0;

$btnYes.addEventListener("mouseenter", function () {
  if (clickCount < 5) {
    $btnYes.style.visibility = "hidden";
  }
});
$buttonsContainer.addEventListener("mouseleave", function () {
  if (clickCount < 5) {
    $btnYes.style.visibility = "visible";
  }
});

$btnNo.addEventListener("click", () => {
  clickCount++;
  console.log("first");
  console.log($btnYes.style);
  $btnYes.style.scale = `${(clickCount + 11) / 10}`;

  $btnYes.style.visibility = "visible";
  $movingText.style.display = "block";
$movingText.innerHTML=movingTextWords[clickCount-1]
  const randomPos = Math.floor(Math.random() * (movingTextPostions.length + 1));
  $movingText.style.top = movingTextPostions[randomPos].top;
  $movingText.style.left = movingTextPostions[randomPos].left;
});

$btnYes.addEventListener("click", function () {
  $display1.style.display = "none";
  $display2.style.display = "flex";
});
