function darkModeToggler(){
  var x = document.getElementById("darkModeToggle").checked;
  if(x){
    document.getElementById("toDoBody").style.backgroundColor = "black";
    document.getElementById("heading").style.color = "white";
    document.getElementById("displayDate").style.color = "white";
    document.getElementById("addAnotherItem").classList.add("btn-dark");
    document.getElementById("printAsPDF").classList.add("btn-dark");
    var entries = document.getElementsByClassName("entry-styles");
    for(var i = 0 ; i < entries.length; i++){
      entries[i].style.backgroundColor = "black";
      entries[i].style.color = "white";
    }
  }
  if(!x){
    document.getElementById("toDoBody").style.backgroundColor = "white";
    document.getElementById("heading").style.color = "black";
    document.getElementById("displayDate").style.color = "black";
    document.getElementById("addAnotherItem").classList.remove("btn-dark");
    document.getElementById("addAnotherItem").classList.add("btn-primary");
    document.getElementById("printAsPDF").classList.remove("btn-dark");
    document.getElementById("printAsPDF").classList.add("btn-primary");
    var entries = document.getElementsByClassName("entry-styles");
    for(var i = 0 ; i < entries.length; i++){
      entries[i].style.backgroundColor = "white";
      entries[i].style.color = "black";
    }
  }
}

function displayDate(){
  var currentDate = new Date();
  var currentDay = String(currentDate.getDate()).padStart(2,'0');
  var currentMonth = String(currentDate.getMonth() + 1).padStart(2,'0'); // add 1 because jan = 0 here
  var currentYear = String(currentDate.getFullYear());

  currentDate = currentMonth + '/' + currentDay + '/' + currentYear;

  dateH3 = document.getElementById('displayDate');
  dateH3.innerHTML = currentDate;
  document.getElementsByTagName('title')[0].innerHTML = "To Do " + currentDate
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
  entryBox.style.color = "black";

  var x = document.getElementById("darkModeToggle").checked;
  entryBox.classList.add("entry-styles");
  if(x){
    entryBox.style.backgroundColor = "black";
    entryBox.style.color = "white";
  }
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
