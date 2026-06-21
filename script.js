const SUPABASE_URL =
"https://heybvjxiuhqmmzexywhp.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhleWJ2anhpdWhxbW16ZXh5d2hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwNTU0OTEsImV4cCI6MjA5NzYzMTQ5MX0.5Okn1q_efdNKHk_Pz1hzAhfJwsb1cyo2VeTU4GSJT-s";

const supabase =
window.supabase.createClient(
   https://heybvjxiuhqmmzexywhp.supabase.co,
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhleWJ2anhpdWhxbW16ZXh5d2hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwNTU0OTEsImV4cCI6MjA5NzYzMTQ5MX0.5Okn1q_efdNKHk_Pz1hzAhfJwsb1cyo2VeTU4GSJT-s,

);

const questions = [
  {
    section: "Trading Background",
    type: "single",
    question: "Do you have any knowledge or experience with trading or investing?",
    options: [
      "Yes, I actively trade/invest",
      "Yes, I have some knowledge but don't trade",
      "I've heard about it but know very little",
      "No, I'm completely unfamiliar"
    ]
  },
  {
    section: "Trading Background",
    type: "single",
    question: "Which best describes your current level of trading/investing knowledge?",
    options: [
      "Beginner",
      "Intermediate",
      "Advanced",
      "Professional"
    ]
  },
  {
    section: "Trading Background",
    type: "single",
    question: "How long have you been involved in trading or investing?",
    options: [
      "Less than 3 months",
      "3-12 months",
      "1-3 years",
      "3-5 years",
      "More than 5 years"
    ]
  },
  {
    section: "Trading Background",
    type: "single",
    question: "Do you currently trade or invest?",
    options: [
      "Yes, regularly",
      "Yes, occasionally",
      "Not currently, but I have in the past",
      "No, but I'm interested",
      "No, and I'm not interested"
    ]
  },
  {
    section: "Trading Background",
    type: "single",
    question: "How would you describe your overall trading/investing results so far?",
    options: [
      "Consistently profitable",
      "Mostly profitable",
      "Break-even",
      "Mostly unprofitable",
      "Consistently unprofitable",
      "I haven't started yet"
    ]
  },
  {
    section: "Trading Background",
    type: "multi",
    question: "Which market(s) are you interested in or currently participate in?",
    options: [
      "Cryptocurrency",
      "Forex",
      "Stocks",
      "Commodities",
      "Indices",
      "Mutual Funds / ETFs",
      "Other"
    ]
  },
  {
    section: "Trading Strategy & Challenges",
    type: "single",
    question: "Which trading strategy or approach do you primarily use?",
    options: [
      "Price Action",
      "SMC / ICT",
      "Scalping",
      "Swing Trading",
      "Indicator Based",
      "Copy Trading",
      "Automated Trading",
      "Other"
    ]
  },
  {
    section: "Trading Strategy & Challenges",
    type: "text",
    question: "What is your biggest challenge in trading?"
  },
  {
    section: "Trading Strategy & Challenges",
    type: "single",
    question: "Have you tried any tools, services, or platforms to overcome this challenge?",
    options: [
      "Yes",
      "No"
    ]
  },
  {
    section: "Trading Strategy & Challenges",
    type: "text",
    question: "If yes, what was the biggest issue with those solutions?"
  },
  {
    section: "Excellium Validation",
    type: "single",
    question: "How useful would an AI platform that creates, improves, backtests and automates trading strategies be for you?",
    options: [
      "Not Useful",
      "Slightly Useful",
      "Moderately Useful",
      "Very Useful",
      "Extremely Useful"
    ]
  },
  {
    section: "Excellium Validation",
    type: "single",
    question: "Which feature interests you the most?",
    options: [
      "AI Strategy Creation",
      "Backtesting",
      "Trade Automation",
      "Strategy Optimization",
      "Learning & Education"
    ]
  },
  {
    section: "Excellium Validation",
    type: "single",
    question: "If this platform genuinely improved your trading experience, would you be willing to pay for it?",
    options: [
      "Yes",
      "Maybe",
      "No"
    ]
  },
  {
    section: "Excellium Validation",
    type: "single",
    question: "What would be a reasonable monthly price?",
    options: [
      "Free Only",
      "Under ₹299",
      "₹299 - ₹999",
      "₹999 - ₹2999",
      "₹2999+"
    ]
  },
  {
    section: "Excellium Validation",
    type: "single",
    question: "If Excellium launched today, how likely would you be to try it?",
    options: [
      "Definitely",
      "Probably",
      "Not Sure",
      "Probably Not",
      "Definitely Not"
    ]
  }
];

