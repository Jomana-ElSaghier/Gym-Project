/*------------------------------------------------------------------------------------------------------------------------------------------------*/
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
    if (pageName == 'Store') {
      dark("Store");
    }
  }
  updateCheckoutButtonVisibility();
}

  for (var num = 1; num < 14; num++) {
    if (localStorage.getItem("isFavourites" + num) == "true") {
      document.getElementById("content-container" + num).classList.add("popup-class");
      document.getElementById("likee" + num).checked = true;
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
    document.documentElement.style.setProperty("--subMenu-background-color", "#242526");
    document.documentElement.style.setProperty("--search-background-color", "#242526");
    document.documentElement.style.setProperty("--search-font-color", "whitesmoke");


      document.getElementById("subMenuIcon2-2").style.filter = "invert(.85)";
      document.getElementById("SMI2").style.filter = "invert(1)";


    if (page == "Store") {

      document.documentElement.style.setProperty(
        "--infoBox-background-color",
        "#18191a"
      );
      document.documentElement.style.setProperty(
        "--infoBox-font-color",
        "whitesmoke"
      );
      document.documentElement.style.setProperty(
        "--content-container-background-color",
        "#242526"
      );
      document.documentElement.style.setProperty(
        "--input-background-color",
        "#242526"
      );
      document.documentElement.style.setProperty(
        "--price-font-color",
        "whitesmoke"
      );
      document.documentElement.style.setProperty(
        "--label-font-color",
        "whitesmoke"
      );
      document.documentElement.style.setProperty(
        "--container-description-font-color",
        "whitesmoke"
      ); document.documentElement.style.setProperty(
        "--product-title-font-color",
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
    if (page == "Store") {
      document.documentElement.style.removeProperty(
        "--products-background-color"
      );
      document.documentElement.style.removeProperty(
        "--infoBox-background-color"
      );
      document.documentElement.style.removeProperty(
        "--infoBox-font-color"
      );
      document.documentElement.style.removeProperty(
        "--content-container-background-color"
      );
      document.documentElement.style.removeProperty(
        "--container-description-font-color"
      );
      document.documentElement.style.removeProperty(
        "--label-font-color"
      );
      document.documentElement.style.removeProperty(
        "--product-title-font-color"
      );
      document.documentElement.style.removeProperty(
        "--price-font-color"
      );
      document.documentElement.style.removeProperty(
        "--input-background-color"
      );
      
    }
  }
  localStorage.getItem("isDark") == "true"
    ? localStorage.setItem("isDark", "false")
    : localStorage.setItem("isDark", "true");
}
var feedback_cnt = 0;
function feedback() {
  if (feedback_cnt == 0) {
    document.getElementById("feedbackForm-container").style.display = "flex";
    document.getElementById('feedbackIcon').innerHTML = '<svg fill="#fff" width="24px" height="24px" viewBox="0 0 200 200" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><title></title><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"></path></g></svg>'
    document.getElementById("feedbackIcon").classList.add("rotate");
    setTimeout(function () {
      document.getElementById("feedbackIcon").classList.remove("rotate");
    }, 500);

    feedback_cnt = 1;
  } else if (feedback_cnt == 1) {
    document.getElementById("feedbackForm-container").style.display = "";
    document.getElementById("feedbackIcon").classList.add("rotate");
    setTimeout(function () {
      document.getElementById('feedbackIcon').innerHTML = '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M8 10.5H16" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8 14H13.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>'
      document.getElementById("feedbackIcon").classList.remove("rotate");
    }, 600);
    feedback_cnt = 0;
  }
}
/*------------------------------------------------------------------------------------------------------------------------------------------------*/

function favourite(num) {
  var checkbox = document.getElementById("likee" + num);
  var popupMessageTick = document.getElementById("popup-massage-tick");
  var popupMessageCross = document.getElementById("popup-massage-cross");
  var contentContainer = document.getElementById("content-container" + num);

  if (checkbox.checked) {
    popupMessageTick.style.display = "flex";
    setTimeout(function () {
      popupMessageTick.style.display = "none";
    }, 3000);

    contentContainer.classList.add("popup-class");

    localStorage.setItem("isFavourites" + num, "true");
  } else {
 
    popupMessageCross.style.display = "flex";
    setTimeout(function () {
      popupMessageCross.style.display = "none";
    }, 3000);

    contentContainer.classList.remove("popup-class");

    localStorage.setItem("isFavourites" + num, "false");
  }
}


var filterFavouritesCnt = 0;

function filterFavourites() {
  var divs = document.querySelectorAll(".content-container");

  if (filterFavouritesCnt == 0) {
    document.getElementById("heartIcon").style.fill = "red";

    divs.forEach(function (div) {
      var num = div.id.replace("content-container", "");
      if (localStorage.getItem("isFavourites" + num) === "true") {
        div.style.display = "flex"; // Show liked cards
      } else {
        div.style.display = "none"; // Hide non-liked cards
      }
    });

    filterFavouritesCnt = 1;
  } else {

    document.getElementById("heartIcon").style.fill = "";

    divs.forEach(function (div) {
      div.style.display = "flex"; // Show all cards
    });

    filterFavouritesCnt = 0;
  }
  const checkoutButtonContainer = document.getElementById("checkoutButtonContainer");
    checkoutButtonContainer.style.display = "none";
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

/*----*/

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




function addToCart(num) {
  const checkbox = document.getElementById("add" + num); // Cart checkbox
  const popupMessageTick = document.getElementById("message-tick");
  const productCard = document.getElementById("content-container" + num);
  const price = productCard.querySelector(".price").textContent.trim();
  const quantityInput = productCard.querySelector("input[type='number']");
  const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

  // Validate quantity
  if (isNaN(quantity) || quantity < 1) {
    quantity = 1; 
  }

  const cartItem = localStorage.getItem("cartItem" + num);
  if (cartItem) {
 
    const existingItem = JSON.parse(cartItem);
    existingItem.quantity += quantity; // Increase the quantity
    localStorage.setItem("cartItem" + num, JSON.stringify(existingItem));
  } else {
    // Add a new item to the cart
    localStorage.setItem(
      "cartItem" + num,
      JSON.stringify({
        id: num,
        price: price,
        quantity: quantity,
      })
    );
  }

  popupMessageTick.style.display = "flex";
  setTimeout(function () {
    popupMessageTick.style.display = "none";
  }, 3000);

  updateCheckoutButtonVisibility();
}

function calculateTotalPrice() {
  let totalPrice = 0;

  for (let i = 1; i <= 11; i++) {
    const cartItem = localStorage.getItem("cartItem" + i);
    if (cartItem) {
      const item = JSON.parse(cartItem);
      const price = parseFloat(item.price.replace(/[^0-9.]/g, '')); // Remove non-numeric characters
      totalPrice += price * item.quantity;
    }
  }

  return totalPrice.toFixed(2); 
}

function redirectToCheckout() {
  const totalPrice = calculateTotalPrice();
  window.location.href = `checkout.html?total=${totalPrice}`; 
}

function  updateCheckoutButtonVisibility() {
  const checkoutButtonContainer = document.getElementById("checkoutButtonContainer");
  let hasItems = false;


  for (let i = 1; i <= 11; i++) { 
    if (localStorage.getItem("cartItem" + i)) {
      hasItems = true;
      break;
    }
  }

  if (hasItems) {
    checkoutButtonContainer.style.display = "block";
  } else {
    checkoutButtonContainer.style.display = "none";
  }
}

function filterCart() {
  const cartIcon = document.querySelector(".cart");
  const allProducts = document.querySelectorAll(".content-container");
  const isActive = cartIcon.getAttribute("data-active") === "true";

  if (!isActive) {
    // Activate filter
    cartIcon.style.fill = "blue";
    allProducts.forEach((product) => {
      const productId = product.id.replace("content-container", "");
      const cartItem = localStorage.getItem(`cartItem${productId}`);
      if (!cartItem) {
        product.style.display = "none"; // Hide items not in the cart
      } else {
        const addToCartButton = product.querySelector(".add-to-cart");
        const quantityInput = product.querySelector("input[type='number']");
        const quantityLabel = product.querySelector("label[for^='quantity-']");
        if (addToCartButton) addToCartButton.style.display = "none";
        if (quantityInput) quantityInput.style.display = "none";
        if (quantityLabel) quantityLabel.style.display = "none";
   
        const cartDetails = product.querySelector(".cart-details");
        if (cartDetails) {
          const productData = JSON.parse(cartItem);
          cartDetails.innerHTML = `
            <p style="font-weight: bold">Qty: ${productData.quantity}</p>
            <button onclick="removeFromCart(${productData.id})"
              class="removeBtn">Remove</button>
          `;
          cartDetails.style.display = "block";
        }
      }
    });
    cartIcon.setAttribute("data-active", "true");
  } else {
    // Deactivate filter
    cartIcon.style.fill = "";
    allProducts.forEach((product) => {
      product.style.display = "flex"; // Show all items
      
      const addToCartButton = product.querySelector(".add-to-cart");
      const quantityInput = product.querySelector("input[type='number']");
      const quantityLabel = product.querySelector("label[for^='quantity-']");
      if (quantityLabel) quantityLabel.style.display = "inline-block";
      if (addToCartButton) addToCartButton.style.display = "inline-block";
      if (quantityInput) quantityInput.style.display = "inline-block";

      const cartDetails = product.querySelector(".cart-details");
      if (cartDetails) {
        cartDetails.style.display = "none"; // Hide cart details
      }
    });
    cartIcon.setAttribute("data-active", "false");
    updateCheckoutButtonVisibility();
    
  }
}

// Remove from Cart Functionality
function removeFromCart(id) {
  localStorage.removeItem(`cartItem${id}`);
  var popupMessageCross = document.getElementById("message-cross");
  popupMessageCross.style.display = "flex";
  setTimeout(function () {
    popupMessageCross.style.display = "none";
  }, 3000);
  filterCart(); 
}
