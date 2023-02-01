const result = []; // result of one throw
const total = []; // results of 6 throws (full)
const total_new = []; // twisted results (6=8, 7=8)
const total_trans = []; // transformed results ()
var throw_count = 6; // numbers of throws

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
  // change throws count
  throw_count-=1;
  if (throw_count===0) {
    document.getElementById("throw_count").innerHTML = "Done. ";
    document.getElementById("throw_count_again").innerHTML = "Again?";
  } else {
  document.getElementById("throw_count").innerHTML = "Flip coins  "+throw_count+" more times.";
  }
  // display coins throws
  for (const i of throw_result) {     
    const element = document.getElementById("throw_result"); 
    element.appendChild(document.getElementById("mince"));
    if (i === 2) {
      let img = document.createElement("img");
      img.src = "img/mince2.gif";
      img.id = "displayed_coin";
      let src = document.getElementById("mince");
      src.appendChild(img);
    } else if (i === 3) {
       let img = document.createElement("img");
       img.src = "img/mince3.gif";
       img.id = "displayed_coin";
       let src = document.getElementById("mince");
       src.appendChild(img);
    }
  }
  // count result and add it to array
  let coin_sum = throw_result.reduce((a, b) => a + b, 0);
  total.push(coin_sum);
  show_result(coin_sum)
  // end after 6 throws and show results
  if (total.length === 6) {
    show_explanation(search_data(total));
    find_transition(); 
    // clear settings
    document.getElementById("throw").disabled = true;
    throw_result.length = 0;
  }
}

function displayResult(coin_sum) {
    coin_sum.toString(coin_sum);
    let img = document.createElement("img");
    img.src = "img/" + coin_sum + ".gif";
    img.id = "display_container";
    let src = document.getElementById("display_result");
    let first = document.getElementById("display_container");
    src.insertBefore(img, first); 
}

function find_transition() {
  let i = 0;
  while (i < total.length) {
      if (total[i]===7 || total[i]===8) {
      total_trans.push(total[i]);
    } else if (total[i] === 6) {
      total_trans.push(7);
    } else if (total[i] === 9 ) {
      total_trans.push(8);
    }
    i++;
   }
   if (total_trans.toString()!=total.toString()) {
    total_new.length=0;
    show_explanation_trans(search_data(total_trans));
   } 
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

function removeDisplayedCoins() {
  let rem_node = document.getElementById("mince");
  while (rem_node.firstChild) {
    rem_node.removeChild(rem_node.firstChild);
  }     
}

function search_data(sequence) {
  let i = 0;
  while (i< sequence.length) {  //twist 6 and 9 results
      if (sequence[i] === 7 || sequence[i] === 8) {
      total_new.push(sequence[i]);
    } else if (sequence[i] === 6) {
      total_new.push(8);
    } else if (sequence[i] === 9 ) {
      total_new.push(7);
    }
    i++;
   } 
  const toFind = total_new.toString();
  const searchIndex = explanation.find((s) => s.Sequence === toFind);
  return searchIndex;
}

function show_explanation(func) {
  const explanation = func;
  document.getElementById("explanation_number").innerHTML = explanation.Number +". "+ explanation.Title;
  document.getElementById("explanation_text").innerHTML = explanation.Text;
  document.getElementById("explanation_judgment").innerHTML = explanation.Judgment;
  document.getElementById("explanation_image").innerHTML = explanation.Image;
}

function show_explanation_trans(func) {
  const explanation = func;
  document.getElementById("explanation_number_trans").innerHTML = explanation.Number +". "+ explanation.Title;
  document.getElementById("explanation_text_trans").innerHTML = explanation.Text;
  document.getElementById("explanation_judgment_trans").innerHTML = explanation.Judgment;
  document.getElementById("explanation_image_trans").innerHTML = explanation.Image;
}

// restart
function again() {
  result.length = 0;
  total.length = 0;
  total_new.length = 0;
  total_trans.length=0;
  throw_count = 6;
  document.getElementById("throw").disabled = false;
  location.reload(); 
}