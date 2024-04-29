const schedule = { //Date Storage for building later plan
    monday : {
        breakfast: '',
        snack1: '',
        lunch: '',
        snack2: '',
        dinner: '',

    },
    tuesday : {
        breakfast: '',
        snack1: '',
        lunch: '',
        snack2: '',
        dinner: '',
    },
    wednesday : {
        breakfast: '',
        snack1: '',
        lunch: '',
        snack2: '',
        dinner: '',
    },
    thrusday : {
        breakfast: '',
        snack1: '',
        lunch: '',
        snack2: '',
        dinner: '',
    },
    friday : {
        breakfast: '',
        snack1: '',
        lunch: '',
        snack2: '',
        dinner: '',
    },
    saturday : {
        breakfast: '',
        snack1: '',
        lunch: '',
        snack2: '',
        dinner: '',
    },
    sunday : {
        breakfast: '',
        snack1: '',
        lunch: '',
        snack2: '',
        dinner: '',
    },
}

var names = ''
var goal = ''
var email = ''
var phone = ''
const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
document.getElementById("upload").addEventListener("click", function(){
    console.log("Starting Validation")
    email = document.getElementById("email").value
    goal = document.getElementById("goal").value
    phone = document.getElementById("phone").value
    names = document.getElementById("name").value
    if (regex.test(email)) {
    console.log("Uploading Data")
    var breakfast = document.getElementById("mbreakfast").value;
    var snack1 = document.getElementById("msnack1").value;
    var lunch = document.getElementById("mlunch").value;
    var snack2 = document.getElementById("msnack2").value;
    var dinner = document.getElementById("mdinner").value;
    schedule.monday.breakfast = breakfast;
    schedule.monday.snack1 = snack1;
    schedule.monday.lunch = lunch;
    schedule.monday.snack2 = snack2;
    schedule.monday.dinner = dinner;
    console.log("Monday Uploaded")
    breakfast = document.getElementById("tbreakfast").value;
    snack1 = document.getElementById("tsnack1").value;
    lunch = document.getElementById("tlunch").value;
    snack2 = document.getElementById("tsnack2").value;
    dinner = document.getElementById("tdinner").value;
    schedule.tuesday.breakfast = breakfast;
    schedule.tuesday.snack1 = snack1;
    schedule.tuesday.lunch = lunch;
    schedule.tuesday.snack2 = snack2;
    schedule.tuesday.dinner = dinner;
    console.log("Tuesday Uploaded")
    breakfast = document.getElementById("wbreakfast").value;
    snack1 = document.getElementById("wsnack1").value;
    lunch = document.getElementById("wlunch").value;
    snack2 = document.getElementById("wsnack2").value;
    dinner = document.getElementById("wdinner").value;
    schedule.wednesday.breakfast = breakfast;
    schedule.wednesday.snack1 = snack1;
    schedule.wednesday.lunch = lunch;
    schedule.wednesday.snack2 = snack2;
    schedule.wednesday.dinner = dinner;
    console.log("Wednesday Uploaded")
    breakfast = document.getElementById("thbreakfast").value;
    snack1 = document.getElementById("thsnack1").value;
    lunch = document.getElementById("thlunch").value;
    snack2 = document.getElementById("thsnack2").value;
    dinner = document.getElementById("thdinner").value;
    schedule.thrusday.breakfast = breakfast;
    schedule.thrusday.snack1 = snack1;
    schedule.thrusday.lunch = lunch;
    schedule.thrusday.snack2 = snack2;
    schedule.thrusday.dinner = dinner;
    console.log("Thrusday Uploaded")
    breakfast = document.getElementById("fbreakfast").value;
    snack1 = document.getElementById("fsnack1").value;
    lunch = document.getElementById("flunch").value;
    snack2 = document.getElementById("fsnack2").value;
    dinner = document.getElementById("fdinner").value;
    schedule.friday.breakfast = breakfast;
    schedule.friday.snack1 = snack1;
    schedule.friday.lunch = lunch;
    schedule.friday.snack2 = snack2;
    schedule.friday.dinner = dinner;
    console.log("Friday Uploaded")
    breakfast = document.getElementById("sabreakfast").value;
    snack1 = document.getElementById("sasnack1").value;
    lunch = document.getElementById("salunch").value;
    snack2 = document.getElementById("sasnack2").value;
    dinner = document.getElementById("sadinner").value;
    schedule.saturday.breakfast = breakfast;
    schedule.saturday.snack1 = snack1;
    schedule.saturday.lunch = lunch;
    schedule.saturday.snack2 = snack2;
    schedule.saturday.dinner = dinner;
    console.log("Saturday Uploaded")
    breakfast = document.getElementById("subreakfast").value;
    snack1 = document.getElementById("susnack1").value;
    lunch = document.getElementById("sulunch").value;
    snack2 = document.getElementById("susnack2").value;
    dinner = document.getElementById("sudinner").value;
    schedule.sunday.breakfast = breakfast;
    schedule.sunday.snack1 = snack1;
    schedule.sunday.lunch = lunch;
    schedule.sunday.snack2 = snack2;
    schedule.sunday.dinner = dinner;
    console.log("Sunday Uploaded")
    console.log("End of Uploading Data")
    console.log("Creating Meal Plan")
    createMealPlan();
    console.log("Finished Creating Meal Plan")
}
else {
    alert("Email is Required or written wrong");
}
})

