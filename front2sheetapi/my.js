function callSheetAPI() {
  const url =
    "https://script.google.com/macros/s/AKfycbz7Ybmhv5vfsyG0n9pHm_4hpGpOWXs1DM4Qrys4eIfPibrZWEr6/exec";

  fetch(url)
    .then((d) => d.json())
    .then((d) => d.records)
    .then((d) => document.getElementById("app").textContent = d[0].Email);
  
}

document.getElementById("btn").addEventListener("click", callSheetAPI);
