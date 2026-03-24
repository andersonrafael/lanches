
        (function () {
            var PHONE = "5585999822417";
            var cart = JSON.parse(localStorage.getItem('bz') || '[]');
            function open() { var h = new Date().getHours(); return h >= 18 && h < 23; }
            function save() { localStorage.setItem('bz', JSON.stringify(cart)); }
            function count() { return cart.reduce(function (s, i) { return s + i.q; }, 0); }
            function total() { return cart.reduce(function (s, i) { return s + i.p * i.q; }, 0); }
            function badge() { document.getElementById('badge').textContent = count(); }
            function render() {
                var c = document.getElementById('cartItems');
                var t = document.getElementById('cartTotal');
                if (!cart.length) { c.innerHTML = '<div class="ec">Carrinho vazio</div>'; }
                else { c.innerHTML = cart.map(function (i) { return '<div class="cir"><span class="cin">' + i.n + '</span><div class="qc"><button class="qb" onclick="chq(\'' + i.n + '\',-1)">-</button><span class="qn">' + i.q + '</span><button class="qb" onclick="chq(\'' + i.n + '\',1)">+</button></div><span class="cip">R$ ' + (i.p * i.q).toFixed(2) + '</span></div>'; }).join(''); }
                t.textContent = total().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                badge();
            }
            window.chq = function (n, d) {
                var x = cart.findIndex(function (i) { return i.n === n; });
                if (x < 0) return;
                cart[x].q += d;
                if (cart[x].q <= 0) cart.splice(x, 1);
                save(); render();
            };
            function add(n, p) {
                var ex = cart.find(function (i) { return i.n === n; });
                if (ex) ex.q++; else cart.push({ n: n, p: p, q: 1 });
                save(); badge();
                var bs = document.querySelectorAll('[data-name="' + n + '"]');
                bs.forEach(function (b) { b.style.background = '#2ecc71'; setTimeout(function () { b.style.background = ''; }, 600); });
            }
            var sb = document.getElementById('sBadge'), st = document.getElementById('sTxt');
            if (open()) { sb.className = 'badge open'; st.textContent = 'Aberto agora - 18h as 23h'; }
            else { sb.className = 'badge closed'; st.textContent = 'Fechado agora - Abre as 18h'; }
            document.body.addEventListener('click', function (e) {
                var b = e.target.closest('.add-to-cart-btn');
                if (b) add(b.getAttribute('data-name'), parseFloat(b.getAttribute('data-price')));
            });
            document.getElementById('cartBtn').addEventListener('click', function () { render(); document.getElementById('cartModal').classList.add('active'); });
            ['closeBtn', 'cancelBtn'].forEach(function (id) { document.getElementById(id).addEventListener('click', function () { document.getElementById('cartModal').classList.remove('active'); }); });
            document.getElementById('cartModal').addEventListener('click', function (e) { if (e.target === this) this.classList.remove('active'); });
            document.getElementById('addr').addEventListener('input', function () { if (this.value) { this.classList.remove('error'); document.getElementById('addrWarn').style.display = 'none'; } });
            document.getElementById('checkoutBtn').addEventListener('click', function () {
                var cw = document.getElementById('closedW'), ai = document.getElementById('addr'), aw = document.getElementById('addrWarn');
                if (!open()) { cw.style.display = 'block'; return; } cw.style.display = 'none';
                if (!cart.length) return;
                if (!ai.value.trim()) { ai.classList.add('error'); aw.style.display = 'block'; return; }
                var todayDate = new Date().toLocaleDateString('pt-BR');
                var oData = JSON.parse(localStorage.getItem('orderData') || '{"d":"","n":0}');
                if (oData.d !== todayDate) { oData.d = todayDate; oData.n = 1; }
                else { oData.n++; }
                localStorage.setItem('orderData', JSON.stringify(oData));
                var orderNumber = String(oData.n).padStart(3, '0');
                var msg = '*Pedido BurguerZinha #' + orderNumber + '*\n\n';
                cart.forEach(function (i) { msg += i.n + ' x' + i.q + ' - R$ ' + (i.p * i.q).toFixed(2) + '\n'; });
                msg += '\nTotal: ' + total().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                msg += '\n\nEndereco: ' + ai.value.trim();
                window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg), '_blank');
                cart = []; save(); render(); document.getElementById('cartModal').classList.remove('active'); ai.value = '';
            });
            badge();
        })();
    