/*------------------------------------------------------------------------------------------------------------------------------------------------*/



if (localStorage.getItem("isDark") === null) {
  localStorage.setItem("isDark", "false");
}



function onload(pageName) {
  if (localStorage.getItem("isDark") == "true") {
    localStorage.setItem("isDark", "false");
    document.getElementById("dark-lightCheckbox").checked = true;
      dark("Member");
    
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

    if (page == "Member") {
      document.documentElement.style.setProperty(
        "--cardcon-background",
        "#242526"
      );
      document.documentElement.style.setProperty("--mainSectionEvents-navBar-background-color","#18191a");
      document.getElementById("memt").style.color = "whitesmoke";
      document.documentElement.style.setProperty(
        "--price-font-color",
        "whitesmoke"
      );
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

    if (page == "Member") {
    
      document.documentElement.style.removeProperty("--mainSectionEvents-navBar-background-color");
      document.getElementById("memt").style.color = "black";
      document.documentElement.style.removeProperty(
        "--cardcon-background"
      );
      document.documentElement.style.removeProperty(
        "--price-font-color"
      );
      
    }
  }
  localStorage.getItem("isDark") == "true"
    ? localStorage.setItem("isDark", "false")
    : localStorage.setItem("isDark", "true");
}

/*------------------------------------------------------------------------------------------------------------------------------------------------*/


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
  } else {
    document.getElementById("backToTopLink").style.display = "";
  }
  }
)


function toggleMenu(num) {
  var menu = document.getElementById("menuUl" + num);
  var menuBtn = document.getElementById("menuBtn" + num);


  if (menu.style.display == "flex") {
    menu.style.display = "none"
    menuBtn.classList.toggle("rotate");
  }
  
  else {
    menu.style.display = "flex";
    menuBtn.classList.toggle("rotate");

  }

}
function showHideMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display == "flex") {
    menu.style.display = "none"
  }
  else {
    menu.style.display = "flex";
  }
}
let isYearlyPricing = false;



function selectMembership(plan) {
  let price;
  switch (plan) {
      case 'Basic':
          price = "800"; 
          break;
      case 'Premium':
          price = "1500"; 
          break;
      case 'VIP':
          price = "3000"; 
          break;
      default:
          price = "800"; 
  }

 
  document.getElementById("selectedPlan").textContent = plan;
  document.getElementById("selectedPrice").textContent = `EGP ${price}`;


  document.getElementById("confirmationModal").style.display = "block";

 
  sessionStorage.setItem("selectedPlan", plan);
  sessionStorage.setItem("selectedPrice", price);
}

function closeModal() {
  const modal = document.getElementById("confirmationModal");
  modal.style.display = "none";
}

function confirmMembership() {
 
  const plan = sessionStorage.getItem("selectedPlan");
  const price = sessionStorage.getItem("selectedPrice");

  window.location.href = `Checkout.html?plan=${plan}&price=${price}`;

  closeModal();
}
