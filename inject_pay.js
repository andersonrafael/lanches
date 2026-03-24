const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
    /<label class="al" for="addr">Endereco para entrega<\/label>[\s\r\n]*<input class="ai" id="addr" type="text" placeholder="Ex: Rua das Flores, 123, Bairro">/,
    '<label class="al" for="payMethod">Forma de Pagamento</label>\n                <select class="ai" id="payMethod" style="margin-bottom: 14px;">\n                    <option value="Pix">Pix</option>\n                    <option value="Cartão">Cartão</option>\n                    <option value="Dinheiro">Dinheiro</option>\n                </select>\n                <label class="al" for="addr">Endereco para entrega</label>\n                <input class="ai" id="addr" type="text" placeholder="Ex: Rua das Flores, 123, Bairro">'
);

fs.writeFileSync('index.html', html);
console.log('Injected payMethod');