// STATE VARIABLES
let currentQuestion = 0;
let answers = {};
let isNonTrader = false;
let introSeen = false;
let introSlide = 0;
let introReturnQuestion = null;

// INTRO SLIDE DATA SOURCE
const introSlides = [
  {
    title: "Meet Excellium",
    subtitle: "AI-Powered Trading Intelligence",
    text: "Excellium is designed to simplify the entire trading journey through AI and automation."
  },
  {
    title: "What Excellium Can Do",
    bullets: [
      "Create trading strategies using natural language.",
      "Improve and optimize your strategies.",
      "Backtest before risking real capital.",
      "Automate trade execution.",
      "Save and reuse strategies."
    ]
  },
  {
    title: "The Vision",
    bullets: [
      "Learn trading through an integrated AI assistant.",
      "Access analytics, automation, and education in one place.",
      "Reduce emotional decision-making."
    ],
    closing: "Our vision is to make advanced trading technology accessible to everyone."
  }
];

// DOM ELEMENTS
const heroScreen = document.getElementById("hero-screen");
const surveyScreen = document.getElementById("survey-screen");
const introScreen = document.getElementById("intro-screen");
const resultsScreen = document.getElementById("results-screen");
const waitlistScreen = document.getElementById("waitlist-screen");
const thankyouScreen = document.getElementById("thankyou-screen");

const introPrevBtn = document.getElementById("introPrevBtn");
const introNextBtn = document.getElementById("introNextBtn");

document.getElementById("startBtn").addEventListener("click", startSurvey);

// DYNAMIC ROUTING MAP
function getVisibleQuestions() {
  return isNonTrader
    ? [0, 10, 11, 12, 13, 14]
    : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
}

function startSurvey() {
  heroScreen.classList.remove("active");
  surveyScreen.classList.add("active");
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("section-title").innerText = q.section;

  const visible = getVisibleQuestions();
  const currentVisible = visible.indexOf(currentQuestion);
  document.getElementById("question-count").innerText = 
    `Question ${currentVisible + 1} of ${visible.length}`;

  document.getElementById("question-text").innerText = q.question;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  if (q.type === "single") {
    q.options.forEach(option => {
      const div = document.createElement("div");
      div.classList.add("option");
      div.innerText = option;

      if (answers[currentQuestion] === option) {
        div.classList.add("selected");
      }

      div.onclick = () => {
        document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
        div.classList.add("selected");
        answers[currentQuestion] = option;

        if (currentQuestion === 0 && option === "No, I'm completely unfamiliar") {
          isNonTrader = true;
        } else if (currentQuestion === 0) {
          isNonTrader = false;
        }
      };

      container.appendChild(div);
    });

  } else if (q.type === "multi") {
    answers[currentQuestion] = answers[currentQuestion] || [];

    q.options.forEach(option => {
      const div = document.createElement("div");
      div.classList.add("option");
      div.innerText = option;

      if (answers[currentQuestion].includes(option)) {
        div.classList.add("selected");
      }

      div.onclick = () => {
        div.classList.toggle("selected");
        if (div.classList.contains("selected")) {
          answers[currentQuestion].push(option);
        } else {
          answers[currentQuestion] = answers[currentQuestion].filter(i => i !== option);
        }
      };

      container.appendChild(div);
    });

  } else if (q.type === "text") {
    const textarea = document.createElement("textarea");
    textarea.placeholder = "Type your answer here...";
    textarea.value = answers[currentQuestion] || "";
    textarea.oninput = () => {
      answers[currentQuestion] = textarea.value;
    };
    container.appendChild(textarea);
  }

  updateProgress();
}

function updateProgress() {
  const visible = getVisibleQuestions();
  const currentVisible = visible.indexOf(currentQuestion);
  const percentage = ((currentVisible + 1) / visible.length) * 100;

  document.getElementById("progress-bar").style.width = percentage + "%";
}

// SURVEY FORWARD ENGINE
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentQuestion === 0 && isNonTrader && !introSeen) {
    introReturnQuestion = 0;
    showIntro();
    return;
  }

  if (currentQuestion === 9 && !isNonTrader && !introSeen) {
    introReturnQuestion = 9;
    showIntro();
    return;
  }

  const visible = getVisibleQuestions();
  const currentIndex = visible.indexOf(currentQuestion);

  if (currentIndex < visible.length - 1) {
    currentQuestion = visible[currentIndex + 1];
    loadQuestion();
  } else {
    showResults();
  }
});

// SURVEY BACKWARD ENGINE
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentQuestion === 10 && introSeen) {
    surveyScreen.classList.remove("active");
    introScreen.classList.add("active");
    introSlide = 2;
    renderIntroSlide();
    return;
  }

  const visible = getVisibleQuestions();
  const currentIndex = visible.indexOf(currentQuestion);

  if (currentIndex > 0) {
    currentQuestion = visible[currentIndex - 1];
    loadQuestion();
  }
});

