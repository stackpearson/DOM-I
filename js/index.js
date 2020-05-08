const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/// Updating the nav bar ////
let navOne = document.querySelectorAll('a');

navOne[0].textContent = (siteContent["nav"]["nav-item-1"])
navOne[1].textContent = (siteContent["nav"]["nav-item-2"])
navOne[2].textContent = (siteContent["nav"]["nav-item-3"])
navOne[3].textContent = (siteContent["nav"]["nav-item-4"])
navOne[4].textContent = (siteContent["nav"]["nav-item-5"])
navOne[5].textContent = (siteContent["nav"]["nav-item-6"])

navOne.forEach(el => {
  el.style.color = "green";
})

// Adding new elements to the nav bar //

let theNav = document.querySelector('nav');
let newNavElements = document.querySelector('nav')
newNavElements1 = document.createElement('a')
newNavElements1.style.color = "green";
newNavElements1.textContent = "New Nav1"

newNavElements2 = document.createElement('a')
newNavElements2.textContent = "Dark Mode"
newNavElements2.style.color = "white";
newNavElements2.style.backgroundColor = "grey";
newNavElements2.style.borderRadius = "5px";
// newNavElements2.setAttribute('id', 'darkModeButton');
newNavElements2.setAttribute('onclick', 'darkMode()');
theNav.prepend(newNavElements1)
theNav.appendChild(newNavElements2)

// Updating upper content region //

let buttonContent = document.querySelector('button');
buttonContent.textContent = (siteContent["cta"]["button"])

let ctaHeader = document.querySelector('h1');
ctaHeader.textContent = (siteContent["cta"]["h1"])

let codeImage = document.getElementById('cta-img');
codeImage.setAttribute('src', siteContent["cta"]["img-src"])

// Updating main content region //

let mainContentHeaders = document.querySelectorAll('h4');

mainContentHeaders[0].textContent = (siteContent["main-content"]["features-h4"])
mainContentHeaders[1].textContent = (siteContent["main-content"]["about-h4"])
mainContentHeaders[2].textContent = (siteContent["main-content"]["services-h4"])
mainContentHeaders[3].textContent = (siteContent["main-content"]["product-h4"])
mainContentHeaders[4].textContent = (siteContent["main-content"]["vision-h4"])

let mainContentImg = document.getElementById('middle-img');
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mainContentText = document.querySelectorAll('p');
mainContentText[0].textContent = (siteContent["main-content"]["features-content"])
mainContentText[1].textContent = (siteContent["main-content"]["about-content"])
mainContentText[2].textContent = (siteContent["main-content"]["services-content"])
mainContentText[3].textContent = (siteContent["main-content"]["product-content"])
mainContentText[4].textContent = (siteContent["main-content"]["vision-content"])

// Updating footer region //

let footerHeader = document.querySelectorAll('h4');
footerHeader[5].textContent = (siteContent["contact"]["contact-h4"])

let footerText = document.querySelectorAll('p');
footerText[5].textContent = (siteContent["contact"]["address"])
footerText[6].textContent = (siteContent["contact"]["phone"])
footerText[7].textContent = (siteContent["contact"]["email"])
footerText[8].textContent = (siteContent["footer"]["copyright"])

// Additional stretch Styling///

ctaHeader.style.color = "red";

let contentBorders = document.querySelectorAll('.text-content h4');
contentBorders.forEach(el => {
  el.style.border = '1px solid grey';
  el.style.textAlign = 'center';
  el.style.margin = '0px 10px';
})

let fullBackground = document.querySelector('body');

function darkMode() {
  fullBackground.style.backgroundColor = "grey";
  newNavElements2.textContent = "Light Mode";
  newNavElements2.style.color = "black";
  newNavElements2.style.backgroundColor = "white";
  newNavElements2.setAttribute('id', 'lightModeButton');
  newNavElements2.setAttribute('onclick', 'lightMode()');

}

function lightMode() {
  fullBackground.style.backgroundColor = "white";
  newNavElements2.textContent = "Dark Mode";
  newNavElements2.style.color = "black";
  newNavElements2.style.backgroundColor = "white";
  newNavElements2.setAttribute('id', 'darkModeButton');
  newNavElements2.setAttribute('onclick', 'darkMode()');
}

 //can't figure out why the background color keeps erroring out saying it's undefined and not changing



