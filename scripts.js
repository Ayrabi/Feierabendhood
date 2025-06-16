
const users = {
  "rabia.aydemir": { password: "secretAdmin#Kuzu4", isAdmin: true },
  "user1": { password: "noMoney#2019" },
  "user2": { password: "noMoney#2019" }
};

let currentUser = null;

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (users[username] && users[username].password === password) {
    currentUser = username;
    document.getElementById("login-container").classList.add("hidden");
    playIntro();
  } else {
    errorMessage.innerText = "Falscher Benutzername oder Passwort.";
  }
}

function playIntro() {
  const intro = document.getElementById("intro");
  intro.classList.remove("hidden");
  setTimeout(() => {
    intro.classList.add("hidden");
    document.getElementById("profile").classList.remove("hidden");
    loadProfile();
  }, 5000);
}

function loadProfile() {
  document.getElementById("profile-text").value = localStorage.getItem(currentUser + "_text") || "";
  const pic = localStorage.getItem(currentUser + "_pic");
  if (pic) {
    document.getElementById("profile-picture").src = pic;
  }
}

function saveProfile() {
  const text = document.getElementById("profile-text").value;
  localStorage.setItem(currentUser + "_text", text);
}

function changeProfilePicture() {
  const fileInput = document.getElementById("upload-picture");
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    const base64 = reader.result;
    localStorage.setItem(currentUser + "_pic", base64);
    document.getElementById("profile-picture").src = base64;
  };
  if (file) reader.readAsDataURL(file);
}

function logout() {
  location.reload();
}
    