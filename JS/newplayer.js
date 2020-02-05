"use strict"

function createPlayer() {
    let firstName = document.getElementById("InputFirstName").value;
    let surname = document.getElementById("InputSurname").value;
    const newPlayerUrl = '/canoe-polo-app/teamPlayers/addPlayer';
    let data = { "firstName": firstName, "surname": surname };
    axios.post(newPlayerUrl, data)
        .then((response) => {
            debugger;
            console.log(response);
            alert("Player Added");
            
        })

        .catch(error => {
            console.log(error);
            alert("Player Not Added");
            debugger;
            
        });

}

function populateSelect(elementToPopulate) {
    
    axios.get('/canoe-polo-app/teamPlayers/getAllPlayers')
        .then((response) => {
            addToScreen(response.data, elementToPopulate);
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

}

function addToScreen(item, elementToPopulate) {
    for (let x of item) {
    	
        let option = document.createElement("option");
        let select = document.getElementById(elementToPopulate);
        option.innerText = (x.firstName + " " + x.surname);
        option.value = x.id;
        option.id = x.id;
        console.log(x.id);
        select.appendChild(option);
    }

}

