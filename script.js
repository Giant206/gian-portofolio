var navbar = document.getElementById("navbar");
var menuBtn = document.getElementById("menuBtn");
var navMobile = document.getElementById("navMobile");
var navLinks = document.querySelectorAll(".nav-link");
var navLinksM = document.querySelectorAll(".nav-link-m");
var sections = document.querySelectorAll("section");
var revealElements = document.querySelectorAll(".reveal");
var skillBars = document.querySelectorAll(".skill-bar-fill");
var formKontak = document.getElementById("formKontak");

function toggleMenu() {
  menuBtn.classList.toggle("open");
  navMobile.classList.toggle("show");
}

function closeMenu() {
  menuBtn.classList.remove("open");
  navMobile.classList.remove("show");
}

function handleScroll() {
  var scrollY = window.scrollY;

  if (scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  var sectionIds = ["home", "tentang", "keahlian", "proyek", "kontak"];

  for (var i = sectionIds.length - 1; i >= 0; i--) {
    var section = document.getElementById(sectionIds[i]);
    if (section) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= 150) {
        for (var j = 0; j < navLinks.length; j++) {
          navLinks[j].classList.remove("active");
        }
        var activeLink = document.querySelector('.nav-link[href="#' + sectionIds[i] + '"]');
        if (activeLink) {
          activeLink.classList.add("active");
        }
        break;
      }
    }
  }
}

function checkReveal() {
  for (var i = 0; i < revealElements.length; i++) {
    var el = revealElements[i];
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 80) {
      el.classList.add("show");
    }
  }
}

function checkSkillBars() {
  for (var i = 0; i < skillBars.length; i++) {
    var bar = skillBars[i];
    var rect = bar.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 50) {
      bar.classList.add("animated");
    }
  }
}

menuBtn.addEventListener("click", toggleMenu);

for (var i = 0; i < navLinksM.length; i++) {
  navLinksM[i].addEventListener("click", function() {
    closeMenu();
  });
}

formKontak.addEventListener("submit", function(e) {
  e.preventDefault();
  var nama = document.getElementById("inputNama");
  var email = document.getElementById("inputEmail");
  var subjek = document.getElementById("inputSubjek");
  var pesan = document.getElementById("inputPesan");

  if (nama.value === "" || email.value === "" || pesan.value === "") {
    alert("Harap isi semua field yang diperlukan!");
    return;
  }

  alert("Pesan berhasil dikirim! Terima kasih " + nama.value);

  nama.value = "";
  email.value = "";
  subjek.value = "";
  pesan.value = "";
});

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    var href = this.getAttribute("href");
    var target = document.querySelector(href);
    if (target) {
      var offset = target.offsetTop - 70;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  });
}

for (var i = 0; i < navLinksM.length; i++) {
  navLinksM[i].addEventListener("click", function(e) {
    e.preventDefault();
    var href = this.getAttribute("href");
    var target = document.querySelector(href);
    if (target) {
      var offset = target.offsetTop - 70;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
    closeMenu();
  });
}

window.addEventListener("scroll", function() {
  handleScroll();
  checkReveal();
  checkSkillBars();
});

window.addEventListener("load", function() {
  checkReveal();
  checkSkillBars();
});
