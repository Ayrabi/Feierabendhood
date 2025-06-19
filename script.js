// Mitglieder-Daten (nur für Login-Zwecke, keine echte Sicherheit!)
const mitglieder = {
  "001": { name: "Rabia Aydemir", passwort: "adminpass" },
  "002": { name: "İlayda Aydemir", passwort: "noMoney#2019" },
  "003": { name: "Zehra Doğan", passwort: "noMoney#2019" },
  "004": { name: "Elif Çiğerli", passwort: "noMoney#2019" },
  "005": { name: "Lea Peitan", passwort: "noMoney#2019" },
  "006": { name: "Elvan Alanbay", passwort: "noMoney#2019" },
};

// Wird auf der Profilseite aufgerufen (z. B. profile-002.html)
function loginMitglied(uid) {
  const gespeichertesPasswort = localStorage.getItem("pw-" + uid);
  const erwartet = mitglieder[uid]?.passwort;

  if (gespeichertesPasswort === erwartet) {
    document.getElementById("profil-inhalt").style.display = "block";
    document.getElementById("login-formular").style.display = "none";
  } else {
    document.getElementById("profil-inhalt").style.display = "none";
    document.getElementById("login-formular").style.display = "block";
  }
}

// Wenn Login-Formular abgeschickt wird
function loginSenden(uid) {
  const eingabe = document.getElementById("pw-eingabe").value;
  const erwartet = mitglieder[uid]?.passwort;

  if (eingabe === erwartet) {
    localStorage.setItem("pw-" + uid, eingabe);
    location.reload();
  } else {
    alert("Falsches Passwort.");
  }
}

// Ausloggen
function logout(uid) {
  localStorage.removeItem("pw-" + uid);
  location.reload();
}
