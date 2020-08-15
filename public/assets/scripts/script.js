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
  //toggle buttons and message based on selection
  let buttons = $(".btn-container");
  let message = $(".conditional-msg");
  function toggleButtons() {
    if (selectionCount >= 3) {
      buttons.removeClass("invisible");
      message.text("You have selected jay, jack, jill");
    } else {
      buttons.addClass("invisible");
      message.text("Select 3 characters!");
    }
  }
  //Add highlight event on click of character
  characterName.on("click", highlight);

  //Handle reset
  let resetBtn = $(".reset-btn");
  function handleReset() {
    selectionCount = 0;
    characterName.css({ background: "rgba(0, 0, 0, 0)" });
    buttons.addClass("invisible");
    message.text("Select 3 characters!");
  }
  resetBtn.on("click", handleReset);

  console.log(characters);

  //handle pagination
  let page = 10;
  let itemsPerPage = 9;
  let itemsViewed = itemsPerPage * page;
  let itemPosition = itemsViewed - itemsPerPage;

  function pageScroll() {
    let elementNumber = 0;
    for (let i = itemPosition; i < itemsViewed; i++) {
      if (i === characters.length) return;
      let charName = characters[i].name;

      $(`#name-${elementNumber}`).text(charName);
      elementNumber++;
    }
  }

  pageScroll();
});
