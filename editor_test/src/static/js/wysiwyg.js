(function () {
  console.log("WYSIWYG script loaded...");

  // auto focus on input div
  const editor = document.getElementById("editor");
  editor.focus();

  // fix first element not wrapped issue
  document.querySelectorAll("[contenteditable='true']").forEach((editable) => {
    editable.addEventListener("input", function () {
      if (
        editable.innerHTML.trim() === "" ||
        editable.innerHTML.trim() === "<br>"
      ) {
        editable.innerHTML = "<div><br></div>";
      }
    });
    editable.dispatchEvent(new Event("input"));
  });

  // icon event listeners
  const boldIcon = document.getElementById("bold");
  boldIcon.addEventListener("click", () => {
    let text = "";
    if (window.getSelection) {
      text = window.getSelection();
    } else if (document.getSelection) {
      text = document.getSelection();
    } else if (document.selction) {
      text = document.selction.createRange().text;
    }
    console.log(text);
  });
})();
