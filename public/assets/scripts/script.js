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
      $(this).css({
        background: "#35b335"
      });
      addCharInfo($(this));
      selectionCount++;
    } else {
      $(this).css({
        background: "none"
      });
      selectionCount--;
      removeCharInfo($(this));
    }
    console.log(selectedChars);
    toggle();
  }
  character.on("click", select);

  //toggle buttons and message based on character selection
  function toggle() {
    let addedText = "";
    if (selectionCount >= 3) {
      buttons.removeClass("invisible");
      for (let i = 0; i < selectedChars.length; i++) {
        addedText += selectedChars[i].name + ", ";
        if (i === selectedChars.length - 1) {
          addedText += "and " + selectedChars[i].name;
        }
      }
      console.log(addedText);
      message.text(`You have selected ${addedText}`.toUpperCase());
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



  //Handle reset
  let resetBtn = $(".reset-btn");

  function handleReset() {
    selectionCount = 0;
    character.css({
      background: "rgba(0, 0, 0, 0)"
    });
    buttons.addClass("invisible");
    message.text("Select 3 characters!");
    selectedChars = [];
  }
  resetBtn.on("click", handleReset);

  //Pagination setup
  let page = 1;
  let itemsPerPage = 9;
  let maxPages = Math.ceil(allCharacters.length / itemsPerPage);

  //----handle page scroll
  function pageScroll() {
    if ($(this).text() === "<") {
      if (page === 1) return;
      page--;
    } else {
      if (page === maxPages) return;
      page++;
    };
    loadPage();
  }

  //----page load based on page number
  function loadPage() {
    let itemsViewed = itemsPerPage * page;
    let itemPosition = itemsViewed - itemsPerPage;
    let elementNumber = 0;
    character.css({
      background: "rgba(0, 0, 0, 0)"
    });
    for (let i = itemPosition; i < itemsViewed; i++) {
      let charName = allCharacters[i] ? allCharacters[i].name : null;
      if (charName) {
        $(`#name-${elementNumber}`).text(charName);
      } else {
        $(`#name-${elementNumber}`).text("");
      }
      elementNumber++;
    }
  }



  $('.prev-btn, .next-btn').click(pageScroll)

  loadPage()
});