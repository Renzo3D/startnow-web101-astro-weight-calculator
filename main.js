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


var userWeight = document.getElementById('user-weight');
var planetName = document.getElementById('planets');
planets.forEach(function(i){
  var option = document.createElement("option");
  option.text =i[0];
  option.value =i[0];
  planetName.appendChild(option);
  console.log(option);

})

function calculateWeight(weight, planetName) {
    for(i = 0; i < planets.length; i++){
        if(planets[i][0]==planetName){
            var planetWeight = planets[i][1];
        }
     
    }  
    return (weight* planetWeight);
}

function handleClickEvent() { 
    var userWeight = $('#user-weight').val();
    var planetName = $('#planets').val();

    var result = calculateWeight(userWeight, planetName);

   console.log(result);
  $('#output').text('If you were on ' + planetName + ', you would weigh ' + result + 'lbs!');
 }  
$('#calculate-button').click(handleClickEvent);
