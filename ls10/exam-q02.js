/*
א. (10 נקודות) הגדירו מחלקה  
 Vehicle עם constructor ליצירת רכב חדש . לכל רכב יהיה מספר ייחודי,
  מערך של שירותים שבוצעו ומחיר כולל.    
ב. (10 נקודות)  הוסף למחלקה vehicle   פונקציה (addservice(service. הפונקציה תוסיף שירות חדש למערך השירותים ותחשב את המחיר הכולל המעודכן. 
ג. (10 נקודות) כתוב פונקציה ()addVehicle להוספת רכב חדש ומוסיפה אותו למערך vehicles (שימו לב המערך כבר מוגדר בשורה אחרונה של קוד ה- js)
 בדוק אם מספר הרכב הוקלד והשירותים נבחרו ע״י המשתמש לפני הוספה. אם לא הצג הודעה מתאימה בפסקה עם ה- id בשם output
חבר אירוע לחיצה לכפתור "הוסף רכב" שיקרא לפונקציה להוספת רכב. 
ד. (10 נקודות)  כתוב פונקציה ()showServices שמציגה את השירותים ומחירם הכולל (כפי שמופיע באובייקט) של רכב קיים (לפי מספר רכב שהוקלד בתיבת טקסט).
 אם הרכב לא נמצא במערך, הצג הודעה מתאימה בפסקה עם ה- id בשם output
חבר אירוע לחיצה לכפתור "הצג שירותים" שיקרא לפונקציה להצגת שירותי רכב.
ה. (10 נקודות) עדכן את המחלקה Vehicle להוספת רכב חדש כך שכל שירות נוסף מעבר לשירות הראשון יעלה 90 ש״ח במקום 100 ש״ח.
לדוגמא אם יבחרו שירות 1 ושירות 4 העלות הכוללת תהיה 190 ש״ח. 
*/

class Vehicle {
    constructor(vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
        this.orderedServices = [];
        this.totalPrice = 0;
    }

    addService(service) {
        if (this.orderedServices.length > 1) {
            this.totalPrice += 90;
        } else {
            this.totalPrice += 100;
        }
        this.orderedServices.push(service);
    }
}

function addVehicle() {
    let vehicleNumber = document.getElementById('vehicleNumber').value;
    let selectedServicesElements = document.getElementById('services').selectedOptions;
    let selectedServices = Array.from(selectedServicesElements).map(function (el) {
        return el.value;
    });

    if (vehicleNumber == '') {
        document.getElementById('output').innerHTML = "לא הוקלד מספר רכב";
    }

    if (selectedServices.length == 0) {
        document.getElementById('output').innerHTML = "לא נבחרו שירותים";
    } else {
        const v = new Vehicle(vehicleNumber);

        for (let i = 0; i < selectedServices.length; i++) {
            const service = selectedServices[i];
            v.addService(service);
        }
        vehicles.push(v);
    }



}

function showServices() {
    let vehicleNumber = document.getElementById('vehicleNumber').value
    for (let i = 0; i < vehicles.length; i++) {
        if (vehicles[i].vehicleNumber == vehicleNumber) {
            document.getElementById('output').innerHTML = JSON.stringify(vehicles[i]);
        }
    }


}

document.getElementById('showServices').addEventListener('click', showServices);
document.getElementById('addVehicle').addEventListener('click', addVehicle);
let vehicles = [];

var vehicle1 = new Vehicle("232323");
console.log(vehicle1);

