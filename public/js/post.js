const deleteButton = document.querySelector("#post-delete");
const postId = document.querySelector(".post-id");
const modal = document.querySelector("#form-modal");
const editBtn = document.querySelector("#post-edit");
const span = document.querySelector(".close");

function sendDeleteRequest() {
  fetch("http://localhost:3000/" + postId.innerHTML, {
    method: "DELETE"
  });
  window.location.href = "http://localhost:3000";
}

editBtn.addEventListener('click', () => {
  modal.style.display = "block";
});

span.addEventListener('click', () => {
  modal.style.display = "none";
});