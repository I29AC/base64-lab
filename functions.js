function decode() {
    const raw = document.getElementById('input').value;
    try {
        document.getElementById('output').innerText = atob(raw);
        document.getElementById('result').innerText = "Decoded Result:"
    } catch(e) {
        document.getElementById('output').innerText = "error: invalid format";
    }
}

function encode() {
    const raw = document.getElementById('input').value;
    try {
        document.getElementById('output').innerText = btoa(raw);
        document.getElementById('result').innerText = "Encoded Result:"
    } catch(e) {
        document.getElementById('output').innerText = "error: invalid format";
    }
}