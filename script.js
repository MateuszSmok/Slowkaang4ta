const categories = [
    {
        name: "JOBS",
        words: [
            { english: "accountant", polish: "księgowy / księgowa" },
            { english: "architect", polish: "architekt / architektka" },
            { english: "cashier", polish: "kasjer / kasjerka" },
            { english: "checkout assistant", polish: "kasjer / kasjerka w supermarkecie" },
            { english: "chef", polish: "kucharz / kucharka" },
            { english: "computer programmer", polish: "programista / programistka" },
            { english: "economist", polish: "ekonomista / ekonomistka" },
            { english: "editor", polish: "redaktor / redaktorka" },
            { english: "electrician", polish: "elektryk" },
            { english: "farmer", polish: "rolnik" },
            { english: "fashion designer", polish: "projektant / projektantka mody" },
            { english: "firefighter", polish: "strażak" },
            { english: "flight attendant", polish: "steward / stewardesa" },
            { english: "journalist", polish: "dziennikarz / dziennikarka" },
            { english: "judge", polish: "sędzia" },
            { english: "lawyer", polish: "prawnik / prawniczka" },
            { english: "lecturer", polish: "wykładowca / wykładowczyni" },
            { english: "librarian", polish: "bibliotekarz / bibliotekarka" },
            { english: "manager", polish: "kierownik / kierowniczka" },
            { english: "nurse", polish: "pielęgniarka" },
            { english: "office assistant", polish: "asystent / asystentka biura" },
            { english: "paramedic", polish: "ratownik medyczny" },
            { english: "pharmacist", polish: "aptekarz / aptekarka" },
            { english: "plumber", polish: "hydraulik" },
            { english: "police officer", polish: "policjant / policjantka" },
            { english: "receptionist", polish: "recepcjonista / recepcjonistka" },
            { english: "sales assistant", polish: "sprzedawca / sprzedawczyni" },
            { english: "soldier", polish: "żołnierz" },
            { english: "surgeon", polish: "chirurg" },
            { english: "travel agent", polish: "pracownik biura podróży" },
            { english: "TV presenter", polish: "prezenter / prezenterka telewizyjna" },
            { english: "vet", polish: "weterynarz / weterynarka" }
        ]
    },
    {
        name: "WORK-DUTIES",
        words: [
            { english: "be at work", polish: "być w pracy" },
            { english: "be in charge of sth", polish: "odpowiadać za coś" },
            { english: "be responsible for sth", polish: "być odpowiedzialnym za coś" },
            { english: "collect data", polish: "zbierać dane" },
            { english: "do paperwork", polish: "zajmować się dokumentami" },
            { english: "do sth for a living", polish: "utrzymywać się z czegoś" },
            { english: "fulfil duties", polish: "wypełniać obowiązki" },
            { english: "job description", polish: "zakres obowiązków" },
            { english: "profession", polish: "zawód" },
            { english: "supervise", polish: "nadzorować" },
            { english: "take responsibility for sth", polish: "wziąć odpowiedzialność za coś" },
            { english: "work as sb", polish: "pracować jako ktoś" },
            { english: "work for a company", polish: "pracować w firmie" },
            { english: "work in a team", polish: "pracować w zespole" },
            { english: "work in sales", polish: "pracować w sprzedaży" },
            { english: "work in the tourist industry", polish: "pracować w branży turystycznej" },
            { english: "work on sth", polish: "pracować nad czymś" },
            { english: "work under pressure", polish: "pracować pod presją" },
            { english: "work with sb", polish: "pracować z kimś" }
        ]
    },
    {
        name: "JOB-ADJECTIVES",
        words: [
            { english: "inspiring", polish: "inspirująca" },
            { english: "manual", polish: "fizyczna" },
            { english: "monotonous", polish: "monotonna" },
            { english: "motivating", polish: "motywująca" },
            { english: "skilled", polish: "wymagająca kwalifikacji" },
            { english: "steady", polish: "stabilna" },
            { english: "stress-free", polish: "bezstresowa" },
            { english: "unpaid", polish: "bezpłatna" },
            { english: "well-paid", polish: "dobrze płatna" },
            { english: "challenging", polish: "ambitna" },
            { english: "dead-end", polish: "bez perspektyw" },
            { english: "high-powered", polish: "na wysokim stanowisku" },
            { english: "menial", polish: "fizyczna / prosta" },
            { english: "rewarding", polish: "satysfakcjonująca" },
            { english: "undemanding", polish: "niewymagająca" }
        ]
    },
    {
        name: "WORK-CONDITIONS",
        words: [
            { english: "be badly paid", polish: "być źle opłacanym" },
            { english: "be well-paid", polish: "być dobrze opłacanym" },
            { english: "business trip", polish: "podróż służbowa" },
            { english: "chance of promotion", polish: "szansa na awans" },
            { english: "colleague", polish: "kolega / koleżanka z pracy" },
            { english: "do overtime", polish: "pracować w nadgodzinach" },
            { english: "earnings", polish: "zarobki" },
            { english: "full-time", polish: "pełny etat" },
            { english: "get a bonus", polish: "dostać premię" },
            { english: "income", polish: "dochód" },
            { english: "meet deadlines", polish: "dotrzymywać terminów" },
            { english: "paid leave", polish: "płatny urlop" },
            { english: "part-time", polish: "część etatu" },
            { english: "pay rise", polish: "podwyżka" },
            { english: "per hour / week / month", polish: "na godzinę / tydzień / miesiąc" },
            { english: "permanent job", polish: "stała praca" },
            { english: "public holiday", polish: "dzień wolny od pracy" },
            { english: "salary", polish: "pensja" },
            { english: "sick leave", polish: "zwolnienie lekarskie" },
            { english: "take time off", polish: "wziąć wolne" },
            { english: "tax", polish: "podatek" },
            { english: "teamwork", polish: "praca zespołowa" },
            { english: "tip", polish: "napiwek" },
            { english: "work long hours", polish: "pracować długo" },
            { english: "working conditions", polish: "warunki pracy" }
        ]
    },
    {
        name: "SCHOOL-PLACES",
        words: [
            { english: "canteen", polish: "stołówka" },
            { english: "common room", polish: "świetlica" },
            { english: "headteacher's office", polish: "gabinet dyrektora" },
            { english: "laboratory", polish: "pracownia" },
            { english: "lecture hall", polish: "aula" },
            { english: "locker room", polish: "szatnia" },
            { english: "playground", polish: "boisko / plac zabaw" },
            { english: "secretary's office", polish: "sekretariat" },
            { english: "sports field", polish: "boisko" },
            { english: "staff room", polish: "pokój nauczycielski" }
        ]
    },
    {
        name: "SCHOOL-SUBJECTS",
        words: [
            { english: "archaeology", polish: "archeologia" },
            { english: "architecture", polish: "architektura" },
            { english: "arts subjects", polish: "przedmioty artystyczne" },
            { english: "banking and finance", polish: "bankowość i finanse" },
            { english: "chemistry", polish: "chemia" },
            { english: "engineering", polish: "inżynieria" },
            { english: "foreign languages", polish: "języki obce" },
            { english: "humanities", polish: "nauki humanistyczne" },
            { english: "IT", polish: "informatyka" },
            { english: "journalism", polish: "dziennikarstwo" },
            { english: "law", polish: "prawo" },
            { english: "marketing and management", polish: "marketing i zarządzanie" },
            { english: "medicine", polish: "medycyna" },
            { english: "PE", polish: "WF" },
            { english: "physics", polish: "fizyka" },
            { english: "psychology", polish: "psychologia" },
            { english: "science subjects", polish: "przedmioty ścisłe" },
            { english: "social sciences", polish: "nauki społeczne" },
            { english: "sociology", polish: "socjologia" },
            { english: "biotechnology", polish: "biotechnologia" }
        ]
    },
    {
        name: "LEARNING",
        words: [
            { english: "all-round development", polish: "wszechstronny rozwój" },
            { english: "attend a course", polish: "uczęszczać na kurs" },
            { english: "be curious", polish: "być ciekawym" },
            { english: "brainstorm ideas", polish: "przeprowadzać burzę mózgów" },
            { english: "concentrate on sth", polish: "skupić się na czymś" },
            { english: "critical thinking", polish: "myślenie krytyczne" },
            { english: "motivate", polish: "motywować" },
            { english: "personal development", polish: "rozwój osobisty" },
            { english: "put a plan into action", polish: "wdrożyć plan" },
            { english: "revise for sth", polish: "powtarzać do czegoś" },
            { english: "self-management", polish: "zarządzanie sobą" },
            { english: "self-motivation", polish: "wewnętrzna motywacja" },
            { english: "set goals", polish: "wyznaczać cele" },
            { english: "struggle with sth", polish: "zmagać się z czymś" },
            { english: "take notes", polish: "robić notatki" },
            { english: "concentration span", polish: "czas skupienia" },
            { english: "identify your learning style", polish: "określić styl uczenia się" },
            { english: "improve employability", polish: "zwiększyć szanse na zatrudnienie" },
            { english: "inner motivation", polish: "wewnętrzna motywacja" },
            { english: "know sth inside out", polish: "znać coś bardzo dobrze" },
            { english: "memory aid", polish: "technika zapamiętywania" },
            { english: "outperform", polish: "prześcignąć" },
            { english: "pursuit of knowledge", polish: "dążenie do wiedzy" }
        ]
    },
    {
        name: "SCHOOL-OBJECTS",
        words: [
            { english: "chalk", polish: "kreda" },
            { english: "compasses", polish: "cyrkiel" },
            { english: "folder", polish: "teczka" },
            { english: "highlighter", polish: "zakreślacz" },
            { english: "hole punch", polish: "dziurkacz" },
            { english: "protractor", polish: "kątomierz" },
            { english: "set square", polish: "ekierka" },
            { english: "stapler", polish: "zszywacz" }
        ]
    },
    {
        name: "GRADES-EXAMS",
        words: [
            { english: "award", polish: "nagroda" },
            { english: "certificate", polish: "świadectwo" },
            { english: "cheat", polish: "oszukiwać" },
            { english: "end-of-term exam", polish: "egzamin semestralny" },
            { english: "end-of-year exam", polish: "egzamin roczny" },
            { english: "entrance exam", polish: "egzamin wstępny" },
            { english: "exam paper", polish: "arkusz egzaminacyjny" },
            { english: "extra lessons", polish: "dodatkowe lekcje" },
            { english: "get a degree", polish: "zdobyć stopień" },
            { english: "get caught", polish: "zostać złapanym" },
            { english: "get results", polish: "otrzymać wyniki" },
            { english: "give marks", polish: "wystawiać oceny" },
            { english: "go towards sth", polish: "składać się na coś" },
            { english: "grade / mark", polish: "ocena" },
            { english: "graduate", polish: "ukończyć studia" },
            { english: "graduate from", polish: "ukończyć" },
            { english: "memorise", polish: "uczyć się na pamięć" },
            { english: "mock exam", polish: "egzamin próbny" },
            { english: "oral exam", polish: "egzamin ustny" },
            { english: "written exam", polish: "egzamin pisemny" },
            { english: "past paper", polish: "arkusz z poprzednich lat" },
            { english: "retake", polish: "zdawać ponownie" },
            { english: "school-leaving exam", polish: "egzamin końcowy" },
            { english: "send out", polish: "wysyłać" },
            { english: "take a test / exam", polish: "podejść do egzaminu" },
            { english: "tutor", polish: "korepetytor" },
            { english: "A levels", polish: "odpowiednik matury" },
            { english: "academic results", polish: "wyniki w nauce" },
            { english: "BA", polish: "licencjat humanistyczny" },
            { english: "BSc", polish: "licencjat ścisły" },
            { english: "cram for sth", polish: "kuć do egzaminu" },
            { english: "get a distinction", polish: "otrzymać wyróżnienie" },
            { english: "International Baccalaureate", polish: "matura międzynarodowa" },
            { english: "MA", polish: "magister" },
            { english: "pass with flying colours", polish: "zdać celująco" },
            { english: "scrape through", polish: "ledwo zdać" },
            { english: "win a scholarship", polish: "zdobyć stypendium" }
        ]
    },
    {
        name: "SCHOOL-LIFE",
        words: [
            { english: "absent", polish: "nieobecny" },
            { english: "absentee", polish: "osoba nieobecna" },
            { english: "assessment", polish: "ocena" },
            { english: "attendance", polish: "obecność" },
            { english: "bell", polish: "dzwonek" },
            { english: "bully", polish: "dręczyć" },
            { english: "check your work", polish: "sprawdzić pracę" },
            { english: "compulsory", polish: "obowiązkowy" },
            { english: "coursebook", polish: "podręcznik" },
            { english: "coursework", polish: "praca zaliczeniowa" },
            { english: "curriculum", polish: "program nauczania" },
            { english: "deadline", polish: "termin" },
            { english: "dictation", polish: "dyktando" },
            { english: "do / write an assignment", polish: "napisać zadanie" },
            { english: "do research", polish: "prowadzić badania" },
            { english: "get poor results", polish: "mieć słabe wyniki" },
            { english: "get suspended", polish: "zostać zawieszonym" },
            { english: "give a presentation", polish: "zrobić prezentację" },
            { english: "give a talk", polish: "wygłosić referat" },
            { english: "grade point average", polish: "średnia ocen" },
            { english: "hand in homework", polish: "oddać pracę domową" },
            { english: "miss lessons", polish: "opuszczać lekcje" },
            { english: "optional", polish: "opcjonalny" },
            { english: "packed lunch", polish: "drugie śniadanie" },
            { english: "PE kit", polish: "strój sportowy" },
            { english: "play truant", polish: "wagarować" },
            { english: "project work", polish: "praca projektowa" }
        ]
    }
];

