function fiveband() {
  let firstband = document.getElementById("firstband").value;
  let secondband = document.getElementById("secondband").value;
  let thirdband = document.getElementById("thirdband").value;
  let fourthband = document.getElementById("fourthband").value;
  let fifthband = document.getElementById("fifthband").value;
  let answer = document.getElementById("answer");

  let resistance =
    (String(firstband) + String(secondband) + String(thirdband)) * fourthband;

  answer.innerHTML = `Resistor Value<br>${resistance.toLocaleString()} Ohms ± ${fifthband}%`;
}
