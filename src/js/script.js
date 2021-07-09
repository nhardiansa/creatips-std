const questions = document.querySelectorAll(".question")
const answers = document.querySelectorAll(".answer")
const arrows = document.querySelectorAll(".arrow")

// questions.addEventListener("click", (e) => {
//   answers.classList.toggle('hidden')
// })

for(let i = 0; i <= 2; i++) {
  questions[i].addEventListener('click', e => {
    answers[i].classList.toggle("hidden")
    arrows[i].classList.toggle("transform")
    arrows[i].classList.toggle("rotate-180")
  })
}