const offerteForm = document.getElementById("offerteForm");
const naamInput = document.getElementById("naam");
const emailInput = document.getElementById("email");
const berichtInput = document.getElementById("bericht");
const melding = document.getElementById("melding");

const naamError = document.getElementById("naamError");
const emailError = document.getElementById("emailError");
const berichtError = document.getElementById("berichtError");

offerteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const naam = naamInput.value.trim();
  const email = emailInput.value.trim();
  const bericht = berichtInput.value.trim();

  naamError.textContent = "";
  emailError.textContent = "";
  berichtError.textContent = "";
  melding.textContent = "";

  naamInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-invalid");
  berichtInput.classList.remove("is-invalid");

  let isValid = true;

  if (naam === "") {
    naamError.textContent = "Naam is verplicht";
    naamInput.classList.add("is-invalid");
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "E-mail is verplicht";
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else if (
    !email.includes("@") ||
    !email.includes(".") ||
    email.startsWith("@") ||
    email.endsWith(".")
  ) {
    emailError.textContent = "Voer een geldig e-mailadres in";
    emailInput.classList.add("is-invalid");
    isValid = false;
  }

  if (bericht === "") {
    berichtError.textContent = "Bericht is verplicht";
    berichtInput.classList.add("is-invalid");
    isValid = false;
  }

  if (!isValid) {
    melding.textContent = "Controleer de velden.";
    melding.className = "mt-3 fw-bold text-danger";
    document.getElementById("offerte").scrollIntoView();
    return;
  }

  melding.textContent = "Je offerteaanvraag is verzonden.";
  melding.className = "mt-3 fw-bold text-success";

  offerteForm.reset();
});

naamInput.addEventListener("input", function () {
  if (naamInput.value.trim() !== "") {
    naamError.textContent = "";
    naamInput.classList.remove("is-invalid");
  }
});

emailInput.addEventListener("input", function () {
  const emailWaarde = emailInput.value.trim();

  if (emailWaarde === "") {
    emailError.textContent = "";
    emailInput.classList.remove("is-invalid");
    return;
  }

  if (
    emailWaarde.includes("@") &&
    emailWaarde.includes(".") &&
    !emailWaarde.startsWith("@") &&
    !emailWaarde.endsWith(".")
  ) {
    emailError.textContent = "";
    emailInput.classList.remove("is-invalid");
  }
});

berichtInput.addEventListener("input", function () {
  if (berichtInput.value.trim() !== "") {
    berichtError.textContent = "";
    berichtInput.classList.remove("is-invalid");
  }
});