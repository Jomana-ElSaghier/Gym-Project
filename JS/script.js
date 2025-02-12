/*------------------------------------------------------------------------------------------------------------------------------------------------*/
/* FAQs */

let cnt = [1, 1, 1, 1, 1, 1, 1, 1];
function reveal(num) {
  if (cnt[num - 1] == 1) {
    document.getElementById("answer" + num).style.display = "block";
    document.getElementById("img" + num).src = "../Media/show_less.png";
    return (cnt[num - 1] = 0);
  } else {
    document.getElementById("answer" + num).style.display = "none";
    document.getElementById("img" + num).src = "../Media/show_more.png";
    return (cnt[num - 1] = 1);
  }
}
if (localStorage.getItem("isDark") === null) {
  localStorage.setItem("isDark", "false");
}
for (var num = 1; num < 14; num++) {
  if (localStorage.getItem("isFavourites" + num) == null) {
    localStorage.setItem("isFavourites" + num, "false");
  }
}

function onload(pageName) {
  if (localStorage.getItem("isDark") == "true") {
    localStorage.setItem("isDark", "false");
    document.getElementById("dark-lightCheckbox").checked = true;
    if (pageName == 'FAQs') {
      dark("FAQs");
    } else if (pageName == 'Events') {
      dark("Events");
    } else if (pageName == 'Home') {
      dark("Home");
    } else if (pageName == 'Classes') {
      dark("Classes");
    }
  }
  for (var num = 1; num < 14; num++) {
    if (localStorage.getItem("isFavourites" + num) == "true") {
      document.getElementById("content-container" + num).classList.add("popup-class");
      document.getElementById("likeBtn" + num).checked = true;
    }
  }
}
function dark(page) {
  if (localStorage.getItem("isDark") == "false") {
    document.documentElement.style.setProperty(
      "--header-background-color",
      "#18191a"
    );
    document.documentElement.style.setProperty(
      "--header-font-color",
      "whitesmoke"
    );
    document.documentElement.style.setProperty(
      "--body-background-color",
      "#18191a"
    );
    document.documentElement.style.setProperty(
      "--body-font-color",
      "whitesmoke"
    );
    document.documentElement.style.setProperty(
      "--feedbackformChat-font-color",
      "grey"
    );
    document.documentElement.style.setProperty(
      "--feedbackformChat-background-color",
      "#242526"
    );
    document.documentElement.style.setProperty("--subMenu-background-color","#242526");
    document.documentElement.style.setProperty("--search-background-color","#242526");
    document.documentElement.style.setProperty("--search-font-color","whitesmoke");

    document.getElementById("subMenuIcon2-2").style.filter = "invert(.85)";
    document.getElementById("SMI2").style.filter = "invert(1)";

    if (page == "FAQs") {
      for (let i = 1; i < 9; i++) {
        document.getElementById("img" + i).style.filter = "invert(1)";
      }
    } else if (page == "Events") {
      document.documentElement.style.setProperty(
        "--mainSectionEvents-content-background-color",
        "#18191a"
      );
      document.documentElement.style.setProperty(
        "--mainSectionEvents-navBar-background-color",
        "#18191a"
      );
      document.documentElement.style.setProperty(
        "--mainSectionEvents-navBar-font-color",
        "whitesmoke"
      );
      document.documentElement.style.setProperty(
        "--calendar_campus-dropDown-background-color",
        "#242526"
      );
      document.documentElement.style.setProperty(
        "--calendar_campus-dropDown-font-color",
        "whitesmoke"
      );
      document.documentElement.style.setProperty(
        "--content-container-background-color",
        "#242526"
      );
      document.documentElement.style.setProperty(
        "--container-info-font-color",
        "whitesmoke"
      );
      document.getElementById("navLeft-btn").style.filter = "invert(1)";
      document.getElementById("navRight-btn").style.filter = "invert(1)";
      const containerIcons = document.getElementsByClassName("container-icons");
      for (let i = 0; i < containerIcons.length; i++) {
        containerIcons[i].style.filter = "invert(1)";
      }
      const readMore = document.getElementsByClassName("read-more");
      for (let i = 0; i < readMore.length; i++) {
        readMore[i].style.filter = "invert(1)";
      }
    } else if (page == "Home") {
      document.getElementById("gymDescription").style.backgroundColor = "#242526";
      document.documentElement.style.setProperty("--heroBC","#242526");
    } else if (page == "Classes") {
      document.documentElement.style.setProperty("--tableColor","#242526");
      document.documentElement.style.setProperty("--tableColor2","whitesmoke");
    }
  } else if (localStorage.getItem("isDark") == "true") {
    document.documentElement.style.removeProperty("--header-background-color");
    document.documentElement.style.removeProperty("--header-font-color");
    document.documentElement.style.removeProperty("--body-background-color");
    document.documentElement.style.removeProperty("--body-font-color");
    document.documentElement.style.removeProperty("--feedbackformChat-font-color");
    document.documentElement.style.removeProperty("--feedbackformChat-background-color");
    document.documentElement.style.removeProperty("--subMenu-background-color");
    document.documentElement.style.removeProperty("--search-background-color");
    document.documentElement.style.removeProperty("--search-font-color");

    document.getElementById("subMenuIcon2-2").style.filter = "invert(0)";
    document.getElementById("SMI2").style.filter = "invert(0)";


    if (page == "FAQs") {
      for (let i = 1; i < 9; i++) {
        document.getElementById("img" + i).style.filter = "invert(0)";
      }
    } else if (page == "Events") {
      document.documentElement.style.removeProperty(
        "--mainSectionEvents-content-background-color"
      );
      document.documentElement.style.removeProperty(
        "--mainSectionEvents-navBar-background-color"
      );
      document.documentElement.style.removeProperty(
        "--mainSectionEvents-navBar-font-color"
      );
      document.documentElement.style.removeProperty(
        "--calendar_campus-dropDown-background-color"
      );
      document.documentElement.style.removeProperty(
        "--calendar_campus-dropDown-font-color"
      );
      document.documentElement.style.removeProperty(
        "--content-container-background-color"
      );
      document.documentElement.style.removeProperty(
        "--container-info-font-color"
      );
      document.getElementById("navLeft-btn").style.filter = "invert(0)";
      document.getElementById("navRight-btn").style.filter = "invert(0)";
      const containerIcons = document.getElementsByClassName("container-icons");
      for (let i = 0; i < containerIcons.length; i++) {
        containerIcons[i].style.filter = "invert(0)";
      }
      const readMore = document.getElementsByClassName("read-more");
      for (let i = 0; i < readMore.length; i++) {
        readMore[i].style.filter = "invert(0)";
      }
    } else if (page == "Home") {
      document.getElementById("gymDescription").style.backgroundColor = "white";
      document.documentElement.style.setProperty("--heroBC","whitesmoke");
    } else if (page == "Classes") {
      document.documentElement.style.removeProperty("--tableColor");
      document.documentElement.style.removeProperty("--tableColor2");


    }
  }
  localStorage.getItem("isDark") == "true"
    ? localStorage.setItem("isDark", "false")
    : localStorage.setItem("isDark", "true");
}


