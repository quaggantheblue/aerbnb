const deleteButton = document.querySelector("#post-delete");
const modal = document.querySelector("#form-modal");
const editBtn = document.querySelector("#post-edit");
const span = document.querySelector(".close");

function sendDeleteRequest(id) {
  fetch("/" + id, {
    method: "DELETE"
  });
  window.location.href = "/";
}

editBtn.addEventListener('click', () => {
  modal.style.display = "block";
});

span.addEventListener('click', () => {
  modal.style.display = "none";
});