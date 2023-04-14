/**************************************************************************
************************ CURRENT GAME / PERFORMANCE ***********************
***************************************************************************/

// localStorage.clear();

function update_current_game() {
    document.getElementById("goals_current_game_header").textContent = "Goals: 0";
    document.getElementById("assists_current_game_header").textContent = "Assists: 0";
    document.getElementById("key_passes_current_game_header").textContent = "Key Passes: 0";
    document.getElementById("shots_current_game_header").textContent = "Shots: 0";
    document.getElementById("shots_on_target_current_game_header").textContent = "Shots on Target: 0";
    document.getElementById("shots_off_target_current_game_header").textContent = "Shots off Target: 0";
    document.getElementById("shots_hit_post_current_game_header").textContent = "Shots that Hit Post: 0";
    document.getElementById("shots_on_target_percent_current_game_header").textContent = "Shots on Target %: 0";
    document.getElementById("shots_per_goal_current_game_header").textContent = "Shots per Goal: 0";
    document.getElementById("passes_current_game_header").textContent = "Passes Attempted: 0";
    document.getElementById("passes_completed_current_game_header").textContent = "Passes Completed: 0";
    document.getElementById("passes_missed_current_game_header").textContent = "Passes Missed: 0";
    document.getElementById("pass_percent_current_game_header").textContent = "Passes Completion %: 0";
    document.getElementById("dribbles_current_game_header").textContent = "Dribbles Attempted: 0";
    document.getElementById("successful_dribbles_current_game_header").textContent = "Successful Dribbles: 0";
    document.getElementById("failed_dribbles_current_game_header").textContent = "Failed Dribbles: 0";
    document.getElementById("dribble_completion_percent_current_game_header").textContent = "Dribble Completion %: 0";
    document.getElementById("duels_current_game_header").textContent = "Duels Attempted: 0";
    document.getElementById("duels_won_current_game_header").textContent = "Duels Won: 0";
    document.getElementById("duels_lost_current_game_header").textContent = "Duels Lost: 0";
    document.getElementById("duel_success_percent_current_game_header").textContent = "Duel Success %: 0";
    document.getElementById("interceptions_current_game_header").textContent = "Interceptions: 0";
    document.getElementById("fouls_current_game_header").textContent = "Fouls: 0";
    document.getElementById("yellow_cards_current_game_header").textContent = "Yellow Cards: 0";
    document.getElementById("red_card_current_game_header").textContent = "Red Card: 0";
}

let gamesPlayedAT = window.localStorage.getItem("gamesPlayedAT");

/******************************* Goals *******************************/
let goals = 0

function add_goal() {
    let scoredBtn = document.getElementById("goals_btn");
    let goalsCG = document.getElementById("goals_current_game_header");

    goals++;

    scoredBtn.textContent = `Scored: ${goals}`;
    goalsCG.textContent = `Goals: ${goals}`;

    shots_per_goal_cg();
    updatePerGameGoals();
    compare_goals();
}

/******************************* Assists *******************************/
let assists = 0
let keyPasses = 0

function add_assist() {
    let assistsBtn = document.getElementById("assists_btn")
    let assistsCG = document.getElementById("assists_current_game_header")
    
    assists++

    assistsBtn.textContent = `Assists: ${assists}`
    assistsCG.textContent = `Assists: ${assists}`

    updatePerGameAssists();
    compare_assists();
}

function add_key_pass()
{
    let keyPassBtn = document.getElementById("key_passes_btn")
    let keyPassesCG = document.getElementById("key_passes_current_game_header")

    keyPasses++

    keyPassBtn.textContent = `Key Passes: ${keyPasses}`
    keyPassesCG.textContent = `Key Passes: ${keyPasses}`

    updatePerGameKeyPasses();
    compare_key_passes();
}

/******************************* Shots *******************************/
let onTarget = 0
let offTarget = 0
let hitPost = 0
let shotsCG = 0
let onTargetPercentCG = 0
let shotsPerGoalCG = 0

function add_shots_on_target() {
    let onTargetBtn = document.getElementById("shots_on_target_btn")
    let onTargetCG = document.getElementById("shots_on_target_current_game_header")

    onTarget++

    onTargetBtn.textContent = `On Target: ${onTarget}`
    onTargetCG.textContent = `Shots on Target: ${onTarget}`

    shots_cg()
    updatePerGameShotsOnTarget();
    compare_shots_on_target();
}

function add_shots_off_target() {
    let offTargetBtn = document.getElementById("shots_off_target_btn")
    let offTargetCG = document.getElementById("shots_off_target_current_game_header")

    offTarget++

    offTargetBtn.textContent = `Off Target: ${offTarget}`
    offTargetCG.textContent = `Shots off Target: ${offTarget}`

    shots_cg()
    updatePerGameShotsOffTarget();
    compare_shots_off_target();
}

function add_shots_hit_post() {
    let hitPostBtn = document.getElementById("shots_hit_post_btn")
    let hitPostCG = document.getElementById("shots_hit_post_current_game_header")

    hitPost++

    hitPostBtn.textContent = `Hit Post: ${hitPost}`
    hitPostCG.textContent = `Shots that Hit Post: ${hitPost}`

    shots_cg()
    updatePerGameShotsHitPost();
    compare_shots_hit_post();
}

function shots_cg() {
    let shotsHeaderCG = document.getElementById("shots_current_game_header")

    shotsCG = onTarget + offTarget + hitPost

    shotsHeaderCG.textContent = `Shots: ${shotsCG}`

    shots_on_target_percent_cg()
    shots_per_goal_cg()
    updatePerGameShots();
    compare_shots();
}

function shots_on_target_percent_cg() {
    let onTargetPercentHeaderCG = document.getElementById("shots_on_target_percent_current_game_header")

    onTargetPercentCG = onTarget / shotsCG

    onTargetPercentHeaderCG.textContent = `Shots on Target %: ${onTargetPercentCG.toFixed(2)}`

    updatePerGameShotsOnTargetPercent();
    compare_shots_on_target_percent();
}

function shots_per_goal_cg() {
    let shotsPerGoalHeaderCG = document.getElementById("shots_per_goal_current_game_header")

    shotsPerGoalCG = goals / shotsCG

    shotsPerGoalHeaderCG.textContent = `Shots per Goal: ${shotsPerGoalCG.toFixed(2)}`

    updatePerGameShotsPerGoal();
    compare_shots_per_goal();
}

/******************************* Passes *******************************/
let passesCompleted = 0
let passesMissed = 0
let passesCG = 0
let passCompletionCG = 0

function add_pass_completed() {
    let passesCompletedBtn = document.getElementById("passes_completed_btn")
    let passesCompletedCG = document.getElementById("passes_completed_current_game_header")

    passesCompleted++

    passesCompletedBtn.textContent = `Completed: ${passesCompleted}`
    passesCompletedCG.textContent = `Passes Completed: ${passesCompleted}`

    passes_cg()
    updatePerGamePassesCompleted();
    compare_passes_completed();
}

function add_pass_missed() {
    let passesMissedBtn = document.getElementById("passes_missed_btn")
    let passesMissedCG = document.getElementById("passes_missed_current_game_header")

    passesMissed++

    passesMissedBtn.textContent = `Missed: ${passesMissed}`
    passesMissedCG.textContent = `Passes Missed: ${passesMissed}`

    passes_cg()
    updatePerGamePassesMissed();
    compare_passes_missed();
}

function passes_cg() {
    let passesHeaderCG = document.getElementById("passes_current_game_header")

    passesCG = passesCompleted + passesMissed

    passesHeaderCG.textContent = `Passes Attempted: ${passesCG}`

    pass_completion_cg()
    updatePerGamePassesAttempted();
    compare_passes_attempted();
}

function pass_completion_cg() {
    let passCompletionHeaderCG = document.getElementById("pass_percent_current_game_header")

    passCompletionCG = passesCompleted / passesCG

    passCompletionHeaderCG.textContent = `Passes Completion %: ${passCompletionCG.toFixed(2)}`

    updatePerGamePassesCompletionPercent();
    compare_pass_completion_percent();
}

/******************************* Dribbles *******************************/
let dribblesSucceeded = 0
let dribblesUnsucceeded = 0
let dribblesCG = 0
let dribbleCompletionCG = 0

function add_dribble_succeeded() {
    let dribblesSucceededBtn = document.getElementById("successful_dribbles_btn")
    let dribblesSucceededCG = document.getElementById("successful_dribbles_current_game_header")

    dribblesSucceeded++

    dribblesSucceededBtn.textContent = `Successful: ${dribblesSucceeded}`
    dribblesSucceededCG.textContent = `Successful Dribbles: ${dribblesSucceeded}`

    dribbles_cg()
    updatePerGameSuccessfulDribbles();
    compare_successful_dribbles();
}

function add_dribble_unsucceeded() {
    let dribblesUnsucceededBtn = document.getElementById("unsuccessful_dribbles_btn")
    let dribblesUnsucceededCG = document.getElementById("failed_dribbles_current_game_header")

    dribblesUnsucceeded++

    dribblesUnsucceededBtn.textContent = `Failed: ${dribblesUnsucceeded}`
    dribblesUnsucceededCG.textContent = `Failed Dribbles: ${dribblesUnsucceeded}`

    dribbles_cg()
    updatePerGameFailedDribbles();
    compare_failed_dribbles();
}

function dribbles_cg() {
    let dribblesHeaderCG = document.getElementById("dribbles_current_game_header")

    dribblesCG = dribblesSucceeded + dribblesUnsucceeded

    dribblesHeaderCG.textContent = `Dribbles Attempted: ${dribblesCG}`

    dribble_completion_cg()
    updatePerGameDribblesAttempted();
    compare_dribbles_attempted();
}

function dribble_completion_cg() {
    let dribbleCompletionHeaderCG = document.getElementById("dribble_completion_percent_current_game_header")

    dribbleCompletionCG = dribblesSucceeded / dribblesCG

    dribbleCompletionHeaderCG.textContent = `Dribble Completion %: ${dribbleCompletionCG.toFixed(2)}`

    updatePerGameDribbleCompletionPercent();
    compare_dribble_completion_percent();
}

/******************************* Tackles *******************************/
let duelsWon = 0
let duelsLost = 0
let interceptions = 0
let duelsCG = 0
let duelSuccessCG = 0

function add_duels_won() {
    let duelsWonBtn = document.getElementById("duels_won_btn")
    let duelsWonCG = document.getElementById("duels_won_current_game_header")

    duelsWon++

    duelsWonBtn.textContent = `Duels Won: ${duelsWon}`
    duelsWonCG.textContent = `Duels Won: ${duelsWon}`

    duels_cg()
    updatePerGameDuelsWon();
    compare_duels_won();
}

function add_duels_lost() {
    let duelsLostBtn = document.getElementById("duels_lost_btn")
    let duelsLostCG = document.getElementById("duels_lost_current_game_header")

    duelsLost++

    duelsLostBtn.textContent = `Duels Lost: ${duelsLost}`
    duelsLostCG.textContent = `Duels Lost: ${duelsLost}`

    duels_cg()
    updatePerGameDuelsLost();
    compare_duels_lost();
}

function duels_cg() {
    let duelsHeaderCG = document.getElementById("duels_current_game_header")

    duelsCG = duelsWon + duelsLost

    duelsHeaderCG.textContent = `Duels Attempted: ${duelsCG}`

    duel_success_cg()
    updatePerGameDuelsAttempted();
    compare_duels_attempted();
}

function duel_success_cg() {
    let duelCompletionHeaderCG = document.getElementById("duel_success_percent_current_game_header")

    duelCompletionCG = duelsWon / duelsCG

    duelCompletionHeaderCG.textContent = `Duel Success %: ${duelCompletionCG.toFixed(2)}`

    updatePerGameDuelSuccessPercent();
    compare_duel_success_percent();
}

function add_interceptions() {
    let interceptionsBtn = document.getElementById("interceptions_btn")
    let interceptionsCG = document.getElementById("interceptions_current_game_header")

   interceptions++

   interceptionsBtn.textContent = `Interceptions: ${interceptions}`
   interceptionsCG.textContent = `Interceptions: ${interceptions}`

   updatePerGameInterceptions();
   compare_interceptions();
}

/******************************* Violations *******************************/
let fouls = 0
let yellowCards = 0
let redCards = 0

function add_foul() {
    let foulsBtn = document.getElementById("fouls_btn")
    let foulsCG = document.getElementById("fouls_current_game_header")

    fouls++

    foulsBtn.textContent = `Fouls: ${fouls}`
    foulsCG.textContent = `Fouls: ${fouls}`

    updatePerGameFouls();
    compare_fouls();
}

function add_yellow_card() {
    let yellowCardsBtn = document.getElementById("yellow_cards_btn")
    let yellowCardsCG = document.getElementById("yellow_cards_current_game_header")

    yellowCards++

    yellowCardsBtn.textContent = `Yellow Cards: ${yellowCards}`
    yellowCardsCG.textContent = `Yellow Cards: ${yellowCards}`

    updatePerGameYellowCards();
    compare_yellow_cards();
}

function add_red_card() {
    let redCardsBtn = document.getElementById("red_card_btn")
    let redCardsCG = document.getElementById("red_card_current_game_header")

   redCards++

   redCardsBtn.textContent = `Red Card: ${redCards}`
   redCardsCG.textContent = `Red Card: ${redCards}`

   updatePerGameRedCard();
   compare_red_card();
}















