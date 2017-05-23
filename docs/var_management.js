var correct = sessionStorage.getItem('correct');

var out = document.getElementById("result");
out = "You got " + correct + " out of 9 questions correct.";

while (correct === undefined) {
  sessionStorage.setItem('correct', 0);
  correct = sessionStorage.getItem('correct');
}
