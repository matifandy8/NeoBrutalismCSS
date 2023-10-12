const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const codeToCopy = button.nextElementSibling;

    const textToCopy = codeToCopy.textContent;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    document.body.appendChild(textArea);

    textArea.select();

    document.execCommand("copy");

    document.body.removeChild(textArea);

    alert("Code has been copied to the clipboard.");
  });
});
