window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget")
         let planetaryData = json[0]
         div.innerHTML = 
         `<h2>Mission Destination</h2>
           <ol>
              <li>Name: ${planetaryData.name}</li>
              <li>Diameter: ${planetaryData.diameter}</li>
              <li>Star: ${planetaryData.star}</li>
              <li>Distance from Earth: ${planetaryData.distance}</li>
              <li>Number of Moons: ${planetaryData.moons}</li>
           </ol>
           <img src="${planetaryData.image}">`
          
         })
      })
         
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
      faultyItemsElement.style.visibility = "hidden"
      

      

      //form validation
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" ) {
         alert("All fields are required!");
      }

      pilotStatusElement.innerText = `Pilot ${pilotName.value} Ready`;
      copilotStatusElement.innerText = `Co-pilot ${copilotName.value} Ready`;

      if (isNaN(fuelLevel.value) === true || (isNaN(cargoMass.value) === true)){
          alert("Fuel level and Cargo Mass must be numbers")
      } else if (isNaN(pilotName.value) === false || (isNaN(copilotName.value) === false)){
         alert("Please use letters for name input")
      } else {

      //business logic
      if (fuelLevel.value < 10000){

         document.getElementById("fuelStatus").innerText = "Fuel level too low for launch";

         launchStatusElement.innerText = "Shuttle not ready for launch";
         launchStatusElement.style.color = "red";
        
         faultyItemsElement.style.visibility = "visible";

        } else {

         document.getElementById("fuelStatus").innerText = "Fuel level high enough for launch";
   
            launchStatusElement.innerText = "Shuttle ready for launch";
            launchStatusElement.style.color = "green";
           
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
         faultyItemsElement.style.visibility = "visible"
      }
     }
   })

})

   

  
   

   

