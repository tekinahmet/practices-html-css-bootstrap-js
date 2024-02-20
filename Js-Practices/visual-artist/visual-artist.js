
function increaseMessage(){
    let result = document.querySelector(".posts");
    result.value = Number(result.value) + 1;
}

function increaseLikes() {
  let result = document.querySelector(".likes");
  result.value = Number(result.value) + 1;
}

function increaseFollowers() {
  let result = document.querySelector(".follower");
  result.value = Number(result.value) + 1;
}