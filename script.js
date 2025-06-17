const users = {
  "rabia.aydemir": {
    password: "secretAdmin#Kuzu4",
    role: "admin",
    fullName: "Rabia Aydemir"
  },
  "ilayda.aydemir": { password: "noMoney#2019", role: "member", fullName: "İlayda Aydemir" },
  "zehra.dogan": { password: "noMoney#2019", role: "member", fullName: "Zehra Doğan" },
  "elif.cigerli": { password: "noMoney#2019", role: "member", fullName: "Elif Çiğerli" },
  "lea.peitan": { password: "noMoney#2019", role: "member", fullName: "Lea Peitan" },
  "elvan.alanbay": { password: "noMoney#2019", role: "member", fullName: "Elvan Alanbay" }
};

function handleLogin() {
  const username = document.getElementById("username").value.toLowerCase().trim();
  const password = document.getElementById("password").value;

  if (!(username in users)) {
    document.getElementById("login-error").innerText = "❌ Benutzer nicht gefunden";
    return;
  }

  const stored = localStorage.getItem("pw_" + username);
  const currentPw = stored || users[username].password;

  if (password !== currentPw) {
    document.getElementById("login-error").innerText = "❌ Falsches Passwort";
    return;
  }

  if (!stored && password === "noMoney#2019") {
    const newPw1 = prompt("Bitte neues Passwort eingeben:");
    const newPw2 = prompt("Bitte erneut eingeben:");

    if (newPw1 !== newPw2 || !newPw1) {
      alert("❌ Die Passwörter stimmen nicht überein.");
      return;
    }

    localStorage.setItem("pw_" + username, newPw1);
    alert("✅ Passwort gespeichert. Du wirst eingeloggt.");
  }

  // Intro zeigen
  document.getElementById("login-container").style.display = "none";
  document.getElementById("intro").style.display = "block";

  const video = document.getElementById("intro-video");
  video.play();

  video.onended = () => {
    window.location.href = `profile-${username}.html`;
  };
}
