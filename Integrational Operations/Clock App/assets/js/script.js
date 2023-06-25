const background=document.querySelector(".background"),author=document.querySelector(".author"),icon=document.querySelector(".icon"),details=document.querySelector(".details"),period=document.querySelector(".period"),expand=document.querySelector(".expand");function getQuote(){axios.get("https://api.quotable.io/random").then(e=>{const t=e.data;document.getElementById("quote").textContent=t.content,null==t.author?author.textContent="Unknown author":author.textContent=t.author}).catch(e=>console.error(e))}function getTime(){let e=new Date,t=e.getHours(),o=e.getMinutes(),n="";n=t>=5&&t<=11?"morning":t>=12&&t<=17?"afternoon":"evening",document.querySelector(".currently__greeting").textContent=`good ${n}`,t>=5&&t<=17?(background.classList.add("day"),icon.src="./assets/desktop/icon-sun.svg",icon.setAttribute("alt","sun icon")):(background.classList.add("night"),icon.src="./assets/desktop/icon-moon.svg",icon.setAttribute("alt","moon icon"),details.style.color="#fff",details.style.background="rgba(0, 0, 0, 0.75)"),o<10&&(o="0"+o),document.querySelector(".time-now").textContent=`${t}:${o}`;let r=1e3*(60-(new Date).getSeconds())+5;setTimeout(getTime,r)}function getTimeZone(){axios.get("https://worldtimeapi.org/api/ip").then(e=>{const t=e.data;document.querySelector(".region").textContent=t.abbreviation,document.getElementById("timezone").textContent=t.timezone,document.getElementById("year-day").textContent=t.day_of_year,document.getElementById("week-day").textContent=t.day_of_week,document.getElementById("week-number").textContent=t.week_number}).catch(e=>console.error(e))}function getLocation(){axios.get("https://freegeoip.app/json/").then(e=>{const t=e.data,o=t.region_name,n=t.country_code;document.querySelector(".currently__location").textContent=`in ${o}, ${n}`}).catch(e=>console.error(e))}function showDetails(){document.querySelector(".top-widgets").classList.toggle("transform"),details.classList.toggle("transform"),"More"===expand.firstChild.nodeValue?expand.firstChild.nodeValue="Less":expand.firstChild.nodeValue="More",document.querySelector(".arrow").classList.toggle("rotate")}getTime(),getQuote(),getTimeZone(),getLocation(),expand.addEventListener("click",showDetails),document.getElementById("refresh").addEventListener("click",getQuote);