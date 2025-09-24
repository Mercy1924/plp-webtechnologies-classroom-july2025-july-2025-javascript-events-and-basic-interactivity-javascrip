// ============================
// Part 1: Event Handling Basics
// ============================
const button = document.getElementById('showMessageBtn');
const message = document.getElementById('message');
const nameInput = document.getElementById('nameInput');

// Button click
button.addEventListener('click', () => {
  message.textContent = "You clicked the button!";
});

// Mouseover
button.addEventListener('mouseover', () => {
  message.textContent = "Mouse is over the button!";
});

// Typing input
nameInput.addEventListener('input', (e) => {
  message.textContent = `You typed: ${e.target.value}`;
});


// ============================
// Part 2: Interactive Elements
// ============================

// Light/Dark Mode
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const countSpan = document.getElementById('count');
let count = 0;

decreaseBtn.addEventListener('click', () => {
  count--;
  countSpan.textContent = count;
});
increaseBtn.addEventListener('click', () => {
  count++;
  countSpan.textContent = count;
});

// FAQ toggle
const faqToggle = document.querySelector('.faq-toggle');
const faqAnswer = document.querySelector('.faq-answer');

faqToggle.addEventListener('click', () => {
  faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';
});


// ============================
// Part 3: Form Validation
// ============================
const signupForm = document.getElementById('signupForm');
const formName = document.getElementById('formName');
const formEmail = document.getElementById('formEmail');
const formPassword = document.getElementById('formPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stop form from submitting automatically
  let valid = true;

  // Name validation
  if (formName.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(formEmail.value)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (min 6 chars)
  if (formPassword.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (valid) {
    formSuccess.textContent = "Form submitted successfully!";
    signupForm.reset();
  } else {
    formSuccess.textContent = "";
  }
});
