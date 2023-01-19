
const vysledek = [];
const total = [];


// throw coins 3x
function getThrowResult(min, max) {
  const hod = [];
  // throw 3 coins
  for (let i = 0; i < 3; i++) {
    let mince = Math.round(Math.random() * (max - min) + min);
    hod.push(mince);
    document.getElementById("hod").innerHTML = hod;
    }

  // remove displayed mince if exist
  if (document.getElementById("displayed_mince")) {
    let uzel = document.getElementById("mince");
    let smazat = document.getElementById("displayed_mince");
    while (uzel.firstChild) {
      let i = 0;
      uzel.removeChild(uzel.firstChild);
      console.log(uzel.firstChild);
      i+=1;
      console.log(i);
    }     
  }

  // display coins
  const mince_container = document.createElement("div");
  mince_container.id = "mince";
  //mince_container.appendChild(mince_container)

  for (const i of hod) {     
    const element = document.getElementById("hod"); 
    element.appendChild(mince_container);
    if (i === 2) {
      let img = document.createElement("img");
      img.src = "img/mince2.png";
      img.id = "displayed_mince";
      let src = document.getElementById("mince");
      src.appendChild(img);
    } else if (i === 3) {
       let img = document.createElement("img");
       img.src = "img/mince3.png";
       img.id = "displayed_mince";
       let src = document.getElementById("mince");
       src.appendChild(img);
    }
  }
  // count coins and add it to array
  let soucetH = hod.reduce((a, b) => a + b, 0);
  total.push(soucetH);
  document.getElementById("soucet").innerHTML = soucetH;

  }
 