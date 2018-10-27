function saveUnit(){
//INITIALIZE POSITION IN DOCUMENTSAS VAR
var initialWeight = document.getElementById("initialWeight").value
var inputUnit = document.getElementById("inputUnit").value
var outputUnit = document.getElementById("outputUnit").value
var convertedWeight = document.getElementById("convertedWeight")


// TO REPLACE FORM BIAR DIA GA REFRESH PAGE-NYA && UNIT YANG DIPILIH
    const unit = ["KM", "HM", "DAM", "M", "DM", "CM", "MM"]
    
    var startUnit = inputUnit
    document.getElementById("inputUnit").value = startUnit

    var chosenUnit = outputUnit
    document.getElementById("outputUnit").value = chosenUnit
    
    var iStartUnit = unit.indexOf(startUnit)
    var iChosenUnit = unit.indexOf(chosenUnit)
    var count0 = iChosenUnit - iStartUnit

    if(isNaN(Number(initialWeight))){
        convertedWeight.innerHTML = "Output Weight:"
        convertedWeight.innerHTML += " ERROR"
    }
    else{
        convertedWeight.innerHTML = "Output Weight:"
        convertedWeight.innerHTML += " " + convert(count0,initialWeight) + " " + chosenUnit 
    }
}

function convert(counter, weight){
    var multiplier = "1"
    if(counter > 0){
        for(var i = 0 ; i < counter ; i++){
            multiplier += "0"
        }
        return formatCommas(weight * Number(multiplier))
    }
    else if(counter === 0){
        return weight
    }
    else if(counter < 0){
        counter *= -1
        for(var i = 0 ; i < counter ; i++){
            multiplier += "0"
        }
        return parseFloat(weight / Number(multiplier))
    }
}

function formatCommas(number) {
    //code here
    var first = String(number)
    var digits = first.split('').reverse()
    var new_digits = []
  
    for(var i = 0; i < digits.length; i++) {
      if( (i+1) % 3 === 0 && (i+1) !== digits.length) {
        new_digits.push(digits[i]);
        new_digits.push(',');
      }
      else {
        new_digits.push(digits[i]);
      }
    }
    var res = new_digits.reverse().join("");
    return res;
  }
  
// CHANGE ALL UNIT INTO DESIRED TYPE

// function changeUnit(){
//     var chosenUnit = document.getElementById("unitType").value
    
//     if(chosenUnit === "Area"){

//     }
// }