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
    alert(targetNumber)
}

function updateGameStatus(guess) {
    /*
    *   הפונקציה תציג את אחת ההודעות הבאות בפסקה עם id בשם feedback
    *	כאשר הניחוש נמוך מדי: נמוך מדי, נסה שוב!  
    *	כאשר הניחוש גבוה מדי: גבוה מדי, נסה שוב!  
    *	כאשר הניחוש נכון:  נכון, המספר היה x. לקח לך y נסיוניות. הקש על כפתור "Restart Game״ כדי לשחק שוב.   כאשר X ו- Y מייצגים את המספר הסודי ומספר הניחושים בהתאמה.
    בנוסף על הפונקציה לנהל את מספר הניסיונות של המשתמש 
    *	להעלות את מספר הניסיונות של המשתמש באחד 
    *	להציג הודעה בפסקה עם id בשם tries את מספר הניחושים שהשתמש וכמה שנשארו
    *	אם נשאר רק ניחוש אחד הצג את ההודעה בצבע אדום
    *	אם המשתמש מסיים את כל 5 הניחושים ללא הצלחה - הצג הודעה 
        “You used all tries, you lose ב - alert והתחל את המשחק מהתחלה 

    */

    tries++;
    document.getElementById('tries').innerHTML = `You used ${tries} tries so far, ${MAXTRIES - tries} tries left!`

    document.getElementById('tries').className = MAXTRIES - tries == 1 ? 'red' : '';

    let _html = '';
    if (guess < targetNumber) {
        _html = "נמוך מדי, נסה שוב";
    } else if (guess > targetNumber) {
        _html = "גבוה מדי, נסה שוב";
    } else if (guess == targetNumber) {
        _html = `נכון המספר היה ${targetNumber}. לקח לך ${tries} נסיונות. הקש על הכפתור Restart game כדי לשחק שוב`;
    }
    document.getElementById('feedback').innerHTML = _html;

    if (tries == MAXTRIES) {
        alert("You used all tries, you lose");
        startGame();
    }

}

function checkGuess() {
    /*
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

function provideHint() {
    /*
    *	כתוב קוד html שיוצר כפתור בשם hint (רמז). צור אירוע כך שעם הלחיצה על הכפתור תופעל הפונקציה  ()provideHint 
    *	הפונקציה מציגה הודעה למשתמש שנותן רמז  - האם המספר שצריך לנחש הוא זוגי או אי זוגי . ההודעה תוצג באלמנט html עם ה- id בשם פידבק
    */
    document.getElementById('feedback').innerHTML = targetNumber % 2 == 0 ? "המספר זוגי" : "המספר אי זוגי";

}

startGame();

// סעיף 5
// document.querySelectorAll('p')