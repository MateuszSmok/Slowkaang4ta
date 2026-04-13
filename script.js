const rawCategories = {
    "JOBS": "accountant-księgowy/księgowa,architect-architekt/architektka,cashier-kasjer/kasjerka,checkoutassistant-kasjer/kasjerka w supermarkecie,chef-kucharz/kucharka,computerprogrammer-programista/programistka,economist-ekonomista/ekonomistka,editor-redaktor/redaktorka,electrician-elektryk,farmer-rolnik,fashiondesigner-projektant/projektantka mody,firefighter-strażak,flightattendant-steward/stewardesa,journalist-dziennikarz/dziennikarka,judge-sędzia,lawyer-prawnik/prawniczka,lecturer-wykładowca/wykładowczyni,librarian-bibliotekarz/bibliotekarka,manager-kierownik/kierowniczka,nurse-pielęgniarka,officeassistant-asystent/asystentka biura,paramedic-ratownik medyczny,pharmacist-aptekarz/aptekarka,plumber-hydraulik,policeofficer-policjant/policjantka,receptionist-recepcjonista/recepcjonistka,salesassistant-sprzedawca/sprzedawczyni,soldier-żołnierz,surgeon-chirurg,travelagent-pracownik biura podróży,TVpresenter-prezenter/prezenterka telewizyjna,vet-weterynarz/weterynarka",
    "WORK-DUTIES": "beatwork-być w pracy,beinchargeofsth-odpowiadać za coś,beresponsibleforsth-być odpowiedzialnym za coś,collectdata-zbierać dane,dopaperwork-zajmować się dokumentami,dosthforaliving-utrzymywać się z czegoś,fulfilduties-wypełniać obowiązki,jobdescription-zakres obowiązków,profession-zawód,supervise-nadzorować,takeresponsibilityforsth-wziąć odpowiedzialność za coś,workassb-pracować jako ktoś,workforacompany-pracować w firmie,workinateam-pracować w zespole,workinsales-pracować w sprzedaży,workinthetouristindustry-pracować w branży turystycznej,workonsth-pracować nad czymś,workunderpressure-pracować pod presją,workwithsb-pracować z kimś",
    "JOB-ADJECTIVES": "inspiring-inspirująca,manual-fizyczna,monotonous-monotonna,motivating-motywująca,skilled-wymagająca kwalifikacji,steady-stabilna,stress-free-bezstresowa,unpaid-bezpłatna,well-paid-dobrze płatna,challenging-ambitna,dead-end-bez perspektyw,high-powered-na wysokim stanowisku,menial-fizyczna/prosta,rewarding-satysfakcjonująca,undemanding-niewymagająca",
    "WORK-CONDITIONS": "bebadlypaid-być źle opłacanym,bewell-paid-być dobrze opłacanym,businesstrip-podróż służbowa,chanceofpromotion-szansa na awans,colleague-kolega/koleżanka z pracy,doovertime-pracować w nadgodzinach,earnings-zarobki,full-time-pełny etat,getabonus-dostać premię,income-dochód,meetdeadlines-dotrzymywać terminów,paidleave-płatny urlop,part-time-część etatu,payrise-podwyżka,perhour/week/month-na godzinę/tydzień/miesiąc,permanentjob-stała praca,publicholiday-dzień wolny od pracy,salary-pensja,sickleave-zwolnienie lekarskie,taketimeoff-wziąć wolne,tax-podatek,teamwork-praca zespołowa,tip-napiwek,worklonghours-pracować długo,workingconditions-warunki pracy",
    "SCHOOL-PLACES": "canteen-stołówka,commonroom-świetlica,headteacher’soffice-gabinet dyrektora,laboratory-pracownia,lecturehall-aula,lockerroom-szatnia,playground-boisko/plac zabaw,secretary’soffice-sekretariat,sportsfield-boisko,staffroom-pokój nauczycielski",
    "SCHOOL-SUBJECTS": "archaeology-archeologia,architecture-architektura,artssubjects-przedmioty artystyczne,bankingandfinance-bankowość i finanse,chemistry-chemia,engineering-inżynieria,foreignlanguages-języki obce,humanities-nauki humanistyczne,IT-informatyka,journalism-dziennikarstwo,law-prawo,marketingandmanagement-marketing i zarządzanie,medicine-medycyna,PE-WF,physics-fizyka,psychology-psychologia,sciencesubjects-przedmioty ścisłe,socialsciences-nauki społeczne,sociology-socjologia,biotechnology-biotechnologia",
    "LEARNING": "all-rounddevelopment-wszechstronny rozwój,attendacourse-uczęszczać na kurs,becurious-być ciekawym,brainstormideas-przeprowadzać burzę mózgów,concentrateonsth-skupić się na czymś,criticalthinking-myślenie krytyczne,motivate-motywować,personaldevelopment-rozwój osobisty,putaplanintoaction-wdrożyć plan,reviseforsth-powtarzać do czegoś,self-management-zarządzanie sobą,self-motivation-wewnętrzna motywacja,setgoals-wyznaczać cele,strugglewithsth-zmagać się z czymś,takenotes-robić notatki,concentrationspan-czas skupienia,identifyyourlearningstyle-określić styl uczenia się,improveemployability-zwiększyć szanse na zatrudnienie,innermotivation-wewnętrzna motywacja,knowsthinsideout-znać coś bardzo dobrze,memoryaid-technika zapamiętywania,outperform-prześcignąć,pursuitofknowledge-dążenie do wiedzy",
    "SCHOOL-OBJECTS": "chalk-kreda,compasses-cyrkiel,folder-teczka,highlighter-zakreślacz,holepunch-dziurkacz,protractor-kątomierz,setsquare-ekierka,stapler-zszywacz",
    "GRADES-EXAMS": "award-nagroda,certificate-świadectwo,cheat-oszukiwać,end-of-termexam-egzamin semestralny,end-of-yearexam-egzamin roczny,entranceexam-egzamin wstępny,exampaper-arkusz egzaminacyjny,extralessons-dodatkowe lekcje,getadegree-zdobyć stopień,getcaught-zostać złapanym,getresults-otrzymać wyniki,givemarks-wystawiać oceny,gotowardssth-składać się na coś,grade/mark-ocena,graduate-ukończyć studia,graduatefrom-ukończyć,memorise-uczyć się na pamięć,mockexam-egzamin próbny,oralexam-egzamin ustny,writtenexam-egzamin pisemny,pastpaper-arkusz z poprzednich lat,retake-zdawać ponownie,school-leavingexam-egzamin końcowy,sendout-wysyłać,takeatest/exam-podejść do egzaminu,tutor-korepetytor,Alevels-odpowiednik matury,academicresults-wyniki w nauce,BA-licencjat humanistyczny,BSc-licencjat ścisły,cramforsth-kuć do egzaminu,getadistinction-otrzymać wyróżnienie,InternationalBaccalaureate-matura międzynarodowa,MA-magister,passwithflyingcolours-zdać celująco,scrapethrough-ledwo zdać,winascholarship-zdobyć stypendium",
    "SCHOOL-LIFE": "absent-nieobecny,absentee-osoba nieobecna,assessment-ocena,attendance-obecność,bell-dzwonek,bully-dręczyć,checkyourwork-sprawdzić pracę,compulsory-obowiązkowy,coursebook-podręcznik,coursework-praca zaliczeniowa,curriculum-program nauczania,deadline-termin,dictation-dyktando,do/writeanassignment-napisać zadanie,doresearch-prowadzić badania,getpoorresults-mieć słabe wyniki,getsuspended-zostać zawieszonym,giveapresentation-zrobić prezentację,giveatalk-wygłosić referat,gradepointaverage-średnia ocen,handinhomework-oddać pracę domową,misslessons-opuszczać lekcje,optional-opcjonalny,packedlunch-drugie śniadanie,PEkit-strój sportowy,playtruant-wagarować,projectwork-praca projektowa"
};

const categories = Object.entries(rawCategories).map(([name, values]) => ({
    name,
    words: values.split(",").map((entry) => {
        const separatorIndex = entry.lastIndexOf("-");
        const english = entry.slice(0, separatorIndex);
        const polish = entry.slice(separatorIndex + 1);

        return {
            english: english.trim(),
            polish: polish.trim()
        };
    })
}));

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

renderStats();
renderCategories();