/*------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Events */
var monthIndex = 3;

let elements1 = document.getElementsByClassName("NAC");
let elements2 = document.getElementsByClassName("DT");
let elements3 = document.getElementsByClassName("NC");

function show_All_Options() {
  document.getElementById("monthName").textContent = "All";
  monthIndex = 3;
  for (var i = 0; i < elements1.length; i++) {
    elements1[i].style.display = "flex";
  }
  for (var i = 0; i < elements2.length; i++) {
    elements2[i].style.display = "flex";
  }
  for (var i = 0; i < elements3.length; i++) {
    elements3[i].style.display = "flex";
  }

  document.getElementById("dropDown-all").style.color = "#ff4500";
  document.getElementById("dropDown-NC").style.color = "";
  document.getElementById("dropDown-DT").style.color = "";
  document.getElementById("dropDown-NAC").style.color = "";

  document.getElementById("campusViewer-btn").textContent = "Campus";
}

function show_NC_Options() {
  document.getElementById("monthName").textContent = "All";
  monthIndex = 3;
  for (var i = 0; i < elements1.length; i++) {
    elements1[i].style.display = "none";
  }
  for (var i = 0; i < elements2.length; i++) {
    elements2[i].style.display = "none";
  }
  for (var i = 0; i < elements3.length; i++) {
    elements3[i].style.display = "flex";
  }

  document.getElementById("dropDown-all").style.color = "";
  document.getElementById("dropDown-NC").style.color = "#ff4500";
  document.getElementById("dropDown-DT").style.color = "";
  document.getElementById("dropDown-NAC").style.color = "";

  document.getElementById("campusViewer-btn").textContent = "New Cairo";
}

function show_DT_Options() {
  document.getElementById("monthName").textContent = "All";
  monthIndex = 3;
  for (var i = 0; i < elements1.length; i++) {
    elements1[i].style.display = "none";
  }
  for (var i = 0; i < elements2.length; i++) {
    elements2[i].style.display = "flex";
  }
  for (var i = 0; i < elements3.length; i++) {
    elements3[i].style.display = "none";
  }

  document.getElementById("dropDown-all").style.color = "";
  document.getElementById("dropDown-NC").style.color = "";
  document.getElementById("dropDown-DT").style.color = "#ff4500";
  document.getElementById("dropDown-NAC").style.color = "";

  document.getElementById("campusViewer-btn").textContent = "Down Town";
}

