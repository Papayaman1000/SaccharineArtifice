var correct = sessionStorage.getItem('correct');

if (correct === undefined) {
  correct = 0;
  sessionStorage.setItem('correct', 0);
}
