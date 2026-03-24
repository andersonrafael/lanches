const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetRegex = /<label class="al" for="addr">Endereco para entrega<\/label>[\s\r\n]*<input class="ai" id="addr" type="text" placeholder="Ex: Rua das Flores, 123, Bairro">/;
const replacement = `                <label class="al" for="obs">Observações (opcional)</label>
                <input class="ai" id="obs" type="text" placeholder="Ex: Sem cebola, maionese à parte..." style="margin-bottom: 14px;">
                <label class="al" for="addr">Endereco para entrega</label>
                <input class="ai" id="addr" type="text" placeholder="Ex: Rua das Flores, 123, Bairro">`;

html = html.replace(targetRegex, replacement);

fs.writeFileSync('index.html', html);
console.log('Injected obs field');
