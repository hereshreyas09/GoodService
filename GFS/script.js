// LOADER

window.addEventListener("load", () => {

  document.getElementById("loader").style.display = "none";

});

// SCROLL ANIMATION

function reveal(){

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", reveal);

reveal();

// FAQ

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    if(answer.style.display === "block"){

      answer.style.display = "none";

    } else {

      answer.style.display = "block";

    }

  });

});

// EMI CALCULATOR

function calculateEMI(){

  let amount =
  document.getElementById("loanAmount").value;

  let interest =
  document.getElementById("interestRate").value / 12 / 100;

  let months =
  document.getElementById("loanMonths").value;

  let emi =
  (amount * interest * Math.pow(1 + interest, months)) /
  (Math.pow(1 + interest, months) - 1);

  document.getElementById("emiResult").innerHTML =
  "Monthly EMI: ₹" + emi.toFixed(2);

}

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');

    const c = +counter.innerText;

    const increment = target / 200;

    if(c < target){

      counter.innerText =
      `${Math.ceil(c + increment)}`;

      setTimeout(updateCounter, 10);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});
