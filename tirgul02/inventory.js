/*
ניהול מלאי 
יצירת מחלקה עבור סניף ( כתובת, מערך מלאי)
הוספת מלאי (ביגוד)
פונקצית הדפסה
הקמת 3 סניפים
*/

class Branch {
    constructor(city) {
        this.city = city;
        this.inventory = [];
    }

    addInventory(items) {
        for (let i = 0; i < items.length; i++) {
            this.inventory.push(items[i]);
        }
    }

    getInventory() {
        function itemAsLI(i) {
            return "<li>" + i + "</li>";
        }
        return this.inventory.map(itemAsLI);
    }
}

const shoes = ["Mens shoes 38", "Mens shoes 40"];
const shirts = ["Girls shirt S", "Girls shirt XL"];

const b1 = new Branch("Dimona");
b1.addInventory(shoes);
b1.addInventory(shirts);

const b2 = new Branch("TLV");
b2.addInventory(shirts);


const b3 = new Branch("Haifa");
b3.addInventory(shoes);
b3.addInventory(shoes);
b3.addInventory(shoes);
b3.addInventory(shoes);
b3.addInventory(shoes);
b3.addInventory(shoes);


const branches = [b1, b2, b3];
console.log(branches);

function branchToHTML(b) {
    return `
    <div>
        <h2>Branch city: ${b.city}</h2>
        <p>Inventory:</p>
        <ul>
            ${b.getInventory().join("")}
        </ul>
    </div>`;
}


§   

function addShoes() {,
    const $selectBranch = document.getElementById('select-branch').value;
    if ($selectBranch == 'b1') {
        branches[0].addInventory(shoes);
    } else if ($selectBranch == 'b2') {
        branches[1].addInventory(shoes);
    }

    renderHTML();
}