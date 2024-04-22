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

document.getElementById("upload").addEventListener("click", function(){
    console.log("start")
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
    console.log("end")
})