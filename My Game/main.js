//Page loading things
document.addEventListener("DOMContentLoaded", () => {
    const page = document.getElementById("page");
    const buttons = document.querySelectorAll(".nav_buttons .btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const section = btn.textContent.trim();

            if (section === "Quizes") {
                page.innerHTML = `

                    <button type="button" class="quizes_btn_games"><i class="fa-solid fa-gamepad"></i>Games</button>
                    <button type="button" class="quizes_btn_memes"><i class="fa-solid fa-masks-theater"></i>Memes</button>
                    <button type="button" class="quizes_btn_movies"><i class="fa-solid fa-clapperboard"></i>Movies</button>
                    <button type="button" class="quizes_btn_geo"><i class="fa-solid fa-earth-americas"></i>Geography</button>
                    <button type="button" class="quizes_btn_hist"><i class="fa-solid fa-hat-cowboy"></i>History</button>

                    <div> 
                        <button class="quiz_btn">  
                            <span> Memes </span>
                        </button>
                    </div>

                     <div> 
                        <div class="quiz_btn" onclick="location.href='quizes.html'">  
                            <span> Video games</span>
                        </div>
                    </div>
                `;
            }

            if (section === "Party") {
                page.innerHTML = `
                   
                `;
            }

            if (section === "Comunity") {
                page.innerHTML = `
                    
                `;
            }
        });
    });
});

//Correct answers things
let questionIndex = 0;

const myQuestions = [
  {
    question: "What is this game?",
    image: "dota-2-logo-png_seeklogo-284923.png",
    correctAnsw: "d",
    answers: {
      a: "Minecraft",
      b: "RDR2",
      c: "League of Legends",
      d: "Dota 2"
    }
  },
  {
    question: "From which game is this meme?",
    image: "my-summer-car-car.gif",
    correctAnsw: "b",
    answers: {
      a: "CS2",
      b: "My Summer Car",
      c: "Dead by Daylight",
      d: "GTA V"
    }
  },
  {
    question: "Who is this?",
    image: "Trevy.jpg",
    correctAnsw: "d",
    answers: {
      a: "Franklin",
      b: "Homer",
      c: "Pablo",
      d: "Trevor"
    }
  },
   {
    question: "Who is this?",
    image: "CakeBaker.png",
    correctAnsw: "d",
    answers: {
      a: "Postal Dude",
      b: "Santa Claus",
      c: "",
      d: "CakeBaker"
    }
  },
   {
    question: "What is this game?",
    image: "CS2.jpg",
    correctAnsw: "a",
    answers: {
      a: "CS2",
      b: "Fortnite",
      c: "Resident evil",
      d: "Diablo 3"
    }
  },
   {
    question: "Who is this?",
    image: "Michael.jpg",
    correctAnsw: "c",
    answers: {
      a: "Terminator",
      b: "Freddy Fazbear",
      c: "Michael Myers",
      d: "Leon Kennedy"
    }
  },
   {
    question: "What did he say?",
    image: "gta.gif",
    correctAnsw: "c",
    answers: {
      a: "It's a toy boat",
      b: "Hello",
      c: "Davey!",
      d: "I have a tuberculosis"
    }
  },
  {
    question: "Who is he?",
    image: "Simple.gif",
    correctAnsw: "d",
    answers: {
      a: "Idk",
      b: "Someone",
      c: "CS2 player",
      d: "S1mple"
    }
  },
  {
    question: "Who is he?",
    image: "images.jpg",
    correctAnsw: "b",
    answers: {
      a: "Toplebald",
      b: "Toplesgun",
      c: "No name",
      d: "Gaben"
    }
  },
];

function loadQuestion() {
  const q = myQuestions[questionIndex];

  document.getElementById("answer").innerText = q.question;
  document.querySelector(".first_img img").src = q.image;
  document.getElementById("result").innerText = "";

  Object.entries(q.answers).forEach(([key, text]) => {
    const btn = document.getElementById(key);
    btn.innerText = text;
    btn.disabled = false;
    btn.dataset.correct = key === q.correctAnsw;
  });
}

document.querySelectorAll(".answers button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("result").innerText =
      btn.dataset.correct === "true" ? "Correct " : "Incorrect ";

    document.querySelectorAll(".answers button").forEach(b => b.disabled = true);

    setTimeout(() => {
      questionIndex++;
      if (questionIndex < myQuestions.length) {
        loadQuestion();
      } else {
        document.getElementById("answer").innerText = "You are competitive player!!!";
      }
    }, 1000);
  });
});

loadQuestion();

//Timer function
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = function () {
    var time = 60 / 2, 
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
};


//


