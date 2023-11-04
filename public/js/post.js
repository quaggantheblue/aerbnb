const deleteButton = document.querySelector(".post-delete");
const postId = document.querySelector(".post-id");

function sendDeleteRequest() {
  fetch("http://localhost:3000/" + postId.innerHTML, {
    method: "DELETE"
  });
  window.location.href = "http://localhost:3000";
}