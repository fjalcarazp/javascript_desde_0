'use strict'

// https://jsonplaceholder.typicode.com/users

document.querySelector("#button").addEventListener("click", runAjax);

function runAjax(){
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    xhr.addEventListener("load", (data) => {
        let ul = document.querySelector("#list");

        let dataJSON = JSON.parse(data.target.response);

        for (const user of dataJSON) {
            let li = document.createElement("li");
            li.textContent = `${user.id} - ${user.name}`;
            ul.append(li);
        }
    });

    
    xhr.send();
}




