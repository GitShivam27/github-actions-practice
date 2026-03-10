function openWindow(id){

document.getElementById(id).classList.add("open");

}

function closeWindow(id){

document.getElementById(id).classList.remove("open");

}


const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

if(input){

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let cmd=input.value;

let result="";

if(cmd==="whoami")
result="Shivam Yadav - DevOps Engineer";

else if(cmd==="skills")
result="Linux Docker Kubernetes AWS";

else if(cmd==="projects")
result="CI/CD Pipeline Kubernetes Deployment";

else
result="command not found";


output.innerHTML+=`<div>> ${cmd}</div><div>${result}</div>`;

input.value="";

}

});

}function openWindow(id){

document.getElementById(id).classList.add("open");

}

function closeWindow(id){

document.getElementById(id).classList.remove("open");

}


const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

if(input){

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let cmd=input.value;

let result="";

if(cmd==="whoami")
result="Shivam Yadav - DevOps Engineer";

else if(cmd==="skills")
result="Linux Docker Kubernetes AWS";

else if(cmd==="projects")
result="CI/CD Pipeline Kubernetes Deployment";

else
result="command not found";


output.innerHTML+=`<div>> ${cmd}</div><div>${result}</div>`;

input.value="";

}

});

}
