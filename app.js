"use strict";
const userContent = document.querySelector(".user-content");
const shareContent = document.querySelector(".share-content");
const ShareIconContainer = document.querySelector(".share-icon-container");
const shareIcon = document.querySelector(".share-icon");
const cardFooter = document.querySelector(".card-footer");

const app = () => {
  ShareIconContainer.addEventListener("click", () => {
    cardFooter.classList.toggle("footer-active");
    ShareIconContainer.classList.toggle("active-container");
    shareIcon.classList.toggle("active-icon");
    shareContent.classList.toggle("hidden");
    userContent.classList.toggle("hidden");
  });
};

app();
