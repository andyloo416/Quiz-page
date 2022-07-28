var timer = document.getElementById("timer");
var start = document.getElementById("start");
var btn = document.getElementById("btn");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var newBut = document.createElement("button");
var result = 0;
var timeLeft = 60;
newBut.innerHTML = "Start";

var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");

btn.appendChild(newBut);

function end() {
  question.innerHTML = "Your score is: " + result;
  listEl.remove();
}
function addScoreWithGoToQ2() {
  result++;
  console.log(result);
  q2();
}

function q1() {
  if (timeLeft > 0) {
    question.innerHTML = "Common type used data DO NOT include: ";

    a1.innerHTML = "strings";
    a2.innerHTML = "boolean";
    a3.innerHTML = "multiplier";
    a4.innerHTML = "numbers";

    // append child elements

    answer.appendChild(listEl);

    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);

    a3.addEventListener("click", addScoreWithGoToQ2);

    a1.addEventListener("click", function () {
      q2();
    });
    a2.addEventListener("click", function () {
      q2();
    });
    a4.addEventListener("click", function () {
      q2();
    });
  } else {
    end();
  }
}

function q2() {
  a3.removeEventListener("click", addScoreWithGoToQ2);
  if (timeLeft > 0) {
    question.innerHTML = "Which of the following is fruit: ";

    a1.innerHTML = "Elephant";
    a2.innerHTML = "Monkey";
    a3.innerHTML = "Andy";
    a4.innerHTML = "Apple";

    // append child elements

    answer.appendChild(listEl);

    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);

    a4.addEventListener("click", function () {
      result++;
      console.log(result);
      q3();
    });

    a1.addEventListener("click", function () {
      q3();
    });
    a2.addEventListener("click", function () {
      q3();
    });
    a3.addEventListener("click", function () {
      q3();
    });
  } else {
    end();
  }
}

function q3() {
  if (timeLeft > 0) {
    question.innerHTML = "Which of the following is animal: ";

    a1.innerHTML = "Banana";
    a2.innerHTML = "Monkey";
    a3.innerHTML = "Apple";
    a4.innerHTML = "Melon";

    // append child elements

    answer.appendChild(listEl);

    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);

    a2.addEventListener("click", function () {
      result++;
      console.log(result);
      end();
    });

    a1.addEventListener("click", function () {
      end();
    });
    a3.addEventListener("click", function () {
      end();
    });
    a4.addEventListener("click", function () {
      end();
    });
  } else {
    end();
  }
}

newBut.addEventListener("click", function countdown() {
  newBut.remove();

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.innerHTML = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.innerHTML = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timer.innerHTML = "Time is up!";
      clearInterval(timeInterval);
      //displayMessage();
    }
  }, 1000);
  q1();
});
