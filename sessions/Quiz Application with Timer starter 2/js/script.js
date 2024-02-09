const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const quit_quiz = document.querySelector(".quit");
const start_quiz = document.querySelector(".restart");
const quiz_box = document.querySelector(".quiz_box");
const timer_sec = document.querySelector(".timer_sec");
const time_left_txt = document.querySelector(".time_left_txt");
const total_que = document.querySelector(".total_que");
const time_line = document.querySelector(".time_line");
let currentQue;
let counter;
let counterLine;

start_btn.addEventListener('click', (event) => {
    info_box.classList.add("activeInfo");
});

quit_quiz.addEventListener('click', (event) => {
    info_box.classList.remove("activeInfo");
});

start_quiz.addEventListener('click', (event) => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestion(0);
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
        hold_options += '<div class="option" onclick="optionSelected(this,' + index + "," + i + ')"><span>' + questions[index].options[i] + '</span></div>';
    }
    option_list.innerHTML = hold_options;
    total_que.textContent = questions[index].numb + " of " + questions.length + " Questions";
}

function optionSelected(index, i) {
    let userAnswer = questions[index].options[i];
    let correctAnswer = questions[index].answer;
    if (userAnswer == correctAnswer) {
        answer.classList.add("correct");
    }
    else {
        answer.classList.add("incorrect");
        console.log(answer);
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
        t += 3;
        time_line.style.width = t + "px";

        if (t > 549) {
            clearInterval(counterLine);
        }
    }
}