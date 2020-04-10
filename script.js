// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

const planetaryData = [
   {
      "name": "Tatooine",
      "diameter": "10465 km",
      "star": "Tatoo I & Tatoo II",
      "distance": "43000 light years from galactic core",
      "image": "https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg",
      "moons": 3
   },
   {
       "name": "Pern",
       "diameter": "measurement is under dispute",
       "star": "Alpha Sagittarius (a.k.a. Rukbat)",
       "distance": "Varies - find a library",
       "image": "https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg",
       "moons": 2
   },
   {
       "name": "Saturn/Titan",
       "diameter": "5149.5 km",
       "star": "Sol",
       "distance": "1.4 billion km from Earth",
       "image": "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg",
       "moons": 0
   },
   {
       "name": "Mars",
       "diameter": "6779 km",
       "star": "Sol",
       "distance": "225 million km from Earth",
       "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
       "moons": 2
   },
   {
       "name": "K2-18b",
       "diameter": "34500 km",
       "star": "K2-18",
       "distance": "110 light years from Earth",
       "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg",
       "moons": "unknown"
   },
   {
       "name": "Jupiter/Europa",
       "diameter": "3,121.6 km",
       "star": "Sol",
       "distance": "628.3 million km from Earth",
       "image": "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
       "moons": 0
   }
];

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault()
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      //faultyitems
      let faultyItemsElement = document.getElementById("faultyItems");
      let pilotStatusElement = document.getElementById("pilotStatus");
      let copilotStatusElement = document.getElementById("copilotStatus");
      let launchStatusElement = document.getElementById("launchStatus");
      

      

      //form validation
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" ) {
         alert("All fields are required!");
      }

      pilotStatusElement.innerText = `Pilot ${pilotName.value} Ready`;
      copilotStatusElement.innerText = `Co-pilot ${copilotName.value} Ready`;

      if (isNaN(fuelLevel.value) === true || (isNaN(cargoMass.value) === true)){
          alert("Fuel level and Cargo Mass must be numbers")
      }
      if (isNaN(pilotName.value) === false || (isNaN(copilotName.value) === false)){
         alert("Please use letters for name input")
      }

      //business logic
      if (fuelLevel.value < 10000){

         document.getElementById("fuelStatus").innerText = "Fuel level high enough for launch";

         launchStatusElement.innerText = "Shuttle not ready for launch";
         launchStatusElement.style.color = "red";
        
         faultyItemsElement.style.visibility = "visible";
             
      }

      if (cargoMass.value > 10000){
         document.getElementById("cargoStatus").innerText = "too much mass for the shuttle to take off"

         launchStatusElement.innerText = "Shuttle not ready for launch";
         launchStatusElement.style.color = "red";

         faultyItemsElement.style.visibility = "visible"
      }
//valid form submission

if (fuelLevel.value >= 10000 && cargoMass.value <= 10000){
   launchStatusElement.innerText = "Ready for Launch!!" 
   launchStatusElement.style.color = "green";


document.getElementById("missionTarget").innerHTML = 
    `<h2>Mission Destination</h2>
     <ol>
        <li>Name: ${planetaryData[0].name}</li>
        <li>Diameter: ${planetaryData[0].diameter}</li>
        <li>Star: ${planetaryData[0].star}</li>
        <li>Distance from Earth: ${planetaryData[0].distance}</li>
        <li>Number of Moons: ${planetaryData[0].moons}</li>
     </ol>
     <img src="${planetaryData[0].image}">`;
}

            
   });
});







