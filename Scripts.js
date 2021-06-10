function displayDate(){
  var currentDate = new Date();
  var currentDay = String(currentDate.getDate()).padStart(2,'0');
  var currentMonth = String(currentDate.getMonth() + 1).padStart(2,'0'); // add 1 because jan = 0 here
  var currentYear = String(currentDate.getFullYear());

  currentDate = currentMonth + '/' + currentDay + '/' + currentYear;

  dateH3 = document.getElementById('displayDate');
  dateH3.innerHTML = currentDate;
}

function addNewItem(){
  var row = document.createElement("div");
  row.classList.add("row");

  var checkButtonDiv = document.createElement("div");
  checkButtonDiv.classList.add("form-check");
  checkButtonDiv.classList.add("col-2");

  var checkButtonLabelDiv = document.createElement("div");
  checkButtonLabelDiv.classList.add("checkmark-label");

  var checkButton = document.createElement("input");
  checkButton.classList.add("form-check-input");
  checkButton.classList.add("larger");
  checkButton.type = "checkbox";

  var checkButtonLabel = document.createElement("label");
  checkButtonLabel.classList.add("checkmark-label");

  var entryBox = document.createElement("input");
  entryBox.classList.add("form-control");
  entryBox.classList.add("form-control-lg");
  entryBox.classList.add("col-8");
  entryBox.classList.add("entry-styles");
  entryBox.type = "text";
  entryBox.placeholder = "Enter a task!";

  checkButtonLabelDiv.appendChild(checkButton);
  checkButtonLabelDiv.appendChild(checkButtonLabel);
  checkButtonDiv.appendChild(checkButtonLabelDiv);
  row.appendChild(checkButtonDiv);
  row.appendChild(entryBox);
  itemContainer = document.getElementById('CheckItemContainer')
  itemContainer.appendChild(row);
}

window.onload = function() {
  displayDate();
};
