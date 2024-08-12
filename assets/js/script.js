'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Booking appoinment
document.getElementById("bookBtn").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("popupForm").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "none";
});

document.getElementById("appointmentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;

  // Show the form data in an alert message
  alert(`Name: ${name}\nEmail: ${email}\nAppointment Date: ${date}`);

  // Close the popup form after submission
  document.getElementById("popupForm").style.display = "none";

  // Optional: Clear the form
  document.getElementById("appointmentForm").reset();
});


// Get call Back functionality
document.getElementById("callbackForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the email address from the input field
  const email = document.getElementById("emailInput").value;

  // Show the email address in an alert message
  alert(`Email Address: ${email}`);

  // Optional: Clear the input field after showing the alert
  document.getElementById("callbackForm").reset();
});









