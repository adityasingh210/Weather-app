function updateTime() {
  const now = new Date();

  document.getElementById("time").innerText =
    now.toLocaleTimeString("en-IN");

  document.getElementById("date").innerText =
    now.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
}

setInterval(updateTime, 1000);
