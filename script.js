//Create day, save, remove, and date variables.
const day = $(".day");
const save = $("#save");
const clear = $("#clear");

// Checks if mark exists after clicking.
day.click(function () {
  let childText = this.lastChild.textContent;
  // If mark exists, remove mark and saves it even after closing browser.
  if ($(this).find(".mark").length > 0) {
    removeMark(this);
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(i) == childText) {
        localStorage.setItem(i, "removed");
      }
    }
  }
  //If mark does not exist, insert one and save it to local storage.
  else {
    insertMark(this);
    localStorage.setItem(localStorage.length, childText);
  }
});

save.click(function () {
  alert("Marks were saved!");
});

clear.click(function () {
  let user = confirm("Are you sure you want to clear all marks?");
  if (user === true) removeAllMark();
  else return;
});

// Creates mark
function mark() {
  let div = document.createElement("div");
  let text = document.createElement("h1");
  text.textContent = "X";
  div.classList.add("mark");
  div.append(text);

  return div;
}

// Inserts mark
function insertMark(date) {
  return date.prepend(mark());
}

// Removes mark
function removeMark(date) {
  return $(date)[0].removeChild($(date)[0].firstChild);
}

// Remove all marks
function removeAllMark() {
  localStorage.clear();
  window.location.reload();
}

// Output the saved marks after browser is refreshed/closed.
function outputMarks() {
  let i = 0;
  while (localStorage.getItem(i) != null && localStorage.length > i) {
    if (localStorage.getItem(i) == "removed") {
      i++;
      continue;
    }
    day[localStorage.getItem(i) - 1].prepend(mark());
    i++;
  }
}

//Call saveMark functions.
outputMarks();
