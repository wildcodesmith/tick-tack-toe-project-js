let box = document.querySelectorAll(".box");
let turn = "A";
let moves_a = [];
let moves_b = [];
let box_filled = 0;
let wrapper = document.querySelector(".wrapper");

let top_cross = document.querySelector(".top-cross");
let top_circle = document.querySelector(".top-circle");
let turn_h4 = document.querySelector(".top-turn-h4");
let turn_section = document.querySelector(".turn-section");
let report_card = document.querySelector(".report-card");
let report_card_cross = document.querySelector(".report-card-cross");
let report_card_circle = document.querySelector(".report-card-circle");
let report_card_won_text = document.querySelector(".report-card-won-text");

let wh1 = [
  [0, 0],
  [0, 1],
  [0, 2],
];
let wh2 = [
  [1, 0],
  [1, 1],
  [1, 2],
];
let wh3 = [
  [2, 0],
  [2, 1],
  [2, 2],
];
let wv1 = [
  [0, 0],
  [1, 0],
  [2, 0],
];
let wv2 = [
  [0, 1],
  [1, 1],
  [2, 1],
];
let wv3 = [
  [0, 2],
  [1, 2],
  [2, 2],
];
let wd1 = [
  [0, 0],
  [1, 1],
  [2, 2],
];
let wd2 = [
  [0, 2],
  [1, 1],
  [2, 0],
];