/**************************************************************************
********************************* PER GAME ********************************
***************************************************************************/
function update_per_game() {
    let gamesPlayedAT = window.localStorage.getItem("gamesPlayedAT");

    if (gamesPlayedAT) {
        document.getElementById("games_played_header").textContent = `Games Played: ${gamesPlayedAT}`;
    } else {
        window.localStorage.setItem("gamesPlayedAT", 0);
    }

    updatePerGameGoals();
    updatePerGameAssists();
    updatePerGameKeyPasses();
    updatePerGameShots();
    updatePerGameShotsOnTarget();
    updatePerGameShotsOffTarget();
    updatePerGameShotsHitPost();
    updatePerGameShotsOnTargetPercent();
    updatePerGameShotsPerGoal();
    updatePerGamePassesAttempted();
    updatePerGamePassesCompleted();
    updatePerGamePassesMissed();
    updatePerGamePassesCompletionPercent();
    updatePerGameDribblesAttempted();
    updatePerGameSuccessfulDribbles();
    updatePerGameFailedDribbles();
    updatePerGameDribbleCompletionPercent();
    updatePerGameDuelsAttempted();
    updatePerGameDuelsWon();
    updatePerGameDuelsLost();
    updatePerGameDuelSuccessPercent();
    updatePerGameInterceptions();
    updatePerGameFouls();
    updatePerGameYellowCards();
    updatePerGameRedCard();
}

/******************************* Games Played *******************************/
function add1_game_played_at() {
    let gamesPlayedHeaderAT = document.getElementById("games_played_header");
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    gamesPlayedAT += 1;

    window.localStorage.setItem("gamesPlayedAT", gamesPlayedAT);
    gamesPlayedHeaderAT.textContent = `Games Played: ${gamesPlayedAT}`;
}

function minus1_game_played_at() {
    let gamesPlayedHeaderAT = document.getElementById("games_played_header");
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    gamesPlayedAT -= 1;

    window.localStorage.setItem("gamesPlayedAT", gamesPlayedAT);
    gamesPlayedHeaderAT.textContent = `Games Played: ${gamesPlayedAT}`;

    updatePerGameGoals();
    updatePerGameAssists();
    updatePerGameKeyPasses();
    updatePerGameShots();
    updatePerGameShotsOnTarget();
    updatePerGameShotsOffTarget();
    updatePerGameShotsHitPost();
    updatePerGameShotsOnTargetPercent();
    updatePerGameShotsPerGoal();
    updatePerGamePassesAttempted();
    updatePerGamePassesCompleted();
    updatePerGamePassesMissed();
    updatePerGamePassesCompletionPercent();
    updatePerGameDribblesAttempted();
    updatePerGameSuccessfulDribbles();
    updatePerGameFailedDribbles();
    updatePerGameDribbleCompletionPercent();
    updatePerGameDuelsAttempted();
    updatePerGameDuelsWon();
    updatePerGameDuelsLost();
    updatePerGameDuelSuccessPercent();
    updatePerGameInterceptions();
    updatePerGameFouls();
    updatePerGameYellowCards();
    updatePerGameRedCard();
}

let goalsPG = 0;
function updatePerGameGoals() {
    let goalsHeaderPG = document.getElementById("goals_per_game_header");
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));
    let goalsAT = parseInt(window.localStorage.getItem("goalsAT"));

    goalsPG = goalsAT / gamesPlayedAT;

    goalsPG = goalsPG.toFixed(2);

    goalsHeaderPG.textContent = `Goals: ${goalsPG}`;
}

