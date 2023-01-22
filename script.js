const result = [];
const total = [];

// throw coins 3x
function getThrowResult(min, max) {
  const throw_result = [];
  // throw 3 coins
  for (let i = 0; i < 3; i++) {
    let mince = Math.round(Math.random() * (max - min) + min);
    throw_result.push(mince);
    }

  // remove displayed mince if exist
  if (document.getElementById("displayed_coin")) {
    let rem_node = document.getElementById("mince");
    while (rem_node.firstChild) {
      rem_node.removeChild(rem_node.firstChild);
    }     
  }

  // display coins
  const mince_container = document.createElement("div");
  mince_container.id = "mince";

  for (const i of throw_result) {     
    const element = document.getElementById("throw_result"); 
    element.appendChild(mince_container);
    if (i === 2) {
      let img = document.createElement("img");
      img.src = "img/mince2.png";
      img.id = "displayed_coin";;
      let src = document.getElementById("mince");
      src.appendChild(img);
    } else if (i === 3) {
       let img = document.createElement("img");
       img.src = "img/mince3.png";
       img.id = "displayed_coin";
       let src = document.getElementById("mince");
       src.appendChild(img);
    }
  }
  // count coins and add it to array
  let coin_sum = throw_result.reduce((a, b) => a + b, 0);
  total.push(coin_sum);

  // create div element for results of throws
  const cara_container = document.createElement("div");
  cara_container.id = "display_container";
  // create element to get next img on next line
  const element2 = document.getElementById("display_result"); 
  element2.appendChild(cara_container);
  element2.id = "display_result";

  if (coin_sum === 6){
    displayResult(coin_sum);
  } else if (coin_sum === 7) {
    displayResult(coin_sum);
  } else if (coin_sum === 8) {
    displayResult(coin_sum);
  } else if (coin_sum === 9) {
    displayResult(coin_sum);
  }


  // end after 6 throws
  if (total.length === 6) {
     //find transitions
    find_transition()
    // clear settings
    document.getElementById("throw").disabled = true;
    throw_result.length = 0;
  }
}

// start new oraculum
function again() {
  result.length = 0;
  total.length = 0;
  document.getElementById("throw").disabled = false;
  removeDisplayedCoins();
  removeDisplayedResults();
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

function displayResult(coin_sum) {
    coin_sum.toString(coin_sum);
    let img = document.createElement("img");
    img.src = "img/" + coin_sum + ".png";
    img.id = "display_container";
    let src = document.getElementById("display_result");
    src.appendChild(img); 
}

function find_transition() {
  for (const i of total) {
    if (i === 6) {
      console.log(i);
    } else if (i === 9){ 
      console.log(i);
    }
  }
}
  

// šestka se změní v sedmičku, devítka se změní v osmičku