let searchAray = (win_arr, arr) => {
  for (let i = 0; i < 3; i++) {
    if (!JSON.stringify(arr).includes(win_arr[i])) {
      return false;
    }
  }
  return true;
};
let k = (e) => {
  if (turn == "A") {
    console.log("A moved");

    // move by A
    if (e.target.id == 1) {
      moves_a.push([0, 0]);
      document.getElementById("1").removeEventListener("click", k);
      document.getElementById("1").style.border = "1px solid rgb(48, 196, 190)";

      document.querySelector(".hide1").classList.remove("hide1");
      top_cross.classList.add("hide");
      top_circle.classList.remove("hide");

      turn_h4.classList.remove("cross-turn");
      turn_h4.classList.add("circle-turn");

      box_filled++;
    } else if (e.target.id == 2) {
      moves_a.push([0, 1]);
      document.getElementById("2").removeEventListener("click", k);
      document.getElementById("2").style.border = "1px solid rgb(48, 196, 190)";

      document.querySelector(".hide2").classList.remove("hide2");
      top_cross.classList.add("hide");
      top_circle.classList.remove("hide");
      turn_h4.classList.remove("cross-turn");
      turn_h4.classList.add("circle-turn");
      box_filled++;
    } else if (e.target.id == 3) {
      moves_a.push([0, 2]);
      document.getElementById("3").removeEventListener("click", k);
      document.getElementById("3").style.border = "1px solid rgb(48, 196, 190)";

      document.querySelector(".hide3").classList.remove("hide3");
      top_cross.classList.add("hide");
      top_circle.classList.remove("hide");
      turn_h4.classList.remove("cross-turn");
      turn_h4.classList.add("circle-turn");
      box_filled++;
    } else if (e.target.id == 4) {
      moves_a.push([1, 0]);
      document.getElementById("4").removeEventListener("click", k);
      document.getElementById("4").style.border = "1px solid rgb(48, 196, 190)";

      document.querySelector(".hide4").classList.remove("hide4");
      top_cross.classList.add("hide");
      top_circle.classList.remove("hide");
      turn_h4.classList.remove("cross-turn");
      turn_h4.classList.add("circle-turn");
      box_filled++;
    } else if (e.target.id == 5) {
      moves_a.push([1, 1]);
      turn_h4.classList.remove("cross-turn");
      turn_h4.classList.add("circle-turn");
      document.getElementById("5").removeEventListener("click", k);
      document.getElementById("5").style.border = "1px solid rgb(48, 196, 190)";

      document.querySelector(".hide5").classList.remove("hide5");
      top_cross.classList.add("hide");
      top_circle.classList.remove("hide");
      turn_h4.classList.remove("cross-turn");
      turn_h4.classList.add("circle-turn");
      box_filled++;
    } else if (e.target.id == 6) {
      moves_a.push([1, 2]);
      document.getElementById("6").removeEventListener("click", k);
      document.getElementById("6").style.border = "1px solid rgb(48, 196, 190)";

      document.querySelector(".hide6").classList.remove("hide6");
      top_cross.classList.add("hide");
      top_circle.classList.remove("hide");
      turn_h4.classList.remove("cross-turn");
      turn_h4.classList.add("circle-turn");
      box_filled++;
    } else if (e.target.id == 7) {
      moves_a.push([2, 0]);
      document.getElementById("7").removeEventListener("click", k);
      document.getElementById("7").style.border = "1px solid rgb(48, 196, 190)";

      document.querySelector(".hide7").classList.remove("hide7");
      top_cross.classList.add("hide");
      top_circle.classList.remove("hide");
      turn_h4.classList.remove("cross-turn");
      turn_h4.classList.add("circle-turn");
      box_filled++;
    } else if (e.target.id == 8) {
      moves_a.push([2, 1]);
      document.getElementById("8").removeEventListener("click", k);
      document.getElementById("8").style.border = "1px solid rgb(48, 196, 190)";

      document.querySelector(".hide8").classList.remove("hide8");
      top_cross.classList.add("hide");
      top_circle.classList.remove("hide");
      turn_h4.classList.remove("cross-turn");
      turn_h4.classList.add("circle-turn");
      box_filled++;
    } else if (e.target.id == 9) {
      moves_a.push([2, 2]);
      document.getElementById("9").removeEventListener("click", k);
      document.getElementById("9").style.border = "1px solid rgb(48, 196, 190)";

      document.querySelector(".hide9").classList.remove("hide9");
      top_cross.classList.add("hide");
      top_circle.classList.remove("hide");
      turn_h4.classList.remove("cross-turn");
      turn_h4.classList.add("circle-turn");

      box_filled++;
    }

    //checking if a has won or not
    if (
      searchAray(wh1, moves_a) ||
      searchAray(wh2, moves_a) ||
      searchAray(wh3, moves_a) ||
      searchAray(wv1, moves_a) ||
      searchAray(wv2, moves_a) ||
      searchAray(wv3, moves_a) ||
      searchAray(wd1, moves_a) ||
      searchAray(wd2, moves_a)
    ) {
      console.log("a is winner.");

      // to delay the disapperence of wrapper and display of result
      setInterval(() => {
        wrapper.style.display = "none";

        turn_section.style.display = "none";
        report_card.classList.remove("hide");
        report_card_circle.style.display = "none";
      },300);

      return;
    }

    //match draw
    if (box_filled == 9) {
         setInterval(() => {
      wrapper.style.display = "none";

      turn_section.style.display = "none";
      report_card.classList.remove("hide");

      report_card_won_text.innerHTML = "Match <br> draw";

      report_card_won_text.style.textShadow = "0px 7px 0px black";
      report_card_won_text.style.color = "rgb(51 97 117)";
      report_card_cross.style.display = "none";
      report_card_circle.style.display = "none";
       },300);
    }

    console.log(moves_a);
    turn = "B";
  } else {
    console.log("B moved");

    // move by B
    if (e.target.id == 1) {
      moves_b.push([0, 0]);
      document.getElementById("1").removeEventListener("click", k);
      document.getElementById("1").style.border = "1px solid rgb(217 199 126)";

      document.querySelector(".chide1").classList.remove("chide1");
      top_cross.classList.remove("hide");
      top_circle.classList.add("hide");
      turn_h4.classList.add("cross-turn");
      turn_h4.classList.remove("circle-turn");

      box_filled++;
    } else if (e.target.id == 2) {
      moves_b.push([0, 1]);
      document.getElementById("2").removeEventListener("click", k);
      document.getElementById("2").style.border = "1px solid rgb(217 199 126)";

      document.querySelector(".chide2").classList.remove("chide2");
      top_cross.classList.remove("hide");
      top_circle.classList.add("hide");
      turn_h4.classList.add("cross-turn");
      turn_h4.classList.remove("circle-turn");

      box_filled++;
    } else if (e.target.id == 3) {
      moves_b.push([0, 2]);
      document.getElementById("3").removeEventListener("click", k);
      document.getElementById("3").style.border = "1px solid rgb(217 199 126)";

      document.querySelector(".chide3").classList.remove("chide3");
      top_cross.classList.remove("hide");
      top_circle.classList.add("hide");
      turn_h4.classList.add("cross-turn");
      turn_h4.classList.remove("circle-turn");

      box_filled++;
    } else if (e.target.id == 4) {
      moves_b.push([1, 0]);
      document.getElementById("4").removeEventListener("click", k);
      document.getElementById("4").style.border = "1px solid rgb(217 199 126)";

      document.querySelector(".chide4").classList.remove("chide4");
      top_cross.classList.remove("hide");
      top_circle.classList.add("hide");
      turn_h4.classList.add("cross-turn");
      turn_h4.classList.remove("circle-turn");

      box_filled++;
    } else if (e.target.id == 5) {
      moves_b.push([1, 1]);
      document.getElementById("5").removeEventListener("click", k);
      document.getElementById("5").style.border = "1px solid rgb(217 199 126)";

      document.querySelector(".chide5").classList.remove("chide5");
      top_cross.classList.remove("hide");
      top_circle.classList.add("hide");
      turn_h4.classList.add("cross-turn");
      turn_h4.classList.remove("circle-turn");

      box_filled++;
    } else if (e.target.id == 6) {
      moves_b.push([1, 2]);
      document.getElementById("6").removeEventListener("click", k);
      document.getElementById("6").style.border = "1px solid rgb(217 199 126)";

      document.querySelector(".chide6").classList.remove("chide6");
      top_cross.classList.remove("hide");
      top_circle.classList.add("hide");
      turn_h4.classList.add("cross-turn");
      turn_h4.classList.remove("circle-turn");

      box_filled++;
    } else if (e.target.id == 7) {
      moves_b.push([2, 0]);
      document.getElementById("7").removeEventListener("click", k);
      document.getElementById("7").style.border = "1px solid rgb(217 199 126)";

      document.querySelector(".chide7").classList.remove("chide7");
      top_cross.classList.remove("hide");
      top_circle.classList.add("hide");
      turn_h4.classList.add("cross-turn");
      turn_h4.classList.remove("circle-turn");

      box_filled++;
    } else if (e.target.id == 8) {
      moves_b.push([2, 1]);
      document.getElementById("8").removeEventListener("click", k);
      document.getElementById("8").style.border = "1px solid rgb(48, 196, 190)";

      document.querySelector(".chide8").classList.remove("chide8");
      top_cross.classList.remove("hide");
      top_circle.classList.add("hide");
      turn_h4.classList.add("cross-turn");
      turn_h4.classList.remove("circle-turn");

      box_filled++;
    } else if (e.target.id == 9) {
      moves_b.push([2, 2]);
      document.getElementById("9").removeEventListener("click", k);
      document.getElementById("9").style.border = "1px solid rgb(217 199 126)";

      document.querySelector(".chide9").classList.remove("chide9");
      top_cross.classList.remove("hide");
      top_circle.classList.add("hide");
      turn_h4.classList.add("cross-turn");
      turn_h4.classList.remove("circle-turn");

      box_filled++;
    }

    //checking if b has won or not
    if (
      searchAray(wh1, moves_b) ||
      searchAray(wh2, moves_b) ||
      searchAray(wh3, moves_b) ||
      searchAray(wv1, moves_b) ||
      searchAray(wv2, moves_b) ||
      searchAray(wv3, moves_b) ||
      searchAray(wd1, moves_b) ||
      searchAray(wd2, moves_b)
    ) {
      setInterval(() => {
      wrapper.style.display = "none";

      turn_section.style.display = "none";
      report_card.classList.remove("hide");
      report_card_cross.style.display = "none";
      report_card_won_text.style.color = " rgb(255, 204, 0)";
           },300);
    }

    //match draw
    if (box_filled == 9) {
          setInterval(() => {
 
      wrapper.style.display = "none";

      turn_section.style.display = "none";
      report_card.classList.remove("hide");
      report_card_won_text.innerHTML = "Match draw";
      report_card_won_text.style.fontSize = "2rem";
      report_card_won_text.style.color = "rgb(51 97 117)";
      report_card_cross.style.display = "none";
      report_card_circle.style.display = "none";
           },300);
    }

    console.log(moves_b);

    turn = "A";
  }
};
box.forEach((object) => {
  object.addEventListener("click", k);
});
