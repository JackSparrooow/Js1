//functinon
//get value
//calculate
//output


// bmi formula weight / height squared * 703

function calculateBmi(){
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  const bmi = (weight / (height * height) * 703)

  document.getElementById('heading').innerHTML ="Your BMI is :"
  document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)


  if (bmi <= 24.9) {
    document.getElementById('message').innerHTML = "You are underweight"
    
  }else if(bmi >= 25 && bmi <= 29.9){
    document.getElementById('message').innerHTML = "You are a healthy weight"

  }else{
    document.getElementById('message').innerHTML = "You are overweight"

  }
}


function reload(){
  window.location.reload()
}