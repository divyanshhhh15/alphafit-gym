/*==============================
PREMIUM BMI CALCULATOR
==============================*/

const btn = document.getElementById("calculateBMI");

btn.addEventListener("click", () => {

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        alert("Please enter height and weight");
        return;
    }

    // BMI calculation
    let bmi = (weight / ((height / 100) ** 2));
    bmi = bmi.toFixed(1);

    // BODY TYPE LOGIC
    let bodyType = "";
    let advice = "";
    let plan = "";

    if (bmi < 18.5) {
        bodyType = "Underweight";
        advice = "You need calorie surplus + strength training.";
        plan = "Mass Gain Plan";
    } 
    else if (bmi < 24.9) {
        bodyType = "Normal";
        advice = "Perfect balance. Maintain your lifestyle.";
        plan = "Maintenance Plan";
    } 
    else if (bmi < 29.9) {
        bodyType = "Overweight";
        advice = "Focus on fat loss + cardio training.";
        plan = "Fat Loss Plan";
    } 
    else {
        bodyType = "Obese";
        advice = "Start structured fat loss program immediately.";
        plan = "Transformation Plan";
    }

    // UPDATE UI
    document.getElementById("bmiValue").innerText = bmi;
    document.getElementById("bmiStatus").innerText = bodyType;
    document.getElementById("bmiStatus2").innerText = bodyType;
    document.getElementById("bmiAdvice").innerText = advice;
    document.getElementById("planText").innerText = plan;

});

/*==============================
SVG RING
==============================*/

function updateRing(bmi){

    const ring=document.getElementById("progressRing");

    if(!ring) return;

    const radius=90;

    const circumference=2*Math.PI*radius;

    ring.style.strokeDasharray=circumference;

    ring.style.strokeLinecap="round";

    let percent=Math.min(bmi,40)/40;

    const offset=circumference-(percent*circumference);

    ring.style.strokeDashoffset=offset;

    if(bmi<18.5){

        ring.style.stroke="#4da3ff";

    }

    else if(bmi<25){

        ring.style.stroke="#f7b500";

    }

    else if(bmi<30){

        ring.style.stroke="#ff8c00";

    }

    else{

        ring.style.stroke="#ff3d3d";

    }

}