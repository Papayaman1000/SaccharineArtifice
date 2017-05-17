var correct = sessionStorage.getItem('correct');

while (true) {
  if (correct === undefined) {
    correct = 0;
    sessionStorage.setItem('correct', 0);
  }
}