function showIntro() {
  surveyScreen.classList.remove("active");
  introScreen.classList.add("active");
  introSlide = 0;
  renderIntroSlide();
}

// TEMPLATE PARSER ENGINE
function renderIntroSlide() {
  const slide = introSlides[introSlide];
  let html = "";

  // Slide 1 Layout
  if (introSlide === 0) {
    html += `
    <div class="intro-hero">
        <div class="intro-brand">
            <span class="meet">meet</span>
            <span class="brand-name">
                EXCELLIUM
            </span>
        </div>
        <div class="intro-divider"></div>
        <div class="intro-subtitle">
            AI-Powered Trading Intelligence
        </div>
        <p class="intro-text">
            Excellium is designed to simplify
            the entire trading journey through
            AI and automation.
        </p>
    </div>
    `;
  }

  // Slide 2 Layout
  if (introSlide === 1) {
    html += `
        <h2 class="slide-heading">
            What Excellium Can Do
        </h2>
        <div class="intro-divider"></div>
        <ul class="feature-list">
    `;

    slide.bullets.forEach(item => {
      html += `
        <li>
            <div class="feature-check">
                ✓
            </div>
            <span>${item}</span>
        </li>
      `;
    });

    html += `</ul>`;
  }

  // Slide 3 Layout
  if (introSlide === 2) {
    html += `
        <h2 class="slide-heading">
            The Vision
        </h2>
        <div class="intro-divider"></div>
        <div class="vision-layout">
            <ul class="vision-list">
    `;

    slide.bullets.forEach(item => {
      html += `
            <li>
                <div class="feature-check">
                    ✓
                </div>
                <span>${item}</span>
            </li>
      `;
    });

    html += `
            </ul>
            <div class="vision-quote">
                <div class="quote-mark">
                    "
                </div>
                <p>
                    ${slide.closing}
                </p>
                <div class="intro-note">
                    You're helping shape
                    Excellium before it launches.
                </div>
            </div>
        </div>
    `;
  }

  document.getElementById("intro-content").innerHTML = html;

  document.getElementById("introNextBtn").innerText =
    introSlide === 2 ? "Continue to Assessment" : "Continue";
}

// SLIDE NAV MECHANICS
introPrevBtn.addEventListener("click", () => {
  if (introSlide > 0) {
    introSlide--;
    renderIntroSlide();
    return;
  }

  introScreen.classList.remove("active");
  surveyScreen.classList.add("active");
  currentQuestion = introReturnQuestion;
  loadQuestion();
});

introNextBtn.addEventListener("click", () => {
  if (introSlide < 2) {
    introSlide++;
    renderIntroSlide();
    return;
  }

  introSeen = true;
  introScreen.classList.remove("active");
  surveyScreen.classList.add("active");
  currentQuestion = 10;
  loadQuestion();
});

function showResults() {
  surveyScreen.classList.remove("active");
  resultsScreen.classList.add("active");

  let summary = `
    <p><strong>Experience:</strong> ${answers[1] || "N/A"}</p>
    <p><strong>Profitability:</strong> ${answers[4] || "N/A"}</p>
    <p><strong>Markets:</strong> ${Array.isArray(answers[5]) ? answers[5].join(", ") : "N/A"}</p>
    <p><strong>Strategy:</strong> ${answers[6] || "N/A"}</p>
    <p><strong>Biggest Challenge:</strong> ${answers[7] || "N/A"}</p>
  `;

  document.getElementById("profile-summary").innerHTML = summary;
}

document.getElementById("continueBtn").addEventListener("click", () => {
  resultsScreen.classList.remove("active");
  waitlistScreen.classList.add("active");
});

document.getElementById("waitlistForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;

    const { error } = await supabase
        .from("survey_responses")
        .insert([{
            name,
            email,

            q1: answers[0] || "",
            q2: answers[1] || "",
            q3: answers[2] || "",
            q4: answers[3] || "",
            q5: answers[4] || "",
            q6: JSON.stringify(answers[5] || []),
            q7: answers[6] || "",
            q8: answers[7] || "",
            q9: answers[8] || "",
            q10: answers[9] || "",
            q11: answers[10] || "",
            q12: answers[11] || "",
            q13: answers[12] || "",
            q14: answers[13] || "",
            q15: answers[14] || ""
        }]);

    if (error) {
        console.error(error);
        alert("Submission failed.");
        return;
    }

    waitlistScreen.classList.remove("active");
    thankyouScreen.classList.add("active");
});
  console.log("Survey Answers", answers);
});