function show_NAC_Options() {
  document.getElementById("monthName").textContent = "All";
  monthIndex = 3;
  for (var i = 0; i < elements1.length; i++) {
    elements1[i].style.display = "flex";
  }
  for (var i = 0; i < elements2.length; i++) {
    elements2[i].style.display = "none";
  }
  for (var i = 0; i < elements3.length; i++) {
    elements3[i].style.display = "none";
  }

  document.getElementById("dropDown-all").style.color = "";
  document.getElementById("dropDown-NC").style.color = "";
  document.getElementById("dropDown-DT").style.color = "";
  document.getElementById("dropDown-NAC").style.color = "#ff4500";

  document.getElementById("campusViewer-btn").textContent = "N.A.C";
}

function nav(direction) {
  document.getElementById("dropDown-all").style.color = "#ff4500";
  document.getElementById("dropDown-NC").style.color = "";
  document.getElementById("dropDown-DT").style.color = "";
  document.getElementById("dropDown-NAC").style.color = "";
  document.getElementById("campusViewer-btn").textContent = "Campus";

  if (direction == "left") monthIndex--;
  else if (direction == "right") monthIndex++;

  if (monthIndex < 0) monthIndex = 12;
  else if (monthIndex > 12) monthIndex = 0;

  const monthNames = [
    "All",
    "January 2024",
    "February 2024",
    "March 2024",
    "April 2024",
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
  ];
  document.getElementById("monthName").textContent = monthNames[monthIndex];

  function showElements(elements) {
    for (let j = 0; j < elements.length; j++) {
      elements[j].style.display = "flex";
    }
  }
  function hideElements(elements) {
    for (let j = 0; j < elements.length; j++) {
      elements[j].style.display = "none";
    }
  }

  if (monthIndex == 0) {
    monthNames.forEach((month, index) => {
      showElements(document.getElementsByClassName(month));
    });
  } else {
    monthNames.forEach((month, index) => {
      if (index === monthIndex) {
        showElements(document.getElementsByClassName(month));
      } else {
        hideElements(document.getElementsByClassName(month));
      }
    });
  }
}

function favourite(num) {
  var checkbox = document.getElementById("likeBtn" + num);
  var popupMessageTick = document.getElementById("popup-massage-tick");
  var popupMessageCross = document.getElementById("popup-massage-cross");

  if (checkbox.checked) {
    popupMessageTick.style.display = "flex";
    setTimeout(function () {
      popupMessageTick.style.display = "none";
    }, 3000);
    document.getElementById("content-container" + num).classList.add("popup-class");
    localStorage.setItem("isFavourites" + num, "true");
  } else {
    popupMessageCross.style.display = "flex";
    setTimeout(function () {
      popupMessageCross.style.display = "none";
    }, 3000);
    document
      .getElementById("content-container" + num)
      .classList.remove("popup-class");
    if (localStorage.getItem("isFavourites" + num) == "true") {
      localStorage.setItem("isFavourites" + num, "false");
    }
  }
}

var filterFavouritesCnt = 0;
function filterFavourites() {
  var divs = document.querySelectorAll(".content-container");
  if (filterFavouritesCnt == 0) {
    document.getElementById("monthName").textContent = "All";
    monthIndex = 3;
    document.getElementById("dropDown-all").style.color = "#ff4500";
    document.getElementById("dropDown-NC").style.color = "";
    document.getElementById("dropDown-DT").style.color = "";
    document.getElementById("dropDown-NAC").style.color = "";
    document.getElementById("campusViewer-btn").textContent = "Campus";
    document.getElementById("heartIcon").style.fill = "red";

    divs.forEach(function (div) {
      if (!div.classList.contains("popup-class")) {
        div.style.display = "none";
      }
    });
    filterFavouritesCnt = 1;
  } else {
    document.getElementById("monthName").textContent = "All";
    monthIndex = 3;
    document.getElementById("dropDown-all").style.color = "#ff4500";
    document.getElementById("dropDown-NC").style.color = "";
    document.getElementById("dropDown-DT").style.color = "";
    document.getElementById("dropDown-NAC").style.color = "";
    document.getElementById("campusViewer-btn").textContent = "Campus";
    document.getElementById("heartIcon").style.fill = "";

    divs.forEach(function (div) {

      div.style.display = "flex";
    });
    filterFavouritesCnt = 0;
  }
}

