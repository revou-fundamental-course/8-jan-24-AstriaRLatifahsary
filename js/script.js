document.getElementById("persegiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var sisi = parseFloat(document.getElementById("sisi").value);
    var keliling = 4 * sisi;
    var luas = sisi * sisi;
    document.getElementById("kelilingResult").textContent = keliling;
    document.getElementById("luasResult").textContent = luas;
});
function reset(){
    document.getElementById('input').value = "";
    el = document.getElementById('player-guess')
    el.removeChild(el.firstChild)
  }