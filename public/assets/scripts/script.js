$(document).ready(function () {
  // Setup Request to get remaining data on page load.
  let currentApiPage = 3;
  let pageCounter = currentApiPage;
  let remainingData = [];
  let dataLoaded = false;
  let totalPages = Math.ceil(totalResults / resultsPerReq);
  //--- Get remaining data
  function getMoreData() {
    for (let i = currentApiPage; i < totalPages; i++) {
      currentApiPage++;
      $.ajax({
        url: `https://swapi.dev/api/people/?page=${currentApiPage}`,
        async: true,
        success: function (result) {
          remainingData.push({
            index: i,
            value: [...result.results],
          });
          pageCounter++;
          remainingData.sort(function (a, b) {
            return a.index - b.index;
          });

          if (pageCounter === totalPages) {
            dataLoaded = true;
            let dataFormatted = [];
            remainingData.forEach((el) => {
              dataFormatted.push(...el.value);
            });
            allCharacters.push(...dataFormatted);
            //change max pages when remaining data is received.
            maxPages = Math.ceil(allCharacters.length / itemsPerPage);
          }
        },
      });
    }
  }

  let selectionCount = 0;
  let selectedChars = [];
  let character = $(".char-name");
  let buttons = $(".btn-container");
  let message = $(".conditional-msg");

  //highlight selection and add character info upon selection
  function select() {
    if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
      $(this).css({
        background: "#35b335",
      });
      addCharInfo($(this));
      selectionCount++;
    } else {
      $(this).css({
        background: "none",
      });
      selectionCount--;
      removeCharInfo($(this));
    }
    toggle();
  }
  character.on("click", select);

  //toggle buttons and message based on character selection
  function toggle() {
    let addedText = "";
    if (selectionCount >= 3) {
      buttons.removeClass("invisible");
      for (let i = 0; i < selectedChars.length; i++) {
        if (i === selectedChars.length - 1) {
          addedText += "and " + selectedChars[i].name;
        } else {
          addedText += selectedChars[i].name + ", ";
        }
      }
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

  //Handle reset on reset button
  let resetBtn = $(".reset-btn");

  function handleReset() {
    selectionCount = 0;
    character.css({
      background: "rgba(0, 0, 0, 0)",
    });
    buttons.addClass("invisible");
    message.text("Select 3 characters!");
    selectedChars = [];
  }

  //Reset
  resetBtn.on("click", handleReset);

  // Download character info as csv
  let downloadBtn = $(".download-btn");

  function downloadFile() {
    // 1- JSON to CSV Converter
    function convertToCSV(objArray) {
      let array = [...objArray];
      let csv = "";
      let headers = Object.keys(array[0]).join(",");
      csv += headers + "\n";

      for (let i = 0; i < array.length; i++) {
        let line = "";
        for (let property in array[i]) {
          if (line != "") line += ",";
          line += array[i][property];
        }

        csv += line + "\n";
      }
      return csv;
    }
    const data = convertToCSV(selectedChars);

    // 2- download data
    function download(filename, data) {
      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(data)
      );
      element.setAttribute("download", `${filename}.csv`);

      if (document.createEvent) {
        let event = document.createEvent("MouseEvents");
        event.initEvent("click", true, true);
        element.dispatchEvent(event);
      } else {
        element.click();
      }
    }
    // download converted data
    download("your-characters", data);
  }
  downloadBtn.on("click", downloadFile);

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
    }
    let currentPage = $(".current-page");
    currentPage.text(`PAGE ${page}/`);
    loadPage();
  }

  //----page load based on page number
  function loadPage() {
    let itemsViewed = itemsPerPage * page;
    let itemPosition = itemsViewed - itemsPerPage;
    let elementNumber = 0;
    character.css({
      background: "rgba(0, 0, 0, 0)",
    });
    for (let i = itemPosition; i < itemsViewed; i++) {
      let charName = allCharacters[i] ? allCharacters[i].name : null;
      if (charName) {
        $(`#name-${elementNumber}`).text(charName);
        $(`.char-${elementNumber}`).removeClass("invisible");
      } else {
        $(`#name-${elementNumber}`).text("");
        if ($(`#name-${elementNumber}`).text() === "") {
          $(`.char-${elementNumber}`).addClass("invisible");
        }
      }
      elementNumber++;
    }
    if (!dataLoaded) {
      getMoreData();
    }
  }
  $(".prev-btn, .next-btn").click(pageScroll);

  loadPage();
});