

// //call the id in html function
// let saveEl = document.getElementById("save-el");
// let countSum = document.getElementById("count");
// console.log()

// let count=0

// // create a function for button to increment
// function increment(){
// count = count + 1
// // count += 1
// countSum.textContent= count

// }


// function save(){
//     // Create a variable that contains both the count and the dash separator, i.e. "12 - "
//        let countstr = count + " - ";

//      //  Render the variable in the saveEl using innerText
//     //saveEl.textContent =  saveEl.textContent + countstr
//     saveEl.textContent += countstr;
//     countSum.textContent= 0;
//     count = 0;

//  }
let saveEl = document.getElementById("save-el");
let countSum = document.getElementById("count");
 let count = 0;

 function increment(){
  count = count + 1;
  countSum.textContent = count;
}

function save(){
    let countstr = count + " - ";
    saveEl.textContent = saveEl.textContent + countstr;
    countSum.textContent = 0;
    count = 0;
}
