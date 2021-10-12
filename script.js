 let data
 const add = function() {
     let name = document.getElementById("name")
     let nameList = name.value 
     listOfNames(nameList)
 }

    const listOfNames = function(name) {
        let listOfNames = document.getElementById("listOfNames")  
       let listItem = document.createElement("li") 
       listItem.classList.add("list-group-item") 
       listItem.innerText = name
       listOfNames.appendChild(listItem)
    }





 function createTeams(){
    let numberOfTeams=document.getElementById("teams")
    let teamN = numberOfTeams.value
    listOfNumbers(teamN)
 }

 const listOfNumbers=function(number){
    let teamsRow=document.getElementById("teams-row")

    for(let i=0;i<number.value;i++){
       teamsRow.innerHTML+=`
   <div class="col-3">
      <h4>Team${i+1}</h4>
       <ul class="list-group-item">
        </ul>
     </div>
   `
    }
 }

 window.onload=function(){
    createTeams()
     }