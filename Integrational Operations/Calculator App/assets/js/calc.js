let buffer=["0"];document.body.addEventListener("change",function(e){let t=e.target;switch(wrapperElement=document.body.querySelector(".container"),t.id){case"first_toggle":console.log("first"),wrapperElement.setAttribute("data-theme","one");break;case"second_toggle":console.log("second"),wrapperElement.setAttribute("data-theme","two");break;case"third_toggle":console.log("third"),wrapperElement.setAttribute("data-theme","three")}}),document.body.addEventListener("click",e=>{let target=e.target;e.target.id&&(key=document.querySelector(`#${e.target.id}`).textContent);let last=buffer[buffer.length-1],displayElement=document.querySelector(".display");switch(target.id){case"btns-9":case"btns-8":case"btns-7":case"btns-6":case"btns-5":case"btns-4":case"btns-3":case"btns-2":case"btns-1":case"btns-0":"0"==buffer[0]&&1==buffer.length?(buffer.pop(),buffer.push(key)):0==isNaN(last)?(num=buffer.pop(),"0"===num?buffer.push(key):buffer.push(num+key)):buffer.push(key);break;case"btns-dot":if("*"!==last&&"/"!==last&&"+"!==last&&"-"!==last||buffer.pop(),last=buffer[buffer.length-1],last&&-1!==last.indexOf("."))break;num=buffer.pop(),buffer.push(num+".");break;case"btns-divide":"*"!==last&&"/"!==last&&"+"!==last&&"-"!==last||buffer.pop(),buffer.push("/");break;case"btns-plus":"*"!==last&&"/"!==last&&"+"!==last&&"-"!==last||buffer.pop(),buffer.push("+");break;case"btns-minus":"*"!==last&&"/"!==last&&"+"!==last&&"-"!==last||buffer.pop(),buffer.push("-");break;case"btns-multiply":"*"!==last&&"/"!==last&&"+"!==last&&"-"!==last||buffer.pop(),buffer.push("*");break;case"btns-del":buffer.length>1?buffer.pop():buffer=["0"];break;case"btns-reset":buffer=["0"];break;case"btns-equal":let combine=buffer.join("");try{return result=eval(combine).toString(),buffer=[result],displayResult=result.replace(/\B(?=(\d{3})+(?!\d))/g,","),void(displayElement.textContent=displayResult)}catch(e){buffer=["0"]}}replaceMultiplyString=buffer.join("").replace(/\*/g,"x"),console.log(buffer),displayElement.textContent=replaceMultiplyString});