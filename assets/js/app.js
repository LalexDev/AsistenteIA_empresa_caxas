(() => {
  'use strict';

  const STORAGE_KEY = 'caxasia_cajamarca_multitienda_v1';
  const SESSION_KEY = 'caxasia_session_v1';
  const THEME_KEY = 'caxasia_theme_v1';
  const CATEGORY_IMAGES = {
    Abarrotes: 'assets/images/category-abarrotes.webp',
    Bebidas: 'assets/images/category-bebidas.webp',
    Limpieza: 'assets/images/category-limpieza.webp',
    Higiene: 'assets/images/category-higiene.webp',
    Otros: 'assets/images/category-otros.webp'
  };

  const seed = () => ({
    company: { name: 'CaxasIA Cajamarca - Monitoreo Multitienda', ruc: '20612345678', currency: 'S/' },
    users: [
      { id: 1, name: 'Jhordan', email: 'Jhordan@gmail.com', password: 'jHORDAN001*', role: 'ADMIN' }
    ],
    categories: ['Abarrotes', 'Bebidas', 'Limpieza', 'Higiene', 'Otros'],
    products: [
      { id: 1, code: 'PROD-001', barcode: '7751001000018', name: 'Arroz superior 5 kg', category: 'Abarrotes', purchasePrice: 18.5, salePrice: 23.9, stock: 12, minStock: 15, unit: 'Bolsa', active: true },
      { id: 2, code: 'PROD-002', barcode: '7751001000025', name: 'Aceite vegetal 1 L', category: 'Abarrotes', purchasePrice: 7.3, salePrice: 9.5, stock: 28, minStock: 12, unit: 'Botella', active: true },
      { id: 3, code: 'PROD-003', barcode: '7751001000032', name: 'Gaseosa 3 L', category: 'Bebidas', purchasePrice: 7.8, salePrice: 11.0, stock: 8, minStock: 10, unit: 'Botella', active: true },
      { id: 4, code: 'PROD-004', barcode: '7751001000049', name: 'Detergente 900 g', category: 'Limpieza', purchasePrice: 8.2, salePrice: 11.5, stock: 34, minStock: 10, unit: 'Bolsa', active: true },
      { id: 5, code: 'PROD-005', barcode: '7751001000056', name: 'Papel higiénico x 4', category: 'Higiene', purchasePrice: 4.8, salePrice: 6.9, stock: 5, minStock: 12, unit: 'Paquete', active: true },
      { id: 6, code: 'PROD-006', barcode: '7751001000063', name: 'Leche evaporada', category: 'Abarrotes', purchasePrice: 3.2, salePrice: 4.4, stock: 43, minStock: 18, unit: 'Lata', active: true }
    ],
    customers: [
      { id: 1, name: 'Comercial San José', document: '20600000001', phone: '976100001', sector: 'Baños del Inca', address: 'Jr. Comercio N.° 601, Cajamarca', status: 'NORMAL', productCount: 87, monthlyOrders: 5, criticalStock: 1, lastSync: daysAgo(1) },
      { id: 2, name: 'Distribuidora El Norte', document: '20600000002', phone: '976100002', sector: 'San Sebastián', address: 'Jr. Comercio N.° 602, Cajamarca', status: 'NORMAL', productCount: 94, monthlyOrders: 7, criticalStock: 2, lastSync: daysAgo(2) },
      { id: 3, name: 'Tienda los Andes', document: '20600000003', phone: '976100003', sector: 'La Florida', address: 'Jr. Comercio N.° 603, Cajamarca', status: 'NORMAL', productCount: 101, monthlyOrders: 9, criticalStock: 3, lastSync: daysAgo(3) },
      { id: 4, name: 'Multiservicios Cajamarca', document: '20600000004', phone: '976100004', sector: 'Santa Apolonia', address: 'Jr. Comercio N.° 604, Cajamarca', status: 'NORMAL', productCount: 108, monthlyOrders: 11, criticalStock: 0, lastSync: daysAgo(4) },
      { id: 5, name: 'Comercial Bismark', document: '20600000005', phone: '976100005', sector: 'Cajamarca Norte', address: 'Jr. Comercio N.° 605, Cajamarca', status: 'OBSERVACIÓN', productCount: 115, monthlyOrders: 13, criticalStock: 15, lastSync: daysAgo(5) },
      { id: 6, name: 'Negocios Santa Rosa', document: '20600000006', phone: '976100006', sector: 'Cajamarca Sur', address: 'Jr. Comercio N.° 606, Cajamarca', status: 'NORMAL', productCount: 122, monthlyOrders: 15, criticalStock: 2, lastSync: daysAgo(6) },
      { id: 7, name: 'Distribuidora Caxas', document: '20600000007', phone: '976100007', sector: 'Cajamarca Centro', address: 'Jr. Comercio N.° 607, Cajamarca', status: 'NORMAL', productCount: 129, monthlyOrders: 17, criticalStock: 3, lastSync: daysAgo(7) },
      { id: 8, name: 'Tienda Central Amalia Puga', document: '20600000008', phone: '976100008', sector: 'Baños del Inca', address: 'Jr. Comercio N.° 608, Cajamarca', status: 'NORMAL', productCount: 136, monthlyOrders: 19, criticalStock: 0, lastSync: daysAgo(8) },
      { id: 9, name: 'Comercial el Inti', document: '20600000009', phone: '976100009', sector: 'San Sebastián', address: 'Jr. Comercio N.° 609, Cajamarca', status: 'CRÍTICO', productCount: 143, monthlyOrders: 21, criticalStock: 11, lastSync: daysAgo(9) },
      { id: 10, name: 'Distribuidora San Martín', document: '20600000010', phone: '976100010', sector: 'La Florida', address: 'Jr. Comercio N.° 610, Cajamarca', status: 'OBSERVACIÓN', productCount: 150, monthlyOrders: 23, criticalStock: 14, lastSync: daysAgo(10) },
      { id: 11, name: 'Comercial La Granjita', document: '20600000011', phone: '976100011', sector: 'Santa Apolonia', address: 'Jr. Comercio N.° 611, Cajamarca', status: 'NORMAL', productCount: 157, monthlyOrders: 25, criticalStock: 3, lastSync: daysAgo(11) },
      { id: 12, name: 'Tienda Costa del Sol', document: '20600000012', phone: '976100012', sector: 'Cajamarca Norte', address: 'Jr. Comercio N.° 612, Cajamarca', status: 'NORMAL', productCount: 164, monthlyOrders: 27, criticalStock: 0, lastSync: daysAgo(0) },
      { id: 13, name: 'Distribuidora los Olivos', document: '20600000013', phone: '976100013', sector: 'Cajamarca Sur', address: 'Jr. Comercio N.° 613, Cajamarca', status: 'NORMAL', productCount: 171, monthlyOrders: 4, criticalStock: 1, lastSync: daysAgo(1) },
      { id: 14, name: 'Comercial Virgen del Carmen', document: '20600000014', phone: '976100014', sector: 'Cajamarca Centro', address: 'Jr. Comercio N.° 614, Cajamarca', status: 'NORMAL', productCount: 178, monthlyOrders: 6, criticalStock: 2, lastSync: daysAgo(2) },
      { id: 15, name: 'Negocios el Valle', document: '20600000015', phone: '976100015', sector: 'Baños del Inca', address: 'Jr. Comercio N.° 615, Cajamarca', status: 'OBSERVACIÓN', productCount: 185, monthlyOrders: 8, criticalStock: 13, lastSync: daysAgo(3) },
      { id: 16, name: 'Distribuidora Cajamarca Norte', document: '20600000016', phone: '976100016', sector: 'San Sebastián', address: 'Jr. Comercio N.° 616, Cajamarca', status: 'NORMAL', productCount: 192, monthlyOrders: 10, criticalStock: 0, lastSync: daysAgo(4) },
      { id: 17, name: 'Comercial San Pedro', document: '20600000017', phone: '976100017', sector: 'La Florida', address: 'Jr. Comercio N.° 617, Cajamarca', status: 'NORMAL', productCount: 199, monthlyOrders: 12, criticalStock: 1, lastSync: daysAgo(5) },
      { id: 18, name: 'Tienda Santa Apolonia', document: '20600000018', phone: '976100018', sector: 'Santa Apolonia', address: 'Jr. Comercio N.° 618, Cajamarca', status: 'CRÍTICO', productCount: 206, monthlyOrders: 14, criticalStock: 6, lastSync: daysAgo(6) },
      { id: 19, name: 'Comercial las Torrecitas', document: '20600000019', phone: '976100019', sector: 'Cajamarca Norte', address: 'Jr. Comercio N.° 619, Cajamarca', status: 'NORMAL', productCount: 213, monthlyOrders: 16, criticalStock: 3, lastSync: daysAgo(7) },
      { id: 20, name: 'Negocios Cajamarca Sur', document: '20600000020', phone: '976100020', sector: 'Cajamarca Sur', address: 'Jr. Comercio N.° 620, Cajamarca', status: 'OBSERVACIÓN', productCount: 220, monthlyOrders: 18, criticalStock: 12, lastSync: daysAgo(8) },
      { id: 21, name: 'Comercial el Mercado', document: '20600000021', phone: '976100021', sector: 'Cajamarca Centro', address: 'Jr. Comercio N.° 621, Cajamarca', status: 'NORMAL', productCount: 227, monthlyOrders: 20, criticalStock: 1, lastSync: daysAgo(9) },
      { id: 22, name: 'Distribuidora Señora de Fátima', document: '20600000022', phone: '976100022', sector: 'Baños del Inca', address: 'Jr. Comercio N.° 622, Cajamarca', status: 'NORMAL', productCount: 234, monthlyOrders: 22, criticalStock: 2, lastSync: daysAgo(10) },
      { id: 23, name: 'Tienda los Pinos', document: '20600000023', phone: '976100023', sector: 'San Sebastián', address: 'Jr. Comercio N.° 623, Cajamarca', status: 'NORMAL', productCount: 241, monthlyOrders: 24, criticalStock: 3, lastSync: daysAgo(11) },
      { id: 24, name: 'Comercial El Dorado', document: '20600000024', phone: '976100024', sector: 'La Florida', address: 'Jr. Comercio N.° 624, Cajamarca', status: 'NORMAL', productCount: 248, monthlyOrders: 26, criticalStock: 0, lastSync: daysAgo(0) },
      { id: 25, name: 'Distribuidora Cajamarca Express', document: '20600000025', phone: '976100025', sector: 'Santa Apolonia', address: 'Jr. Comercio N.° 625, Cajamarca', status: 'OBSERVACIÓN', productCount: 255, monthlyOrders: 3, criticalStock: 11, lastSync: daysAgo(1) },
      { id: 26, name: 'Comercial San Miguel', document: '20600000026', phone: '976100026', sector: 'Cajamarca Norte', address: 'Jr. Comercio N.° 626, Cajamarca', status: 'NORMAL', productCount: 82, monthlyOrders: 5, criticalStock: 2, lastSync: daysAgo(2) },
      { id: 27, name: 'Tienda Bella Unión', document: '20600000027', phone: '976100027', sector: 'Cajamarca Sur', address: 'Jr. Comercio N.° 627, Cajamarca', status: 'CRÍTICO', productCount: 89, monthlyOrders: 7, criticalStock: 1, lastSync: daysAgo(3) },
      { id: 28, name: 'Distribuidora El Asador', document: '20600000028', phone: '976100028', sector: 'Cajamarca Centro', address: 'Jr. Comercio N.° 628, Cajamarca', status: 'NORMAL', productCount: 96, monthlyOrders: 9, criticalStock: 0, lastSync: daysAgo(4) },
      { id: 29, name: 'Comercial Kusi', document: '20600000029', phone: '976100029', sector: 'Baños del Inca', address: 'Jr. Comercio N.° 629, Cajamarca', status: 'NORMAL', productCount: 103, monthlyOrders: 11, criticalStock: 1, lastSync: daysAgo(5) },
      { id: 30, name: 'Comercial Don Rufino', document: '20600000030', phone: '976100030', sector: 'San Sebastián', address: 'Jr. Comercio N.° 630, Cajamarca', status: 'OBSERVACIÓN', productCount: 110, monthlyOrders: 13, criticalStock: 10, lastSync: daysAgo(6) },
      { id: 31, name: 'Tienda Santa Elena', document: '20600000031', phone: '976100031', sector: 'La Florida', address: 'Jr. Comercio N.° 631, Cajamarca', status: 'NORMAL', productCount: 117, monthlyOrders: 15, criticalStock: 3, lastSync: daysAgo(7) },
      { id: 32, name: 'Comercial San Francisco', document: '20600000032', phone: '976100032', sector: 'Santa Apolonia', address: 'Jr. Comercio N.° 632, Cajamarca', status: 'NORMAL', productCount: 124, monthlyOrders: 17, criticalStock: 0, lastSync: daysAgo(8) },
      { id: 33, name: 'Negocios Jesús', document: '20600000033', phone: '976100033', sector: 'Cajamarca Norte', address: 'Jr. Comercio N.° 633, Cajamarca', status: 'NORMAL', productCount: 131, monthlyOrders: 19, criticalStock: 1, lastSync: daysAgo(9) },
      { id: 34, name: 'Comercial San Juan', document: '20600000034', phone: '976100034', sector: 'Cajamarca Sur', address: 'Jr. Comercio N.° 634, Cajamarca', status: 'NORMAL', productCount: 138, monthlyOrders: 21, criticalStock: 2, lastSync: daysAgo(10) },
      { id: 35, name: 'Comercial San Bernardo', document: '20600000035', phone: '976100035', sector: 'Cajamarca Centro', address: 'Jr. Comercio N.° 635, Cajamarca', status: 'OBSERVACIÓN', productCount: 145, monthlyOrders: 23, criticalStock: 9, lastSync: daysAgo(11) },
      { id: 36, name: 'Distribuidora el Milagro', document: '20600000036', phone: '976100036', sector: 'Baños del Inca', address: 'Jr. Comercio N.° 636, Cajamarca', status: 'CRÍTICO', productCount: 152, monthlyOrders: 25, criticalStock: 12, lastSync: daysAgo(0) },
      { id: 37, name: 'Tienda Caxas Market', document: '20600000037', phone: '976100037', sector: 'San Sebastián', address: 'Jr. Comercio N.° 637, Cajamarca', status: 'NORMAL', productCount: 159, monthlyOrders: 27, criticalStock: 1, lastSync: daysAgo(1) },
      { id: 38, name: 'Comercial el Norteño', document: '20600000038', phone: '976100038', sector: 'La Florida', address: 'Jr. Comercio N.° 638, Cajamarca', status: 'NORMAL', productCount: 166, monthlyOrders: 4, criticalStock: 2, lastSync: daysAgo(2) },
      { id: 39, name: 'Distribuidora los Andes', document: '20600000039', phone: '976100039', sector: 'Santa Apolonia', address: 'Jr. Comercio N.° 639, Cajamarca', status: 'NORMAL', productCount: 173, monthlyOrders: 6, criticalStock: 3, lastSync: daysAgo(3) },
      { id: 40, name: 'Comercial El Pastor', document: '20600000040', phone: '976100040', sector: 'Cajamarca Norte', address: 'Jr. Comercio N.° 640, Cajamarca', status: 'OBSERVACIÓN', productCount: 180, monthlyOrders: 8, criticalStock: 8, lastSync: daysAgo(4) },
      { id: 41, name: 'Tienda Tembladera', document: '20600000041', phone: '976100041', sector: 'Cajamarca Sur', address: 'Jr. Comercio N.° 641, Cajamarca', status: 'NORMAL', productCount: 187, monthlyOrders: 10, criticalStock: 1, lastSync: daysAgo(5) },
      { id: 42, name: 'Distribuidora San Ramón', document: '20600000042', phone: '976100042', sector: 'Cajamarca Centro', address: 'Jr. Comercio N.° 642, Cajamarca', status: 'NORMAL', productCount: 194, monthlyOrders: 12, criticalStock: 2, lastSync: daysAgo(6) },
      { id: 43, name: 'Comercial San Luis', document: '20600000043', phone: '976100043', sector: 'Baños del Inca', address: 'Jr. Comercio N.° 643, Cajamarca', status: 'NORMAL', productCount: 201, monthlyOrders: 14, criticalStock: 3, lastSync: daysAgo(7) },
      { id: 44, name: 'Tienda El Salvador', document: '20600000044', phone: '976100044', sector: 'San Sebastián', address: 'Jr. Comercio N.° 644, Cajamarca', status: 'NORMAL', productCount: 208, monthlyOrders: 16, criticalStock: 0, lastSync: daysAgo(8) }
    ],
    inventory: [
      { id: 1, productId: 2, type: 'ENTRADA', qty: 20, date: daysAgo(7), reason: 'Compra a proveedor', user: 'Jhordan' },
      { id: 2, productId: 3, type: 'SALIDA', qty: 6, date: daysAgo(5), reason: 'Pedido PED-1001', user: 'Jhordan' },
      { id: 3, productId: 1, type: 'SALIDA', qty: 8, date: daysAgo(3), reason: 'Pedido PED-1002', user: 'Jhordan' },
      { id: 4, productId: 5, type: 'AJUSTE', qty: -2, date: daysAgo(1), reason: 'Diferencia en conteo físico', user: 'Jhordan' }
    ],
    orders: [
      { id: 1, number: 'PED-1001', customerId: 1, date: daysAgo(5), status: 'ENTREGADO', items: [{ productId: 3, qty: 6, price: 11 }, { productId: 2, qty: 4, price: 9.5 }], total: 104, createdBy: 'Jhordan', durationSeconds: 165 },
      { id: 2, number: 'PED-1002', customerId: 2, date: daysAgo(3), status: 'ENTREGADO', items: [{ productId: 1, qty: 8, price: 23.9 }, { productId: 6, qty: 10, price: 4.4 }], total: 235.2, createdBy: 'Jhordan', durationSeconds: 138 },
      { id: 3, number: 'PED-1003', customerId: 3, date: daysAgo(1), status: 'EN_PREPARACION', items: [{ productId: 4, qty: 5, price: 11.5 }, { productId: 2, qty: 3, price: 9.5 }], total: 86, createdBy: 'Jhordan', durationSeconds: 104 }
    ],
    salesHistory: [
      { productId: 1, week: 1, qty: 18 }, { productId: 1, week: 2, qty: 20 }, { productId: 1, week: 3, qty: 22 }, { productId: 1, week: 4, qty: 25 },
      { productId: 2, week: 1, qty: 12 }, { productId: 2, week: 2, qty: 15 }, { productId: 2, week: 3, qty: 14 }, { productId: 2, week: 4, qty: 17 },
      { productId: 3, week: 1, qty: 8 }, { productId: 3, week: 2, qty: 10 }, { productId: 3, week: 3, qty: 13 }, { productId: 3, week: 4, qty: 15 },
      { productId: 4, week: 1, qty: 11 }, { productId: 4, week: 2, qty: 9 }, { productId: 4, week: 3, qty: 12 }, { productId: 4, week: 4, qty: 10 },
      { productId: 5, week: 1, qty: 13 }, { productId: 5, week: 2, qty: 15 }, { productId: 5, week: 3, qty: 17 }, { productId: 5, week: 4, qty: 18 },
      { productId: 6, week: 1, qty: 20 }, { productId: 6, week: 2, qty: 18 }, { productId: 6, week: 3, qty: 22 }, { productId: 6, week: 4, qty: 19 }
    ],
    audit: [
      { id: 1, date: new Date().toISOString(), action: 'Sistema inicializado con datos de trabajo', user: 'Sistema' }
    ],
    indicators: { preOrderMinutes: 8.4, postOrderMinutes: 2.6, preStockAccuracy: 71, postStockAccuracy: 96, preErrors: 18, postErrors: 5, preTracking: 48, postTracking: 94 }
  });

  let db = loadDB();
  let session = loadSession();
  let currentView = 'dashboard';
  let productSearch = '';
  let orderSearch = '';
  let companySearch = '';
  let movementSearch = '';
  let orderDraftStartedAt = null;

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const money = n => `${db.company.currency} ${Number(n || 0).toFixed(2)}`;
  const formatDate = value => new Intl.DateTimeFormat('es-PE', { dateStyle: 'medium' }).format(new Date(value));
  const formatDateTime = value => new Intl.DateTimeFormat('es-PE', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value));
  const uid = arr => arr.length ? Math.max(...arr.map(x => Number(x.id) || 0)) + 1 : 1;
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const categoryImage = category => CATEGORY_IMAGES[category] || CATEGORY_IMAGES.Otros;

  function daysAgo(n) { const d = new Date(); d.setDate(d.getDate() - n); return d.toISOString(); }
  function loadDB() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || seed(); } catch { return seed(); } }
  function saveDB() { localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); }
  function loadSession() { try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)); } catch { return null; } }
  function saveSession() { sessionStorage.setItem(SESSION_KEY, JSON.stringify(session)); }
  function audit(action) { db.audit.unshift({ id: uid(db.audit), date: new Date().toISOString(), action, user: session?.name || 'Sistema' }); db.audit = db.audit.slice(0, 100); saveDB(); }
  function toast(message, type = 'success') { const el = $('#toast'); el.textContent = message; el.className = `toast show ${type}`; clearTimeout(window.__toast); window.__toast = setTimeout(() => el.className = 'toast', 2600); }

  function init() {
    if (!localStorage.getItem(STORAGE_KEY)) saveDB();
    if (localStorage.getItem(THEME_KEY) === 'dark') document.body.classList.add('dark');
    bindGlobalEvents();
    session ? showApp() : showLogin();
  }

  function bindGlobalEvents() {
    $('#loginForm').addEventListener('submit', login);
    $('#togglePassword').addEventListener('click', () => { const i = $('#loginPassword'); i.type = i.type === 'password' ? 'text' : 'password'; });
    $('#logoutButton').addEventListener('click', logout);
    $('#userMenuButton').addEventListener('click', () => $('#userDropdown').classList.toggle('hidden'));
    $('#themeButton').addEventListener('click', toggleTheme);
    $('#menuButton').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
    $('#mainNav').addEventListener('click', e => { const btn = e.target.closest('[data-view]'); if (btn) navigate(btn.dataset.view); });
    $('#assistantFab').addEventListener('click', toggleFloatingAssistant);
    $('#assistantClose').addEventListener('click', closeFloatingAssistant);
    $('#assistantClear').addEventListener('click', resetFloatingAssistant);
    $('#assistantForm').addEventListener('submit', e => { e.preventDefault(); askFloatingAssistant($('#assistantInput').value); });
    $$('[data-assistant-prompt]').forEach(btn => btn.addEventListener('click', () => askFloatingAssistant(btn.dataset.assistantPrompt)));
    document.addEventListener('click', e => {
      if (!e.target.closest('.user-menu')) $('#userDropdown').classList.add('hidden');
      if (window.innerWidth <= 800 && !e.target.closest('.sidebar') && !e.target.closest('#menuButton')) $('#sidebar').classList.remove('open');
    });
  }

  function login(e) {
    e.preventDefault();
    const email = $('#loginEmail').value.trim().toLowerCase();
    const password = $('#loginPassword').value;
    const user = db.users.find(u => u.email.toLowerCase() === email && u.password === password);
    if (!user) return toast('Credenciales incorrectas', 'error');
    session = { id: user.id, name: user.name, email: user.email, role: user.role };
    saveSession(); audit('Inicio de sesión'); showApp();
  }
  function logout() { audit('Cierre de sesión'); session = null; sessionStorage.removeItem(SESSION_KEY); showLogin(); }
  function showLogin() {
    $('#loginView').classList.remove('hidden');
    $('#appView').classList.add('hidden');
    $('#assistantWidget').classList.add('hidden');
    closeFloatingAssistant();
    const clearCredentials = () => {
      $('#loginEmail').value = '';
      $('#loginPassword').value = '';
      $('#loginPassword').type = 'password';
    };
    clearCredentials();
    window.setTimeout(clearCredentials, 80);
  }
  function showApp() {
    $('#loginView').classList.add('hidden');
    $('#appView').classList.remove('hidden');
    $('#assistantWidget').classList.remove('hidden');
    $('#userName').textContent = session.name;
    $('#userRole').textContent = session.role;
    $('#userAvatar').textContent = session.name.split(' ').map(x => x[0]).slice(0,2).join('').toUpperCase();
    $$('.admin-only').forEach(el => el.classList.toggle('hidden', session.role !== 'ADMIN'));
    navigate(session.role === 'VENDEDOR' && currentView === 'settings' ? 'dashboard' : currentView);
  }
  function toggleTheme() { document.body.classList.toggle('dark'); localStorage.setItem(THEME_KEY, document.body.classList.contains('dark') ? 'dark' : 'light'); }

  const pageMeta = {
    dashboard: ['Dashboard', 'Resumen general de las empresas monitoreadas'], companies: ['Empresas', 'Muestra de 44 pequeñas empresas monitoreadas'], products: ['Productos', 'Catálogo, precios y códigos de barras'], inventory: ['Inventario', 'Entradas, salidas, ajustes y trazabilidad'], orders: ['Pedidos', 'Registro y seguimiento de pedidos'], reports: ['Reportes', 'Indicadores de operación y resultados de tesis'], ai: ['Inteligencia artificial', 'Predicción, reposición y asistente virtual'], settings: ['Configuración', 'Datos, respaldo y migración futura']
  };

  function navigate(view) {
    if (view === 'settings' && session.role !== 'ADMIN') view = 'dashboard';
    currentView = view;
    $$('.view').forEach(v => v.classList.remove('active-view')); $(`#${view}`).classList.add('active-view');
    $$('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === view));
    $('#pageTitle').textContent = pageMeta[view][0]; $('#pageSubtitle').textContent = pageMeta[view][1];
    renderCurrent();
  }
  function renderCurrent() {
    ({dashboard:renderDashboard,companies:renderCompanies,products:renderProducts,inventory:renderInventory,orders:renderOrders,reports:renderReports,ai:renderAI,settings:renderSettings}[currentView])();
  }

  function renderDashboard() {
    const low = db.products.filter(p => p.stock <= p.minStock && p.active);
    const openOrders = db.orders.filter(o => !['ENTREGADO','CANCELADO'].includes(o.status));
    const sales = db.orders.filter(o => o.status !== 'CANCELADO').reduce((s,o) => s + o.total, 0);
    const topProducts = productSales().slice(0,5);
    const weekly = [0,1,2,3,4,5,6].map(i => {
      const d = new Date(); d.setDate(d.getDate() - (6-i));
      const total = db.orders.filter(o => new Date(o.date).toDateString() === d.toDateString() && o.status !== 'CANCELADO').reduce((s,o)=>s+o.total,0);
      return { label: ['D','L','M','M','J','V','S'][d.getDay()], total };
    });
    const max = Math.max(...weekly.map(x=>x.total), 100);
    $('#dashboard').innerHTML = `
      <div class="grid stats-grid">
        ${statCard('Empresas monitoreadas',db.customers.length,'▦','Muestra de investigación','ok')}
        ${statCard('Productos activos',db.products.filter(p=>p.active).length,'▣','Catálogo disponible')}
        ${statCard('Stock bajo',low.length,'!','Requieren reposición','warn')}
        ${statCard('Pedidos abiertos',openOrders.length,'🛒','Pendientes de atención','danger')}
        ${statCard('Ventas acumuladas',money(sales),'↗','Pedidos no cancelados','ok')}
      </div>
      <div class="grid dashboard-grid">
        <div class="card"><div class="card-head"><div><h3>Ventas de los últimos 7 días</h3><p>Importe registrado por día</p></div></div>
          <div class="chart-bars">${weekly.map(x=>`<div class="bar-wrap"><div class="bar" data-value="${money(x.total)}" style="height:${Math.max(6,(x.total/max)*100)}%"></div>${x.label}</div>`).join('')}</div>
        </div>
        <div class="card"><div class="card-head"><div><h3>Alertas del inventario</h3><p>Prioridades detectadas</p></div><button class="link-button" data-go="ai">Ver IA</button></div>
          <div class="alert-list">${low.length ? low.slice(0,5).map(p=>`<div class="alert-item"><span class="alert-dot ${p.stock===0?'danger':''}"></span><div><strong>${escapeHtml(p.name)}</strong><span>Stock ${p.stock} / mínimo ${p.minStock}</span></div><span class="mini-badge">Reponer</span></div>`).join('') : '<div class="empty-state">No existen alertas activas.</div>'}</div>
        </div>
      </div>
      <div class="grid dashboard-grid" style="margin-top:18px">
        <div class="card"><div class="card-head"><div><h3>Productos con mayor movimiento</h3><p>Unidades vendidas</p></div></div>
          <div class="activity-list">${topProducts.map((x,i)=>`<div class="activity-item"><div class="stat-icon">${i+1}</div><div><strong>${escapeHtml(x.name)}</strong><span>${x.qty} unidades · ${money(x.amount)}</span></div></div>`).join('')}</div>
        </div>
        <div class="card"><div class="card-head"><div><h3>Actividad reciente</h3><p>Últimas acciones del sistema</p></div></div>
          <div class="activity-list">${db.audit.slice(0,6).map(a=>`<div class="activity-item"><span class="alert-dot ok"></span><div><strong>${escapeHtml(a.action)}</strong><span>${escapeHtml(a.user)} · ${formatDateTime(a.date)}</span></div></div>`).join('')}</div>
        </div>
      </div>`;
    $$('[data-go]', $('#dashboard')).forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.go)));
  }
  function statCard(label,value,icon,caption,kind=''){return `<div class="card stat-card"><div><small>${label}</small><h3>${value}</h3><p>${caption}</p></div><div class="stat-icon ${kind}">${icon}</div></div>`;}


  function renderCompanies() {
    const list = db.customers.filter(c => [c.name,c.document,c.phone,c.sector,c.status,c.address].join(' ').toLowerCase().includes(companySearch.toLowerCase()));
    const normal = db.customers.filter(c=>c.status==='NORMAL').length;
    const obs = db.customers.filter(c=>c.status==='OBSERVACIÓN').length;
    const critical = db.customers.filter(c=>c.status==='CRÍTICO').length;
    const totalProducts = db.customers.reduce((s,c)=>s+(c.productCount||0),0);
    $('#companies').innerHTML = `
      <div class="page-actions"><div class="section-title"><h2>Empresas monitoreadas</h2><p>Base de monitoreo de 44 pequeñas empresas de Cajamarca para gestión de pedidos y control de inventario.</p></div><div class="search-box"><input id="companySearch" placeholder="Buscar empresa, RUC, sector o estado" value="${escapeHtml(companySearch)}"></div></div>
      <div class="grid stats-grid">
        ${statCard('Total empresas',db.customers.length,'▦','Muestra registrada','ok')}
        ${statCard('Inventario normal',normal,'✓','Sin alertas graves','ok')}
        ${statCard('En observación',obs,'!','Requieren revisión','warn')}
        ${statCard('Críticas',critical,'⚠','Bajo stock recurrente','danger')}
      </div>
      <div class="card table-card" style="margin-top:18px"><div class="table-toolbar"><strong>Monitoreo por empresa</strong><span class="muted">${totalProducts} productos registrados en cartera</span></div><div class="table-wrap"><table><thead><tr><th>Empresa</th><th>RUC</th><th>Sector</th><th>Productos</th><th>Pedidos/mes</th><th>Stock crítico</th><th>Estado</th><th>Última sincronización</th></tr></thead><tbody>
        ${list.map(c=>`<tr><td><strong>${escapeHtml(c.name)}</strong><span class="muted">${escapeHtml(c.address||'Cajamarca')}</span></td><td>${escapeHtml(c.document)}</td><td>${escapeHtml(c.sector||'Cajamarca')}</td><td><strong>${c.productCount||0}</strong></td><td>${c.monthlyOrders||0}</td><td>${c.criticalStock||0}</td><td>${companyBadge(c.status)}</td><td>${formatDate(c.lastSync||new Date())}</td></tr>`).join('')||'<tr><td colspan="8" class="empty-state">No se encontraron empresas.</td></tr>'}
      </tbody></table></div></div>`;
    $('#companySearch').addEventListener('input', e=>{ companySearch=e.target.value; renderCompanies(); });
  }
  function companyBadge(status){
    if(status==='CRÍTICO') return '<span class="badge badge-danger">CRÍTICO</span>';
    if(status==='OBSERVACIÓN') return '<span class="badge badge-warning">OBSERVACIÓN</span>';
    return '<span class="badge badge-success">NORMAL</span>';
  }

  function renderProducts() {
    const list = db.products.filter(p => [p.name,p.code,p.barcode,p.category].join(' ').toLowerCase().includes(productSearch.toLowerCase()));
    $('#products').innerHTML = `
      <div class="page-actions"><div class="search-box"><input id="productSearch" placeholder="Buscar producto, código o categoría" value="${escapeHtml(productSearch)}"></div><div class="action-group"><button id="newProductBtn" class="btn btn-primary">＋ Nuevo producto</button></div></div>
      <div class="category-showcase">${db.categories.map(category => {
        const count = db.products.filter(product => product.category === category).length;
        return `<button class="category-card" type="button" data-category-filter="${escapeHtml(category)}">
          <img src="${categoryImage(category)}" alt="Categoría ${escapeHtml(category)}">
          <span><strong>${escapeHtml(category)}</strong><small>${count} producto${count === 1 ? '' : 's'}</small></span>
        </button>`;
      }).join('')}</div>
      <div class="card table-card"><div class="table-wrap"><table><thead><tr><th>Producto</th><th>Categoría</th><th>Precio</th><th>Stock</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>
        ${list.length ? list.map(p=>`<tr><td><div class="product-cell"><img src="${categoryImage(p.category)}" alt=""><div><strong>${escapeHtml(p.name)}</strong><span class="muted">${escapeHtml(p.code)} · ${escapeHtml(p.barcode)}</span></div></div></td><td><span class="category-pill">${escapeHtml(p.category)}</span></td><td><strong>${money(p.salePrice)}</strong><span class="muted">Costo ${money(p.purchasePrice)}</span></td><td><strong>${p.stock} ${escapeHtml(p.unit)}</strong><span class="muted">Mínimo ${p.minStock}</span></td><td>${p.active?'<span class="badge badge-success">ACTIVO</span>':'<span class="badge badge-neutral">INACTIVO</span>'}</td><td><div class="row-actions"><button class="btn btn-secondary btn-sm" data-edit-product="${p.id}">Editar</button><button class="btn btn-secondary btn-sm" data-label-product="${p.id}">Etiqueta</button><button class="btn btn-danger btn-sm" data-toggle-product="${p.id}">${p.active?'Desactivar':'Activar'}</button></div></td></tr>`).join('') : '<tr><td colspan="6" class="empty-state">No se encontraron productos.</td></tr>'}
      </tbody></table></div></div>`;
    $('#productSearch').addEventListener('input', e=>{ productSearch=e.target.value; renderProducts(); });
    $('#newProductBtn').addEventListener('click',()=>openProductModal());
    $$('[data-category-filter]').forEach(button => button.addEventListener('click', () => {
      productSearch = button.dataset.categoryFilter;
      renderProducts();
    }));
    $$('[data-edit-product]').forEach(b=>b.addEventListener('click',()=>openProductModal(Number(b.dataset.editProduct))));
    $$('[data-label-product]').forEach(b=>b.addEventListener('click',()=>openLabelModal(Number(b.dataset.labelProduct))));
    $$('[data-toggle-product]').forEach(b=>b.addEventListener('click',()=>toggleProduct(Number(b.dataset.toggleProduct))));
  }

  function openProductModal(id=null) {
    const p = id ? db.products.find(x=>x.id===id) : { code:`PROD-${String(uid(db.products)).padStart(3,'0')}`, barcode:generateBarcode(), name:'', category:db.categories[0], purchasePrice:0, salePrice:0, stock:0, minStock:5, unit:'Unidad', active:true };
    openModal(`${id?'Editar':'Nuevo'} producto`, `
      <form id="productForm" class="form-grid">
        <label>Código interno<input name="code" value="${escapeHtml(p.code)}" required></label>
        <label>Código de barras<input name="barcode" value="${escapeHtml(p.barcode)}" required></label>
        <label class="full">Nombre del producto<input name="name" value="${escapeHtml(p.name)}" required></label>
        <label>Categoría<select name="category">${db.categories.map(c=>`<option ${c===p.category?'selected':''}>${escapeHtml(c)}</option>`).join('')}</select></label>
        <label>Unidad de medida<input name="unit" value="${escapeHtml(p.unit)}" required></label>
        <label>Precio de compra<input name="purchasePrice" type="number" min="0" step="0.01" value="${p.purchasePrice}" required></label>
        <label>Precio de venta<input name="salePrice" type="number" min="0" step="0.01" value="${p.salePrice}" required></label>
        <label>Stock inicial<input name="stock" type="number" min="0" step="1" value="${p.stock}" ${id?'disabled':''} required></label>
        <label>Stock mínimo<input name="minStock" type="number" min="0" step="1" value="${p.minStock}" required></label>
      </form>`, `<button class="btn btn-secondary" data-close>Cancelar</button><button id="saveProduct" class="btn btn-primary">Guardar producto</button>`);
    $('#saveProduct').addEventListener('click',()=>{
      const form=$('#productForm'); if(!form.reportValidity()) return; const fd=new FormData(form);
      const obj={...p,code:fd.get('code').trim(),barcode:fd.get('barcode').trim(),name:fd.get('name').trim(),category:fd.get('category'),unit:fd.get('unit').trim(),purchasePrice:Number(fd.get('purchasePrice')),salePrice:Number(fd.get('salePrice')),minStock:Number(fd.get('minStock'))};
      if(db.products.some(x=>x.id!==id&&(x.code===obj.code||x.barcode===obj.barcode))) return toast('El código interno o código de barras ya existe','error');
      if(id){ Object.assign(p,obj); audit(`Producto actualizado: ${obj.name}`); } else { obj.id=uid(db.products); obj.stock=Number(fd.get('stock')); db.products.push(obj); audit(`Producto registrado: ${obj.name}`); }
      saveDB(); closeModal(); renderProducts(); toast('Producto guardado correctamente');
    });
  }
  function toggleProduct(id){const p=db.products.find(x=>x.id===id);p.active=!p.active;audit(`${p.active?'Activó':'Desactivó'} el producto ${p.name}`);saveDB();renderProducts();}
  function generateBarcode(){return '775'+String(Date.now()).slice(-10);}
  function barcodeHTML(code){return [...String(code)].map((ch,i)=>{const n=(ch.charCodeAt(0)+i)%4+1;return `<i style="width:${n}px;height:${48+((i*7)%26)}px"></i>`}).join('');}
  function openLabelModal(id){const p=db.products.find(x=>x.id===id);openModal('Etiqueta de producto',`<div class="label-preview print-area"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.code)}</span><div class="barcode">${barcodeHTML(p.barcode)}</div><span>${escapeHtml(p.barcode)}</span><strong style="font-size:20px;margin-top:8px">${money(p.salePrice)}</strong></div>`,`<button class="btn btn-secondary" data-close>Cerrar</button><button id="printLabel" class="btn btn-primary">Imprimir etiqueta</button>`);$('#printLabel').addEventListener('click',()=>window.print());}

  function renderInventory(){
    const list=db.inventory.filter(m=>{const p=db.products.find(x=>x.id===m.productId);return [p?.name,p?.code,m.type,m.reason].join(' ').toLowerCase().includes(movementSearch.toLowerCase())}).sort((a,b)=>new Date(b.date)-new Date(a.date));
    $('#inventory').innerHTML=`<div class="page-actions"><div class="search-box"><input id="movementSearch" placeholder="Buscar movimiento o producto" value="${escapeHtml(movementSearch)}"></div><div class="action-group"><button id="newMovementBtn" class="btn btn-primary">＋ Registrar movimiento</button></div></div>
    <div class="grid stats-grid">${statCard('Unidades en stock',db.products.reduce((s,p)=>s+p.stock,0),'▣','Existencia total')}${statCard('Entradas',db.inventory.filter(x=>x.type==='ENTRADA').length,'↓','Movimientos registrados','ok')}${statCard('Salidas',db.inventory.filter(x=>x.type==='SALIDA').length,'↑','Movimientos registrados','warn')}${statCard('Ajustes',db.inventory.filter(x=>x.type==='AJUSTE').length,'±','Correcciones de stock','danger')}</div>
    <div class="card table-card"><div class="table-wrap"><table><thead><tr><th>Fecha</th><th>Producto</th><th>Tipo</th><th>Cantidad</th><th>Motivo</th><th>Usuario</th></tr></thead><tbody>${list.map(m=>{const p=db.products.find(x=>x.id===m.productId);return `<tr><td>${formatDateTime(m.date)}</td><td><strong>${escapeHtml(p?.name||'Producto eliminado')}</strong><span class="muted">${escapeHtml(p?.code||'')}</span></td><td>${movementBadge(m.type)}</td><td><strong>${m.qty>0?'+':''}${m.qty}</strong></td><td>${escapeHtml(m.reason)}</td><td>${escapeHtml(m.user)}</td></tr>`}).join('')||'<tr><td colspan="6" class="empty-state">No hay movimientos.</td></tr>'}</tbody></table></div></div>`;
    $('#movementSearch').addEventListener('input',e=>{movementSearch=e.target.value;renderInventory()});$('#newMovementBtn').addEventListener('click',openMovementModal);
  }
  function movementBadge(type){const cls=type==='ENTRADA'?'badge-success':type==='SALIDA'?'badge-warning':'badge-info';return `<span class="badge ${cls}">${type}</span>`}
  function openMovementModal(){openModal('Registrar movimiento de inventario',`<form id="movementForm" class="form-grid"><label class="full">Producto<select name="productId">${db.products.filter(p=>p.active).map(p=>`<option value="${p.id}">${escapeHtml(p.name)} — Stock ${p.stock}</option>`).join('')}</select></label><label>Tipo<select name="type"><option>ENTRADA</option><option>SALIDA</option><option>AJUSTE</option></select></label><label>Cantidad<input name="qty" type="number" min="1" step="1" value="1" required></label><label class="full">Motivo<textarea name="reason" placeholder="Ej.: compra a proveedor, merma, conteo físico..." required></textarea></label></form>`,`<button class="btn btn-secondary" data-close>Cancelar</button><button id="saveMovement" class="btn btn-primary">Registrar</button>`);$('#saveMovement').addEventListener('click',()=>{const f=$('#movementForm');if(!f.reportValidity())return;const fd=new FormData(f);const p=db.products.find(x=>x.id===Number(fd.get('productId')));const type=fd.get('type');const qty=Number(fd.get('qty'));let delta=type==='ENTRADA'?qty:type==='SALIDA'?-qty:qty;if(type==='SALIDA'&&p.stock<qty)return toast('Stock insuficiente para registrar la salida','error');p.stock+=delta;db.inventory.unshift({id:uid(db.inventory),productId:p.id,type,qty:delta,date:new Date().toISOString(),reason:fd.get('reason').trim(),user:session.name});audit(`Movimiento ${type} de ${Math.abs(delta)} unidades en ${p.name}`);saveDB();closeModal();renderInventory();toast('Movimiento registrado');});}

  function renderOrders(){
    const list=db.orders.filter(o=>{const c=db.customers.find(x=>x.id===o.customerId);return [o.number,c?.name,o.status].join(' ').toLowerCase().includes(orderSearch.toLowerCase())}).sort((a,b)=>new Date(b.date)-new Date(a.date));
    $('#orders').innerHTML=`<div class="page-actions"><div class="search-box"><input id="orderSearch" placeholder="Buscar pedido, cliente o estado" value="${escapeHtml(orderSearch)}"></div><div class="action-group"><button id="newOrderBtn" class="btn btn-primary">＋ Nuevo pedido</button></div></div>
    <div class="card table-card"><div class="table-wrap"><table><thead><tr><th>Pedido</th><th>Cliente</th><th>Fecha</th><th>Estado</th><th>Total</th><th>Tiempo</th><th>Acciones</th></tr></thead><tbody>${list.map(o=>{const c=db.customers.find(x=>x.id===o.customerId);return `<tr><td><strong>${escapeHtml(o.number)}</strong><span class="muted">${o.items.reduce((s,i)=>s+i.qty,0)} unidades</span></td><td>${escapeHtml(c?.name||'Sin cliente')}</td><td>${formatDate(o.date)}</td><td>${statusBadge(o.status)}</td><td><strong>${money(o.total)}</strong></td><td>${Math.floor(o.durationSeconds/60)}m ${o.durationSeconds%60}s</td><td><div class="row-actions"><button class="btn btn-secondary btn-sm" data-view-order="${o.id}">Ver</button>${!['ENTREGADO','CANCELADO'].includes(o.status)?`<button class="btn btn-primary btn-sm" data-advance-order="${o.id}">Avanzar</button>`:''}</div></td></tr>`}).join('')||'<tr><td colspan="7" class="empty-state">No hay pedidos registrados.</td></tr>'}</tbody></table></div></div>`;
    $('#orderSearch').addEventListener('input',e=>{orderSearch=e.target.value;renderOrders()});$('#newOrderBtn').addEventListener('click',openOrderModal);$$('[data-view-order]').forEach(b=>b.addEventListener('click',()=>openOrderDetail(Number(b.dataset.viewOrder))));$$('[data-advance-order]').forEach(b=>b.addEventListener('click',()=>advanceOrder(Number(b.dataset.advanceOrder))));
  }
  function statusBadge(s){const map={REGISTRADO:'badge-info',CONFIRMADO:'badge-info',EN_PREPARACION:'badge-warning',LISTO:'badge-warning',ENVIADO:'badge-info',ENTREGADO:'badge-success',CANCELADO:'badge-danger'};return `<span class="badge ${map[s]||'badge-neutral'}">${s.replaceAll('_',' ')}</span>`}
  function openOrderModal(){
    orderDraftStartedAt=Date.now();
    openModal('Registrar nuevo pedido',`<form id="orderForm"><div class="form-grid"><label>Cliente<select name="customerId">${db.customers.map(c=>`<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('')}</select></label><label>Estado inicial<select name="status"><option>REGISTRADO</option><option>CONFIRMADO</option></select></label></div><h4>Detalle del pedido</h4><div id="orderLines" class="order-lines"></div><button id="addOrderLine" type="button" class="btn btn-secondary btn-sm" style="margin-top:10px">＋ Agregar producto</button><div class="order-total"><span>Total:</span><strong id="orderTotal">${money(0)}</strong></div></form>`,`<button class="btn btn-secondary" data-close>Cancelar</button><button id="saveOrder" class="btn btn-primary">Guardar pedido</button>`);
    addOrderLine();$('#addOrderLine').addEventListener('click',addOrderLine);$('#saveOrder').addEventListener('click',saveOrder);
  }
  function addOrderLine(){const root=$('#orderLines');const div=document.createElement('div');div.className='order-line';div.innerHTML=`<select class="line-product">${db.products.filter(p=>p.active&&p.stock>0).map(p=>`<option value="${p.id}">${escapeHtml(p.name)} (Stock ${p.stock})</option>`).join('')}</select><input class="line-qty" type="number" min="1" step="1" value="1"><input class="line-price" type="number" min="0" step="0.01"><button type="button" class="btn btn-danger btn-sm">Quitar</button>`;root.appendChild(div);const product=div.querySelector('.line-product'),qty=div.querySelector('.line-qty'),price=div.querySelector('.line-price');const sync=()=>{const p=db.products.find(x=>x.id===Number(product.value));price.value=p?.salePrice||0;recalcOrder()};product.addEventListener('change',sync);qty.addEventListener('input',recalcOrder);price.addEventListener('input',recalcOrder);div.querySelector('button').addEventListener('click',()=>{div.remove();recalcOrder()});sync();}
  function recalcOrder(){const total=$$('.order-line').reduce((s,row)=>s+Number($('.line-qty',row).value||0)*Number($('.line-price',row).value||0),0);if($('#orderTotal'))$('#orderTotal').textContent=money(total);}
  function saveOrder(){const f=$('#orderForm');const rows=$$('.order-line');if(!rows.length)return toast('Agrega al menos un producto','error');const items=[];for(const row of rows){const productId=Number($('.line-product',row).value),qty=Number($('.line-qty',row).value),price=Number($('.line-price',row).value),p=db.products.find(x=>x.id===productId);if(qty<=0)return toast('La cantidad debe ser mayor que cero','error');const already=items.filter(i=>i.productId===productId).reduce((s,i)=>s+i.qty,0);if(qty+already>p.stock)return toast(`Stock insuficiente para ${p.name}`,'error');items.push({productId,qty,price});}const fd=new FormData(f),id=uid(db.orders),order={id,number:`PED-${1000+id}`,customerId:Number(fd.get('customerId')),date:new Date().toISOString(),status:fd.get('status'),items,total:items.reduce((s,i)=>s+i.qty*i.price,0),createdBy:session.name,durationSeconds:Math.max(1,Math.round((Date.now()-orderDraftStartedAt)/1000))};items.forEach(i=>{const p=db.products.find(x=>x.id===i.productId);p.stock-=i.qty;db.inventory.unshift({id:uid(db.inventory),productId:p.id,type:'SALIDA',qty:-i.qty,date:order.date,reason:`Pedido ${order.number}`,user:session.name});});db.orders.push(order);audit(`Pedido registrado: ${order.number}`);saveDB();closeModal();renderOrders();toast('Pedido registrado y stock actualizado');}
  function advanceOrder(id){const o=db.orders.find(x=>x.id===id),flow=['REGISTRADO','CONFIRMADO','EN_PREPARACION','LISTO','ENVIADO','ENTREGADO'];const next=flow[Math.min(flow.indexOf(o.status)+1,flow.length-1)];o.status=next;audit(`Pedido ${o.number} actualizado a ${next}`);saveDB();renderOrders();toast(`Pedido actualizado a ${next.replaceAll('_',' ')}`);}
  function openOrderDetail(id){const o=db.orders.find(x=>x.id===id),c=db.customers.find(x=>x.id===o.customerId);openModal(`Detalle ${o.number}`,`<div class="grid two-col"><div><div class="metric-row"><span>Cliente</span><strong>${escapeHtml(c?.name||'')}</strong></div><div class="metric-row"><span>Fecha</span><strong>${formatDateTime(o.date)}</strong></div><div class="metric-row"><span>Estado</span><strong>${statusBadge(o.status)}</strong></div></div><div><div class="metric-row"><span>Registrado por</span><strong>${escapeHtml(o.createdBy)}</strong></div><div class="metric-row"><span>Tiempo de registro</span><strong>${o.durationSeconds} segundos</strong></div><div class="metric-row"><span>Total</span><strong>${money(o.total)}</strong></div></div></div><div class="table-wrap" style="margin-top:16px"><table><thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr></thead><tbody>${o.items.map(i=>{const p=db.products.find(x=>x.id===i.productId);return `<tr><td>${escapeHtml(p?.name||'')}</td><td>${i.qty}</td><td>${money(i.price)}</td><td>${money(i.qty*i.price)}</td></tr>`}).join('')}</tbody></table></div>`,`<button class="btn btn-secondary" data-close>Cerrar</button>`);}

  function renderReports(){
    const i=db.indicators; const sales=productSales();
    $('#reports').innerHTML=`<div class="page-actions"><div class="section-title"><h2>Resultados e indicadores</h2><p>Comparación pretest y postest para la investigación.</p></div><div class="action-group"><button id="exportOrders" class="btn btn-secondary">Exportar pedidos CSV</button><button id="exportInventory" class="btn btn-secondary">Exportar inventario CSV</button></div></div>
      <div class="grid stats-grid">${statCard('Empresas monitoreadas',db.customers.length,'▦','Muestra: 44 empresas','ok')}${statCard('Tiempo de registro',`${i.postOrderMinutes} min`,'⏱',`Antes: ${i.preOrderMinutes} min`,'ok')}${statCard('Actualización de stock',`${i.postStockAccuracy}%`,'✓',`Antes: ${i.preStockAccuracy}%`,'ok')}${statCard('Errores de inventario',i.postErrors,'! ',`Antes: ${i.preErrors}`,'warn')}${statCard('Seguimiento de pedidos',`${i.postTracking}%`,'↗',`Antes: ${i.preTracking}%`,'ok')}</div>
      <div class="grid two-col"><div class="card"><div class="card-head"><div><h3>Mejora por indicador</h3><p>Variación porcentual de los resultados evaluados</p></div></div>${indicatorProgress('Reducción del tiempo',Math.round((1-i.postOrderMinutes/i.preOrderMinutes)*100))}${indicatorProgress('Precisión del stock',i.postStockAccuracy)}${indicatorProgress('Reducción de errores',Math.round((1-i.postErrors/i.preErrors)*100))}${indicatorProgress('Seguimiento completo',i.postTracking)}</div>
      <div class="card"><div class="card-head"><div><h3>Ventas por producto</h3><p>Pedidos registrados</p></div></div><div class="activity-list">${sales.slice(0,6).map(x=>`<div class="activity-item"><span class="alert-dot ok"></span><div><strong>${escapeHtml(x.name)}</strong><span>${x.qty} unidades</span></div><strong style="margin-left:auto">${money(x.amount)}</strong></div>`).join('')}</div></div></div>
      <div class="card table-card" style="margin-top:18px"><div class="table-toolbar"><strong>Kardex resumido</strong><span class="muted">${db.inventory.length} movimientos</span></div><div class="table-wrap"><table><thead><tr><th>Producto</th><th>Entradas</th><th>Salidas</th><th>Ajustes</th><th>Stock actual</th></tr></thead><tbody>${db.products.map(p=>{const m=db.inventory.filter(x=>x.productId===p.id);return `<tr><td>${escapeHtml(p.name)}</td><td>${m.filter(x=>x.type==='ENTRADA').reduce((s,x)=>s+Math.abs(x.qty),0)}</td><td>${m.filter(x=>x.type==='SALIDA').reduce((s,x)=>s+Math.abs(x.qty),0)}</td><td>${m.filter(x=>x.type==='AJUSTE').reduce((s,x)=>s+x.qty,0)}</td><td><strong>${p.stock}</strong></td></tr>`}).join('')}</tbody></table></div></div>`;
    $('#exportOrders').addEventListener('click',exportOrdersCSV);$('#exportInventory').addEventListener('click',exportInventoryCSV);
  }
  function indicatorProgress(label,value){return `<div class="metric-row"><span>${label}</span><strong>${value}%</strong></div><div class="progress"><span style="width:${Math.min(100,Math.max(0,value))}%"></span></div>`}
  function productSales(){return db.products.map(p=>{const items=db.orders.filter(o=>o.status!=='CANCELADO').flatMap(o=>o.items).filter(i=>i.productId===p.id);return {name:p.name,qty:items.reduce((s,i)=>s+i.qty,0),amount:items.reduce((s,i)=>s+i.qty*i.price,0)}}).sort((a,b)=>b.qty-a.qty)}
  function exportOrdersCSV(){const rows=[['Pedido','Cliente','Fecha','Estado','Total','Tiempo_segundos'],...db.orders.map(o=>[o.number,db.customers.find(c=>c.id===o.customerId)?.name||'',o.date,o.status,o.total,o.durationSeconds])];downloadCSV('pedidos_caxasia.csv',rows)}
  function exportInventoryCSV(){const rows=[['Codigo','Producto','Categoria','Stock','Stock_minimo','Precio_venta'],...db.products.map(p=>[p.code,p.name,p.category,p.stock,p.minStock,p.salePrice])];downloadCSV('inventario_caxasia.csv',rows)}
  function downloadCSV(name,rows){const csv='\ufeff'+rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\n');downloadBlob(name,new Blob([csv],{type:'text/csv;charset=utf-8'}));}
  function downloadBlob(name,blob){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}

  function forecastFor(productId){const h=db.salesHistory.filter(x=>x.productId===productId).sort((a,b)=>a.week-b.week).slice(-4);if(!h.length)return 0;const weights=[.1,.2,.3,.4].slice(-h.length);const sum=weights.reduce((s,w)=>s+w,0);return Math.round(h.reduce((s,x,i)=>s+x.qty*weights[i],0)/sum)}
  function recommendations(){return db.products.map(p=>{const forecast=forecastFor(p.id),safety=Math.ceil(forecast*.25),suggested=Math.max(0,forecast+safety-p.stock);return {...p,forecast,safety,suggested}}).filter(x=>x.suggested>0).sort((a,b)=>b.suggested-a.suggested)}
  function anomalies(){return db.inventory.filter(m=>m.type==='SALIDA'&&Math.abs(m.qty)>=10).map(m=>({...m,product:db.products.find(p=>p.id===m.productId)}));}
  function renderAI(){const recs=recommendations(),anoms=anomalies();$('#ai').innerHTML=`<div class="ai-hero"><div><span class="eyebrow">MÓDULO INTELIGENTE</span><h2>Decisiones basadas en el comportamiento del inventario</h2><p>El sistema monitorea ${db.customers.length} empresas y utiliza promedio móvil ponderado, reglas de stock de seguridad y detección de movimientos atípicos para generar recomendaciones explicables.</p></div><div class="ai-orb">✦</div></div>
    <div class="grid three-col">${recs.slice(0,3).map(r=>`<div class="card recommendation-card"><span class="badge badge-info">REPOSICIÓN</span><h3>${escapeHtml(r.name)}</h3><p>Demanda estimada: ${r.forecast} unidades. Stock actual: ${r.stock}. Stock de seguridad: ${r.safety}.</p><div class="reco-number">Comprar ${r.suggested}</div><button class="btn btn-secondary btn-sm" data-ai-movement="${r.id}">Registrar entrada</button></div>`).join('')||'<div class="card">No hay recomendaciones de reposición.</div>'}</div>
    <div class="grid two-col" style="margin-top:18px"><div class="card"><div class="card-head"><div><h3>Predicción semanal por producto</h3><p>Promedio móvil ponderado de las últimas cuatro semanas</p></div></div><div class="activity-list">${db.products.map(p=>{const f=forecastFor(p.id);return `<div class="activity-item"><div><strong>${escapeHtml(p.name)}</strong><span>Stock actual ${p.stock}</span></div><strong style="margin-left:auto">${f} unid.</strong></div>`}).join('')}</div></div>
    <div class="card"><div class="card-head"><div><h3>Movimientos inusuales</h3><p>Salidas de 10 o más unidades</p></div></div><div class="alert-list">${anoms.length?anoms.map(a=>`<div class="alert-item"><span class="alert-dot danger"></span><div><strong>${escapeHtml(a.product?.name||'Producto')}</strong><span>${Math.abs(a.qty)} unidades · ${escapeHtml(a.reason)}</span></div></div>`).join(''):'<div class="empty-state">No se detectaron anomalías.</div>'}</div></div></div>
    <div class="card" style="margin-top:18px"><div class="card-head"><div><h3>Asistente virtual CaxasIA</h3><p>Consulta datos registrados en el sistema.</p></div></div><div class="quick-prompts"><button data-prompt="¿Qué productos tienen bajo stock?">Bajo stock</button><button data-prompt="¿Cuál es el producto más vendido?">Más vendido</button><button data-prompt="¿Qué debo reponer?">Reposición</button><button data-prompt="¿Cuántos pedidos están pendientes?">Pedidos pendientes</button></div><div class="chat-shell"><div id="chatMessages" class="chat-messages"><div class="message"><div class="bubble">Hola, soy CaxasIA. Puedo ayudarte con stock, pedidos, ventas y recomendaciones de reposición.</div></div></div><form id="chatForm" class="chat-input"><input id="chatInput" placeholder="Escribe una consulta..." autocomplete="off"><button class="btn btn-primary">Enviar</button></form></div></div>`;
    $$('[data-ai-movement]').forEach(b=>b.addEventListener('click',openMovementModal));$$('[data-prompt]').forEach(b=>b.addEventListener('click',()=>{ $('#chatInput').value=b.dataset.prompt;askAI(b.dataset.prompt)}));$('#chatForm').addEventListener('submit',e=>{e.preventDefault();askAI($('#chatInput').value)});
  }
  function askAI(question){const q=question.trim();if(!q)return;const box=$('#chatMessages');box.insertAdjacentHTML('beforeend',`<div class="message user"><div class="bubble">${escapeHtml(q)}</div></div>`);$('#chatInput').value='';const answer=aiAnswer(q);setTimeout(()=>{box.insertAdjacentHTML('beforeend',`<div class="message"><div class="bubble">${answer}</div></div>`);box.scrollTop=box.scrollHeight},180)}

  function toggleFloatingAssistant(){
    const panel=$('#assistantPanel');
    panel.classList.toggle('open');
    if(panel.classList.contains('open')) setTimeout(()=>$('#assistantInput').focus(),80);
  }
  function closeFloatingAssistant(){ $('#assistantPanel')?.classList.remove('open'); }
  function resetFloatingAssistant(){
    $('#assistantMessages').innerHTML='<div class="assistant-message assistant-bot"><div class="assistant-mini-avatar"><img src="assets/images/assistant-caxasia.png" alt=""></div><div class="assistant-bubble">Conversación reiniciada. ¿Qué deseas consultar sobre inventario, pedidos o ventas?</div></div>';
    $('#assistantInput').value='';
  }
  function askFloatingAssistant(question){
    const q=String(question||'').trim(); if(!q)return;
    const panel=$('#assistantPanel'),box=$('#assistantMessages'); panel.classList.add('open');
    box.insertAdjacentHTML('beforeend',`<div class="assistant-message assistant-user"><div class="assistant-bubble">${escapeHtml(q)}</div></div>`);
    $('#assistantInput').value='';
    const typingId=`typing-${Date.now()}`;
    box.insertAdjacentHTML('beforeend',`<div id="${typingId}" class="assistant-message assistant-bot"><div class="assistant-mini-avatar"><img src="assets/images/assistant-caxasia.png" alt=""></div><div class="assistant-bubble"><span class="assistant-typing"><i></i><i></i><i></i></span></div></div>`);
    box.scrollTop=box.scrollHeight;
    setTimeout(()=>{
      $(`#${typingId}`)?.remove();
      box.insertAdjacentHTML('beforeend',`<div class="assistant-message assistant-bot"><div class="assistant-mini-avatar"><img src="assets/images/assistant-caxasia.png" alt=""></div><div class="assistant-bubble">${aiAnswer(q)}</div></div>`);
      box.scrollTop=box.scrollHeight;
    },350);
  }

  function aiAnswer(q){
    const t=q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    const low=db.products.filter(p=>p.stock<=p.minStock);
    const openOrders=db.orders.filter(o=>!['ENTREGADO','CANCELADO'].includes(o.status));
    const validOrders=db.orders.filter(o=>o.status!=='CANCELADO');
    const salesTotal=validOrders.reduce((s,o)=>s+o.total,0);
    const inventoryValue=db.products.reduce((s,p)=>s+p.stock*p.purchasePrice,0);
    const saleValue=db.products.reduce((s,p)=>s+p.stock*p.salePrice,0);

    if(t.includes('hola')||t.includes('buenos dias')||t.includes('buenas tardes')||t.includes('buenas noches'))
      return `Hola, <strong>${escapeHtml(session?.name||'usuario')}</strong>. Puedo analizar los datos actuales de ${escapeHtml(db.company.name)}. Prueba preguntando por stock bajo, ventas, pedidos, reposición o un producto.`;

    if(t.includes('empresa')||t.includes('monitoreadas')||t.includes('muestra'))
      return `Actualmente se tienen <strong>${db.customers.length} empresas monitoreadas</strong>. En estado normal: <strong>${db.customers.filter(c=>c.status==='NORMAL').length}</strong>, en observación: <strong>${db.customers.filter(c=>c.status==='OBSERVACIÓN').length}</strong> y críticas: <strong>${db.customers.filter(c=>c.status==='CRÍTICO').length}</strong>. Puedes revisar el módulo Empresas para ver el detalle por negocio.`;

    if(t.includes('resumen')||t.includes('estado del negocio')||t.includes('como va el negocio'))
      return `Resumen actual: <strong>${db.products.length} productos</strong>, <strong>${low.length} con stock crítico</strong>, <strong>${openOrders.length} pedidos abiertos</strong> y ventas acumuladas por <strong>${money(salesTotal)}</strong>. El inventario disponible tiene un costo aproximado de <strong>${money(inventoryValue)}</strong>.`;

    if(t.includes('bajo stock')||t.includes('stock bajo')||t.includes('agotado')||t.includes('critico'))
      return low.length?`Encontré <strong>${low.length} productos en nivel crítico</strong>: ${low.map(p=>`<strong>${escapeHtml(p.name)}</strong> (${p.stock} disponibles; mínimo ${p.minStock})`).join(', ')}.`:'No hay productos con bajo stock en este momento.';

    if(t.includes('mas vendido')||t.includes('producto estrella')||t.includes('mayor venta')){
      const x=productSales()[0];
      return x&&x.qty>0?`El producto con mayor venta es <strong>${escapeHtml(x.name)}</strong>, con <strong>${x.qty} unidades</strong> y ${money(x.amount)} acumulados.`:'Aún no existen ventas suficientes para identificar un producto líder.';
    }

    if(t.includes('menos vendido')||t.includes('menor venta')){
      const xs=productSales().filter(x=>x.qty>0).sort((a,b)=>a.qty-b.qty),x=xs[0];
      return x?`El producto con menor movimiento registrado es <strong>${escapeHtml(x.name)}</strong>, con ${x.qty} unidades vendidas.`:'Aún no existen ventas registradas.';
    }

    if(t.includes('reponer')||t.includes('reposicion')||t.includes('comprar productos')||t.includes('abastecer')){
      const r=recommendations();
      return r.length?`Recomendación prioritaria: ${r.slice(0,5).map(x=>`<strong>${escapeHtml(x.name)}</strong>: comprar ${x.suggested} unidades (demanda prevista ${x.forecast})`).join('; ')}.`:'El stock actual cubre la demanda estimada de todos los productos.';
    }

    if(t.includes('pedido')&&(t.includes('pendiente')||t.includes('abierto')||t.includes('falta')))
      return openOrders.length?`Existen <strong>${openOrders.length} pedidos abiertos</strong>: ${openOrders.map(o=>`${o.number} (${o.status.replaceAll('_',' ').toLowerCase()})`).join(', ')}.`:'No existen pedidos pendientes.';

    if(t.includes('pedido')&&(t.includes('entregado')||t.includes('completado'))){
      const delivered=db.orders.filter(o=>o.status==='ENTREGADO');
      return `Hay <strong>${delivered.length} pedidos entregados</strong>, por un valor total de <strong>${money(delivered.reduce((s,o)=>s+o.total,0))}</strong>.`;
    }

    if(t.includes('venta')||t.includes('ingreso')||t.includes('facturacion'))
      return `Las ventas acumuladas de pedidos no cancelados suman <strong>${money(salesTotal)}</strong> en ${validOrders.length} pedidos. El ticket promedio es <strong>${money(validOrders.length?salesTotal/validOrders.length:0)}</strong>.`;

    if(t.includes('valor')&&t.includes('inventario'))
      return `El inventario actual representa un costo aproximado de <strong>${money(inventoryValue)}</strong> y un valor potencial de venta de <strong>${money(saleValue)}</strong>.`;

    if(t.includes('ganancia')||t.includes('margen')){
      const margin=saleValue-inventoryValue;
      return `Sobre el stock disponible, el margen bruto potencial es de <strong>${money(margin)}</strong>, equivalente aproximadamente al ${inventoryValue?((margin/inventoryValue)*100).toFixed(1):'0'}% sobre el costo.`;
    }

    if(t.includes('movimiento inusual')||t.includes('anomalia')||t.includes('anormal')){
      const a=anomalies();
      return a.length?`Detecté <strong>${a.length} movimientos inusuales</strong>: ${a.map(x=>`${escapeHtml(x.product?.name||'Producto')} (${Math.abs(x.qty)} unidades)`).join(', ')}.`:'No detecté movimientos inusuales.';
    }

    if(t.includes('cuantos productos')||t.includes('cantidad de productos'))
      return `Hay <strong>${db.products.length} productos registrados</strong>, distribuidos en ${new Set(db.products.map(p=>p.category)).size} categorías.`;

    if(t.includes('categoria')){
      const found=db.categories.find(c=>t.includes(c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')));
      if(found){const ps=db.products.filter(p=>p.category===found);return `La categoría <strong>${escapeHtml(found)}</strong> tiene ${ps.length} productos y ${ps.reduce((s,p)=>s+p.stock,0)} unidades en stock.`;}
    }

    if(t.includes('stock de')||t.includes('existencia de')||t.includes('cuanto queda')){
      const cleaned=t.replace(/.*(?:stock de|existencia de|cuanto queda(?: de)?)/,'').replace(/[?¿.,]/g,'').trim();
      const p=db.products.find(x=>x.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(cleaned)||x.code.toLowerCase()===cleaned||x.barcode===cleaned);
      return p?`El stock de <strong>${escapeHtml(p.name)}</strong> es <strong>${p.stock} ${escapeHtml(p.unit)}</strong>. Su mínimo configurado es ${p.minStock} y su precio de venta es ${money(p.salePrice)}.`:'No encontré ese producto. Puedes escribir parte del nombre, su código interno o el código de barras.';
    }

    const matched=db.products.find(p=>t.includes(p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''))||t.includes(p.code.toLowerCase())||t.includes(p.barcode));
    if(matched)
      return `<strong>${escapeHtml(matched.name)}</strong>: código ${escapeHtml(matched.code)}, stock ${matched.stock} ${escapeHtml(matched.unit)}, mínimo ${matched.minStock}, precio de venta ${money(matched.salePrice)} y demanda semanal estimada de ${forecastFor(matched.id)} unidades.`;

    if(t.includes('ayuda')||t.includes('que puedes hacer'))
      return 'Puedo responder: productos con bajo stock, reposición sugerida, producto más vendido, ventas acumuladas, pedidos pendientes o entregados, valor del inventario, margen potencial, anomalías y stock de un producto específico.';

    return 'No pude relacionar esa consulta con los datos disponibles. Pregunta, por ejemplo: <strong>“¿Qué productos debo reponer?”</strong>, <strong>“¿Cuánto stock queda de arroz?”</strong> o <strong>“Dame un resumen del negocio”</strong>.';
  }

  function renderSettings(){
    $('#settings').innerHTML=`<div class="grid two-col"><div class="card"><div class="section-title"><h2>Datos de la empresa</h2><p>Estos valores se guardan localmente en el navegador.</p></div><form id="companyForm" class="form-grid"><label class="full">Razón social<input name="name" value="${escapeHtml(db.company.name)}"></label><label>RUC<input name="ruc" value="${escapeHtml(db.company.ruc)}"></label><label>Moneda<input name="currency" value="${escapeHtml(db.company.currency)}"></label></form><button id="saveCompany" class="btn btn-primary" style="margin-top:14px">Guardar configuración</button></div>
    <div class="card"><div class="section-title"><h2>Respaldo y migración</h2><p>Exporta toda la información para conservarla o migrarla posteriormente a una base de datos en línea.</p></div><div class="settings-actions"><button id="exportJson" class="btn btn-secondary">Exportar respaldo JSON</button><label class="btn btn-secondary" for="importJson">Importar JSON</label><input id="importJson" class="file-input" type="file" accept="application/json"><button id="resetData" class="btn btn-danger">Restablecer datos</button></div><div class="info-box" style="margin-top:16px">El sistema funciona actualmente con <strong>localStorage</strong>. Cuando se conecte una API y PostgreSQL, se reemplazará la capa de almacenamiento sin cambiar las pantallas principales.</div></div></div>
    <div class="card table-card" style="margin-top:18px"><div class="table-toolbar"><strong>Auditoría del sistema</strong><span class="muted">Últimos ${db.audit.length} eventos</span></div><div class="table-wrap"><table><thead><tr><th>Fecha</th><th>Usuario</th><th>Acción</th></tr></thead><tbody>${db.audit.map(a=>`<tr><td>${formatDateTime(a.date)}</td><td>${escapeHtml(a.user)}</td><td>${escapeHtml(a.action)}</td></tr>`).join('')}</tbody></table></div></div>`;
    $('#saveCompany').addEventListener('click',()=>{const fd=new FormData($('#companyForm'));db.company={name:fd.get('name').trim(),ruc:fd.get('ruc').trim(),currency:fd.get('currency').trim()||'S/'};audit('Actualizó la configuración de empresa');saveDB();toast('Configuración guardada');renderSettings()});
    $('#exportJson').addEventListener('click',()=>downloadBlob('respaldo_caxasia.json',new Blob([JSON.stringify(db,null,2)],{type:'application/json'})));
    $('#importJson').addEventListener('change',importJSON);
    $('#resetData').addEventListener('click',()=>{if(confirm('¿Deseas restablecer todos los datos iniciales?')){db=seed();saveDB();audit('Restableció los datos iniciales');renderSettings();toast('Datos restablecidos')}});
  }
  function importJSON(e){const file=e.target.files[0];if(!file)return;const r=new FileReader();r.onload=()=>{try{const parsed=JSON.parse(r.result);if(!parsed.products||!parsed.orders)throw new Error();db=parsed;saveDB();audit('Importó un respaldo JSON');renderSettings();toast('Respaldo importado correctamente')}catch{toast('El archivo no contiene un respaldo válido','error')}};r.readAsText(file)}

  function openModal(title,body,footer=''){const root=$('#modalRoot');root.innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="modal-head"><h3>${title}</h3><button class="close-modal" data-close>×</button></div><div class="modal-body">${body}</div><div class="modal-foot">${footer}</div></div></div>`;$$('[data-close]',root).forEach(b=>b.addEventListener('click',closeModal));$('.modal-backdrop',root).addEventListener('click',e=>{if(e.target.classList.contains('modal-backdrop'))closeModal()})}
  function closeModal(){$('#modalRoot').innerHTML=''}

  init();
})();
