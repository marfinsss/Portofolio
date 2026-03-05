// ===================== script.js =====================

window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((r) => {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      r.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ================= TYPING EFFECT =================
const words = ["Alif", "Mau Jadi Programmer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 120;

function typeEffect() {
  const typingElement = document.querySelector(".typing");
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ================= LIGHTBOX AKTIVITAS =================

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// ================= RANDOM FLOATING PHOTOS =================

const photoContainer = document.querySelector(".photo-particles");

const photoList = [
  "images/aktivitas/1.jpeg",
  "images/aktivitas/2.jpeg",
  "images/aktivitas/3.jpeg",
  "images/aktivitas/4.jpeg",
  "images/aktivitas/5.jpeg",
  "images/aktivitas/6.jpeg",
  "images/aktivitas/7.jpeg",
  "images/aktivitas/8.jpeg",
  "images/aktivitas/9.jpeg",
  "images/aktivitas/10.jpeg",
  "images/aktivitas/11.jpeg",
  "images/aktivitas/12.jpeg",
  "images/aktivitas/13.jpeg",
  "images/aktivitas/14.jpeg",
  "images/aktivitas/15.jpeg",
  "images/aktivitas/16.jpeg",
];

function createPhoto() {
  const img = document.createElement("img");
  img.src = photoList[Math.floor(Math.random() * photoList.length)];
  img.classList.add("photo-particle");

  // posisi random dalam hero
  img.style.left = Math.random() * 90 + "%";
  img.style.top = Math.random() * 80 + "%";

  photoContainer.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 6000);
}

// munculkan setiap 1.5 detik
setInterval(createPhoto, 1500);


// ================= LANGUAGE TOGGLE =================

let currentLang = "id";

const translations = {
  id: {
    nav1: "Beranda",
    nav2: "Tentang Saya",
    nav3: "Portofolio",
    nav4: "Kontak",
    halo: "Halo, Saya",
    desc:
      "Saya adalah seorang pelajar yang bersemangat dalam pengembangan web dan siap belajar serta berkembang di dunia industri.",
    lihat: "Lihat Portofolio",
    tentang: "Tentang Saya",
    tentangDesc:
      "Saya adalah pelajar SMK jurusan Rekayasa Perangkat Lunak yang memiliki semangat tinggi dalam pengembangan web.",
    magang: "Siap Berkembang Melalui Program Magang",
    magangDesc:
      "Saya siap berkontribusi, belajar, dan berkembang dalam lingkungan profesional melalui program magang di bidang Web Development.",
  },

  en: {
    nav1: "Home",
    nav2: "About",
    nav3: "Portfolio",
    nav4: "Contact",
    halo: "Hi, I'm",
    desc:
      "I am a student who is passionate about web development and ready to grow in the tech industry.",
    lihat: "View Portfolio",
    tentang: "About Me",
    tentangDesc:
      "I am a vocational high school student majoring in Software Engineering with strong passion in web development.",
    magang: "Ready to Grow Through Internship Program",
    magangDesc:
      "I am ready to contribute, learn, and grow in a professional environment through a Web Development internship program.",
  },
};

function toggleLanguage() {
  currentLang = currentLang === "id" ? "en" : "id";

  document.getElementById("langBtn").textContent =
    currentLang === "id" ? "EN" : "ID";

  document.querySelectorAll("[data-id]").forEach((element) => {
    const key = element.getAttribute("data-id");
    element.textContent = translations[currentLang][key];
  });
}



