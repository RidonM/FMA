const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const quit_quiz = document.querySelector(".quit");
const start_quiz = document.querySelector(".restart");
const quiz_box = document.querySelector(".quiz_box");
const timer_sec = document.querySelector(".timer_sec");
const time_left_txt = document.querySelector(".time_left_txt");
const total_que = document.querySelector(".total_que");
const time_line = document.querySelector(".time_line");
const option_list = document.querySelector(".option_list");
const next_btn = document.querySelector(".next_btn");
const show_results_btn = document.querySelector(".show_results_btn");
const result_box = document.querySelector(".result_box");
const score_text = document.querySelector(".score_text");
const quit_btn = document.querySelector(".quit");
const restart_btn = document.querySelector(".restart");

const tickAnswer = '<div class="icon tick"><i class="fas fa-check"></i>';
let currentQue = 0;
let counter;
let counterLine;
let quizPoints = 0;

start_btn.addEventListener('click', (event) => {
    info_box.classList.add("activeInfo");
});

show_results_btn.addEventListener("click", () => {
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    score_text.innerHTML = ("Your points: " + quizPoints + " out of " + questions.length);
});

quit_quiz.addEventListener('click', (event) => {
    info_box.classList.remove("activeInfo");
});

restart_btn.addEventListener("click", () => {

})

function quitQuiz() {
    window.location.reload();
}

start_quiz.addEventListener('click', (event) => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestion(currentQue);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
});

function showQuestion(index) {
    let que_text = document.querySelector(".que_text");
    let option_list = document.querySelector(".option_list");

    que_text.innerHTML = "<span>" + questions[index].numb + ". " + questions[index].question + "</span>";

    let hold_options = "";

    for (let i = 0; i < questions[index].options.length; i++) {
        hold_options += '<div class="option" id="clickedOpt' + i + '" onclick="optionSelected(this,' + index + "," + i + ')"><span>' + questions[index].options[i] + '</span></div>';
    }
    option_list.innerHTML = hold_options;
    total_que.textContent = questions[index].numb + " of " + questions.length + " Questions";
}

function optionSelected(answer, index, i) {
    let userAnswer = questions[index].options[i]; // pass the option user clicked for which question
    let correctAnswer = questions[index].answer; // pull  the answer for the question
    let selectedOption = document.querySelector("#clickedOpt" + i);

    stopQueue(index);
    clearInterval(counterLine);
    clearInterval(counter);
    next_btn.style.display = "inline-block";
    next_btn.addEventListener("click", nextQue);

    if (userAnswer == correctAnswer) {
        answer.classList.add("correct");
        answer.classList.add("disabled");
        selectedOption.innerHTML = '<span>' + userAnswer + '</span><div class="icon tick"><i class="fas fa-check"></i></div>';
        quizPoints++;
    }
    else {
        answer.classList.add("incorrect");
        answer.classList.add("disabled");
        selectedOption.innerHTML = '<span>' + userAnswer + '</span><div class="icon cross"><i class="fas fa-times"></i></div>';
    }

    if (index == questions.length - 1) {
        next_btn.style.display = "none";
        show_results_btn.style.display = "inline-block";
    }

}

function nextQue() {
    currentQue++;
    showQuestion(currentQue);
    startTimer(15);
    startTimerLine(0);
    next_btn.style.display = "none";
}

function stopQueue(q) {
    let _length = option_list.children.length;

    for (let i = 0; i < _length; i++) {
        option_list.children[i].classList.add("disabled");

        if (option_list.children[i].textContent == questions[q].answer) {
            option_list.children[i].innerHTML = '<span>' + questions[q].answer + '</span>' + tickAnswer;
            option_list.children[i].classList.add("correct");
        }
    }
}

function startTimer(count) {
    counter = setInterval(countDown, 1000);
    function countDown() {

        if (count < 10) {
            timer_sec.textContent = "0" + count;
        }
        else { timer_sec.textContent = count; }

        if (count == 0) {
            time_left_txt.textContent = "Time Off";
            clearInterval(counter);
        }
        count--;
    }
}

function queCounter(qCounter) {

}

function startTimerLine(t) {
    counterLine = setInterval(timer, 30);

    function timer() {
        t += 1;
        time_line.style.width = t + "px";

        if (t > 549) {
            clearInterval(counterLine);
        }
    }
}