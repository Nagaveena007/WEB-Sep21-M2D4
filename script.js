 let data

 const add = function() {

     let name = document.getElementById("name")
     let nameList = name.value 
     listOfNames(nameList)
 }

    const listOfNames = function(name) {
        let listOfNames = document.getElementById("listOfNames")  
       let listItem = document.createElement("li") 
       listItem.innerText = name
       listOfNames.appendChild(listItem)
    }

 
/*
const add = function() {
    document.getElementById("listOfNames").innerHTML=document.name.name1.name2;

}*/
