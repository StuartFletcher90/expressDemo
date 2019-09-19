const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

document.addEventListener('keydown', () => {
   input1.textContent = event.key;
   input2.textContent = event.code;
   input3.textContent = event.which;
});

document.getElementById('input1').style.fontSize = "150%";
document.getElementById('input2').style.fontSize = "150%";
document.getElementById('input3').style.fontSize = "150%";