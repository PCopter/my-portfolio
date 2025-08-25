// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Text animation effect
const roles = ["Copter ", "Computer Engineer " ,"Software Engineer ", "Fullstack Developer "];
const textElement = document.getElementById("changing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isFading = false;
let typingSpeed = 50; // ความเร็วพิมพ์
let delayBetweenWords = 1000; // หน่วงก่อนเปลี่ยนคำ

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isFading) {
    if (isDeleting) {
      textElement.textContent = currentRole.substring(0, charIndex--);
    } else {
      textElement.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // เริ่ม fade out
      setTimeout(() => {
        textElement.style.opacity = 0;
        isFading = true;
        setTimeout(() => {
          isDeleting = true;
          isFading = false;
          textElement.style.opacity = 1;
        }, 500); // เวลา fade out
      }, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? typingSpeed / 2 : typingSpeed);
}



typeEffect();