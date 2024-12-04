

// Generate Meal Button Action//

function inputMeal() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let goal = document.getElementById("goal").value;
    let myButton= document.getElementById("myButton").value

   

//Display Meal Plan Input for Monday- Sunday//
let mondayBreakfast =document.getElementById("mondaybreakfast").value;
let mondaySnack =document.getElementById("mondaysnack").value;
let mondayLunch =document.getElementById("mondaylunch").value;
let mondaySecondSnack =document.getElementById("mondaysecondsnack").value;
let mondayDinner =document.getElementById("mondaydinner").value;

let tuesdayBreakfast =document.getElementById("tuesdaybreakfast").value;
let tuesdaySnack =document.getElementById("tuesdaysnack").value;
let tuesdayLunch =document.getElementById("tuesdaylunch").value;
let tuesdaySecondSnack =document.getElementById("tuesdaysecondsnack").value;
let tuesdayDinner =document.getElementById("tuesdaydinner").value;

let wednesdayBreakfast =document.getElementById("wednesdaybreakfast").value;
let wednesdaySnack =document.getElementById("wednesdaysnack").value;
let wednesdayLunch =document.getElementById("wednesdaylunch").value;
let wednesdaySecondSnack =document.getElementById("wednesdaysecondsnack").value;
let wednesdayDinner =document.getElementById("wednesdaydinner").value;

let thursdayBreakfast =document.getElementById("thursdaybreakfast").value;
let thursdaySnack =document.getElementById("thursdaysnack").value;
let thursdayLunch =document.getElementById("thursdaylunch").value;
let thursdaySecondSnack =document.getElementById("thursdaysecondsnack").value;
let thursdayDinner =document.getElementById("thursdaydinner").value;

let fridayBreakfast =document.getElementById("fridaybreakfast").value;
let fridaySnack =document.getElementById("fridaysnack").value;
let fridayLunch =document.getElementById("fridaylunch").value;
let fridaySecondSnack =document.getElementById("fridaysecondsnack").value;
let fridayDinner =document.getElementById("fridaydinner").value;

let saturdayBreakfast =document.getElementById("saturdaybreakfast").value;
let saturdaySnack =document.getElementById("saturdaysnack").value;
let saturdayLunch =document.getElementById("saturdaylunch").value;
let saturdaySecondSnack =document.getElementById("saturdaysecondsnack").value;
let saturdayDinner =document.getElementById("saturdaydinner").value;

let sundayBreakfast =document.getElementById("sundaybreakfast").value;
let sundaySnack =document.getElementById("sundaysnack").value;
let sundayLunch =document.getElementById("sundaylunch").value;
let sundaySecondSnack =document.getElementById("sundaysecondsnack").value;
let sundayDinner =document.getElementById("sundaydinner").value;

//Email Validation//
if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return; 
}



//Open New Window For Meal Plan//
document.open();
document.write(`
<html>
<style>
p, h2 {
    font-family: monospace;
}

button {
    border-radius: 3px;
    padding: 10px;
    
}

button:hover {
    background-color: #8ba285;
}
 
h3 {
    font-size: 30px;
    font-family:monospace;
}

</style>
<h3>Meal Plan</h3>
<br>
<h2>Monday</h2>
<p><strong>Breakfast:</strong> ${mondayBreakfast}</p>
<p>Snack: ${mondaySnack}</p>
<p>Lunch: ${mondayLunch}</p>
<p>Snack 2: ${mondaySecondSnack}</p>
<p>Dinner: ${mondayDinner}</p>

<h2>Tuesday</h2>
<p><strong>Breakfast:</strong> ${tuesdayBreakfast}</p>
<p>Snack: ${tuesdaySnack}</p>
<p>Lunch: ${tuesdayLunch}</p>
<p>Snack 2: ${tuesdaySecondSnack}</p>
<p>Dinner: ${tuesdayDinner}</p>

<h2>Wednesday</h2>
<p><strong>Breakfast:</strong> ${wednesdayBreakfast}</p>
<p>Snack: ${wednesdaySnack}</p>
<p>Lunch: ${wednesdayLunch}</p>
<p>Snack 2: ${wednesdaySecondSnack}</p>
<p>Dinner: ${wednesdayDinner}</p>

<h2>Thursday</h2>
<p><strong>Breakfast:</strong> ${thursdayBreakfast}</p>
<p>Snack: ${thursdaySnack}</p>
<p>Lunch: ${thursdayLunch}</p>
<p>Snack 2: ${thursdaySecondSnack}</p>
<p>Dinner: ${thursdayDinner}</p>

<h2>Friday</h2>
<p><strong>Breakfast:</strong> ${fridayBreakfast}</p>
<p>Snack: ${fridaySnack}</p>
<p>Lunch: ${fridayLunch}</p>
<p>Snack 2: ${fridaySecondSnack}</p>
<p>Dinner: ${fridayDinner}</p>

<h2>Saturday</h2>
<p><strong>Breakfast:</strong> ${saturdayBreakfast}</p>
<p>Snack: ${saturdaySnack}</p>
<p>Lunch: ${saturdayLunch}</p>
<p>Snack 2: ${saturdaySecondSnack}</p>
<p>Dinner: ${saturdayDinner}</p>

<h2>Sunday</h2>
<p><strong>Breakfast:</strong> ${saturdayBreakfast}</p>
<p>Snack: ${saturdaySnack}</p>
<p>Lunch: ${saturdayLunch}</p>
<p>Snack 2: ${saturdaySecondSnack}</p>
<p>Dinner: ${saturdayDinner}</p>

<!--- Print Button -->
<button onclick="window.print()">Print Meal Plan</button>
<a href="finalProject.html">
<button>Go Back </button>
</a>
</html>
`);
document.close();
}



//Clear Form Function//
function clearForm() {
    document.getElementById("mealForm").reset();
}

//Email validation using REGEX//
function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}




