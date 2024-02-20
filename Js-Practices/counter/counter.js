const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  //countLabel.innerHTML = count;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  countLabel.innerHTML = count;
  //countLabel.textContent = count;
  count--;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.innerHTML = count;
};
