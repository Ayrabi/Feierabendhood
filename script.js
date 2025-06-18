const userDatabase = {
  "rabia": {
    name: "Rabia Aydemir",
    password: "kuratorin2000",
    profilePage: "profile-rabia.html"
  },
  "ali": {
    name: "Ali Test",
    password: "feierabend123",
    profilePage: "profile-ali.html"
  }
};

document.getElementById("loginButton").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("login-message");

  if (!username || !password) {
    message.textContent = "Bitte wähle einen Nutzer und gib ein Passwort ein.";
    return;
  }

  const user = userDatabase[username];
  if (user && password === user.password) {
    message.style.color = "green";
    message.textContent = "Login erfolgreich!";
    setTimeout(() => {
      window.location.href = user.profilePage;
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Falsches Passwort.";
  }
});
