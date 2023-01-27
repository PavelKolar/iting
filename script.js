const result = [];
const total = [];
const total_trans = [];
var throw_count = 6;


function getThrowResult(min, max) {
   // remove displayed mince if exist
   if (document.getElementById("displayed_coin")) {
    let rem_node = document.getElementById("mince");
    while (rem_node.firstChild) {
      rem_node.removeChild(rem_node.firstChild);
    }     
  }
  
  // throw 3 coins
  const throw_result = [];
  for (let i = 0; i < 3; i++) {
    let mince = Math.round(Math.random() * (max - min) + min);
    throw_result.push(mince);
    }
  // change text info   
  throw_count-=1;
  if (throw_count===0) {
    document.getElementById("throw_count").innerHTML = "Hotovo.";
    document.getElementById("throw_count_again").innerHTML = "Znovu?";
  } else {
  document.getElementById("throw_count").innerHTML = "Vhoď mincemi ještě  "+throw_count+" krát.";
  }

  // display coins
  for (const i of throw_result) {     
    const element = document.getElementById("throw_result"); 
    element.appendChild(document.getElementById("mince"));
    if (i === 2) {
      let img = document.createElement("img");
      img.src = "img/mince2.png";
      img.id = "displayed_coin";
      img.className = "displayed_coin";
      let src = document.getElementById("mince");
      src.appendChild(img);
    } else if (i === 3) {
       let img = document.createElement("img");
       img.src = "img/mince3.png";
       img.id = "displayed_coin";
       img.className = "displayed_coin";
       let src = document.getElementById("mince");
       src.appendChild(img);
    }
  }
  // count coins and add it to array
  let coin_sum = throw_result.reduce((a, b) => a + b, 0);
  total.push(coin_sum);
  
  ////////////// end of coins //////////////

  // display results
  show_result(coin_sum)

  // end after 6 throws
  if (total.length === 6) {
     //find transitions
    find_transition()
    // clear settings
    document.getElementById("throw").disabled = true;
    throw_result.length = 0;
  }
  // change button text after throw
}


function displayResult(coin_sum) {
    coin_sum.toString(coin_sum);
    let img = document.createElement("img");
    img.src = "img/" + coin_sum + ".png";
    img.id = "display_container";
    img.className = "displayed_result_image";
    let src = document.getElementById("display_result");
    src.appendChild(img); 
}

function find_transition() {
  let i = 0;
  while (i < total.length) {
      if (total[i]===7 || total[i]===8) {
      total_trans.push(total[i]);
    } else if (total[i] === 6) {
      total_trans.push(9);
    } else if (total[i] === 9 ) {
      total_trans.push(6);
    }
    i++;
   }
   console.log(total_trans);
   console.log(total);
   if (total_trans.toString()==total.toString()) {
    console.log("true");
   } else {
    console.log("false");
    show_transition_result();
   }
   // if there is a transition show it
}
  
function show_result(coin_sum) {  
  if (coin_sum === 6){
    displayResult(coin_sum);
  } else if (coin_sum === 7) {
    displayResult(coin_sum);
  } else if (coin_sum === 8) {
    displayResult(coin_sum);
  } else if (coin_sum === 9) {
    displayResult(coin_sum);
  }
}

function show_transition_result() {
  let i = 0;
  while (i < total_trans.length) {
    if (total_trans[i] === 6) {
      console.log("sestka");
    } else if (total_trans[i] === 7) {
      console.log("sedmicka");
    } else if (total_trans[i] === 8) {
      console.log("osmicka");
    } else if (total_trans[i] === 9) {
      console.log("devitka");
    } 
    i++;   
  }
}
// start again
function again() {
  result.length = 0;
  total.length = 0;
  document.getElementById("throw").disabled = false;
  removeDisplayedCoins();
  removeDisplayedResults();
  location.reload(); 
}

// remove displayed coins
function removeDisplayedCoins() {
  let rem_node = document.getElementById("mince");
  while (rem_node.firstChild) {
    rem_node.removeChild(rem_node.firstChild);
  }     
}

function removeDisplayedResults() {
  let rem_node = document.getElementById("display_result")
  while (rem_node.firstChild) {
    rem_node.removeChild(rem_node.firstChild);
  }
}


// šestka se změní v sedmičku, devítka se změní v osmičku