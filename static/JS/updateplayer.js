"use strict"

let playerToUpdate = document.getElementById("updatePlayerList");

function updatePlayer() {
	
	let updatedFirstName = document.getElementById("InputUpdatedFirstName").value;
	let updatedSurname = document.getElementById("InputUpdatedSurname").value;
	let data = { "firstName": updatedFirstName, "surname": updatedSurname };
    console.log(data);
    
    for (let teamPlayer of playerToUpdate) {
    	console.log(teamPlayer.value);

    			if (teamPlayer.selected) {
			
			axios.put("https://3.8.145.6/canoe-polo-app/teamPlayers/updatePlayer/" + teamPlayer.value, data)
				.then(function (response) {
					console.log(response);
				});
		}
    }
}
   
