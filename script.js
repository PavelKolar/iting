// internal state
const result = []; // result of one throw (kept for compatibility if used elsewhere)
const total = []; // results of 6 throws (full)
const total_new = []; // twisted results (6=8, 7=8)
const total_trans = []; // transformed results ()
let throwCount = 6; // number of throws

// Helper: inclusive random integer
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper: clear node children safely
function clearElementChildren(id) {
  const node = document.getElementById(id);
  if (!node) return;
  while (node.firstChild) node.removeChild(node.firstChild);
}

function updateThrowCountUI() {
  const countEl = document.getElementById("throw_count");
  const againEl = document.getElementById("throw_count_again");
  if (!countEl) return;
  if (throwCount <= 0) {
    countEl.innerHTML = "Done. ";
    if (againEl) againEl.innerHTML = "Again?";
  } else {
    countEl.innerHTML = "Flip coins " + throwCount + " more times.";
  }
}

function getThrowResult(min, max) {
  // keep a single coin container and clear it each click
  let coinContainer = document.getElementById("mince");
  if (!coinContainer) {
    const resultContainer = document.getElementById("throw_result");
    if (resultContainer) {
      coinContainer = document.createElement("div");
      coinContainer.id = "mince";
      resultContainer.appendChild(coinContainer);
    }
  }
  if (coinContainer) {
    clearElementChildren("mince");
  }

  // throw 3 coins (integers between min and max inclusive)
  const throw_result = [];
  for (let i = 0; i < 3; i++) {
    const mince = getRandomIntInclusive(min, max);
    throw_result.push(mince);
  }

  // decrement and update UI
  throwCount -= 1;
  updateThrowCountUI();

  // display coin images in single row (replace previous coins, no new lines)
  if (coinContainer) {
    throw_result.forEach((val) => {
      const img = document.createElement("img");
      img.className = "displayed_coin";
      // fall back to a generic image path if not 2/3
      if (val === 2) {
        img.src = "img/mince2.gif";
      } else if (val === 3) {
        img.src = "img/mince3.gif";
      } else {
        img.src = "img/mince" + val + ".gif";
      }
      coinContainer.appendChild(img);
    });
  }

  // compute sum and record
  const coin_sum = throw_result.reduce((a, b) => a + b, 0);
  total.push(coin_sum);
  show_result(coin_sum);

  // after 6 throws, show explanations and disable throw button
  if (total.length === 6) {
    const explanationFound = search_data(total);
    if (explanationFound) show_explanation(explanationFound);
    find_transition();
    const throwBtn = document.getElementById("throw");
    if (throwBtn) throwBtn.disabled = true;
  }
}

function displayResult(coin_sum) {
  // create a new display row so result images appear one per line
  const row = document.createElement("div");
  row.className = "display-row";

  const img = document.createElement("img");
  img.src = "img/" + coin_sum + ".gif";
  img.className = "display_container";
  row.appendChild(img);

  const src = document.getElementById("display_result");
  if (!src) return;
  src.appendChild(row);
}

function find_transition() {
  // produce a mapped sequence: keep 7/8 as is; map 6->7, 9->8
  const mapped = total.map((v) => {
    if (v === 7 || v === 8) return v;
    if (v === 6) return 7;
    if (v === 9) return 8;
    return v;
  });

  // only show transformed explanation if mapping actually changed any element
  if (mapped.toString() !== total.toString()) {
    const explanationFound = search_data(mapped);
    if (explanationFound) show_explanation_trans(explanationFound);
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
  throwCount = 6;
  document.getElementById("throw").disabled = false;
  location.reload();
}

// Event listeners
document.getElementById("throw").addEventListener("click", function() {
  getThrowResult(2, 3);
});

document.getElementById("throw_count_again").addEventListener("click", again);
