const questions = document.querySelectorAll(".card-question");
  
questions.forEach((question) => {
  question.addEventListener("click", () => {
    questions.forEach((q) => {
      if (q !== question) {
        q.classList.remove("active");
        q.querySelector("p").style.display = "none";
        q.querySelector("img").src = "assets/images/icon-plus.svg";
      }
    });

    const paragraph = question.querySelector("p");
    const icon = question.querySelector("img");

    if (question.classList.contains("active")) {
      paragraph.style.display = "none";
      icon.src = "assets/images/icon-plus.svg";
    } else {
      paragraph.style.display = "block";
      icon.src = "assets/images/icon-minus.svg";
    }

    question.classList.toggle("active");
  });
});