const state = {
    activeCategory: null,
    currentWord: null,
    attempts: 0
};

const categoryGrid = document.getElementById("categoryGrid");
const activeCategory = document.getElementById("activeCategory");
const progressBadge = document.getElementById("progressBadge");
const promptWord = document.getElementById("promptWord");
const answerForm = document.getElementById("answerForm");
const answerInput = document.getElementById("answerInput");
const checkButton = document.getElementById("checkButton");
const showAnswerButton = document.getElementById("showAnswerButton");
const nextButton = document.getElementById("nextButton");
const attemptsValue = document.getElementById("attemptsValue");
const answerReveal = document.getElementById("answerReveal");
const feedbackMessage = document.getElementById("feedbackMessage");
const categoryCount = document.getElementById("categoryCount");
const wordCount = document.getElementById("wordCount");

function normalizeInput(value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[’']/g, "");
}

function setFeedback(type, message) {
    feedbackMessage.className = `feedback ${type}`;
    feedbackMessage.textContent = message;
}

function setRevealedAnswer(text, revealed = false) {
    answerReveal.textContent = text;
    answerReveal.classList.toggle("answer-revealed", revealed);
}

function renderStats() {
    categoryCount.textContent = categories.length;
    wordCount.textContent = categories.reduce((sum, category) => sum + category.words.length, 0);
}

function renderCategories() {
    categoryGrid.innerHTML = "";

    categories.forEach((category) => {
        const button = document.createElement("button");
        button.type = "button";
        button.innerHTML = `
            <span class="tile-name">${category.name.replaceAll("-", " ")}</span>
            <span class="tile-count">${category.words.length} słówek</span>
        `;

        button.addEventListener("click", () => {
            document.querySelectorAll(".category-grid button").forEach((tile) => tile.classList.remove("active"));
            button.classList.add("active");
            startCategory(category);
        });

        categoryGrid.appendChild(button);
    });
}

function pickRandomWord() {
    if (!state.activeCategory) {
        return;
    }

    const words = state.activeCategory.words;
    let randomWord = words[Math.floor(Math.random() * words.length)];

    if (words.length > 1 && state.currentWord?.polish === randomWord.polish) {
        randomWord = words[(words.indexOf(randomWord) + 1) % words.length];
    }

    state.currentWord = randomWord;
    state.attempts = 0;
    promptWord.textContent = randomWord.polish;
    attemptsValue.textContent = "0 / 3";
    setRevealedAnswer("Ukryta");
    answerInput.value = "";
    answerInput.focus();
    setFeedback("neutral", "Wpisz angielskie słowo i sprawdź odpowiedź.");
}

function startCategory(category) {
    state.activeCategory = category;
    activeCategory.textContent = category.name.replaceAll("-", " ");
    progressBadge.textContent = `${category.words.length} słówek`;
    answerInput.disabled = false;
    checkButton.disabled = false;
    showAnswerButton.disabled = false;
    nextButton.disabled = false;
    pickRandomWord();
}

function handleCorrectAnswer() {
    setFeedback("success", "Dobrze! To jest poprawna odpowiedź.");
    setRevealedAnswer(state.currentWord.english);
}

function handleWrongAnswer() {
    state.attempts += 1;
    attemptsValue.textContent = `${state.attempts} / 3`;

    if (state.attempts >= 3) {
        setFeedback("error", "To już 3 błędne próby. Poprawna odpowiedź została pokazana.");
        setRevealedAnswer(state.currentWord.english, true);
        return;
    }

    setFeedback("error", `Jeszcze nie. Zostało prób: ${3 - state.attempts}.`);
}

answerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!state.currentWord) {
        return;
    }

    const userAnswer = normalizeInput(answerInput.value);
    const correctAnswer = normalizeInput(state.currentWord.english);

    if (!userAnswer) {
        setFeedback("error", "Najpierw wpisz odpowiedź.");
        return;
    }

    if (state.attempts >= 3) {
        setFeedback("neutral", "Ta runda jest już zakończona. Kliknij, żeby wylosować nowe słówko.");
        return;
    }

    if (userAnswer === correctAnswer) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }
});

nextButton.addEventListener("click", pickRandomWord);

showAnswerButton.addEventListener("click", () => {
    if (!state.currentWord) {
        return;
    }

    setRevealedAnswer(state.currentWord.english, true);
    setFeedback("neutral", "Poprawne słówko zostało pokazane. Możesz wpisać je teraz albo wylosować następne.");
});

renderStats();
renderCategories();
