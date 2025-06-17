const defaultPassword = "noMoney#2019";
const adminUsername = "rabia.aydemir";
const adminStartPassword = "secretAdmin#Kuzu4";

function handleLogin() {
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  const storedPassword = localStorage.getItem(`password-${username}`);

  if (!storedPassword && (password === defaultPassword || (username === adminUsername && password === adminStartPassword))) {
    const newPass1 = prompt("Bitte neues Passwort erstellen:");
    const newPass2 = prompt("Bitte Passwort bestätigen:");

    if (newPass1 !== newPass2) {
      alert("❌ Die Passwörter stimmen nicht überein. Bitte erneut versuchen.");
      return;
    }

    localStorage.setItem(`password-${username}`, newPass1);
    alert("✅ Passwort gespeichert.");
    playIntroAndRedirect(username);
    return;
  }

  if (storedPassword && storedPassword === password) {
    playIntroAndRedirect(username);
  } else {
    document.getElementById("error-message").innerText = "❌ Falscher Benutzername oder Passwort.";
  }
}

function playIntroAndRedirect(username) {
  document.body.innerHTML = `
    <video id="intro" autoplay muted>
      <source src="video.mov" type="video/mp4">
      Dein Browser unterstützt dieses Video nicht.
    </video>
  `;

  setTimeout(() => {
    window.location.href = `profile-${username}.html`;
  }, 9000); // 9 Sekunden
}
