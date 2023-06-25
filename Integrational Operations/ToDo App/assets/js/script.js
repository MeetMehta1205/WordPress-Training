const itemCount=document.querySelector(".count span"),mobCount=document.querySelector(".mob-count span");itemCount.innerText=document.querySelectorAll(".list").length,mobCount.innerText=document.querySelectorAll(".list").length;const themeIcon=document.querySelector(".theme");themeIcon.addEventListener("click",()=>{document.body.classList.toggle("light"),document.body.classList.contains("light")?themeIcon.src="assets/images/icon-moon.svg":themeIcon.src="assets/images/icon-sun.svg"});const addButton=document.querySelector(".todo-input button"),itemInput=document.getElementById("todo-input"),todo=document.querySelector(".todos ul"),itemID=document.querySelector('.filters input[type="radio"]:checked');function addItems(e){const t=document.createElement("li");t.innerHTML=`\n    <label class="list">\n        <input class="checkbox" type="checkbox"> \n        <span class="text">${e}</span>\n    </label>\n    <span class="remove"></span>\n    `,"completed"===itemID.id&&t.classList.add("hidden"),todo.append(t),updateCount(1)}function updateCount(e){itemCount.innerText=+itemCount.innerText+e}function removeItems(e){e.remove(),updateCount(-1)}function filterTodo(e){const t=document.querySelectorAll("li");switch(e){case"all":t.forEach(e=>{e.classList.remove("hidden")});break;case"active":t.forEach(e=>{e.querySelector("input").checked?e.classList.add("hidden"):e.classList.remove("hidden")});break;default:t.forEach(e=>{e.querySelector("input").checked?e.classList.remove("hidden"):e.classList.add("hidden")})}}addButton.addEventListener("click",()=>{itemInput.value.length>0&&(addItems(itemInput.value),itemInput.value="")}),itemInput.addEventListener("keypress",e=>{13===e.charCode&&itemInput.value.length>0&&(addItems(itemInput.value),itemInput.value="")}),todo.addEventListener("click",e=>{e.target.classList.contains("remove")&&removeItems(e.target.parentElement)}),document.querySelectorAll(".filters input").forEach(e=>{e.addEventListener("change",e=>{filterTodo(e.target.id)})});const clear=document.querySelector(".clear"),mobClear=document.querySelector(".mob-clear");clear.addEventListener("click",()=>{document.querySelectorAll('.list input[type="checkbox"]:checked').forEach(e=>{removeItems(e.closest("li"))})}),mobClear.addEventListener("click",()=>{document.querySelectorAll('.list input[type="checkbox"]:checked').forEach(e=>{removeItems(e.closest("li"))})}),$("input").focus(function(){$(this).attr("placeholder","Currently typing...")}).blur(function(){$(this).attr("placeholder","Create a new todo...")}),Sortable.create(simpleList);