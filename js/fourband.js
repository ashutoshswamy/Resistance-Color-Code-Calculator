function fourband() {
  let firstband = document.getElementById("firstband").value;
  let secondband = document.getElementById("secondband").value;
  let thirdband = document.getElementById("thirdband").value;
  let fourthband = document.getElementById("fourthband").value;
  let answer = document.getElementById("answer");

  let resistance = (String(firstband) + String(secondband)) * thirdband;

  answer.innerHTML = `Resistor Value<br>${resistance} Ohms ± ${fourthband}%`;
}
