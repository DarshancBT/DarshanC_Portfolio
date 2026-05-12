const roles = [

  "Embedded Systems Engineer",
  "PCB Design Engineer",
  "IoT Developer",
  "Embedded Firmware Engineer",
  "Power Electronics Engineer"

];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect(){

  currentRole = roles[roleIndex];

  // TYPING

  if(!isDeleting){

    typingElement.textContent =
    currentRole.substring(0, charIndex + 1);

    charIndex++;

    // COMPLETE WORD

    if(charIndex === currentRole.length){

      isDeleting = true;

      setTimeout(typeEffect, 1500);
      return;
    }

  }

  // DELETING

  else{

    typingElement.textContent =
    currentRole.substring(0, charIndex - 1);

    charIndex--;

    // NEXT WORD

    if(charIndex === 0){

      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;

    }

  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();


// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  }

  else{

    navbar.classList.remove("scrolled");

  }

});

// ================= MOBILE MENU =================

const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");

  navMenu.classList.toggle("active");

});

// CLOSE MENU ON CLICK

document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", () => {

    hamburger.classList.remove("active");

    navMenu.classList.remove("active");

  });

});



// ================= AOS =================

AOS.init({

  duration:1000,
  once:true,
  offset:120

});


// ================= COPY PHONE NUMBER =================

function copyPhoneNumber(){

  const phone = "+91 6361840169";

  navigator.clipboard.writeText(phone);

  // TOAST

  const toast = document.getElementById("copyToast");

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2000);

}