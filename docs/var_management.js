var correct = sessionStorage.getItem('correct');

while (correct === undefined) {
  correct = 0;
  sessionStorage.setItem('correct', 0);
}
