const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const target = '<button \r\nclass="bcanc" id="cancel\r\nBtn">Fechar</button>';
// PowerShell output was truncated, let's use a simpler regex to replace it
html = html.replace(
    /(<button[^>]+id="cancelBtn"[^>]*>Fechar<\/button>)/,
    '$1\n                <button class="bcanc" id="clearBtn" style="color:var(--red); border-color:var(--red); font-weight:bold;">Limpar</button>'
);

fs.writeFileSync('index.html', html);
console.log('Injected clearBtn');
