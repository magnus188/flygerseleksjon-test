
const y_axis = ["opp-opp", "opp-ned", "ned-opp", "ned-ned"]
const x_axis = ["venstre-venstre", "venstre-høyre", "høyre-venstre", "høyre-høyre"]
const hand = ["venstre", "høyre"]

const text = document.getElementById("text")

function createInstruction(){
    let y_order = y_axis[getRndInteger(0,3)]
    let x_order = x_axis[getRndInteger(0,3)]
    let hand_order = hand[getRndInteger(0,2)]

    text.innerHTML = `${y_order}, ${x_order}, ${hand_order}`
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }