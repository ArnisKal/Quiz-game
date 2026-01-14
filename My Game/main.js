//Page loading things
document.addEventListener("DOMContentLoaded", () => {
    const page = document.getElementById("page"); 
    const buttons = document.querySelectorAll(".nav_buttons .btn");
    const modeBtn = document.querySelector(".mode_btn"); //Dark Mode button
    const profileBtn = document.getElementById("profileBtn"); //Profile btn 
    const profileMenu = document.getElementById("profileMenu"); 
    const startButton = document.getElementById("startQuizBtn") 

    //Quiz start button
    document.getElementById('startQuizBtn').addEventListener('click', function() {
      window.open('quizes.html', '_blank');
    });
  
    //Dropdown open
    profileBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        profileMenu.style.display =
            profileMenu.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener("click", () => {
        profileMenu.style.display = "none";
    });

    //Dark Mode
    if (!modeBtn) {
        console.error("Dark mode button not found!");
        return;
    }

    modeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            modeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Light';
        } else {
            modeBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark';
        }
    });

    //HTML for pages
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
                <div class="party_btn">
                  <span> Create a party</span>
                </div>

                 <div class="party_btn">
                  <span> Join with code</span>
                </div>
                `;
            }

            if (section === "Community") {
                page.innerHTML = `
                    <div>
                      <div class="category_btn">
                        <button type="button" class="btn_choose">Memes</button>
                        <button type="button" class="btn_choose">Video Games</button>
                      </div>  

                      <div> 
                        <input type="text" class="com_input" placeholder="Write a review"> 
                      </div>
                    </div> 
                `;
            }
        });
    });
});

//Correct answers things
let questionIndex = 0;
let timerInterval = null; 

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

//Start timer
function startQuestionTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  let timeLeft = 20;
  const display = document.querySelector('#safeTimerDisplay');
  
  display.textContent = formatTime(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    display.textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById("result").innerText = "Time's up!";
      document.querySelectorAll(".answers button").forEach(b => b.disabled = true);
      
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Move to next question
function nextQuestion() {
  questionIndex++;
  if (questionIndex < myQuestions.length) {
    loadQuestion();
  } else {
    clearInterval(timerInterval);
    document.getElementById("answer").innerText = "You are competitive player!!!";
    document.querySelector('#safeTimerDisplay').textContent = "00:00";
  }
}

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
  startQuestionTimer();
}

document.querySelectorAll(".answers button").forEach(btn => {
  btn.addEventListener("click", () => {
    clearInterval(timerInterval);
    
    document.getElementById("result").innerText =
      btn.dataset.correct === "true" ? "Correct" : "Incorrect";

    document.querySelectorAll(".answers button").forEach(b => b.disabled = true);

    setTimeout(() => {
      nextQuestion();
    }, 1000);
  });
});

loadQuestion();


