let targetNumber;
let tries = 0;
let triesLeft;

const MAXTRIES = 5;

function startGame() {
    /*
    *	מגריל מספר שלם רנדומלי בין 1 ל- 100 לתוך משתנה
    *	מציג הודעה למשתמש "התחיל משחק חדש, נא לנחש מספר בין 1 ל- 100". הצג את ההודעה בפסקה עם  id בשם feedback
    *	מאפסת את השדה שבו המשתמש צריך להזין את הניחוש
    *	מאתחל משתנה שסופר את מספר הניחושים לאפס
    */

    targetNumber = parseInt(Math.random() * 100) + 1;
    document.getElementById('feedback').innerHTML = "התחיל משחק חדש, נא לנחש מספר בין 1 ל- 100";
    document.getElementById('geussInput').value = "";
    tries = 0;
}

function updateGameStatus(guess) {

}

function checkGuess() {
    /*
    . (10 נקודות) כתוב פונקציית (checkGuess(
    *	הפונקציה מקבלת כפרמטר ניחוש ובודקת אם הניחוש תקין - מספר בין 1 ל - 100
    *	אם הניחוש אינו תקין הצג הודעת שגיאה למשתמש בעזרת alert.
    *	אם הניחוש תקין הפונקציה תקרא לפונקציה (updateGame(guess   עם הפרמטר guess
    *	צור אירוע שמקשר פונקציה זו לכפתור "Guess"
    */

    const _guess = Number(document.getElementById('geussInput').value);
    if (_guess < 1 || _guess > 100) {
        alert("ניחוש לא תקין");
    } else {
        updateGameStatus(_guess);
    }
}

function provideHint() { }

startGame();