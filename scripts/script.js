$(document).ready(function () {
  console.log("ready!");

  let selectionCount = 0;
  function highlight() {
    if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
      $(this).css({ background: "#35b335" });
      selectionCount++;
    } else {
      $(this).css({ background: "none" });
      selectionCount--;
    }
  }

  let characterName = $(".char-name");
  characterName.on("click", highlight);
});
