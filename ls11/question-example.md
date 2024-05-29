```html
<!DOCTYPE html>
<html>

<head>
   <title>ניהול פריטים</title>
   <style>
       table {
           width: 100%;
           border-collapse: collapse;
       }
   </style>
</head>

<body dir="rtl">
   <h3>רשימת פריטים</h3>
   <table border="1" width="100%">
       <thead>
           <tr>
               <th>שם הפריט</th>
               <th>כמות</th>
               <th>קטגוריה</th>
           </tr>
       </thead>
       <tbody id="item-table">
           <tr>
               <td>עט</td>
               <td>20</td>
               <td>ציוד משרדי</td>
           </tr>
           <tr>
               <td>כיסא</td>
               <td>5</td>
               <td>ריהוט</td>
           </tr>
           <tr>
               <td>נייר</td>
               <td>100</td>
               <td>ציוד משרדי</td>
           </tr>
       </tbody>
   </table>
   <br>
   <form>
       <fieldset>
           <legend>הוספת פריט חדש</legend>
           <label for="item-name">שם הפריט:
               <input type="text" id="item-name" name="item-name">
           </label>
           <label for="item-quantity">כמות:
               <input style="width:15%" type="number" id="item-quantity" name="item-quantity">
           </label>
           <label for="item-category">קטגוריה:
               <input type="text" id="item-category" name="item-category">
           </label>
           <button type="button" onclick="addItem()">הוסף</button>
       </fieldset>
   </form>
   <br>
   <h3>חישובים:</h3>
   <button onclick="calculateTotalItems()">חשב סך כל הפריטים</button>
   <button onclick="countCategoryItems()">חשב פריטים לפי קטגוריה</button>

   <h3>תוצאה</h3>
   <p id="result" style="height: 30px; border: 1px solid black;">
   </p>

   <script>
       const items = [
           { name: "עט", quantity: 20, category: "ציוד משרדי" },
           { name: "כיסא", quantity: 5, category: "ריהוט" },
           { name: "נייר", quantity: 100, category: "ציוד משרדי" }
       ];

       function renderTable() {
           // סעיף a
       }

       function addItem() {
           // סעיף b
       }

       function calculateTotalItems() {
           // סעיף c
       }

       function countCategoryItems() {
           // סעיף d
       }

   </script>
</body>

</html>
```

### Questions

1. **רישום נתונים לטבלה:**
   - **סעיף a:** כתוב פונקציה בשם `renderTable` שתציג את הפריטים מהמערך `items` בטבלת ה-HTML. ודא שכל פעם שהפונקציה נקראת, התוכן של הטבלה מתעדכן עם המידע העדכני.
2. **הוספת פריט חדש:**
   - **סעיף b:** כתוב פונקציה בשם `addItem` שתוסיף פריט חדש למערך `items` על פי הנתונים שהוזנו בטופס, ותעדכן את הטבלה בהתאם.
3. **חישוב סך כל הפריטים:**
   - **סעיף c:** כתוב פונקציה בשם `calculateTotalItems` שתחשב ותציג את סך כל הפריטים במערך `items`.
4. **חישוב פריטים לפי קטגוריה:**
   - **סעיף d:** כתוב פונקציה בשם `countCategoryItems` שתחשב ותציג כמה פריטים יש בכל קטגוריה במערך `items`.
