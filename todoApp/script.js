var NodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < NodeList.length; i++) {
  var span = document.createElement("i");
  span.setAttribute("class", "small material-icons");
  var txt = document.createTextNode("highlight_off");
  span.append(txt);
  NodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("small");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var remove = this.parentElement;
    remove.style.display = "none";
  };
}

var items = document.querySelector("ul");
items.addEventListener(
  "click",
  e => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

function newTask() {
  var input = document.getElementById("input");
  var item = input.value;
  var ul = document.getElementById("list");
  var textnode = document.createTextNode(item);

  if (item === "") {
    var span = document.getElementById("span");
    span.setAttribute("class", "visible");
    return false;
  } else {
    var li = document.createElement("li");
    var span = document.createElement("i");
    span.setAttribute("class", "small material-icons");
    var txt = document.createTextNode("highlight_off");
    span.append(txt);
    ul.append(li);
    li.append(textnode);
    li.append(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var remove = this.parentElement;
        remove.style.display = "none";
      };
    }
  }
  input.value = "";
}
