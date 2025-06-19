document.addEventListener("DOMContentLoaded", function () {
  const storedUser = localStorage.getItem("user");
  const video = document.querySelector(".intro-video");

  if (storedUser) {
    // Wenn bereits eingeloggt, direkt weiterleiten nach dem Video
    if (video) {
      video.addEventListener("ended", () => {
        redirectToProfile();
      });

      // Falls Video nicht richtig endet, trotzdem nach 9 Sekunden weiterleiten
      setTimeout(redirectToProfile, 9000);
    } else {
      redirectToProfile();
    }
  }

  // Login-Button aktivieren
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const uid = document.getElementById("mitgliedsnummer").value;
      const password = document.getElementById("passwort").value;

      const knownUsers = {
        "001": "noMoney#2019",
        "002": "noMoney#2019",
        "003": "noMoney#2019",
        "004": "noMoney#2019",
        "005": "noMoney#2019",
        "006": "noMoney#2019"
      };

      if (knownUsers[uid] && knownUsers[uid] === password) {
        localStorage.setItem("user", uid);

        if (video) {
          video.style.display = "block";
          loginForm.style.display = "none";

          video.addEventListener("ended", () => {
            redirectToProfile();
          });

          // Sicherheitshalber Timeout-Fallback
          setTimeout(redirectToProfile, 9000);
        } else {
          redirectToProfile();
        }
      } else {
        alert("Falsche Mitgliedsnummer oder Passwort.");
      }
    });
  }

  function redirectToProfile() {
    const uid = localStorage.getItem("user");
    if (uid) {
      window.location.href = `profile-${uid}.html`;
    }
  }
});