document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("mbreakfast").value = "";
    document.getElementById("msnack1").value = "";
    document.getElementById("mlunch").value = "";
    document.getElementById("msnack2").value = "";
    document.getElementById("mdinner").value = "";
    document.getElementById("tbreakfast").value = "";
    document.getElementById("tsnack1").value = "";
    document.getElementById("tlunch").value = "";
    document.getElementById("tsnack2").value = "";
    document.getElementById("tdinner").value = "";
    document.getElementById("wbreakfast").value = "";
    document.getElementById("wsnack1").value = "";
    document.getElementById("wlunch").value = "";
    document.getElementById("wsnack2").value = "";
    document.getElementById("wdinner").value = "";
    document.getElementById("thbreakfast").value = "";
    document.getElementById("thsnack1").value = "";
    document.getElementById("thlunch").value = "";
    document.getElementById("thsnack2").value = "";
    document.getElementById("thdinner").value = "";
    document.getElementById("fbreakfast").value = "";
    document.getElementById("fsnack1").value = "";
    document.getElementById("flunch").value = "";
    document.getElementById("fsnack2").value = "";
    document.getElementById("fdinner").value = "";
    document.getElementById("sabreakfast").value = "";
    document.getElementById("sasnack1").value = "";
    document.getElementById("salunch").value = "";
    document.getElementById("sasnack2").value = "";
    document.getElementById("sadinner").value = "";
    document.getElementById("subreakfast").value = "";
    document.getElementById("susnack1").value = "";
    document.getElementById("sulunch").value = "";
    document.getElementById("susnack2").value = "";
    document.getElementById("sudinner").value = "";
    console.log(schedule)
})

function createMealPlan() {
    var mealPlan = open('about:blank','MealPlan','height=5000,width=700');
    mealPlan.document.write(`<head>
        <title>Meal Plan</title>
        <script src="projectJS.js" defer></script>
        <link rel="stylesheet" href="projectCSS2.css">
    </head>
    <body
    </body>`)
    mealPlan.document.body.innerHTML =`
    <div class="banner">
        <img src="banner.jpg">
    </div>
    <div class="center">
        <h3>${names}<h3>
        <h3>${phone}<h3>
        <h3>${email}<h3>
        <h3>Goal of the Week<h3>
        <h4>${goal}</h4>
    </div>
    <div class="seperate">
    <table class="calender">
        <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thrusday</th>
            <th>Friday</th>
            <th>Saturday</th>
        </tr>
        <tr>
            <th>Breakfast</th>
            <td>${schedule.sunday.breakfast}</td>
            <td>${schedule.monday.breakfast}</td>
            <td>${schedule.tuesday.breakfast}</td>
            <td>${schedule.wednesday.breakfast}</td>
            <td>${schedule.thrusday.breakfast}</td>
            <td>${schedule.friday.breakfast}</td>
            <td>${schedule.monday.breakfast}</td>
        </tr>
        <tr>
            <th>Snack 1</th>
            <td>${schedule.sunday.snack1}</td>
            <td>${schedule.monday.snack1}</td>
            <td>${schedule.tuesday.snack1}</td>
            <td>${schedule.wednesday.snack1}</td>
            <td>${schedule.thrusday.snack1}</td>
            <td>${schedule.friday.snack1}</td>
            <td>${schedule.sunday.snack1}</td>
        </tr>
        <tr>
            <th>Lunch</th>
            <td>${schedule.sunday.lunch}</td>
            <td>${schedule.monday.lunch}</td>
            <td>${schedule.tuesday.lunch}</td>
            <td>${schedule.wednesday.lunch}</td>
            <td>${schedule.thrusday.lunch}</td>
            <td>${schedule.friday.lunch}</td>
            <td>${schedule.saturday.lunch}</td>
        </tr>
        <tr>
            <th>Snack 2</th>
            <td>${schedule.sunday.snack2}</td>
            <td>${schedule.monday.snack2}</td>
            <td>${schedule.tuesday.snack2}</td>
            <td>${schedule.wednesday.snack2}</td>
            <td>${schedule.thrusday.snack2}</td>
            <td>${schedule.friday.snack2}</td>
            <td>${schedule.saturday.snack2}</td>
        </tr>
        <tr>
            <th>Dinner</th>
            <td>${schedule.sunday.dinner}</td>
            <td>${schedule.monday.dinner}</td>
            <td>${schedule.tuesday.dinner}</td>
            <td>${schedule.wednesday.dinner}</td>
            <td>${schedule.thrusday.dinner}</td>
            <td>${schedule.friday.dinner}</td>
            <td>${schedule.saturday.dinner}</td>
        </tr>
    </table>
    <p>If you want to download the mealplan save it as a PDF on the print screen</p>
    <input type="button" id="download" value="Download/Print" onClick="window.print()">`
}