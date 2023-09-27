document.addEventListener("DOMContentLoaded", () => {
  const firstForm = document.querySelector(".subscription-first-form");
  const secondForm = document.querySelector(".subscription-second-form");
  const firstFormNameInput = firstForm.querySelector(".name-input-first-form");
  const firstFormEmailInput = firstForm.querySelector(
    ".email-input-first-form"
  );
  const firstFormPhoneInput = firstForm.querySelector(
    ".phone-input-first-form"
  );
  const firstFormMessage = document.getElementById("first-message");

  const secondFormNameInput = secondForm.querySelector(
    ".name-input-second-form"
  );
  const secondFormEmailInput = secondForm.querySelector(
    ".email-input-second-form"
  );
  const secondFormPhoneInput = secondForm.querySelector(
    ".phone-input-second-form"
  );
  const secondFormMessage = document.getElementById("second-message");

  firstForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = firstFormNameInput.value.trim();
    const email = firstFormEmailInput.value.trim();
    const phone = firstFormPhoneInput.value.trim();

    const subscriberData = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        NAME: name,
        PHONE: phone,
      },
    };
    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriberData),
      });
      if (response.status === 400) {
        firstFormMessage.textContent = "Already added to waitlist";
        firstFormNameInput.value = "";
        firstFormEmailInput.value = "";
        firstFormPhoneInput.value = "";
        setTimeout(() => {
          firstFormMessage.textContent = "";
        }, 3000);
      }
      if (response.status === 201) {
        firstFormMessage.textContent = "Successfully added to waitlist";
        firstFormNameInput.value = "";
        firstFormEmailInput.value = "";
        firstFormPhoneInput.value = "";
        setTimeout(() => {
          firstFormMessage.textContent = "";
        }, 3000);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  });
  // okosunmaryeghonghon@gmail.com

  secondForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = secondFormNameInput.value.trim();
    const email = secondFormEmailInput.value.trim();
    const phone = secondFormPhoneInput.value.trim();

    const subscriberData = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        NAME: name,
        PHONE: phone,
      },
    };
    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriberData),
      });
      if (response.status === 400) {
        secondFormMessage.textContent = "Already added to waitlist";
        secondFormEmailInput.value = "";
        secondFormNameInput.value = "";
        secondFormPhoneInput.value = "";
        setTimeout(() => {
          secondFormMessage.textContent = "";
        }, 3000);
      }
      if (response.status === 201) {
        secondFormMessage.textContent = "Successfully added to waitlist";
        secondFormEmailInput.value = "";
        secondFormNameInput.value = "";
        secondFormPhoneInput.value = "";
        setTimeout(() => {
          secondFormMessage.textContent = "";
        }, 3000);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  });
});
