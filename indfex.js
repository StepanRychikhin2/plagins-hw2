const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const btn = document.querySelector(".btn");
// let min = 60;
// let sec = 0;
// const timerInterval = setInterval(() => {
    

//     sec--;
   
//     if (sec < 0) {
//       min--;
//       sec = 59;
//     }
//     text1.textContent = `00 hor ${min}  min :${sec} sec`;

//     if (min === 30 && sec === 0) {
//       alert("ОСталось 30 хв")
//     }
  

//     if (min === 0 && sec === 0) {
//       clearInterval(timerInterval);
//       alert("час вишов")
//     }
    
   
//   }, 1000);


let secTwo = 15;
function sturt() {
    

if (secTwo <= 15) {
   
    let timerId = setInterval(function() {
        secTwo --;
      
         if (secTwo == 10) {
         
          text2.textContent = ` ${secTwo} sec`;
          text2.classList.add("textRun")
         } else {
          text2.textContent = ` ${secTwo} sec`;
         }
        
        
         if (secTwo === 0) {
            clearInterval(timerId)
            btn.classList.remove("btn")
            }
          console.log(secTwo);
          
          }, 1000);
}
}

  btn.addEventListener("click", num)

function num() {
    let dd = secTwo = 15;
    text2.textContent = ` ${secTwo} sec`;
    btn.classList.add("btn")
    console.log(secTwo);
    sturt()
}
sturt()