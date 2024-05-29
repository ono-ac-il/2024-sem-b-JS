# חומר עזר

## חוקים שחייב לדעת

* לא ניתן להעביר פרמטרים לפונקציה שהיא מאזין לאירוע, גם אם הצמדנו את הפונקציה באמצעות JavaScript וגם אם הצמדנו אותה באמצעות HTML.לדוגמה:

    ```javascript
        function myFunc() {
            // הפונקציה לא יכולה לקבל פרמטרים שהמתכנת מעוניין בהם, כי היא פונקציה שמופעלת בעת האזנה לאירוע
        }
        document.getElementById('btn').addEventListener('click', myFunc);
    ```

* כל מה שמגיע מה-HTML הוא string, לדוגמה:

    ```html
        <input id="input" type="number">
    ```

    ```javascript
        const userValue = document.getElementById('input').value;
        console.log(typeof userValue); // string
    ```

## Math.random()

איך לפתח את `Math.random()` שלב אחרי שלב, כדי להגריל מספרים בין 1 ל-100?

```javascript
    Math.random() // 0.3453455, 0.013212321, 0.999999999, 0
    Math.random() * 100 // 34.53455, 1.3212321, 99.9999999, 0
    parseInt(Math.random() * 100) // 34, 1, 99, 0
    parseInt(Math.random() * 100) + 1 // 35, 2, 100, 1
```

דוגמאות לשימוש ב-`Math.random()`:

```javascript
    Math.random() // [0,1)
    parseInt(Math.random() * 100) // [0,99]
    parseInt(Math.random() * 100) + 1 // [1,100]
```
