const hod = []
const vysledek = [];


// throw coins 3x
function getThrowResult(min, max) {
  
  // throw 3 coins
  for (let i = 0; i < 3; i++) {
    let mince = Math.round(Math.random() * (max - min) + min);
    hod.push(mince);
    }
  // display coins
  const mince_container = document.createElement("div");
  mince_container.id = "mince";
  mince_container.appendChild()

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

  // Remove element
  function removeElement(id) {
    elementID = document.getElementById(id)
    if (elemID) {   
      elemID.parentNode.removeChild(elemID);     
    } 

  }
 






/* document.getElementById("vysledek").innerHTML = throwIt;
document.getElementById("hod").innerHTML = hod;
let hodLen = hod.length
document.getElementById("hodLen").innerHTML = hodLen;
if (mince = 2) {
      mince = 2*2
    } else {
        mince = 2*3
      }

for (let i = 0; i < vysledek.length; i++) {
    if ((i = 2)) {
      i = i * 2;
      soucet = soucet + i;
    } else {
      i = i * 3;
      soucet = soucet + i;
    }
    document.getElementById("soucet").innerHTML = soucet;
  }

  const li = document.getElementById("seznam");
  let html = "<span>ahoj</span>";
  li.insertAdjacentHTML("afterbegin", html);
*/
