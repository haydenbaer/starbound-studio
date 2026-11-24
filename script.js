// Show a local message preview. This form does not send information online.
const form = document.getElementById("feedback-form");
if (form) {
  const nameField = document.getElementById("name");
  const messageField = document.getElementById("message");
  const status = document.getElementById("form-status");

  function checkField(field, errorId, errorMessage) {
    const isValid = field.value.trim() !== "";
    document.getElementById(errorId).textContent = isValid ? "" : errorMessage;
    field.setAttribute("aria-invalid", String(!isValid));
    return isValid;
  }

  nameField.addEventListener("blur", function () {
    checkField(nameField, "name-error", "Please enter your name.");
  });
  messageField.addEventListener("blur", function () {
    checkField(messageField, "message-error", "Please enter a message.");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameIsValid = checkField(nameField, "name-error", "Please enter your name.");
    const messageIsValid = checkField(messageField, "message-error", "Please enter a message.");
    if (!nameIsValid || !messageIsValid) {
      status.textContent = "Please complete the missing fields.";
      if (!nameIsValid) nameField.focus();
      else messageField.focus();
      return;
    }
    const topic = document.getElementById("topic").value;
    const text = "Name: " + nameField.value.trim() + "\nTopic: " + topic
      + "\n\n" + messageField.value.trim();
    document.getElementById("message-preview").textContent = text;
    status.textContent = "Your message preview is ready. Nothing was sent online.";
  });
}
