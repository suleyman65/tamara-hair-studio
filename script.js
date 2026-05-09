function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach((el) => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.textContent = text;
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeButton = document.querySelector(
    `.lang button[onclick="setLanguage('${lang}')"]`
  );

  if (activeButton) {
    activeButton.classList.add("active");
  }
}

setLanguage("en");

function openMedia(type, src) {
  const modal = document.getElementById("mediaModal");
  const content = document.getElementById("modalContent");

  if (type === "image") {
    content.innerHTML = `<img src="${src}" alt="Tamara Hair Studio result">`;
  }

  if (type === "video") {

  content.innerHTML = `
  
  <video
    class="luxury-video"
    src="${src}"
    controls
    autoplay
    playsinline>
  </video>

  `;

}

  modal.classList.add("active");
}

function closeMedia() {
  const modal = document.getElementById("mediaModal");
  const content = document.getElementById("modalContent");

  modal.classList.remove("active");
  content.innerHTML = "";
}

const bookingForm =
document.querySelector(".booking-form");
console.log(bookingForm);

const formMessage =
document.querySelector(".form-message");

const scriptURL =
"https://script.google.com/macros/s/AKfycbz7yW8gN45FAnMy-Xh0JLI6Et7CxGgAwO_ixP2XVRQTGZcEqC-taymPrGVrMZhTxYD-/exec";

if (bookingForm) {

bookingForm.addEventListener(
"submit",
async (e)=>{

  e.preventDefault();

  const formData = {

    name:
    bookingForm.name.value,

    phone:
    bookingForm.phone.value,

    service:
    bookingForm.service.value,

    date:
    bookingForm.date.value,

    time:
    bookingForm.time.value,

    message:
    bookingForm.message.value

  };

  try {

    const response =
   await fetch(scriptURL, {

  method: "POST",

  mode: "no-cors",

  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify(formData)

});

    formMessage.textContent =
"Appointment request sent successfully.";

bookingForm.reset();

  } catch(error){

    formMessage.textContent =
    "Connection error.";

  }

});

}