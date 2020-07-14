function callSheetAPI() {
  const url =
    "https://script.google.com/macros/s/AKfycbz7Ybmhv5vfsyG0n9pHm_4hpGpOWXs1DM4Qrys4eIfPibrZWEr6/exec";

  fetch(url)
    .then((d) => d.json())
    .then((d) => d.records)
    .then((d) => (document.getElementById("app").textContent = d[0].Email));
}

function postSheetAPI() {
  const url =
    "https://script.google.com/macros/s/AKfycbz7Ybmhv5vfsyG0n9pHm_4hpGpOWXs1DM4Qrys4eIfPibrZWEr6/exec";

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    //credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({ name: "Olivia" }),
  });
}

document.getElementById("btn").addEventListener("click", callSheetAPI);

document.getElementById("btn2").addEventListener("click", postSheetAPI);
