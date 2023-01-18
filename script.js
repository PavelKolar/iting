const hod = []
const vysledek = [];
const total = [];


// throw coins 3x
function getThrowResult(min, max) {
  
  // throw 3 coins
  for (let i = 0; i < 3; i++) {
    let mince = Math.round(Math.random() * (max - min) + min);
    hod.push(mince);
    }

  // remove mince if exist
  if (document.getElementById("mince")) {
    let node = document.getElementById("mince");
    if (node.parentNode) {
      node.parentNode.removeChild(node);
      console.log(node)
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
 