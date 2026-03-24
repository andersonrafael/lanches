# BurguerZinha Menu App 🍔

Um aplicativo web responsivo para cardápio digital de uma lanchonete, que permite aos clientes escolherem itens, adicionarem ao carrinho e enviarem o pedido diretamente para o WhatsApp do estabelecimento.

## Funcionalidades
- **Cardápio Digital**: Exibição de produtos divididos por categorias (Lanches e Bebidas).
- **Carrinho de Compras**: Adição, remoção e visualização em tempo real do carrinho e do valor total. Botão prático para **Limpar** todos os itens instantaneamente.
- **Status de Funcionamento**: Indicador visual informando se a lanchonete está Aberta ou Fechada de acordo com o horário de atendimento pré-estabelecido.
- **Decisões Adicionais**: No momento de finalizar o pedido (Checkout), o cliente pode selecionar a **Forma de Pagamento** (Pix, Cartão ou Dinheiro) e adicionar **Observações opcionais** (ex: "Sem cebola", "Lanche bem passado").
- **Integração com WhatsApp**: Finalização da compra gerando uma mensagem automática detalhada para o WhatsApp, que inclui todos os itens da compra, o valor total, os comentários extras, a opção de pagamento e o endereço de entrega.
- **Geração de Número de Pedido**: Inclusão de um código de pedido (ex: #001) para cada solicitação, de forma estruturada e sequencial, cuja contagem é reiniciada automaticamente a cada novo dia.
- **Design Responsivo**: O layout do cardápio reestrutura seu tamanho para favorecer a leitura, possuindo um contêiner ampliado para computadores de mesa e um grid fluído para aparelhos móveis.

## Tecnologias Utilizadas
- **HTML5**: Estruturação da página.
- **CSS3 (Vanilla)**: Interface moderna e fluida utilizando tipografia, cores vibrantes no escuro (Dark Mode), CSS Grid e Flexbox.
- **JavaScript**: Construção da lógica cliente-side responsável pela manipulação do DOM e o processamento inteligente via `localStorage`.

## Estrutura de Arquivos
- `index.html`: Estrutura padrão de elementos, links e o modal interativo de finalização de compra.
- `style.css`: Regras visuais, responsividade e posicionamentos.
- `script.js`: Interações do usuário com os botões, manipulação do carrinho e geração link dinâmico para web interface do WhatsApp.

## Como Executar
O projeto não necessita da instalação de pacotes como o Node Modules.
Para rodar a aplicação, basta clonar/baixar o repositório na sua máquina e abrir o arquivo `index.html` em seu navegador da web favorito.
