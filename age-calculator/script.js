function years(y1, m1, d1, now) {
  let y2 = now.getFullYear();
  let m2 = now.getMonth() + 1;
  if (m1 > m2 || (m1 === m2 && d1 > now.getDate())) {
    y2--;
  }
  return y2 - y1;
}

function months(m1, d1, now) {
  let m2 = now.getMonth() + 1;
  let d2 = now.getDate();
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    m2--;
  }
  if (m2 < 1) {
    m2 += 12;
  }
  return m2 - m1;
}

function days(d1, m1, now) {
  let d2 = now.getDate();
  let m2 = now.getMonth() + 1;
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 += monthDays[m2 - 1];
  }
  return d2 - d1;
}

function age() {
  const d1 = parseInt(document.getElementById("date").value);
  const m1 = parseInt(document.getElementById("month").value);
  const y1 = parseInt(document.getElementById("year").value);
  const now = new Date();

  const y = years(y1, m1, d1, now);
  const m = months(m1, d1, now);
  const d = days(d1, m1, now);

  document.getElementById("age").innerHTML = ["Year", "Month", "Day"]
    .map(
      (unit, i) => `
      <div style="display: flex; align-items: center; height: inherit;">
        <h2>${[y, m, d][i]}-</h2><h3>${unit}</h3>
      </div>
    `
    )
    .join("");
}
