let step = 0;
let musicStarted = false;

const questions = [
  "Do you love me? 🥺",
  "Will you marry me someday? 💍",
  "Want to live with me forever? 🏡"
];

function nextQuestion() {

  // 🎵 Start music on FIRST click only
  if (!musicStarted) {
    const music = document.getElementById("bgMusic");
    music.volume = 0.5;
    music.play();
    musicStarted = true;
  }

  step++;

  if (step < questions.length) {
    document.getElementById("question").innerText = questions[step];
  } else {
    document.getElementById("intro").classList.remove("active");
    document.getElementById("birthday").classList.add("active");
    startBirthday();
  }
}

function startBirthday() {

  const lines = [
    "Nammal sett avo enn njn ottum vicharichilla ponney 😘🧿",
    "Pakshe sett ayappo enikk nee illathe pattanilla 😭",
    "Nee ahn ente ellam 🧿",
    "My cute wifeyyy 💋",
    "I love you so much thakkuveyyy 🧿💋",
    "Nee ente shuttumani ahnatto 💝"
  ];

  const messageDiv = document.getElementById("message");

  lines.forEach((line, index) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.innerText = line;
      messageDiv.appendChild(p);
    }, index * 1000);
  });

  setTimeout(() => {
    document.getElementById("finalLine").style.display = "block";
  }, lines.length * 1000 + 1000);

  // Show gallery after birthday
  setTimeout(() => {
    document.getElementById("gallery").classList.add("active");
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  }, lines.length * 1000 + 3000);
}
