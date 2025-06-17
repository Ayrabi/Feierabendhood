document.addEventListener("DOMContentLoaded", function () {
  // Intro anzeigen, dann verstecken
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  }, 10000); // 10 Sekunden

  // Login-Logik (nur Beispielhaft – sollte mit echter Datenbank ersetzt werden)
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
      alert(`Willkommen ${username}! (hier würde dein Profil geladen werden)`);
    } else {
      alert("Bitte alle Felder ausfüllen.");
    }
  });
});