var feedback_cnt = 0;
function feedback() {
  if (feedback_cnt == 0) {
    document.getElementById("feedbackForm-container").style.display = "flex";
    document.getElementById('feedbackIcon').innerHTML = '<svg fill="#fff" width="24px" height="24px" viewBox="0 0 200 200" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><title></title><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"></path></g></svg>'
    document.getElementById("feedbackIcon").classList.add("rotate");
    setTimeout(function () {
      document.getElementById("feedbackIcon").classList.remove("rotate");
    },500);

    feedback_cnt = 1;
  } else if (feedback_cnt == 1) {
    document.getElementById("feedbackForm-container").style.display = "";
    document.getElementById("feedbackIcon").classList.add("rotate");
    setTimeout(function () {
      document.getElementById('feedbackIcon').innerHTML = '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M8 10.5H16" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8 14H13.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>'
      document.getElementById("feedbackIcon").classList.remove("rotate");
    },600);
    feedback_cnt = 0;
  }
}

function searchAndHighlight() {
  // Remove existing highlights
  var oldHighlights = document.querySelectorAll(".highlight");
  oldHighlights.forEach(function (node) {
    node.outerHTML = node.innerHTML;
  });

  var searchText = document.getElementById("searchText").value;

  if (searchText) {
    // Construct a regular expression to match the search text
    var regExp = new RegExp(
      "\\b" + searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\b",
      "gi"
    );

    var firstMatch = null;

    // Function to recursively search through DOM nodes
    function searchNodes(node) {
      // If the node is a text node
      if (node.nodeType === 3) {
        // Search for matches within the text content
        var match = node.nodeValue.match(regExp);
        // If a match is found
        if (match) {
          // Create a span element to wrap the matched text
          var span = document.createElement("span");
          span.className = "highlight";
          span.innerHTML = node.nodeValue.replace(
            regExp,
            '<span class="highlight">$&</span>'
          );
          // Replace the original text node with the highlighted span
          node.parentNode.replaceChild(span, node);
          // If it's the first match found, store it
          if (!firstMatch) {
            firstMatch = span.querySelector(".highlight");
          }
        }
      } 
      // If the node is an element node
      else if (
        node.nodeType === 1 &&
        node.nodeName !== "SCRIPT" &&
        node.nodeName !== "STYLE"
      ) {
        // Recursively search through child nodes
        Array.from(node.childNodes).forEach(searchNodes);
      }
    }

    // Start searching from the document body
    searchNodes(document.body);

    // If a match was found
    if (firstMatch) {
      // Scroll the first match into view
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    } 
    // If no match was found
    else {
      // Alert the user
      alert("No matches found.");
    }
  }
}

function handleKeyPress(event) {
  var key = event.key || event.keyCode;
  // If the key is Enter (either as a string or keycode)
  if (key === "Enter" || key === 13) {
    searchAndHighlight();
  }
}

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 60) {
    document.getElementById("backToTopLink").style.display = "flex";
    document.getElementById("menu").style.display = "none";
  } else {
    document.getElementById("backToTopLink").style.display = "";
  }
  }
)

function showHideMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display == "flex") {
    menu.style.display = "none"
  }
  else {
    menu.style.display = "flex";
  }
}

// MSG

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const status = params.get("status"); // Get the status from the URL
  const message = params.get("message"); // Get the message from the URL

  if (status === "success") {
      showSuccessPopup(message || "Payment successful!");
  } else if (status === "error") {
      showErrorPopup(message || "Something went wrong");
  }
});
//  show the success popup
function showSuccessPopup(message) {
  const successPopup = document.getElementById("success-popup");
  const messageText = successPopup.querySelector(".message-text");
  const subText = successPopup.querySelector(".sub-text");


  messageText.textContent = "Success";
  subText.textContent = message;

  // Show the popup
  successPopup.style.display = "flex";

      setTimeout(() => {
      successPopup.style.display = "none";
  }, 5000);
}
//  show the error popup
function showErrorPopup(message) {
  const errorPopup = document.getElementById("error-popup");
  const messageText = errorPopup.querySelector(".message-text");
  const subText = errorPopup.querySelector(".sub-text");


  messageText.textContent = "Error";
  subText.textContent = message;

  // Show the popup
  errorPopup.style.display = "flex";

    setTimeout(() => {
      errorPopup.style.display = "none";
  }, 5000);
}
//  close the success popup
function closeSuccessPopup() {
  const successPopup = document.getElementById("success-popup");
  successPopup.style.display = "none";
}
// close the error popup
function closeErrorPopup() {
  const errorPopup = document.getElementById("error-popup");
  errorPopup.style.display = "none";
}
