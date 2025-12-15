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

let myQuestions = [
    {
       question: "What is this game?",
       answer: {a:"Minecraft", b:"RDR2", c:"League of Legends", d:"Dota 2", correctAnsw: "d"}, 
    },
]

function checkAnsw(){
    if (questionIndex >= myQuestions.lenght) return;

    let show = document.getElementById('answer');
    let q = myQuestions[questionIndex];
    show.innerHTML = q.question;

    Object.entries('answers').forEach(([letter,text])) =>  {
        const but = document.getElementById(letter);
        but.innerHTML = text;
        but.dataset.correct = q.correctAnsw === letter;
    };
}

document.getElementById("btn").addEventListener("click", function(e) {
    const tgt = e.target;
    if(tgt.type && tgt.type === "button") {
        document.getElementById("result").innerText = tgt.dataset.correct === "true"
    ? "Correct" : "Incorrect";
    }
});
