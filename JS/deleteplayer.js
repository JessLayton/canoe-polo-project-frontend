"use strict"

let gamePlayerArray = axios.get("https://3.8.145.6/canoe-polo-app/teamPlayers/getAllPlayers")
	.then(response => { console.log(response.data); return response.data });



function deletePlayer() {
	let playerSelectionList = document.getElementById("playerList");

	gamePlayerArray.then(data => {
		
		for (let teamPlayer of playerSelectionList.options) {
			if (teamPlayer.selected) {
				axios.delete("https://3.8.145.6/canoe-polo-app/teamPlayers/deletePlayer/" + teamPlayer.value)
					.then(function (response) {
						console.log(response);
						location.reload();
					})
					.catch(function (error) {
						console.log(error);
						alert("Cannot delete player used in gameplan")
					});
			}
		}
	});
}

