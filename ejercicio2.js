function contador() {
    document.getElementById('contar').textContent = document.getElementById('texto').value.length;
}

document.getElementById('texto').addEventListener('input',contador);