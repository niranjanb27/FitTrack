
let button = document.getElementById('bmi');
button.addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'You are Under Weight. <br>Your BMI is : ' + bmi;
            result.style.color = 'orange'; // Underweight
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'You are Normal. <br>Your BMI is : ' + bmi;
            result.style.color = 'green'; // Healthy
        } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML = 'You are Over Weight. <br>Your BMI is :' + bmi;
            result.style.color = 'darkorange'; // Overweight
        } else {
            result.innerHTML = 'You are Obese. <br>Your BMI is :' + bmi;
            result.style.color = 'red'; // Obese
        }
    } else {
        alert('error occurred');
        result.innerHTML = '';
        result.style.color = 'black';
    }
});

let but=document.getElementById('diet');
but.addEventListener('click',()=>{
    const height=parseFloat(document.getElementById('height').value);
    const weight=parseFloat(document.getElementById('weight').value);
    const result=document.getElementById('out');
    let height_status=false,weight_status=false;

    if(height ==='' || isNaN(height) || (height <=0)){
        document.getElementById('height_error').innerHTML = 'please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML='';
        height_status=true;
        }

        if(weight ==='' || isNaN(weight) || (weight <=0)){
        document.getElementById('weight_error').innerHTML = 'please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML='';
        weight_status=true;
        }

    if(height_status && weight_status){
        const bmi=(weight/((height*height)/10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `
              <strong></strong><br><br>
              1️⃣ <strong>Carbohydrates:</strong> Whole grains like oats, quinoa, brown rice, and whole wheat bread provide energy and fiber.<br>
              2️⃣ <strong>Proteins:</strong> Lean sources such as chicken breast, turkey, fish, tofu, beans, and lentils help build and repair tissues.<br>
              3️⃣ <strong>Fats:</strong> Healthy fats from avocados, nuts, seeds, and olive oil can boost calorie intake.<br>
              4️⃣ <strong>Fruits and Vegetables:</strong> Aim for a variety of colorful fruits and vegetables to provide essential vitamins and antioxidants.
            `;
            result.style.color = 'orange';
          } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `
              <strong></strong><br><br>
              1️⃣ <strong>Carbohydrates:</strong> Whole grains, fruits, and vegetables for fiber and nutrients.<br>
              2️⃣ <strong>Proteins:</strong> Lean meats, poultry, fish, eggs, legumes, tofu, and dairy.<br>
              3️⃣ <strong>Fats:</strong> Avocados, nuts, seeds, and olive oil for heart-healthy fats.<br>
              4️⃣ <strong>Fruits and Vegetables:</strong> A colorful mix to maximize nutrition and support overall health.
            `;
            result.style.color = 'green';
          } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML = `
              <strong>Recommended Diet for Overweight (BMI 25 - 29.9):</strong><br><br>
              1️⃣ <strong>Carbohydrates:</strong> Limit refined carbs and emphasize whole grains and veggies.<br>
              2️⃣ <strong>Proteins:</strong> Lean sources like chicken, fish, and plant proteins to preserve muscle.<br>
              3️⃣ <strong>Fats:</strong> Healthy fats in moderation — watch portions.<br>
              4️⃣ <strong>Fruits and Vegetables:</strong> Focus on non-starchy veggies and use fruits as snacks.
            `;
            result.style.color = 'darkorange';
          } else {
            result.innerHTML = `
              <strong></strong><br><br>
              1️⃣ <strong>Carbohydrates:</strong> Opt for complex carbs and high-fiber foods to manage appetite.<br>
              2️⃣ <strong>Proteins:</strong> Use lean and plant-based proteins to reduce saturated fat intake.<br>
              3️⃣ <strong>Fats:</strong> Minimize saturated/trans fats and prioritize unsaturated options.<br>
              4️⃣ <strong>Dairy:</strong> Choose low-fat or non-fat dairy and keep portion sizes in check.
            `;
            result.style.color = 'red';
          }
          
    }else{
        alert('error occured');
        result.innerHTML='';
    }    
    
    
});

let butt=document.getElementById('exercise');
butt.addEventListener('click',()=>{
    const height=parseFloat(document.getElementById('height').value);
    const weight=parseFloat(document.getElementById('weight').value);
    const result=document.getElementById('exe');
    let height_status=false,weight_status=false;

    if(height ==='' || isNaN(height) || (height <=0)){
        document.getElementById('height_error').innerHTML = 'please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML='';
        height_status=true;
        }

        if(weight ==='' || isNaN(weight) || (weight <=0)){
        document.getElementById('weight_error').innerHTML = 'please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML='';
        weight_status=true;
        }

    if(height_status && weight_status){
        const bmi=(weight/((height*height)/10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `
              <strong></strong><br><br>
              1️⃣ <strong>Focus on Strength:</strong> Prioritize strength-building exercises using resistance bands, body weight, or light weights to increase muscle mass.<br>
              2️⃣ <strong>Limit Excessive Cardio:</strong> Avoid too much cardiovascular activity that could lead to further calorie loss.<br>
              3️⃣ <strong>Moderate Cardio:</strong> Engage in light cardio like brisk walking or cycling to maintain heart health.<br>
              4️⃣ <strong>Flexibility & Mobility:</strong> Include yoga or Pilates to enhance flexibility and prevent injuries.
            `;
            result.style.color = 'orange';
          } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `
              <strong></strong><br><br>
              1️⃣ <strong>Balanced Routine:</strong> Combine cardio, strength training, and flexibility work.<br>
              2️⃣ <strong>Cardio:</strong> Aim for at least 150 minutes of moderate-intensity cardio weekly — running, swimming, cycling, or dance workouts.<br>
              3️⃣ <strong>Strength Training:</strong> Train all major muscle groups 2–3 times a week with moderate to high intensity.<br>
              4️⃣ <strong>Flexibility:</strong> Add stretching or mobility exercises to prevent injury and improve range of motion.
            `;
            result.style.color = 'green';
          } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML = `
              <strong>Exercise Recommendations for Overweight (BMI 25 - 29.9):</strong><br><br>
              1️⃣ <strong>Cardio Focus:</strong> Incorporate moderate to high-intensity cardio like jogging, brisk walking, or elliptical training (150+ minutes/week).<br>
              2️⃣ <strong>Strength Training:</strong> Perform resistance exercises 2–3 times a week to boost metabolism and build lean muscle.<br>
              3️⃣ <strong>Circuit & Interval Training:</strong> Use HIIT or circuit workouts for efficient calorie burn.<br>
              4️⃣ <strong>Flexibility:</strong> Include stretching or yoga for balance and mobility.
            `;
            result.style.color = 'darkorange';
          } else {
            result.innerHTML = `
              <strong></strong><br><br>
              1️⃣ <strong>Start Gentle:</strong> Begin with low-impact cardio like walking, swimming, or cycling, gradually increasing duration.<br>
              2️⃣ <strong>Strength Training:</strong> Use resistance bands, bodyweight, or light weights to support muscle growth and metabolism.<br>
              3️⃣ <strong>Joint-Friendly:</strong> Choose exercises that reduce stress on joints while enhancing strength.<br>
              4️⃣ <strong>Mobility & Flexibility:</strong> Do regular stretching and mobility drills to ease stiffness and prevent injuries.
            `;
            result.style.color = 'red';
          }
          
    }else{
        alert('error occured');
        result.innerHTML='';
    }    
    
    
});

function changeImage()
{
    var background_image=document.getElementById('bmi');
    background_image.src='peter-conlan-LEgwEaBVGMo-unsplash.jpg';
}
