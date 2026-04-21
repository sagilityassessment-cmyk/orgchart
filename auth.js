function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "SagilityIloilo" && pass === "Sagility_1") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText =
      "Invalid username or password";
  }
}
``
