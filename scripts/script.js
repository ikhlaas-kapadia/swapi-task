$(document).ready(function () {
  console.log("ready!");

  let selectionCount = 0;

  //highlight selection
  let characterName = $(".char-name");
  function highlight() {
    if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
      $(this).css({ background: "#35b335" });
      selectionCount++;
    } else {
      $(this).css({ background: "none" });
      selectionCount--;
    }
    toggleButtons();
  }
  //toggle buttons based on selection
  function toggleButtons() {
    let buttons = $(".btn-container");
    let message = $(".selected-text");
    if (selectionCount >= 3) {
      console.log(buttons);
      buttons.removeClass("invisible");
      message.removeClass("invisible");
    } else {
      buttons.addClass("invisible");
      message.addClass("invisible");
    }
  }

  //Add highlight event on click of character
  characterName.on("click", highlight);
});
