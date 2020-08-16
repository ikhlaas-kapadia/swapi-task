$(document).ready(function () {
  console.log(allCharacters);

  let selectionCount = 0;
  let selectedChars = [];

  let character = $(".char-name");
  let buttons = $(".btn-container");
  let message = $(".conditional-msg");

  //highlight selection and add character info upon selection
  function select() {
    if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
      $(this).css({ background: "#35b335" });
      addCharInfo($(this));
      selectionCount++;
    } else {
      $(this).css({ background: "none" });
      selectionCount--;
      removeCharInfo($(this));
    }
    console.log(selectedChars);
    toggleButtons();
  }

  //toggle buttons and message based on character selection
  function toggleButtons() {
    if (selectionCount >= 3) {
      buttons.removeClass("invisible");
      message.text("You have selected jay, jack, jill");
    } else {
      buttons.addClass("invisible");
      message.text("Select 3 characters!");
    }
  }

  //add character info upon selection
  function addCharInfo(parent) {
    let charName = parent.children().text();
    let charDetails = allCharacters.filter((character) => {
      return character.name === charName;
    });
    selectedChars.push(...charDetails);
  }

  //remove character info upon selection
  function removeCharInfo(parent) {
    let charName = parent.children().text();
    let updatedSelection = selectedChars.filter((character) => {
      return character.name !== charName;
    });
    selectedChars = [...updatedSelection];
  }

  character.on("click", select);

  //Handle reset
  let resetBtn = $(".reset-btn");
  function handleReset() {
    selectionCount = 0;
    character.css({ background: "rgba(0, 0, 0, 0)" });
    buttons.addClass("invisible");
    message.text("Select 3 characters!");
  }
  resetBtn.on("click", handleReset);

  //handle pagination

  let page = 1;
  let itemsPerPage = 9;
  let itemsViewed = itemsPerPage * page;
  let itemPosition = itemsViewed - itemsPerPage;

  function pageScroll() {
    let elementNumber = 0;
    for (let i = itemPosition; i < itemsViewed; i++) {
      if (i === allCharacters.length) return;
      let charName = allCharacters[i].name;
      $(`#name-${elementNumber}`).text(charName);
      elementNumber++;
    }
  }
  pageScroll();
});
