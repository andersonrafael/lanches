# BurguerZinha Menu App 🍔

Um aplicativo web responsivo para cardápio digital de uma lanchonete, que permite aos clientes escolherem itens, adicionarem ao carrinho e enviarem o pedido diretamente para o WhatsApp do estabelecimento.

## Funcionalidades
- **Cardápio Digital**: Exibição de produtos divididos por categorias (Lanches e Bebidas).
- **Carrinho de Compras**: Adição, remoção e visualização em tempo real do carrinho e do valor total.
- **Status de Funcionamento**: Indicador visual informando se a lanchonete está Aberta ou Fechada de acordo com o horário de atendimento pré-estabelecido.
- **Integração com WhatsApp**: Finalização da compra gerando uma mensagem automática detalhada para o WhatsApp, que inclui todos os itens da compra, valor total e o endereço de entrega do cliente.
- **Geração de Número de Pedido**: Inclusão de um código de pedido (ex: #001) para cada solicitação, de forma estruturada e sequencial, reiniciada a cada novo dia.
- **Design Responsivo**: O layout do cardápio reestrutura seu tamanho automaticamente para favorecer a leitura, seja em monitores ultrawide ou telas de celular.

## Tecnologias Utilizadas
- **HTML5**: Estruturação da página.
- **CSS3 (Vanilla)**: Interface moderna e fluida utilizando tipografia, cores agradáveis (Dark Mode), CSS Grid e Flexbox.
- **JavaScript**: Construção da lógica de client-side responsável por popular arrays, manipular os itens do carrinho e salvar dados temporários via interface do `localStorage`.

## Estrutura de Arquivos
- `index.html`: Estrutura padrão de elementos, links e o modal do carrinho.
- `style.css`: Regras visuais, variações de layout e efeitos.
- `script.js`: Toda interação do usuário com os botões, contadores de quantidade e checkout via API de redirecionamento do WhatsApp.

## Como Executar
O projeto não necessita de frameworks ou pacotes pesados como o Node Modules.
Para rodar a aplicação, basta baixar os arquivos e abrir o arquivo `index.html` em seu navegador da web favorito.
