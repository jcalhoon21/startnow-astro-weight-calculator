// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

// CALCULATE BUTTON //
var button = document.getElementById("calculateButton");
button.onclick = handleClickEvent;


// FIND NAME OF PLANET //
planets.forEach(function pairFunction(pair) {
    $("#planets").append("<option>" + pair[0] + "</option>");
})

// FIND WEIGHT OF PLANET //

/**
 * 
 * @param {number} userWeight 
 * @param {string} selectedPlanetName 
 */
function calculateWeight(userWeight, selectedPlanetName) { // passing through userWeight and selectedPlanetName
  // 2. Write the code to return the correct weight
  
  
  for (var index = 0; index < planets.length; index++) {    
    
    var pair = planets[index]; // first array in the array named planets

    var name = planets[index][0]; // pair[0] ... looping through the first array and position 0 of that array ... planets[index] is var pair!
    var weight = planets[index][1]; // pair[1] ... looping through the first array and position 1 of that array

        if(selectedPlanetName === name){   // find the selectedPlanetName and see if it equals the looped through item
            
            var planetWeight = weight; // 
         
        }
  }

  return userWeight * planetWeight;

}

function handleClickEvent(){
// 3. Create a variable called userWeight and assign the value of the user's weight.

    var userWeight = $("#userWeight").val();

// 4. Create a variable called planetName and assign the name of the selected planet from the drop down.

    var planetName = $("#planets option:selected").text();

// 5. Create a variable called result and assign the value of the new calculated weight.

    var result = calculateWeight(userWeight, planetName); // in our function calculateWeight, the value of userWeight and the planetName, the return value is userweight * planetweight!

// 6. Write code to display the message shown in the screenshot.

    
    $("#output").text("If you were on " + planetName + ", you would weigh " + result + "lbs!"); // result is what happens in the function of calculateWeight
    

    // document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!";     EITHER WAY WORKS! This is JS, the above is JQUERY!

}