let assistsPG = 0;
function updatePerGameAssists() {
    let assistsHeaderPG = document.getElementById("assists_per_game_header");
    let assistsAT = parseInt(window.localStorage.getItem("assistsAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    assistsPG = assistsAT / gamesPlayedAT;

    assistsPG = assistsPG.toFixed(2);

    assistsHeaderPG.textContent = `Assists: ${assistsPG}`;
}

let keyPassesPG = 0;
function updatePerGameKeyPasses() {
    let keyPassesHeaderPG = document.getElementById("key_passes_per_game_header");
    let keyPassesAT = parseInt(window.localStorage.getItem("keyPassesAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    keyPassesPG = keyPassesAT / gamesPlayedAT;

    keyPassesPG = keyPassesPG.toFixed(2);

    keyPassesHeaderPG.textContent = `Key Passes: ${keyPassesPG}`;
}

let shotsPG = 0;
function updatePerGameShots() {
    let shotsHeaderPG = document.getElementById("shots_per_game_header");
    let shotsAT = parseInt(window.localStorage.getItem("shotsAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    shotsPG = shotsAT / gamesPlayedAT;

    shotsPG = shotsPG.toFixed(2);

    shotsHeaderPG.textContent = `Shots: ${shotsPG}`;
}

let shotsOnTargetPG = 0;
function updatePerGameShotsOnTarget() {
    let shotsOnTargetHeaderPG = document.getElementById("shots_on_target_per_game_header");
    let shotsOnTargetAT = parseInt(window.localStorage.getItem("shotsOnTargetAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    shotsOnTargetPG = shotsOnTargetAT / gamesPlayedAT;

    shotsOnTargetPG = shotsOnTargetPG.toFixed(2);

    shotsOnTargetHeaderPG.textContent = `Shots on Target: ${shotsOnTargetPG}`;
}

let shotsOffTargetPG = 0;
function updatePerGameShotsOffTarget() {
    let shotsOffTargetHeaderPG = document.getElementById("shots_off_target_per_game_header");
    let shotsOffTargetAT = parseInt(window.localStorage.getItem("shotsOffTargetAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    shotsOffTargetPG = shotsOffTargetAT / gamesPlayedAT;

    shotsOffTargetPG = shotsOffTargetPG.toFixed(2);

    shotsOffTargetHeaderPG.textContent = `Shots off Target: ${shotsOffTargetPG}`;
}

let shotsHitPostPG = 0;
function updatePerGameShotsHitPost() {
    let shotsHitPostHeaderPG = document.getElementById("shots_hit_post_per_game_header");
    let shotsHitPostAT = parseInt(window.localStorage.getItem("shotsHitPostAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    shotsHitPostPG = shotsHitPostAT / gamesPlayedAT;

    shotsHitPostPG = shotsHitPostPG.toFixed(2);

    shotsHitPostHeaderPG.textContent = `Shots Hit Post: ${shotsHitPostPG}`;
}

let shotsOnTargetPercentPG = 0;
function updatePerGameShotsOnTargetPercent() {
    let shotsOnTargetPercentHeaderPG = document.getElementById("shots_on_target_percent_per_game_header");
    let shotsOnTargetPercentageAT = parseFloat(window.localStorage.getItem("shotsOnTargetPercentageAT"));

    shotsOnTargetPercentPG = shotsOnTargetPercentageAT;

    shotsOnTargetPercentPG = shotsOnTargetPercentPG.toFixed(2);

    shotsOnTargetPercentHeaderPG.textContent = `Shots On Target %: ${shotsOnTargetPercentPG}`;
}

let shotsPerGoalPG = 0;
function updatePerGameShotsPerGoal() {
    let shotsPerGoalHeaderPG = document.getElementById("shots_per_goal_per_game_header");
    let shotsAT = parseInt(window.localStorage.getItem("shotsAT"));
    let goalsAT = parseInt(window.localStorage.getItem("goalsAT"));

    shotsPerGoalPG = goalsAT / shotsAT;

    shotsPerGoalPG = shotsPerGoalPG.toFixed(2);

    shotsPerGoalHeaderPG.textContent = `Shots per Goal: ${shotsPerGoalPG}`;
}

let passesAttemptedPG = 0;
function updatePerGamePassesAttempted() {
    let passesAttemptedHeaderPG = document.getElementById("passes_attempted_per_game_header");
    let passesAttemptedAT = parseInt(window.localStorage.getItem("passesAttemptedAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    passesAttemptedPG = passesAttemptedAT / gamesPlayedAT;

    passesAttemptedPG = passesAttemptedPG.toFixed(2);

    passesAttemptedHeaderPG.textContent = `Passes Attempted: ${passesAttemptedPG}`;
}

let passesCompletedPG = 0;
function updatePerGamePassesCompleted() {
    let passesCompletedHeaderPG = document.getElementById("passes_completed_per_game_header");
    let passesCompletedAT = parseInt(window.localStorage.getItem("passesCompletedAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    passesCompletedPG = passesCompletedAT / gamesPlayedAT;

    passesCompletedPG = passesCompletedPG.toFixed(2);

    passesCompletedHeaderPG.textContent = `Passes Completed: ${passesCompletedPG}`;
}

let passesMissedPG = 0;
function updatePerGamePassesMissed() {
    let passesMissedHeaderPG = document.getElementById("passes_missed_per_game_header");
    let passesMissedAT = parseInt(window.localStorage.getItem("passesMissedAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    passesMissedPG = passesMissedAT / gamesPlayedAT;

    passesMissedPG = passesMissedPG.toFixed(2);

    passesMissedHeaderPG.textContent = `Passes Missed: ${passesMissedPG}`;
}

let passCompletionPercentagePG = 0;
function updatePerGamePassesCompletionPercent() {
    let passCompletionPercentageHeaderPG = document.getElementById("passes_completion_percent_per_game_header");
    let passCompletionPercentageAT = parseFloat(window.localStorage.getItem("passCompletionPercentageAT"));

    passCompletionPercentagePG = passCompletionPercentageAT;

    passCompletionPercentagePG = passCompletionPercentagePG.toFixed(2);

    passCompletionPercentageHeaderPG.textContent = `Pass Completion %: ${passCompletionPercentagePG}`;
}

let dribblesAttemptedPG = 0;
function updatePerGameDribblesAttempted() {
    let dribblesAttemptedHeaderPG = document.getElementById("dribbles_attempted_per_game_header");
    let dribblesAttemptedAT = parseInt(window.localStorage.getItem("dribblesAttemptedAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    dribblesAttemptedPG = dribblesAttemptedAT / gamesPlayedAT;

    dribblesAttemptedPG = dribblesAttemptedPG.toFixed(2);

    dribblesAttemptedHeaderPG.textContent = `Dribbles Attempted: ${dribblesAttemptedPG}`;
}

let successfulDribblesPG = 0;
function updatePerGameSuccessfulDribbles() {
    let successfulDribblesHeaderPG = document.getElementById("successful_dribbles_per_game_header");
    let successfulDribblesAT = parseInt(window.localStorage.getItem("successfulDribblesAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    successfulDribblesPG = successfulDribblesAT / gamesPlayedAT;

    successfulDribblesPG = successfulDribblesPG.toFixed(2);

    successfulDribblesHeaderPG.textContent = `Successful Dribbles: ${successfulDribblesPG}`;
}

let failedDribblesPG = 0;
function updatePerGameFailedDribbles() {
    let failedDribblesHeaderPG = document.getElementById("failed_dribbles_per_game_header");
    let failedDribblesAT = parseInt(window.localStorage.getItem("failedDribblesAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    failedDribblesPG = failedDribblesAT / gamesPlayedAT;

    failedDribblesPG = failedDribblesPG.toFixed(2);

    failedDribblesHeaderPG.textContent = `Failed Dribbles: ${failedDribblesPG}`;
}

let dribbleCompletionPercentagePG = 0;
function updatePerGameDribbleCompletionPercent() {
    let dribbleCompletionPercentageHeaderPG = document.getElementById("dribble_completion_percent_per_game_header");
    let dribbleCompletionPercentageAT = parseFloat(window.localStorage.getItem("dribbleCompletionPercentageAT"));

    dribbleCompletionPercentagePG = dribbleCompletionPercentageAT / gamesPlayedAT;

    dribbleCompletionPercentagePG = dribbleCompletionPercentagePG.toFixed(2);

    dribbleCompletionPercentageHeaderPG.textContent = `Dribble Completion %: ${dribbleCompletionPercentagePG}`;
}

let duelsAttemptedPG = 0;
function updatePerGameDuelsAttempted() {
    let duelsAttemptedHeaderPG = document.getElementById("duels_attempted_per_game_header");
    let duelsAttemptedAT = parseInt(window.localStorage.getItem("duelsAttemptedAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    duelsAttemptedPG = duelsAttemptedAT / gamesPlayedAT;

    duelsAttemptedPG = duelsAttemptedPG.toFixed(2);

    duelsAttemptedHeaderPG.textContent = `Duels Attempted: ${duelsAttemptedPG}`;
}

let duelsWonPG = 0;
function updatePerGameDuelsWon() {
    let duelsWonHeaderPG = document.getElementById("duels_won_per_game_header");
    let duelsWonAT = parseInt(window.localStorage.getItem("duelsWonAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    duelsWonPG = duelsWonAT / gamesPlayedAT;

    duelsWonPG = duelsWonPG.toFixed(2);

    duelsWonHeaderPG.textContent = `Duels Won: ${duelsWonPG}`;
}

let duelsLostPG = 0;
function updatePerGameDuelsLost() {
    let duelsLostHeaderPG = document.getElementById("duels_lost_per_game_header");
    let duelsLostAT = parseInt(window.localStorage.getItem("duelsLostAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    duelsLostPG = duelsLostAT / gamesPlayedAT;

    duelsLostPG = duelsLostPG.toFixed(2);

    duelsLostHeaderPG.textContent = `Duels Lost: ${duelsLostPG}`;
}

let duelSuccessPercentagePG = 0;
function updatePerGameDuelSuccessPercent() {
    let duelSuccessPercentageHeaderPG = document.getElementById("duel_success_percent_per_game_header");
    let duelSuccessPercentageAT = parseFloat(window.localStorage.getItem("duelSuccessPercentageAT"));

    duelSuccessPercentagePG = duelSuccessPercentageAT;

    duelSuccessPercentagePG = duelSuccessPercentagePG.toFixed(2);

    duelSuccessPercentageHeaderPG.textContent = `Duel Success %: ${duelSuccessPercentagePG}`;
}

let interceptionsPG = 0;
function updatePerGameInterceptions() {
    let interceptionsHeaderPG = document.getElementById("interceptions_per_game_header");
    let interceptionsAT = parseInt(window.localStorage.getItem("interceptionsAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    interceptionsPG = interceptionsAT / gamesPlayedAT;

    interceptionsPG = interceptionsPG.toFixed(2);

    interceptionsHeaderPG.textContent = `Interceptions: ${interceptionsPG}`;
}

let foulsPG = 0;
function updatePerGameFouls() {
    let foulsHeaderPG = document.getElementById("fouls_per_game_header");
    let foulsAT = parseInt(window.localStorage.getItem("foulsAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    foulsPG = foulsAT / gamesPlayedAT;

    foulsPG = foulsPG.toFixed(2);

    foulsHeaderPG.textContent = `Fouls: ${foulsPG}`;
}

let yellowCardsPG = 0;
function updatePerGameYellowCards() {
    let yellowCardsHeaderPG = document.getElementById("yellow_cards_per_game_header");
    let yellowCardsAT = parseInt(window.localStorage.getItem("yellowCardsAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    yellowCardsPG = yellowCardsAT / gamesPlayedAT;

    yellowCardsPG = yellowCardsPG.toFixed(2);

    yellowCardsHeaderPG.textContent = `Yellow Cards: ${yellowCardsPG}`;
}

let redCardPG = 0;
function updatePerGameRedCard() {
    let redCardHeaderPG = document.getElementById("red_card_per_game_header");
    let redCardsAT = parseInt(window.localStorage.getItem("redCardsAT"));
    let gamesPlayedAT = parseInt(window.localStorage.getItem("gamesPlayedAT"));

    redCardPG = redCardsAT / gamesPlayedAT;

    redCardPG = redCardPG.toFixed(2);

    redCardHeaderPG.textContent = `Red Card: ${redCardPG}`;
}















/**************************************************************************
******************************** COMPARISONS ******************************
***************************************************************************/

function compare_goals() {
    let goalsComparisonHeader = document.getElementById("goals_comparison_header");

    let goalsFixed = Number(goals).toFixed(2);
    let goalsPGFixed = Number(goalsPG).toFixed(2);

    if (goalsFixed > goalsPGFixed) 
    {
        goalsComparisonHeader.textContent = `${(goalsFixed - goalsPGFixed).toFixed(2)} ⬆️`;
    }
    else if (goalsFixed < goalsPGFixed) 
    {
        goalsComparisonHeader.textContent = `${(goalsPGFixed - goalsFixed).toFixed(2)} ⬇️`;
    }
    else if (goalsFixed == goalsPGFixed)
    {
        goalsComparisonHeader.textContent = `${goalsPGFixed} = ${goalsFixed}`;
    }
}

function compare_assists() {
    let assistsComparisonHeader = document.getElementById("assists_comparison_header");

    let assistsFixed = Number(assists).toFixed(2);
    let assistsPGFixed = Number(assistsPG).toFixed(2);

    if (assistsFixed > assistsPGFixed)
    {
        assistsComparisonHeader.textContent = `${(assistsFixed - assistsPGFixed).toFixed(2)} ⬆️`;
    }
    else if (assistsFixed < assistsPGFixed)
    {
        assistsComparisonHeader.textContent = `${(assistsPGFixed - assistsFixed).toFixed(2)} ⬇️`;
    }
    else if (assistsFixed == assistsPGFixed)
    {
        assistsComparisonHeader.textContent = `${assistsFixed} = ${assistsPGFixed}`;
    }
}

function compare_key_passes() {
    let keyPassesComparisonHeader = document.getElementById("key_passes_comparison_header");

    let keyPassesFixed = Number(keyPasses).toFixed(2);
    let keyPassesPGFixed = Number(keyPassesPG).toFixed(2);

    if (keyPassesFixed > keyPassesPGFixed)
    {
        keyPassesComparisonHeader.textContent = `${(keyPassesFixed - keyPassesPGFixed).toFixed(2)} ⬆️`;
    }
    else if (keyPassesFixed < keyPassesPGFixed)
    {
        keyPassesComparisonHeader.textContent = `${(keyPassesPGFixed - keyPassesFixed).toFixed(2)} ⬇️`;
    }
    else if (keyPassesFixed == keyPassesPGFixed)
    {
        keyPassesComparisonHeader.textContent = `${keyPassesPGFixed} = ${keyPassesFixed}`;
    }
}

function compare_shots() {
    let shotsComparisonHeader = document.getElementById("shots_comparison_header");

    let shotsCGFixed = Number(shotsCG).toFixed(2);
    let shotsPGFixed = Number(shotsPG).toFixed(2);

    if (shotsCGFixed > shotsPGFixed)
    {
        shotsComparisonHeader.textContent = `${(shotsCGFixed - shotsPGFixed).toFixed(2)} ⬆️`;
    }
    else if (shotsCGFixed < shotsPGFixed)
    {
        shotsComparisonHeader.textContent = `${(shotsPGFixed - shotsCGFixed).toFixed(2)} ⬇️`;
    }
    else if (shotsCGFixed == shotsPGFixed)
    {
        shotsComparisonHeader.textContent = `${shotsPGFixed} = ${shotsCGFixed}`;
    }
}

function compare_shots_on_target() {
    let shotsOnTargetComparisonHeader = document.getElementById("shots_on_target_comparison_header");

    let onTargetFixed = Number(onTarget).toFixed(2);
    let onTargetPGFixed = Number(shotsOnTargetPG).toFixed(2);

    if (onTargetFixed > shotsOnTargetPG)
    {
        shotsOnTargetComparisonHeader.textContent = `${(onTargetFixed - onTargetPGFixed).toFixed(2)} ⬆️`;
    }
    else if (onTargetFixed < onTargetPGFixed)
    {
        shotsOnTargetComparisonHeader.textContent = `${(onTargetPGFixed - onTargetFixed).toFixed(2)} ⬇️`;
    }
    else if (onTargetFixed == onTargetPGFixed)
    {
        shotsOnTargetComparisonHeader.textContent = `${onTargetPGFixed} = ${onTargetFixed}`;
    }
}

function compare_shots_off_target() {
    let shotsOffTargetComparisonHeader = document.getElementById("shots_off_target_comparison_header");

    let offTargetFixed = Number(offTarget).toFixed(2);
    let offTargetPGFixed = Number(shotsOnTargetPG).toFixed(2);

    if (offTargetPGFixed > offTargetFixed)
    {
        shotsOffTargetComparisonHeader.textContent = `${(offTargetPGFixed - offTargetFixed).toFixed(2)} ⬆️`;
    }
    else if (offTargetPGFixed < offTargetFixed)
    {
        shotsOffTargetComparisonHeader.textContent = `${(offTargetFixed - offTargetPGFixed).toFixed(2)} ⬇️`;
    }
    else if (offTargetFixed == offTargetPGFixed)
    {
        shotsOffTargetComparisonHeader.textContent = `${offTargetFixed} = ${offTargetPGFixed}`;
    }
}

function compare_shots_hit_post() {
    let shotsHitPostComparisonHeader = document.getElementById("shots_hit_post_comparison_header");

    let hitPostFixed = Number(hitPost).toFixed(2);
    let shotsHitPostPGFixed = Number(shotsHitPostPG).toFixed(2);
    
    if (hitPostFixed > shotsHitPostPGFixed)
    {
        shotsHitPostComparisonHeader.textContent = `${(hitPostFixed - shotsHitPostPGFixed).toFixed(2)} ⬆️`;
    }
    else if (hitPostFixed < shotsHitPostPGFixed)
    {
        shotsHitPostComparisonHeader.textContent = `${(shotsHitPostPGFixed - hitPostFixed).toFixed(2)} ⬇️`;
    }
    else if (hitPostFixed == shotsHitPostPGFixed)
    {
        shotsHitPostComparisonHeader.textContent = `${shotsHitPostPGFixed} = ${hitPostFixed}`;
    }
}

function compare_shots_on_target_percent() {
    let shotsOnTargetPercentComparisonHeader = document.getElementById("shots_on_target_percent_comparison_header");

    let onTargetPercentCGFixed = Number(onTargetPercentCG).toFixed(2);
    let shotsOnTargetPercentPGFixed = Number(shotsOnTargetPercentPG).toFixed(2);

    if (onTargetPercentCGFixed > shotsOnTargetPercentPGFixed)
    {
        shotsOnTargetPercentComparisonHeader.textContent = `${(onTargetPercentCGFixed - shotsOnTargetPercentPGFixed).toFixed(2)} ⬆️`;
    }
    else if (onTargetPercentCGFixed < shotsOnTargetPercentPGFixed)
    {
        shotsOnTargetPercentComparisonHeader.textContent = `${(shotsOnTargetPercentPGFixed - onTargetPercentCGFixed).toFixed(2)} ⬇️`;
    }
    else if (onTargetPercentCGFixed == shotsOnTargetPercentPGFixed)
    {
        shotsOnTargetPercentComparisonHeader.textContent = `${shotsOnTargetPercentPGFixed} = ${onTargetPercentCGFixed}`;
    }
}

function compare_shots_per_goal() {
    let shotsPerGoalPercentComparisonHeader = document.getElementById("shots_per_goal_comparison_header");

    let shotsPerGoalCGFixed = Number(shotsPerGoalCG).toFixed(2);
    let shotsPerGoalPGFixed = Number(shotsPerGoalPG).toFixed(2);

    if (shotsPerGoalCGFixed > shotsPerGoalPGFixed)
    {
        shotsPerGoalPercentComparisonHeader.textContent = `${(shotsPerGoalCGFixed - shotsPerGoalPGFixed).toFixed(2)} ⬆️`;
    }
    else if (shotsPerGoalCGFixed < shotsPerGoalPGFixed)
    {
        shotsPerGoalPercentComparisonHeader.textContent = `${(shotsPerGoalPGFixed - shotsPerGoalCGFixed).toFixed(2)} ⬇️`;
    }
    else if (shotsPerGoalCGFixed == shotsPerGoalPGFixed)
    {
        shotsPerGoalPercentComparisonHeader.textContent = `${shotsPerGoalPGFixed} = ${shotsPerGoalCGFixed}`;
    }
}

function compare_passes_attempted() {
    let passesAttemptedComparisonHeader = document.getElementById("passes_attempted_comparison_header");

    let passesCGFixed = Number(passesCG).toFixed(2);
    let passesAttemptedPGFixed = Number(passesAttemptedPG).toFixed(2);

    if (passesCGFixed > passesAttemptedPGFixed)
    {
        passesAttemptedComparisonHeader.textContent = `${(passesCGFixed - passesAttemptedPGFixed).toFixed(2)} ⬆️`;
    }
    else if (passesCGFixed < passesAttemptedPGFixed)
    {
        passesAttemptedComparisonHeader.textContent = `${(passesAttemptedPGFixed - passesCGFixed).toFixed(2)} ⬇️`;
    }
    else if (passesCGFixed == passesAttemptedPGFixed)
    {
        passesAttemptedComparisonHeader.textContent = `${passesAttemptedPGFixed} = ${passesCGFixed}`;
    }
}

function compare_passes_completed() {
    let passesCompletedComparisonHeader = document.getElementById("passes_completed_comparison_header");

    let passesCompletedFixed = Number(passesCompleted).toFixed(2);
    let passesCompletedPGFixed = Number(passesCompletedPG).toFixed(2);

    if (passesCompletedFixed > passesCompletedPGFixed)
    {
        passesCompletedComparisonHeader.textContent = `${(passesCompletedFixed - passesCompletedPGFixed).toFixed(2)} ⬆️`;
    }
    else if (passesCompletedFixed < passesCompletedPGFixed)
    {
        passesCompletedComparisonHeader.textContent = `${(passesCompletedPGFixed - passesCompletedFixed).toFixed(2)} ⬇️`;
    }
    else if (passesCompletedFixed == passesCompletedPGFixed)
    {
        passesCompletedComparisonHeader.textContent = `${passesCompletedFixed} = ${passesCompletedPGFixed}`;
    }
}

function compare_passes_missed() {
    let passesMissedComparisonHeader = document.getElementById("passes_missed_comparison_header");

    let passesMissedFixed = Number(passesMissed).toFixed(2);
    let passesMissedPGFixed = Number(passesMissedPG).toFixed(2);

    if (passesMissedFixed > passesMissedPGFixed)
    {
        passesMissedComparisonHeader.textContent = `${(passesMissedFixed - passesMissedPGFixed).toFixed(2)} ⬆️`;
    }
    else if (passesMissedFixed < passesMissedPGFixed)
    {
        passesMissedComparisonHeader.textContent = `${(passesMissedPGFixed - passesMissedFixed).toFixed(2)} ⬇️`;
    }
    else if (passesMissedFixed == passesMissedPGFixed)
    {
        passesMissedComparisonHeader.textContent = `${passesMissedFixed} = ${passesMissedPGFixed}`;
    }
}

function compare_pass_completion_percent() {
    let passCompletionPercentCompareHeader = document.getElementById("pass_completion_percent_comparison_header");

    let passCompletionCGFixed = Number(passCompletionCG).toFixed(2);
    let passCompletionPercentagePGFixed = Number(passCompletionPercentagePG).toFixed(2);

    if (passCompletionCGFixed > passCompletionPercentagePGFixed)
    {
        passCompletionPercentCompareHeader.textContent = `${(passCompletionCGFixed - passCompletionPercentagePGFixed).toFixed(2)} ⬆️`;
    }
    else if (passCompletionCGFixed < passCompletionPercentagePGFixed)
    {
        passCompletionPercentCompareHeader.textContent = `${(passCompletionPercentagePGFixed - passCompletionCGFixed).toFixed(2)} ⬇️`;
    }
    else if (passCompletionCGFixed == passCompletionPercentagePGFixed)
    {
        passCompletionPercentCompareHeader.textContent = `${passCompletionCGFixed} = ${passCompletionPercentagePGFixed}`;
    }
}

function compare_dribbles_attempted() {
    let dribblesAttemptedComparisonHeader = document.getElementById("dribbles_attempted_comparison_header");

    let dribblesCGFixed = Number(dribblesCG).toFixed(2);
    let dribblesAttemptedPGFixed = Number(dribblesAttemptedPG).toFixed(2);

    if (dribblesCGFixed > dribblesAttemptedPGFixed)
    {
        dribblesAttemptedComparisonHeader.textContent = `${(dribblesCGFixed - dribblesAttemptedPGFixed).toFixed(2)} ⬆️`;
    }
    else if (dribblesCGFixed < dribblesAttemptedPGFixed)
    {
        dribblesAttemptedComparisonHeader.textContent = `${(dribblesAttemptedPGFixed - dribblesCGFixed).toFixed(2)} ⬇️`;
    }
    else if (dribblesCGFixed == dribblesAttemptedPGFixed)
    {
        dribblesAttemptedComparisonHeader.textContent = `${dribblesAttemptedPGFixed} = ${dribblesCGFixed}`;
    }
}

function compare_successful_dribbles() {
    let successfulDribblesComparisonHeader = document.getElementById("successful_dribbles_comparison_header");

    let dribblesSucceededFixed = Number(dribblesSucceeded).toFixed(2);
    let successfulDribblesPGFixed = Number(successfulDribblesPG).toFixed(2);

    if (dribblesSucceededFixed > successfulDribblesPGFixed)
    {
        successfulDribblesComparisonHeader.textContent = `${(dribblesSucceededFixed - successfulDribblesPGFixed).toFixed(2)} ⬆️`;
    }
    else if (dribblesSucceededFixed < successfulDribblesPGFixed)
    {
        successfulDribblesComparisonHeader.textContent = `${(successfulDribblesPGFixed - dribblesSucceededFixed).toFixed(2)} ⬇️`;
    }
    else if (dribblesSucceededFixed == successfulDribblesPGFixed)
    {
        successfulDribblesComparisonHeader.textContent = `${dribblesSucceededFixed} = ${successfulDribblesPGFixed}`;
    }
}

function compare_failed_dribbles() {
    let failedDribblesComparisonHeader = document.getElementById("failed_dribbles_comparison_header");

    let dribblesUnsucceededFixed = Number(dribblesUnsucceeded).toFixed(2);
    let failedDribblesPGFixed = Number(failedDribblesPG).toFixed(2);

    if (dribblesUnsucceededFixed > failedDribblesPGFixed)
    {
        failedDribblesComparisonHeader.textContent = `${(dribblesUnsucceededFixed - failedDribblesPGFixed).toFixed(2)} ⬆️`;
    }
    else if (dribblesUnsucceededFixed < failedDribblesPGFixed)
    {
        failedDribblesComparisonHeader.textContent = `${(failedDribblesPGFixed - dribblesUnsucceededFixed).toFixed(2)} ⬇️`;
    }
    else if (dribblesUnsucceededFixed == failedDribblesPGFixed)
    {
        failedDribblesComparisonHeader.textContent = `${dribblesUnsucceededFixed} = ${failedDribblesPGFixed}`;
    }
}

function compare_dribble_completion_percent() {
    let dribbleCompletionPercentCompareHeader = document.getElementById("dribble_completion_percent_comparison_header");

    let dribbleCompletionCGFixed = Number(dribbleCompletionCG).toFixed(2);
    let dribbleCompletionPercentagePGFixed = Number(dribbleCompletionPercentagePG).toFixed(2);

    if (dribbleCompletionCGFixed > dribbleCompletionPercentagePGFixed)
    {
        dribbleCompletionPercentCompareHeader.textContent = `${(dribbleCompletionCGFixed - dribbleCompletionPercentagePGFixed).toFixed(2)} ⬆️`;
    }
    else if (dribbleCompletionCGFixed < dribbleCompletionPercentagePGFixed)
    {
        dribbleCompletionPercentCompareHeader.textContent = `${(dribbleCompletionPercentagePGFixed - dribbleCompletionCGFixed).toFixed(2)} ⬇️`;
    }
    else if (dribbleCompletionCGFixed == dribbleCompletionPercentagePGFixed)
    {
        dribbleCompletionPercentCompareHeader.textContent = `${dribbleCompletionCGFixed} = ${dribbleCompletionPercentagePGFixed}`;
    }
}

function compare_duels_attempted() {
    let duelsAttemptedComparisonHeader = document.getElementById("duels_attempted_comparison_header");

    let duelsCGFixed = Number(duelsCG).toFixed(2);
    let duelsAttemptedPGFixed = Number(duelsAttemptedPG).toFixed(2);

    if (duelsCGFixed > duelsAttemptedPGFixed)
    {
        duelsAttemptedComparisonHeader.textContent = `${(duelsCGFixed - duelsAttemptedPGFixed).toFixed(2)} ⬆️`;
    }
    else if (duelsCGFixed < duelsAttemptedPGFixed)
    {
        duelsAttemptedComparisonHeader.textContent = `${(duelsAttemptedPGFixed - duelsCGFixed).toFixed(2)} ⬇️`;
    }
    else if (duelsCGFixed == duelsAttemptedPGFixed)
    {
        duelsAttemptedComparisonHeader.textContent = `${duelsAttemptedPGFixed} = ${duelsCGFixed}`;
    }
}

function compare_duels_won() {
    let duelsWonComparisonHeader = document.getElementById("duels_won_comparison_header");

    let duelsWonFixed = Number(duelsWon).toFixed(2);
    let duelsWonPGFixed = Number(duelsWonPG).toFixed(2);

    if (duelsWonFixed > duelsWonPGFixed)
    {
        duelsWonComparisonHeader.textContent = `${(duelsWonFixed - duelsWonPGFixed).toFixed(2)} ⬆️`;
    }
    else if (duelsWonFixed < duelsWonPGFixed)
    {
        duelsWonComparisonHeader.textContent = `${(duelsWonPGFixed - duelsWonFixed).toFixed(2)} ⬇️`;
    }
    else if (duelsWonFixed == duelsWonPGFixed)
    {
        duelsWonComparisonHeader.textContent = `${duelsWonPGFixed} = ${duelsWonFixed}`;
    }
}

function compare_duels_lost() {
    let duelsLostComparisonHeader = document.getElementById("duels_lost_comparison_header");

    let duelsLostFixed = Number(duelsLost).toFixed(2);
    let duelsLostPGFixed = Number(duelsLostPG).toFixed(2);

    if (duelsLostFixed > duelsLostPGFixed)
    {
        duelsLostComparisonHeader.textContent = `${(duelsLostFixed - duelsLostPGFixed).toFixed(2)} ⬆️`;
    }
    else if (duelsLostFixed < duelsLostPGFixed)
    {
        duelsLostComparisonHeader.textContent = `${(duelsLostPGFixed - duelsLostFixed).toFixed(2)} ⬇️`;
    }
    else if (duelsLostFixed == duelsLostPGFixed)
    {
        duelsLostComparisonHeader.textContent = `${duelsLostPGFixed} = ${duelsLostFixed}`;
    }
}

function compare_duel_success_percent() {
    let duelSuccessPercentCompareHeader = document.getElementById("duel_success_percent_comparison_header");

    let duelSuccessCGFixed = Number(duelSuccessCG).toFixed(2);
    let duelSuccessPercentagePGFixed = Number(duelSuccessPercentagePG).toFixed(2);

    if (duelSuccessPercentagePGFixed > duelSuccessPercentagePGFixed)
    {
        duelSuccessPercentCompareHeader.textContent = `${(duelSuccessPercentagePGFixed - duelSuccessPercentagePGFixed).toFixed(2)} ⬆️`;
    }
    else if (duelSuccessPercentagePGFixed < duelSuccessPercentagePGFixed)
    {
        duelSuccessPercentCompareHeader.textContent = `${(duelSuccessPercentagePGFixed - duelSuccessPercentagePGFixed).toFixed(2)} ⬇️`;
    }
    else if (duelSuccessPercentagePGFixed == duelSuccessPercentagePGFixed)
    {
        duelSuccessPercentCompareHeader.textContent = `${duelSuccessPercentagePGFixed} = ${duelSuccessPercentagePGFixed}`;
    }
}

function compare_interceptions() {
    let interceptionsComparisonHeader = document.getElementById("interceptions_comparison_header");

    let interceptionsFixed = Number(interceptions).toFixed(2);
    let interceptionsPGFixed = Number(interceptionsPG).toFixed(2);

    if (interceptionsFixed > interceptionsPGFixed) 
    {
        interceptionsComparisonHeader.textContent = `${(interceptionsFixed - interceptionsPGFixed).toFixed(2)} ⬆️`;
    }
    else if (interceptionsFixed < interceptionsPGFixed) 
    {
        interceptionsComparisonHeader.textContent = `${(interceptionsPGFixed - interceptionsFixed).toFixed(2)} ⬇️`;
    }
    else if (interceptionsFixed == interceptionsPGFixed)
    {
        interceptionsComparisonHeader.textContent = `${interceptionsPGFixed} = ${interceptionsFixed}`;
    }
}

function compare_fouls() {
    let foulsComparisonHeader = document.getElementById("fouls_comparison_header");

    let foulsFixed = Number(fouls).toFixed(2);
    let foulsPGFixed = Number(foulsPG).toFixed(2);

    if (foulsFixed > foulsPGFixed) 
    {
        foulsComparisonHeader.textContent = `${(foulsFixed - foulsPGFixed).toFixed(2)} ⬆️`;
    }
    else if (foulsFixed < foulsPGFixed) 
    {
        foulsComparisonHeader.textContent = `${(foulsPGFixed - foulsFixed).toFixed(2)} ⬇️`;
    }
    else if (foulsFixed == foulsPGFixed)
    {
        foulsComparisonHeader.textContent = `${foulsFixed} = ${foulsPGFixed}`;
    }
}

function compare_yellow_cards() {
    let yellowCardsComparisonHeader = document.getElementById("yellow_cards_comparison_header");

    let yellowCardsFixed = Number(yellowCards).toFixed(2);
    let yellowCardsPGFixed = Number(yellowCardsPG).toFixed(2);

    if (yellowCardsFixed > yellowCardsPGFixed) 
    {
        yellowCardsComparisonHeader.textContent = `${(yellowCardsFixed - yellowCardsPGFixed).toFixed(2)} ⬆️`;
    }
    else if (yellowCardsFixed < yellowCardsPGFixed) 
    {
        yellowCardsComparisonHeader.textContent = `${(yellowCardsPGFixed - yellowCardsFixed).toFixed(2)} ⬇️`;
    }
    else if (yellowCardsFixed == yellowCardsPGFixed)
    {
        yellowCardsComparisonHeader.textContent = `${yellowCardsPGFixed} = ${yellowCardsFixed}`;
    }
}

function compare_red_card() {
    let redCardComparisonHeader = document.getElementById("red_card_comparison_header");

    let redCardsFixed = Number(redCards).toFixed(2);
    let redCardPGFixed = Number(redCardPG).toFixed(2);

    if (redCardsFixed > redCardPGFixed) 
    {
        redCardComparisonHeader.textContent = `${(redCardsFixed - redCardPGFixed).toFixed(2)} ⬆️`;
    }
    else if (redCardsFixed < redCardPGFixed) 
    {
        redCardComparisonHeader.textContent = `${(redCardPGFixed - redCardsFixed).toFixed(2)} ⬇️`;
    }
    else if (redCardsFixed == redCardPGFixed)
    {
        redCardComparisonHeader.textContent = `${redCardPGFixed} = ${redCardsFixed}`;
    }
}




















/**************************************************************************
********************************* ALL TIME ********************************
***************************************************************************/

/******************************* Goals *******************************/
window.onload = function() {
    update_current_game();
    update_per_game();
    print_log_game();

    let goalsAT = window.localStorage.getItem("goalsAT");
    let assistsAT = window.localStorage.getItem("assistsAT");
    let keyPassesAT = window.localStorage.getItem("keyPassesAT");
    
    let shotsAT = window.localStorage.getItem("shotsAT");
    let shotsOnTargetAT = window.localStorage.getItem("shotsOnTargetAT");
    let shotsOffTargetAT = window.localStorage.getItem("shotsOffTargetAT");
    let shotsHitPostAT = window.localStorage.getItem("shotsHitPostAT");
    let shotsOnTargetPercentageAT = window.localStorage.getItem("shotsOnTargetPercentageAT");
    let shotsPerGoalAT = window.localStorage.getItem("shotsPerGoalAT");
    
    let passesAttemptedAT = window.localStorage.getItem("passesAttemptedAT");
    let passesCompletedAT = window.localStorage.getItem("passesCompletedAT");
    let passesMissedAT = window.localStorage.getItem("passesMissedAT");
    let passCompletionPercentageAT = window.localStorage.getItem("passCompletionPercentageAT");
    
    let dribblesAttemptedAT = window.localStorage.getItem("dribblesAttemptedAT");
    let successfulDribblesAT = window.localStorage.getItem("successfulDribblesAT");
    let failedDribblesAT = window.localStorage.getItem("failedDribblesAT");
    let dribbleCompletionPercentageAT = window.localStorage.getItem("dribbleCompletionPercentageAT");
    
    let duelsAttemptedAT = window.localStorage.getItem("duelsAttemptedAT");
    let duelsWonAT = window.localStorage.getItem("duelsWonAT");
    let duelsLostAT = window.localStorage.getItem("duelsLostAT");
    let duelSuccessPercentageAT = window.localStorage.getItem("duelSuccessPercentageAT");

    let interceptionsAT = window.localStorage.getItem("interceptionsAT");
    let foulsAT = window.localStorage.getItem("foulsAT");
    let yellowCardsAT = window.localStorage.getItem("yellowCardsAT");
    let redCardsAT = window.localStorage.getItem("redCardsAT");

    let logCount = window.localStorage.getItem("logCount");

    if (!logCount) {
        window.localStorage.setItem("logCount", 0);
    }

    if (goalsAT) {
        document.getElementById("goals_at_header").textContent = `Goals: ${goalsAT}`;
    } else {
        window.localStorage.setItem("goalsAT", 0);
    }

    if (assistsAT) {
        document.getElementById("assists_at_header").textContent = `Assists: ${assistsAT}`;
    } else {
        window.localStorage.setItem("assistsAT", 0);
    }

    if (keyPassesAT) {
        document.getElementById("key_passes_at_header").textContent = `Key Passes: ${keyPassesAT}`;
    } else {
        window.localStorage.setItem("keyPassesAT", 0);
    }

    if (shotsAT) {
        document.getElementById("shots_at_header").textContent = `Shots: ${shotsAT}`;
    } else {
        window.localStorage.setItem("shotsAT", 0);
    }

    if (shotsOnTargetAT) {
        document.getElementById("shots_on_target_at_header").textContent = `Shots on Target: ${shotsOnTargetAT}`;
    } else {
        window.localStorage.setItem("shotsOnTargetAT", 0);
    }

    if (shotsOffTargetAT) {
        document.getElementById("shots_off_target_at_header").textContent = `Shots off Target: ${shotsOffTargetAT}`;
    } else {
        window.localStorage.setItem("shotsOffTargetAT", 0);
    }

    if (shotsHitPostAT) {
        document.getElementById("shots_hit_post_at_header").textContent = `Shots that Hit Post: ${shotsHitPostAT}`;
    } else {
        window.localStorage.setItem("shotsHitPostAT", 0);
    }

    if (shotsOnTargetPercentageAT) {
        document.getElementById("shots_on_target_percent_at_header").textContent = `Shots on Target %: ${shotsOnTargetPercentageAT}`;
    } else {
        window.localStorage.setItem("shotsOnTargetPercentageAT", 0);
    }

    if (shotsPerGoalAT) {
        document.getElementById("shots_per_goal_at_header").textContent = `Shots per Goal: ${shotsPerGoalAT}`;
    } else {
        window.localStorage.setItem("shotsPerGoalAT", 0);
    }

    if (passesAttemptedAT) {
        document.getElementById("passes_attempted_at_header").textContent = `Passes Attempted: ${passesAttemptedAT}`;
    } else {
        window.localStorage.setItem("passesAttemptedAT", 0);
    }

    if (passesCompletedAT) {
        document.getElementById("passes_completed_at_header").textContent = `Passes Completed: ${passesCompletedAT}`;
    } else {
        window.localStorage.setItem("passesCompletedAT", 0);
    }

    if (passesMissedAT) {
        document.getElementById("passes_missed_at_header").textContent = `Passes Missed: ${passesMissedAT}`;
    } else {
        window.localStorage.setItem("passesMissedAT", 0);
    }

    if (passCompletionPercentageAT) {
        document.getElementById("pass_completion_at_header").textContent = `Pass Completion %: ${passCompletionPercentageAT}`;
    }
    else {
        window.localStorage.setItem("passCompletionPercentageAT", 0);
    }

    if (dribblesAttemptedAT) {
        document.getElementById("dribbles_attempted_at_header").textContent = `Dribbles Attempted: ${dribblesAttemptedAT}`;
    } else {
        window.localStorage.setItem("dribblesAttemptedAT", 0);
    }

    if (successfulDribblesAT) {
        document.getElementById("successful_dribbles_at_header").textContent = `Successful Dribbles: ${successfulDribblesAT}`;
    } else {
        window.localStorage.setItem("successfulDribblesAT", 0);
    }

    if (failedDribblesAT) {
        document.getElementById("failed_dribbles_at_header").textContent = `Failed Dribbles: ${failedDribblesAT}`;
    } else {
        window.localStorage.setItem("failedDribblesAT", 0);
    }

    if (dribbleCompletionPercentageAT) {
        document.getElementById("dribble_completion_percent_at_header").textContent = `Dribble Completion %: ${dribbleCompletionPercentageAT}`;
    } else {
        window.localStorage.setItem("dribbleCompletionPercentageAT", 0);
    }

    if (duelsAttemptedAT) {
        document.getElementById("duels_attempted_at_header").textContent = `Duels Attempted: ${duelsAttemptedAT}`;
    } else {
        window.localStorage.setItem("duelsAttemptedAT", 0);
    }
    
    if (duelsWonAT) {
        document.getElementById("duels_won_at_header").textContent = `Duels Won: ${duelsWonAT}`;
    } else {
        window.localStorage.setItem("duelsWonAT", 0);
    }
    
    if (duelsLostAT) {
        document.getElementById("duels_lost_at_header").textContent = `Duels Lost: ${duelsLostAT}`;
    } else {
        window.localStorage.setItem("duelsLostAT", 0);
    }
    
    if (duelSuccessPercentageAT) {
        document.getElementById("duel_success_percent_at_header").textContent = `Duel Success %: ${duelSuccessPercentageAT}`;
    } else {
        window.localStorage.setItem("duelSuccessPercentageAT", 0); 
    }

    if (interceptionsAT) {
        document.getElementById("interceptions_at_header").textContent = `Interceptions: ${interceptionsAT}`;
    } else {
        window.localStorage.setItem("interceptionsAT", 0);
    }
        
    if (foulsAT) {
        document.getElementById("fouls_at_header").textContent = `Fouls: ${foulsAT}`;
    } else {
        window.localStorage.setItem("foulsAT", 0);
    }
        
    if (yellowCardsAT) {
        document.getElementById("yellow_cards_at_header").textContent = `Yellow Cards: ${yellowCardsAT}`;
    } else {
        window.localStorage.setItem("yellowCardsAT", 0);
    }
        
    if (redCardsAT) {
        document.getElementById("red_card_at_header").textContent = `Red Cards: ${redCardsAT}`;
    } else {
        window.localStorage.setItem("redCardsAT", 0);
    }
}

/****************************** Update After Game ******************************/

function update_stats() {
    updateAllTimeGoals(goals);
    updateAllTimeAssists(assists);
    updateAllTimeKeyPasses(keyPasses);

    updateAllTimeShots(shotsCG);
    updateAllTimeShotsOnTarget(onTarget);
    updateAllTimeShotsOffTarget(offTarget);
    updateAllTimeShotsHitPost(hitPost);
    updateAllTimeShotsOnTargetPercentage(onTargetPercentCG);
    updateAllTimeShotsPerGoal(shotsPerGoalCG);

    updateAllTimePassesAttempted(passesCG);
    updateAllTimePassesCompleted(passesCompleted);
    updateAllTimePassesMissed(passesMissed);
    updateAllTimePassCompletionPercentage(passCompletionCG);

    updateAllTimeDribblesAttempted(dribblesCG);
    updateAllTimeSuccessfulDribbles(dribblesSucceeded);
    updateAllTimeFailedDribbles(dribblesUnsucceeded);
    updateAllTimeDribbleCompletionPercentage(dribbleCompletionCG);

    updateAllTimeDuelsAttempted(duelsCG);
    updateAllTimeDuelsWon(duelsWon);
    updateAllTimeDuelsLost(duelsLost);
    updateAllTimeDuelSuccessPercentage(duelSuccessCG);

    updateAllTimeInterceptions(interceptions);
    updateAllTimeFouls(fouls);
    updateAllTimeYellowCards(yellowCards);
    updateAllTimeRedCards(redCards);

    add1_game_played_at();

    updatePerGameGoals(gamesPlayedAT);
    updatePerGameAssists(gamesPlayedAT);
    updatePerGameKeyPasses(gamesPlayedAT);
    updatePerGameShots(gamesPlayedAT);
    updatePerGameShotsOnTarget(gamesPlayedAT);
    updatePerGameShotsOffTarget(gamesPlayedAT);
    updatePerGameShotsHitPost(gamesPlayedAT);
    updatePerGameShotsOnTargetPercent(gamesPlayedAT);
    updatePerGameShotsPerGoal(gamesPlayedAT);
    updatePerGamePassesAttempted(gamesPlayedAT);
    updatePerGamePassesCompleted(gamesPlayedAT);
    updatePerGamePassesMissed(gamesPlayedAT);
    updatePerGamePassesCompletionPercent(gamesPlayedAT);
    updatePerGameDribblesAttempted(gamesPlayedAT);
    updatePerGameSuccessfulDribbles(gamesPlayedAT);
    updatePerGameFailedDribbles(gamesPlayedAT);
    updatePerGameDribbleCompletionPercent(gamesPlayedAT);
    updatePerGameDuelsAttempted(gamesPlayedAT);
    updatePerGameDuelsWon(gamesPlayedAT);
    updatePerGameDuelsLost(gamesPlayedAT);
    updatePerGameDuelSuccessPercent(gamesPlayedAT);
    updatePerGameInterceptions(gamesPlayedAT);
    updatePerGameFouls(gamesPlayedAT);
    updatePerGameYellowCards(gamesPlayedAT);
    updatePerGameRedCard(gamesPlayedAT);

    compare_goals();
    compare_assists();
    compare_key_passes();
    compare_shots();
    compare_shots_on_target();
    compare_shots_off_target();
    compare_shots_hit_post();
    compare_shots_on_target_percent();
    compare_shots_per_goal();
    compare_passes_attempted();
    compare_passes_completed();
    compare_passes_missed();
    compare_pass_completion_percent();
    compare_dribbles_attempted();
    compare_successful_dribbles();
    compare_failed_dribbles();
    compare_dribble_completion_percent();
    compare_duels_attempted();
    compare_duels_won();
    compare_duels_lost();
    compare_duel_success_percent();
    compare_interceptions();
    compare_fouls();
    compare_yellow_cards();
    compare_red_card();

    create_log_game();

    document.getElementById("goals_current_game_header").textContent = `Scored: ${goals}`;
    document.getElementById("assists_current_game_header").textContent = `Assists: ${assists}`;
    document.getElementById("key_passes_current_game_header").textContent = `Key Passes: ${keyPasses}`;
    document.getElementById("shots_current_game_header").textContent = `Shots: ${shotsCG}`;
    document.getElementById("shots_on_target_current_game_header").textContent = `Shots on Target: ${onTarget}`;
    document.getElementById("shots_off_target_current_game_header").textContent = `Shots off Target: ${offTarget}`;
    document.getElementById("shots_hit_post_current_game_header").textContent = `Shots that Hit Post: ${hitPost}`;
    document.getElementById("shots_on_target_percent_current_game_header").textContent = `Shots on Target %: ${onTargetPercentCG}`;
    document.getElementById("shots_per_goal_current_game_header").textContent = `Shots per Goal: ${shotsPerGoalCG}`;
    document.getElementById("passes_current_game_header").textContent = `Passes Attempted: ${passesCG}`;
    document.getElementById("passes_completed_current_game_header").textContent = `Passes Completed: ${passesCompleted}`;
    document.getElementById("passes_missed_current_game_header").textContent = `Passes Missed: ${passesMissed}`;
    document.getElementById("pass_percent_current_game_header").textContent = `Pass Completion %: ${passCompletionCG}`;
    document.getElementById("dribbles_current_game_header").textContent = `Dribbles Attempted: ${dribblesCG}`;
    document.getElementById("successful_dribbles_current_game_header").textContent = `Successful Dribbles: ${dribblesSucceeded}`;
    document.getElementById("failed_dribbles_current_game_header").textContent = `Failed Dribbles: ${dribblesUnsucceeded}`;
    document.getElementById("dribble_completion_percent_current_game_header").textContent = `Dribble Completion %: ${dribbleCompletionCG}`;
    document.getElementById("duels_current_game_header").textContent = `Duels Attempted: ${duelsCG}`;
    document.getElementById("duels_won_current_game_header").textContent = `Duels Won: ${duelsWon}`;
    document.getElementById("duels_lost_current_game_header").textContent = `Duels Lost: ${duelsLost}`;
    document.getElementById("duel_success_percent_current_game_header").textContent = `Duel Success %: ${duelSuccessCG}`;
    document.getElementById("interceptions_current_game_header").textContent = `Interceptions: ${interceptions}`;
    document.getElementById("fouls_current_game_header").textContent = `Fouls: ${fouls}`;
    document.getElementById("yellow_cards_current_game_header").textContent = `Yellow Cards: ${yellowCards}`;
    document.getElementById("red_card_current_game_header").textContent = `Red Card: ${redCards}`;

    goals = 0;
    assists = 0;
    keyPasses = 0;
    onTarget = 0;
    offTarget = 0;
    hitPost = 0;
    shotsCG = 0;
    onTargetPercentCG = 0;
    shotsPerGoalCG = 0;
    passesCompleted = 0;
    passesMissed = 0;
    passesCG = 0;
    passCompletionCG = 0;
    dribblesSucceeded = 0;
    dribblesUnsucceeded = 0;
    dribblesCG = 0;
    dribbleCompletionCG = 0;
    duelsWon = 0;
    duelsLost = 0;
    interceptions = 0;
    duelsCG = 0;
    duelSuccessCG = 0;
    fouls = 0;
    yellowCards = 0;
    redCards = 0;

    document.getElementById("goals_btn").textContent = `Scored: ${goals}`;
    document.getElementById("assists_btn").textContent = `Assists: ${assists}`;
    document.getElementById("key_passes_btn").textContent = `Key Passes: ${keyPasses}`;
    document.getElementById("shots_on_target_btn").textContent = `On Target: ${onTarget}`;
    document.getElementById("shots_off_target_btn").textContent = `Off Target: ${offTarget}`;
    document.getElementById("shots_hit_post_btn").textContent = `Hit Post: ${hitPost}`;
    document.getElementById("passes_completed_btn").textContent = `Completed: ${passesCompleted}`;
    document.getElementById("passes_missed_btn").textContent = `Missed: ${passesMissed}`;
    document.getElementById("successful_dribbles_btn").textContent = `Successful: ${dribblesSucceeded}`;
    document.getElementById("unsuccessful_dribbles_btn").textContent = `Failed: ${dribblesUnsucceeded}`;
    document.getElementById("duels_won_btn").textContent = `Duels Won: ${duelsWon}`;
    document.getElementById("duels_lost_btn").textContent = `Duels Lost: ${duelsLost}`;
    document.getElementById("interceptions_btn").textContent = `Interceptions: ${interceptions}`;
    document.getElementById("fouls_btn").textContent = `Fouls: ${fouls}`;
    document.getElementById("yellow_cards_btn").textContent = `Yellow Cards: ${yellowCards}`;
    document.getElementById("red_card_btn").textContent = `Red Cards: ${redCards}`;
}

/******************************* Goals *******************************/

function updateAllTimeGoals(goalsToAdd) {
    // Select element to change
    let goalsHeaderAT = document.getElementById("goals_at_header");

    // Store all time goals
    let goalsAT = parseInt(window.localStorage.getItem("goalsAT"));

    // Add function input to all time goals
    goalsAT += goalsToAdd;

    // Re-store all time goals
    window.localStorage.setItem("goalsAT", goalsAT);

    // Update all time goals element to match new added input
    goalsHeaderAT.textContent = `Goals: ${goalsAT}`;

    updatePerGameGoals();
}

function add1_goals_at() {
    updateAllTimeGoals(1);
}

function minus1_goals_at() {
    updateAllTimeGoals(-1);
}

/******************************* Assists *******************************/

function updateAllTimeAssists(assistsToAdd) {
    let assistsHeaderAT = document.getElementById("assists_at_header");
    let assistsAT = parseInt(window.localStorage.getItem("assistsAT"));

    assistsAT += assistsToAdd;

    window.localStorage.setItem("assistsAT", assistsAT);
    assistsHeaderAT.textContent = `Assists: ${assistsAT}`;

    updatePerGameAssists();
}

function add1_assists_at() {
    updateAllTimeAssists(1);
}

function minus1_assists_at() {
    updateAllTimeAssists(-1);
}

/******************************* Key Passes *******************************/
function updateAllTimeKeyPasses(keyPassesToAdd) {
    let keyPassesHeaderAT = document.getElementById("key_passes_at_header");
    let keyPassesAT = parseInt(window.localStorage.getItem("keyPassesAT"));

    keyPassesAT += keyPassesToAdd;
  
    window.localStorage.setItem("keyPassesAT", keyPassesAT);
    keyPassesHeaderAT.textContent = `Key Passes: ${keyPassesAT}`;

    updatePerGameKeyPasses();
}

function add1_key_passes_at() {
    updateAllTimeKeyPasses(1);
}
  
function minus1_key_passes_at() {
    updateAllTimeKeyPasses(-1);
}

/******************************* Shots *******************************/
function updateAllTimeShots(shotsToAdd) {
    let shotsHeaderAT = document.getElementById("shots_at_header");
    let shotsAT = parseInt(window.localStorage.getItem("shotsAT"));

    shotsAT += shotsToAdd;
  
    window.localStorage.setItem("shotsAT", shotsAT);
    shotsHeaderAT.textContent = `Shots: ${shotsAT}`;

    updatePerGameShots();
}
  
function add1_shots_at() {
    updateAllTimeShots(1);
}
  
function minus1_shots_at() {
    updateAllTimeShots(-1);
}

/******************************* Shots on Target *******************************/
function updateAllTimeShotsOnTarget(shotsOnTargetToAdd) {
    let shotsOnTargetHeaderAT = document.getElementById("shots_on_target_at_header");
    let shotsOnTargetAT = parseInt(window.localStorage.getItem("shotsOnTargetAT"));

    shotsOnTargetAT += shotsOnTargetToAdd;
  
    window.localStorage.setItem("shotsOnTargetAT", shotsOnTargetAT);
    shotsOnTargetHeaderAT.textContent = `Shots on Target: ${shotsOnTargetAT}`;

    updatePerGameShotsOnTarget();
}
  
function add1_shots_on_target_at() {
    updateAllTimeShotsOnTarget(1);

    updateAllTimeShots(1);
    updateAllTimeShotsOnTargetPercentage(true);
    updateAllTimeShotsPerGoal(true);
}
  
function minus1_shots_on_target_at() {
    updateAllTimeShotsOnTarget(-1);

    updateAllTimeShots(-1);
    updateAllTimeShotsOnTargetPercentage(true);
    updateAllTimeShotsPerGoal(true);
}

/******************************* Shots off Target *******************************/
function updateAllTimeShotsOffTarget(shotsOffTargetToAdd) {
    let shotsOffTargetHeaderAT = document.getElementById("shots_off_target_at_header");
    let shotsOffTargetAT = parseInt(window.localStorage.getItem("shotsOffTargetAT")) || 0;

    shotsOffTargetAT += shotsOffTargetToAdd;
  
    window.localStorage.setItem("shotsOffTargetAT", shotsOffTargetAT);
    shotsOffTargetHeaderAT.textContent = `Shots off Target: ${shotsOffTargetAT}`;

    updatePerGameShotsOffTarget();
}
  
function add1_shots_off_target_at() {
    updateAllTimeShotsOffTarget(1);

    updateAllTimeShots(1);
    updateAllTimeShotsOnTargetPercentage(true);
    updateAllTimeShotsPerGoal(true);
}
  
function minus1_shots_off_target_at() {
    updateAllTimeShotsOffTarget(-1);

    updateAllTimeShots(-1);
    updateAllTimeShotsOnTargetPercentage(true);
    updateAllTimeShotsPerGoal(true);
}

/******************************* Shots Hit Post *******************************/
function updateAllTimeShotsHitPost(shotsHitPostToAdd) {
    let shotsHitPostHeaderAT = document.getElementById("shots_hit_post_at_header");
    let shotsHitPostAT = parseInt(window.localStorage.getItem("shotsHitPostAT")) || 0;

    shotsHitPostAT += shotsHitPostToAdd;
  
    window.localStorage.setItem("shotsHitPostAT", shotsHitPostAT);
    shotsHitPostHeaderAT.textContent = `Shots that Hit Post: ${shotsHitPostAT}`;

    updatePerGameShotsHitPost();
}
  
function add1_shots_hit_post_at() {
    updateAllTimeShotsHitPost(1);

    updateAllTimeShots(1);
    updateAllTimeShotsOnTargetPercentage(true);
    updateAllTimeShotsPerGoal(true);
}
  
function minus1_shots_hit_post_at() {
    updateAllTimeShotsHitPost(-1);

    updateAllTimeShots(-1);
    updateAllTimeShotsOnTargetPercentage(true);
    updateAllTimeShotsPerGoal(true);
}
  
/******************************* Shot On Target Percentage *******************************/
function updateAllTimeShotsOnTargetPercentage(shotsOnTargetPercentageToAdd) {
    let shotsOnTargetPercentageHeaderAT = document.getElementById("shots_on_target_percent_at_header");

    let shotsOnTargetPercentageAT = parseFloat(window.localStorage.getItem("shotsOnTargetPercentageAT")) || 0;
    let shotsAT = parseInt(window.localStorage.getItem("shotsAT"));
    let shotsOnTargetAT = parseInt(window.localStorage.getItem("shotsOnTargetAT"));

    if (shotsOnTargetPercentageToAdd == -1)
    {
        shotsOnTargetPercentageAT = 0
    }
    else if (shotsOnTargetPercentageToAdd == 0.01)
    {
        shotsOnTargetPercentageAT += 0.01;
    }
    else
    {
        shotsOnTargetPercentageAT = shotsOnTargetAT / shotsAT;
    }

    shotsOnTargetPercentageAT = shotsOnTargetPercentageAT.toFixed(2)
  
    window.localStorage.setItem("shotsOnTargetPercentageAT", shotsOnTargetPercentageAT);
    shotsOnTargetPercentageHeaderAT.textContent = `Shots on Target %: ${shotsOnTargetPercentageAT}`;

    updatePerGameShotsOnTargetPercent();
}
  
function add1_shots_on_target_percent_at() {
    updateAllTimeShotsOnTargetPercentage(0.01);
}
  
function minus1_shots_on_target_percent_at() {
    updateAllTimeShotsOnTargetPercentage(-1);
}

/******************************* Shots Per Goal *******************************/
function updateAllTimeShotsPerGoal(shotsPerGoaltoAdd) {
    let shotsPerGoalHeaderAT = document.getElementById("shots_per_goal_at_header");

    let shotsPerGoalAT  = parseFloat(window.localStorage.getItem("shotsPerGoalAT")) || 0;
    let shotsAT = parseInt(window.localStorage.getItem("shotsAT"));
    let goalsAT = parseInt(window.localStorage.getItem("goalsAT"));

    if (shotsPerGoaltoAdd == -1)
    {
        shotsPerGoalAT = 0;
    }
    else if (shotsPerGoaltoAdd == 0.01)
    {
        shotsPerGoalAT += 0.01;
    }
    else
    {
        shotsPerGoalAT = goalsAT / shotsAT;
    }

    shotsPerGoalAT = shotsPerGoalAT.toFixed(2)
  
    window.localStorage.setItem("shotsPerGoalAT", shotsPerGoalAT);
    shotsPerGoalHeaderAT.textContent = `Shots per Goal %: ${shotsPerGoalAT}`;

    updatePerGameShotsPerGoal();
}

// Consider removing and having stats like this simply be dependent on other stats
function add1_shots_per_goal_at() {
    updateAllTimeShotsPerGoal(0.01);
}
  
  function minus1_shots_per_goal_at() {
    updateAllTimeShotsPerGoal(-1);
}

/******************************* Passes Attempted *******************************/
function updateAllTimePassesAttempted(passesToAdd) {
    let passesAttemptedHeaderAT = document.getElementById("passes_attempted_at_header");
    let passesAttemptedAT = parseInt(window.localStorage.getItem("passesAttemptedAT"));

    passesAttemptedAT += passesToAdd;
  
    window.localStorage.setItem("passesAttemptedAT", passesAttemptedAT);
    passesAttemptedHeaderAT.textContent = `Passes Attempted: ${passesAttemptedAT}`;

    updatePerGamePassesAttempted();
}
  
function add1_passes_attempted_at() {
    updateAllTimePassesAttempted(1);

    // add other functions dependant on passes attempted
}
  
function minus1_passes_attempted_at() {
    updateAllTimePassesAttempted(-1);
}

/******************************* Passes Completed *******************************/
function updateAllTimePassesCompleted(passesCompletedToAdd) {
    let passesCompletedHeaderAT = document.getElementById("passes_completed_at_header");
    let passesCompletedAT = parseInt(window.localStorage.getItem("passesCompletedAT")) || 0;

    passesCompletedAT += passesCompletedToAdd;
  
    window.localStorage.setItem("passesCompletedAT", passesCompletedAT);
    passesCompletedHeaderAT.textContent = `Passes Completed: ${passesCompletedAT}`;

    updatePerGamePassesCompleted();
}
  
function add1_passes_completed_at() {
    updateAllTimePassesCompleted(1);

    updateAllTimePassesAttempted(1);
    updateAllTimePassCompletionPercentage(true);
}
  
function minus1_passes_completed_at() {
    updateAllTimePassesCompleted(-1);

    updateAllTimePassesAttempted(-1);
    updateAllTimePassCompletionPercentage(true);
}

/******************************* Passes Missed *******************************/
function updateAllTimePassesMissed(passesMissedToAdd) {
    let passesMissedHeaderAT = document.getElementById("passes_missed_at_header");
    let passesMissedAT = parseInt(window.localStorage.getItem("passesMissedAT")) || 0;

    passesMissedAT += passesMissedToAdd;
  
    window.localStorage.setItem("passesMissedAT", passesMissedAT);
    passesMissedHeaderAT.textContent = `Passes Missed: ${passesMissedAT}`;

    updatePerGamePassesMissed();
}
  
function add1_passes_missed_at() {
    updateAllTimePassesMissed(1);

    updateAllTimePassesAttempted(1);
    updateAllTimePassCompletionPercentage(true);
}
  
function minus1_passes_missed_at() {
    updateAllTimePassesMissed(-1);

    updateAllTimePassesAttempted(-1);
    updateAllTimePassCompletionPercentage(true);
}

/******************************* Pass Completion Percentage *******************************/
function updateAllTimePassCompletionPercentage(passCompletionPercentageToAdd) {
    let passCompletionPercentageHeaderAT = document.getElementById("pass_completion_at_header");

    let passCompletionPercentageAT = parseFloat(window.localStorage.getItem("passCompletionPercentageAT"));
    let passesCompletedAT = parseInt(window.localStorage.getItem("passesCompletedAT")) || 0;
    let passesAttemptedAT = parseInt(window.localStorage.getItem("passesAttemptedAT")) || 0;


    if (passCompletionPercentageToAdd == -1)
    {
        passCompletionPercentageAT = 0
    }
    else if (passCompletionPercentageToAdd == 0.01)
    {
        passCompletionPercentageAT += 0.01;
    }
    else
    {
        passCompletionPercentageAT = passesCompletedAT / passesAttemptedAT;
    }

    passCompletionPercentageAT = passCompletionPercentageAT.toFixed(2);

    window.localStorage.setItem("passCompletionPercentageAT", passCompletionPercentageAT);
    passCompletionPercentageHeaderAT.textContent = `Pass Completion %: ${passCompletionPercentageAT}`;

    updatePerGamePassesCompletionPercent();
}

function add1_pass_completion_percent_at() {
    updateAllTimePassCompletionPercentage(0.01);
}

function minus1_pass_completion_percent_at() {
    updateAllTimePassCompletionPercentage(-1);
}

/******************************* Dribbles Attempted *******************************/
function updateAllTimeDribblesAttempted(dribblesToAdd) {
    let dribblesAttemptedHeaderAT = document.getElementById("dribbles_attempted_at_header");
    let dribblesAttemptedAT = parseInt(window.localStorage.getItem("dribblesAttemptedAT")) || 0;

    dribblesAttemptedAT += dribblesToAdd;
  
    window.localStorage.setItem("dribblesAttemptedAT", dribblesAttemptedAT);
    dribblesAttemptedHeaderAT.textContent = `Dribbles Attempted: ${dribblesAttemptedAT}`;

    updatePerGameDribblesAttempted();
}
  
function add1_dribbles_attempted_at() {
    updateAllTimeDribblesAttempted(1);
}
  
function minus1_dribbles_attempted_at() {
    updateAllTimeDribblesAttempted(-1);
}

/******************************* Successful Dribbles *******************************/
function updateAllTimeSuccessfulDribbles(successfulDribblesToAdd) {
    let successfulDribblesHeaderAT = document.getElementById("successful_dribbles_at_header");
    let successfulDribblesAT = parseInt(window.localStorage.getItem("successfulDribblesAT")) || 0;

    successfulDribblesAT += successfulDribblesToAdd;
  
    window.localStorage.setItem("successfulDribblesAT", successfulDribblesAT);
    successfulDribblesHeaderAT.textContent = `Successful Dribbles: ${successfulDribblesAT}`;

    updatePerGameSuccessfulDribbles();
}
  
function add1_successful_dribbles_at() {
    updateAllTimeSuccessfulDribbles(1);

    updateAllTimeDribblesAttempted(1);
    updateAllTimeDribbleCompletionPercentage(true);
}
  
function minus1_successful_dribbles_at() {
    updateAllTimeSuccessfulDribbles(-1);

    updateAllTimeDribblesAttempted(-1);
    updateAllTimeDribbleCompletionPercentage(true);
}

/******************************* Failed Dribbles *******************************/
function updateAllTimeFailedDribbles(failedDribblesToAdd) {
    let failedDribblesHeaderAT = document.getElementById("failed_dribbles_at_header");
    let failedDribblesAT = parseInt(window.localStorage.getItem("failedDribblesAT")) || 0;

    failedDribblesAT += failedDribblesToAdd;
  
    window.localStorage.setItem("failedDribblesAT", failedDribblesAT);
    failedDribblesHeaderAT.textContent = `Failed Dribbles: ${failedDribblesAT}`;

    updatePerGameFailedDribbles();
}
  
function add1_failed_dribbles_at() {
    updateAllTimeFailedDribbles(1);

    updateAllTimeDribblesAttempted(1);
    updateAllTimeDribbleCompletionPercentage(true);
}
  
function minus1_failed_dribbles_at() {
    updateAllTimeFailedDribbles(-1);

    updateAllTimeDribblesAttempted(-1);
    updateAllTimeDribbleCompletionPercentage(true);
}

/******************************* Dribble Completion Percentage *******************************/
function updateAllTimeDribbleCompletionPercentage(dribbleCompletionPercentageToAdd) {
    let dribbleCompletionPercentageHeaderAT = document.getElementById("dribble_completion_percent_at_header");

    let dribbleCompletionPercentageAT = parseFloat(window.localStorage.getItem("dribbleCompletionPercentageAT"));
    let successfulDribblesAT = parseInt(window.localStorage.getItem("successfulDribblesAT")) || 0;
    let dribblesAttemptedAT = parseInt(window.localStorage.getItem("dribblesAttemptedAT")) || 0;


    if (dribbleCompletionPercentageToAdd == -1)
    {
        dribbleCompletionPercentageAT = 0
    }
    else if (dribbleCompletionPercentageToAdd == 0.01)
    {
        dribbleCompletionPercentageAT += 0.01;
    }
    else
    {
        dribbleCompletionPercentageAT = successfulDribblesAT / dribblesAttemptedAT;
    }

    dribbleCompletionPercentageAT = dribbleCompletionPercentageAT.toFixed(2);

    window.localStorage.setItem("dribbleCompletionPercentageAT", dribbleCompletionPercentageAT);
    dribbleCompletionPercentageHeaderAT.textContent = `Dribble Completion %: ${dribbleCompletionPercentageAT}`;

    updatePerGameDribbleCompletionPercent();
}

function add1_dribble_completion_percent_at() {
updateAllTimeDribbleCompletionPercentage(0.01);
}

function minus1_dribble_completion_percent_at() {
updateAllTimeDribbleCompletionPercentage(-1);
}

/******************************* Duels Attempted *******************************/
function updateAllTimeDuelsAttempted(duelsToAdd) {
    let duelsAttemptedHeaderAT = document.getElementById("duels_attempted_at_header");
    let duelsAttemptedAT = parseInt(window.localStorage.getItem("duelsAttemptedAT")) || 0;
    
    duelsAttemptedAT += duelsToAdd;
    
    window.localStorage.setItem("duelsAttemptedAT", duelsAttemptedAT);
    duelsAttemptedHeaderAT.textContent = `Duels Attempted: ${duelsAttemptedAT}`;

    updatePerGameDuelsAttempted();
}
    
function add1_duels_attempted_at() {
    updateAllTimeDuelsAttempted(1);
}
    
function minus1_duels_attempted_at() {
    updateAllTimeDuelsAttempted(-1);
}
    
/******************************* Duels Won *******************************/
function updateAllTimeDuelsWon(duelsWonToAdd) {
    let duelsWonHeaderAT = document.getElementById("duels_won_at_header");
    let duelsWonAT = parseInt(window.localStorage.getItem("duelsWonAT")) || 0;
    
    duelsWonAT += duelsWonToAdd;
    
    window.localStorage.setItem("duelsWonAT", duelsWonAT);
    duelsWonHeaderAT.textContent = `Duels Won: ${duelsWonAT}`;

    updatePerGameDuelsWon();
}
    
function add1_duels_won_at() {
    updateAllTimeDuelsWon(1);

    updateAllTimeDuelsAttempted(1);
    updateAllTimeDuelSuccessPercentage(true);
}
    
function minus1_duels_won_at() {
    updateAllTimeDuelsWon(-1);

    updateAllTimeDuelsAttempted(-1);
    updateAllTimeDuelSuccessPercentage(true);
}
    
/******************************* Duels Lost *******************************/
function updateAllTimeDuelsLost(duelsLostToAdd) {
    let duelsLostHeaderAT = document.getElementById("duels_lost_at_header");
    let duelsLostAT = parseInt(window.localStorage.getItem("duelsLostAT")) || 0;

    duelsLostAT += duelsLostToAdd;
    
    window.localStorage.setItem("duelsLostAT", duelsLostAT);
    duelsLostHeaderAT.textContent = `Duels Lost: ${duelsLostAT}`;

    updatePerGameDuelsLost();
}
    
function add1_duels_lost_at() {
    updateAllTimeDuelsLost(1);

    updateAllTimeDuelsAttempted(1);
    updateAllTimeDuelSuccessPercentage(true);
}
    
function minus1_duels_lost_at() {
    updateAllTimeDuelsLost(-1);

    updateAllTimeDuelsAttempted(-1);
    updateAllTimeDuelSuccessPercentage(true);
}
    
/******************************* Duel Success Percentage *******************************/
function updateAllTimeDuelSuccessPercentage(duelSuccessPercentageToAdd) {
    let duelSuccessPercentageHeaderAT = document.getElementById("duel_success_percent_at_header");

    let duelSuccessPercentageAT = parseFloat(window.localStorage.getItem("duelSuccessPercentageAT"));
    let duelsWonAT = parseInt(window.localStorage.getItem("duelsWonAT")) || 0;
    let duelsAttemptedAT = parseInt(window.localStorage.getItem("duelsAttemptedAT")) || 0;
    
    if (duelSuccessPercentageToAdd == -1)
    {
        duelSuccessPercentageAT = 0
    }
    else if (duelSuccessPercentageToAdd == 0.01)
    {
        duelSuccessPercentageAT += 0.01;
    }
    else
    {
        duelSuccessPercentageAT = duelsWonAT / duelsAttemptedAT;
    }
    
    duelSuccessPercentageAT = duelSuccessPercentageAT.toFixed(2);
    
    window.localStorage.setItem("duelSuccessPercentageAT", duelSuccessPercentageAT);
    duelSuccessPercentageHeaderAT.textContent = `Duel Success %: ${duelSuccessPercentageAT}`;

    updatePerGameDuelSuccessPercent();
}
    
function add1_duel_success_percent_at() {
    updateAllTimeDuelSuccessPercentage(0.01);
}
    
function minus1_duel_success_percent_at() {
    updateAllTimeDuelSuccessPercentage(-1);
}

/******************************* Interceptions *******************************/
function updateAllTimeInterceptions(interceptionsToAdd) {
    let interceptionsHeaderAT = document.getElementById("interceptions_at_header");
    let interceptionsAT = parseInt(window.localStorage.getItem("interceptionsAT")) || 0;

    interceptionsAT += interceptionsToAdd;

    window.localStorage.setItem("interceptionsAT", interceptionsAT);
    interceptionsHeaderAT.textContent = `Interceptions: ${interceptionsAT}`;

    updatePerGameInterceptions();
}

function add1_interceptions_at() {
    updateAllTimeInterceptions(1);
}

function minus1_interceptions_at() {
    updateAllTimeInterceptions(-1);
}

/******************************* Fouls *******************************/
function updateAllTimeFouls(foulsToAdd) {
    let foulsHeaderAT = document.getElementById("fouls_at_header");
    let foulsAT = parseInt(window.localStorage.getItem("foulsAT")) || 0;

    foulsAT += foulsToAdd;

    window.localStorage.setItem("foulsAT", foulsAT);
    foulsHeaderAT.textContent = `Fouls: ${foulsAT}`;

    updatePerGameFouls();
}

function add1_fouls_at() {
    updateAllTimeFouls(1);
}

function minus1_fouls_at() {
    updateAllTimeFouls(-1);
}

/******************************* Yellow Cards *******************************/
function updateAllTimeYellowCards(yellowCardsToAdd) {
    let yellowCardsHeaderAT = document.getElementById("yellow_cards_at_header");
    let yellowCardsAT = parseInt(window.localStorage.getItem("yellowCardsAT")) || 0;

    yellowCardsAT += yellowCardsToAdd;

    window.localStorage.setItem("yellowCardsAT", yellowCardsAT);
    yellowCardsHeaderAT.textContent = `Yellow Cards: ${yellowCardsAT}`;

    updatePerGameYellowCards();
}

function add1_yellow_cards_at() {
    updateAllTimeYellowCards(1);
}

function minus1_yellow_cards_at() {
    updateAllTimeYellowCards(-1);
}

/******************************* Red Cards *******************************/
function updateAllTimeRedCards(redCardsToAdd) {
    let redCardsHeaderAT = document.getElementById("red_card_at_header");
    let redCardsAT = parseInt(window.localStorage.getItem("redCardsAT")) || 0;

    redCardsAT += redCardsToAdd;

    window.localStorage.setItem("redCardsAT", redCardsAT);
    redCardsHeaderAT.textContent = `Red Cards: ${redCardsAT}`;

    updatePerGameRedCard();
}

function add1_red_card_at() {
    updateAllTimeRedCards(1);
}

function minus1_red_card_at() {
    updateAllTimeRedCards(-1);
}













/**************************************************************************
******************************** Games Log ********************************
***************************************************************************/
function create_log_game() {
    // Get log count
    let logCount = window.localStorage.getItem("logCount");
 
 
    // Get date
    let today = new Date();
 
 
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
 
 
    // Create game log div
    let newGameLogDiv = document.createElement("div");
    newGameLogDiv.setAttribute("id", `newGameLogDiv${logCount}`);
 
 
    // Create date div
    let newDateDiv = document.createElement("div");
    newDateDiv.setAttribute("id", "newDateDiv");
 
 
    newDateDiv.style.display = 'flex';
    newDateDiv.style.flexDirection = 'row';
    newDateDiv.style.alignItems = 'start';
 
 
    // Create stats div
    let newStatsDiv = document.createElement("div");
    newStatsDiv.setAttribute("id", "newStatsDiv");
 
 
    newStatsDiv.style.display = 'flex';
    newStatsDiv.style.flexDirection = 'row';
 
 
    /******************************* Date Element *******************************/
    let date = document.createElement("h2");
 
 
    date.style.color = "white";
    date.style.fontFamily = "Verdana, sans-serif";
    date.style.fontSize = "3.75vw";
    date.style.marginLeft = "2vw";
    date.style.marginBottom = "1vw";
 
 
    date.textContent = month + '/' + day + '/' + year;
    newDateDiv.appendChild(date);
 
 
    /******************************* Delete Element *******************************/
    let deleteGameLogBtn = document.createElement("button");
    deleteGameLogBtn.innerHTML = "-";
 
 
    deleteGameLogBtn.style.color = "white";
    deleteGameLogBtn.style.background = "#c1121f";
    deleteGameLogBtn.style.fontFamily = "Verdana, sans-serif";
    deleteGameLogBtn.style.fontSize = "2vw";
    deleteGameLogBtn.style.fontWeight = "bold";
    deleteGameLogBtn.style.border = "0px";
    deleteGameLogBtn.style.borderRadius = "6px";
    deleteGameLogBtn.style.padding = "0.6vw 1.4vw";
    deleteGameLogBtn.style.margin = "3.75vw 0vw 0vw 2vw";
 
 
    deleteGameLogBtn.setAttribute("id", `deleteGameLogBtn${logCount}`);
    deleteGameLogBtn.setAttribute("onclick", `deleteGameLog(${logCount})`);
 
 
    newDateDiv.appendChild(deleteGameLogBtn);
 
 
    /******************************* Goals *******************************/
    let goalsLogElement = document.createElement("p");
 
 
    goalsLogElement.style.color = "white";
    goalsLogElement.style.fontFamily = "Verdana, sans-serif";
    goalsLogElement.style.fontSize = "1.4vw";
    goalsLogElement.style.marginLeft = "3vw";
    goalsLogElement.setAttribute("id", "goalsLog");
 
 
    goalsLogElement.textContent = `G: ${goals} | `;
    newStatsDiv.appendChild(goalsLogElement);
 
 
    /******************************* Assists *******************************/
    let assistsLogElement = document.createElement("p");
 
 
    assistsLogElement.style.color = "white";
    assistsLogElement.style.fontFamily = "Verdana, sans-serif";
    assistsLogElement.style.fontSize = "1.4vw";
    assistsLogElement.style.marginLeft = "1vw";
 
 
    assistsLogElement.textContent = `A: ${assists} | `;
    newStatsDiv.appendChild(assistsLogElement);
 
 
    /******************************* Key Passes *******************************/
    let keyPassesLogElement = document.createElement("p");
 
 
    keyPassesLogElement.style.color = "white";
    keyPassesLogElement.style.fontFamily = "Verdana, sans-serif";
    keyPassesLogElement.style.fontSize = "1.4vw";
    keyPassesLogElement.style.marginLeft = "1vw";
 
 
    keyPassesLogElement.textContent = `KP: ${keyPasses} | `;
    newStatsDiv.appendChild(keyPassesLogElement);
 
 
    /******************************* On Target *******************************/
    let onTargetLogElement = document.createElement("p");
 
 
    onTargetLogElement.style.color = "white";
    onTargetLogElement.style.fontFamily = "Verdana, sans-serif";
    onTargetLogElement.style.fontSize = "1.4vw";
    onTargetLogElement.style.marginLeft = "1vw";
 
 
    onTargetLogElement.textContent = `ONT: ${onTarget} | `;
    newStatsDiv.appendChild(onTargetLogElement);
 
 
    /******************************* Off Target *******************************/
    let offTargetLogElement = document.createElement("p");
 
 
    offTargetLogElement.style.color = "white";
    offTargetLogElement.style.fontFamily = "Verdana, sans-serif";
    offTargetLogElement.style.fontSize = "1.4vw";
    offTargetLogElement.style.marginLeft = "1vw";
 
 
    offTargetLogElement.textContent = `OFT: ${offTarget} | `;
    newStatsDiv.appendChild(offTargetLogElement);
 
 
    /******************************* Hit Post *******************************/
    let hitPostLogElement = document.createElement("p");
 
 
    hitPostLogElement.style.color = "white";
    hitPostLogElement.style.fontFamily = "Verdana, sans-serif";
    hitPostLogElement.style.fontSize = "1.4vw";
    hitPostLogElement.style.marginLeft = "1vw";
 
 
    hitPostLogElement.textContent = `HP: ${hitPost} | `;
    newStatsDiv.appendChild(hitPostLogElement);
 
 
    /******************************* Completed Pass *******************************/
    let completedPassLogElement = document.createElement("p");
 
 
    completedPassLogElement.style.color = "white";
    completedPassLogElement.style.fontFamily = "Verdana, sans-serif";
    completedPassLogElement.style.fontSize = "1.4vw";
    completedPassLogElement.style.marginLeft = "1vw";
 
 
    completedPassLogElement.textContent = `CP: ${passesCompleted} | `;
    newStatsDiv.appendChild(completedPassLogElement);
 
 
    /******************************* Missed Pass *******************************/
    let missedPassLogElement = document.createElement("p");
 
 
    missedPassLogElement.style.color = "white";
    missedPassLogElement.style.fontFamily = "Verdana, sans-serif";
    missedPassLogElement.style.fontSize = "1.4vw";
    missedPassLogElement.style.marginLeft = "1vw";
 
 
    missedPassLogElement.textContent = `MP: ${passesMissed} | `;
    newStatsDiv.appendChild(missedPassLogElement);
 
 
    /******************************* Successful Dribbles *******************************/
    let successfulDribblesLogElement = document.createElement("p");
 
 
    successfulDribblesLogElement.style.color = "white";
    successfulDribblesLogElement.style.fontFamily = "Verdana, sans-serif";
    successfulDribblesLogElement.style.fontSize = "1.4vw";
    successfulDribblesLogElement.style.marginLeft = "1vw";
 
 
    successfulDribblesLogElement.textContent = `SD: ${dribblesSucceeded} | `;
    newStatsDiv.appendChild(successfulDribblesLogElement);
 
 
    /******************************* Failed Dribbles *******************************/
    let failedDribblesLogElement = document.createElement("p");
 
 
    failedDribblesLogElement.style.color = "white";
    failedDribblesLogElement.style.fontFamily = "Verdana, sans-serif";
    failedDribblesLogElement.style.fontSize = "1.4vw";
    failedDribblesLogElement.style.marginLeft = "1vw";
 
 
    failedDribblesLogElement.textContent = `FD: ${dribblesUnsucceeded} | `;
    newStatsDiv.appendChild(failedDribblesLogElement);
 
 
    /******************************* Duels Won *******************************/
    let duelsWonLogElement = document.createElement("p");
 
 
    duelsWonLogElement.style.color = "white";
    duelsWonLogElement.style.fontFamily = "Verdana, sans-serif";
    duelsWonLogElement.style.fontSize = "1.4vw";
    duelsWonLogElement.style.marginLeft = "1vw";
 
 
    duelsWonLogElement.textContent = `DW: ${duelsWon} | `;
    newStatsDiv.appendChild(duelsWonLogElement);
 
 
    /******************************* Duels Lost *******************************/
    let duelsLostLogElement = document.createElement("p");
 
 
    duelsLostLogElement.style.color = "white";
    duelsLostLogElement.style.fontFamily = "Verdana, sans-serif";
    duelsLostLogElement.style.fontSize = "1.4vw";
    duelsLostLogElement.style.marginLeft = "1vw";
 
 
    duelsLostLogElement.textContent = `DW: ${duelsLost} | `;
    newStatsDiv.appendChild(duelsLostLogElement);
 
 
    /******************************* Interceptions *******************************/
    let interceptionsLogElement = document.createElement("p");
 
 
    interceptionsLogElement.style.color = "white";
    interceptionsLogElement.style.fontFamily = "Verdana, sans-serif";
    interceptionsLogElement.style.fontSize = "1.4vw";
    interceptionsLogElement.style.marginLeft = "1vw";
 
 
    interceptionsLogElement.textContent = `I: ${interceptions} | `;
    newStatsDiv.appendChild(interceptionsLogElement);
 
 
    /******************************* Fouls *******************************/
    let foulsLogElement = document.createElement("p");
 
 
    foulsLogElement.style.color = "white";
    foulsLogElement.style.fontFamily = "Verdana, sans-serif";
    foulsLogElement.style.fontSize = "1.4vw";
    foulsLogElement.style.marginLeft = "1vw";
 
 
    foulsLogElement.textContent = `F: ${fouls} | `;
    newStatsDiv.appendChild(foulsLogElement);
   
    /******************************* Yellow Cards *******************************/
    let yellowCardsLogElement = document.createElement("p");
 
 
    yellowCardsLogElement.style.color = "white";
    yellowCardsLogElement.style.fontFamily = "Verdana, sans-serif";
    yellowCardsLogElement.style.fontSize = "1.4vw";
    yellowCardsLogElement.style.marginLeft = "1vw";
 
 
    yellowCardsLogElement.textContent = `YC: ${yellowCards} | `;
    newStatsDiv.appendChild(yellowCardsLogElement);
 
 
    /******************************* Red Card *******************************/
    let redCardLogElement = document.createElement("p");
 
 
    redCardLogElement.style.color = "white";
    redCardLogElement.style.fontFamily = "Verdana, sans-serif";
    redCardLogElement.style.fontSize = "1.4vw";
    redCardLogElement.style.marginLeft = "1vw";
 
 
    redCardLogElement.textContent = `RC: ${redCards}`;
    newStatsDiv.appendChild(redCardLogElement);
 
 
    /******************************* Append Divs *******************************/
    newGameLogDiv.appendChild(newDateDiv);
    newGameLogDiv.appendChild(newStatsDiv);
 
 
    document.body.appendChild(newGameLogDiv);
    let newGameLogDivString = newGameLogDiv.innerHTML;
    window.localStorage.setItem(`newGameLogDivString${logCount}`, newGameLogDivString);
 
 
    logCount++;
    console.log("Log Count: " + logCount);
    window.localStorage.setItem("logCount", logCount);
}
 
 
function print_log_game() {
    let logCount = window.localStorage.getItem("logCount");
 
 
    for (let i = 0; i < logCount; i++)
    {
        // get the parent div
        let newGameLogDivString = window.localStorage.getItem(`newGameLogDivString${i}`);
 
 
        if (newGameLogDivString)
        {
            // add parent element to html
            let newGameLogDivStringElement = document.createElement("div");
            newGameLogDivStringElement.innerHTML = newGameLogDivString;
 
 
            document.body.appendChild(newGameLogDivStringElement);
 
 
            console.log(newGameLogDivStringElement);
        }
    }
}
 
 
// Delete game log button
function deleteGameLog(logCount) {
    // get the grandparent element of the button
    let divWrapper = document.querySelector(`#deleteGameLogBtn${logCount}`).parentNode.parentNode;
 
 
    // remove the divWrapper from HTML
    divWrapper.remove();
 
 
    // remove it from localStorage
    if(window.localStorage.getItem(`newGameLogDivString${logCount}`))
    {
        window.localStorage.removeItem(`newGameLogDivString${logCount}`);
    }
}
 
 
 
 