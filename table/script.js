  var number = prompt("👋 Hello! Enter the number you want the table for:");
  number = parseInt(number);

  var container = document.getElementById("tableContainer");

  if (!isNaN(number)) {
    for (var i = 1; i <= 10; i++) {
      container.innerHTML += `<div class="table-line">🎲 ${number} x ${i} = ${number * i}</div>`;
    }
  } else {
    container.innerHTML = "<div class='table-line'>❌ Please refresh and enter a valid number.</div>";
  }
