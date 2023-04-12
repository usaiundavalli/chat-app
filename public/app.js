(function () {
  const app = document.querySelector("#app");
  const socket = io();

  let uname;

  app.querySelector("#join-user").addEventListener("click", function () {
    let username = app.querySelector("#username").value;
    if (username.length === 0) {
      return; // added a missing return statement
    }
    socket.emit("newuser", username);
    uname = username;

    app.querySelector(".join-screen").classList.remove("active");
    app.querySelector(".chat-screen").classList.add("active");
  });
})();
