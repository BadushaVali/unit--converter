const inputEl = document.getElementById("input-el");
// console.log(inputEl);
const inputBtn = document.getElementById("input-btn");
// console.log(inputBtn);
const meterEl = document.getElementById("sp-1");
// console.log(meterEl);
const volumeEl = document.getElementById("sp-2");
// console.log(meterEl);
const massEl = document.getElementById("sp-3");
// console.log(meterEl);

inputBtn.addEventListener("click", function () {
  meterEl.textContent = `${inputEl.value} meters = ${(
    inputEl.value * 3.281
  ).toFixed(3)} feet | ${inputEl.value} feet = ${(
    inputEl.value / 3.281
  ).toFixed(3)} meters`;

  volumeEl.textContent = `${inputEl.value} liters = ${(
    inputEl.value * 0.264
  ).toFixed(3)} gallons  | ${inputEl.value} gallons = ${(
    inputEl.value / 0.264
  ).toFixed(3)} liters`;

  massEl.textContent = `${inputEl.value} kilos = ${(
    inputEl.value * 2.204
  ).toFixed(3)} pounds  | ${inputEl.value} pounds = ${(
    inputEl.value / 2.204
  ).toFixed(3)} kilos`;
});
