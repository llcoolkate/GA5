// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch() ;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets)
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
   // Validations 
   let form = document.querySelector("form")
   form.addEventListener("submit", function(event){
      let pilot = document.querySelector("input[name = pilotName]")
      let copilot = document.querySelector("input[name = copilotName]")
      let cargoLevel = document.querySelector("input[name = cargoMass]")
      let fuelLevel = document.querySelector("input[name = fuelLevel]")
     
   //let submitButton = document.getElementById("submitForm")
   //submitButton.addEventListener("click", function(event) {
     // event.preventDefault()
     // let inputFields = Array.for,(document.querySe;ectorAll("input[type=text]"))
});
