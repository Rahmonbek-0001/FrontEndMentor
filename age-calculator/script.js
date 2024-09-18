function age() {
  let input = document.getElementsByTagName("input")
  let d1 = document.getElementById("date");
  let m1 = document.getElementById("month").value;
  let y1 = document.getElementById("year").value;
  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 31, 30, 31, 30];
  if (d1.value > d2) { d2 = d2 + month[m2 - 1]; m2 = m2 - 1; }
  if (m1 > m2) { m2 = m2 + 12; y2 = y2 - 1; }
  let d = d2 - d1.value;
  let m = m2 - m1;
  let y = y2 - y1 -1;
  document.getElementById("age").innerHTML =
    `<div style="display: flex; align-items: center; height: inherit;"><h2 id="ages">${y}-</h2><h3 class="ages">Year</h3></div>` +
    `<div style="display: flex; gap: 15px; align-items: center; height: inherit;"><h2 id="ages">${m}-</h2><h3 class="ages">Month </h3></div>` +
    `<div style="display: flex; align-items: center; height: inherit;"><h2 id="ages">${d}-</h2><h3 class="ages">Day</h3></div>`;
  if (y1 = '0') {
    `<h2 id="" style="color: #fff;">${y}-</h2>`
    console.log(y,'y',y1,'y1');
  }
}
