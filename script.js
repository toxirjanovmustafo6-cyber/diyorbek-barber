	/* ---------- i18n ---------- */
		const T = {
			en: { dash: "Dashboard", clients: "Clients", rem: "Reminders", rev: "Total revenue (Kirim)", exp: "Total expenses (Chiqim)", profit: "Net profit (Sof foyda)", tc: "Clients", pend: "Waiting for follow-up", addTx: "Add income or expense", income: "Income", expense: "Expense", cat: "Category", date: "Date", amt: "Amount (so'm)", desc: "Description", save: "Save", cancel: "Cancel", flow: "Cash flow, last 6 months", tx: "Recent entries", addC: "Add client", editC: "Edit client", fn: "First name", ln: "Last name", ph: "Phone number", tg: "Telegram (@username)", ig: "Instagram (@username)", visit: "Visit date and time", paid: "Amount paid (so'm)", remD: "Reminder date (visit + 20 days)", search: "Search by name or phone", all: "All", due: "Follow-up due", recent: "Recent", dueTag: "Time to message!", edit: "Edit", del: "Delete", export: "Export CSV", tpl: "Message template", tplHint: "Use {client_name} and {last_visit_date}", tplDef: "Hi {client_name}! Your hair has grown, we are waiting for you! Last visit: {last_visit_date}.", copy: "Copy message", sent: "Mark as sent", noC: "No clients yet. Add your first client.", noR: "Nobody is due for a follow-up today.", noTx: "No entries yet.", copied: "Copied", saved: "Saved", deleted: "Deleted", conf: "Delete this item?", req: "First name and phone are required", lastV: "Last visit", queue: "Follow-up queue", catS: "Haircut,Beard,Product,Rent,Supplies,Salary,Other" },
			uz: { dash: "Bosh sahifa", clients: "Mijozlar", rem: "Eslatmalar", rev: "Jami kirim", exp: "Jami chiqim", profit: "Sof foyda", tc: "Mijozlar", pend: "Habar kutayotganlar", addTx: "Kirim yoki chiqim qo'shish", income: "Kirim", expense: "Chiqim", cat: "Kategoriya", date: "Sana", amt: "Summa (so'm)", desc: "Izoh", save: "Saqlash", cancel: "Bekor qilish", flow: "Oxirgi 6 oy pul oqimi", tx: "So'nggi yozuvlar", addC: "Mijoz qo'shish", editC: "Mijozni tahrirlash", fn: "Ismi", ln: "Familiyasi", ph: "Telefon raqami", tg: "Telegram (@username)", ig: "Instagram (@username)", visit: "Qachon kelgani", paid: "Qancha to'lagani (so'm)", remD: "Eslatma sanasi (tashrif + 20 kun)", search: "Ism yoki telefon bo'yicha qidirish", all: "Hammasi", due: "Habar vaqti", recent: "Yaqinda", dueTag: "Habar yuborish vaqti keldi!", edit: "Tahrirlash", del: "O'chirish", export: "CSV yuklab olish", tpl: "Xabar shabloni", tplHint: "{client_name} va {last_visit_date} dan foydalaning", tplDef: "Salom {client_name}! Sochingiz o'sib qoldi, sizni kutyapmiz! Oxirgi tashrif: {last_visit_date}.", copy: "Xabarni nusxalash", sent: "Yuborildi deb belgilash", noC: "Hozircha mijoz yo'q. Birinchi mijozni qo'shing.", noR: "Bugun habar yuboriladigan mijoz yo'q.", noTx: "Yozuvlar yo'q.", copied: "Nusxalandi", saved: "Saqlandi", deleted: "O'chirildi", conf: "O'chirilsinmi?", req: "Ism va telefon majburiy", lastV: "Oxirgi tashrif", queue: "Habar navbati", catS: "Soch olish,Soqol,Mahsulot,Ijara,Materiallar,Oylik,Boshqa" },
			ru: { dash: "Главная", clients: "Клиенты", rem: "Напоминания", rev: "Общий доход (Kirim)", exp: "Общие расходы (Chiqim)", profit: "Чистая прибыль", tc: "Клиентов", pend: "Ждут напоминания", addTx: "Добавить доход или расход", income: "Доход", expense: "Расход", cat: "Категория", date: "Дата", amt: "Сумма (сум)", desc: "Описание", save: "Сохранить", cancel: "Отмена", flow: "Денежный поток за 6 месяцев", tx: "Последние записи", addC: "Добавить клиента", editC: "Изменить клиента", fn: "Имя", ln: "Фамилия", ph: "Телефон", tg: "Telegram (@username)", ig: "Instagram (@username)", visit: "Дата и время визита", paid: "Сколько оплатил (сум)", remD: "Дата напоминания (визит + 20 дней)", search: "Поиск по имени или телефону", all: "Все", due: "Пора написать", recent: "Недавние", dueTag: "Пора отправить сообщение!", edit: "Изменить", del: "Удалить", export: "Скачать CSV", tpl: "Шаблон сообщения", tplHint: "Используйте {client_name} и {last_visit_date}", tplDef: "Привет, {client_name}! Волосы отросли, мы вас ждём! Последний визит: {last_visit_date}.", copy: "Копировать текст", sent: "Отметить отправленным", noC: "Клиентов пока нет. Добавьте первого.", noR: "Сегодня никому не нужно писать.", noTx: "Записей нет.", copied: "Скопировано", saved: "Сохранено", deleted: "Удалено", conf: "Удалить?", req: "Имя и телефон обязательны", lastV: "Последний визит", queue: "Очередь напоминаний", catS: "Стрижка,Борода,Товары,Аренда,Расходники,Зарплата,Другое" }
		}
		/* ---------- state + storage (safe) ---------- */
		const LS = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) { } } }
		const $ = s => document.querySelector(s), uid = () => Math.random().toString(36).slice(2, 9)
		const DAY = 864e5, iso = d => { const x = new Date(d); return new Date(x - x.getTimezoneOffset() * 6e4).toISOString().slice(0, 10) }
		const addDays = (d, n) => iso(new Date(new Date(d).getTime() + n * DAY))
		let lang = LS.get('lang', 'en'), theme = LS.get('theme', matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'), tab = 'dash', filter = 'all', q = ''
		const now = Date.now(), vis = n => new Date(now - n * DAY).toISOString().slice(0, 16)
		let clients = LS.get('clients', null), fin = LS.get('fin', null), tpl = LS.get('tpl', {})
		if (!clients) {
			clients = [
				{ id: uid(), fn: "Jasur", ln: "Karimov", ph: "+998901234567", tg: "@jasur_k", ig: "", visit: vis(24), paid: 60000, rd: addDays(now - 24 * DAY, 20), sent: false },
				{ id: uid(), fn: "Anvar", ln: "Tursunov", ph: "+998935550011", tg: "", ig: "@anvar.t", visit: vis(21), paid: 80000, rd: addDays(now - 21 * DAY, 20), sent: false },
				{ id: uid(), fn: "Dilshod", ln: "Aliyev", ph: "+998977771122", tg: "@dilshod", ig: "@dilshod", visit: vis(5), paid: 70000, rd: addDays(now - 5 * DAY, 20), sent: false }]
			fin = [{ id: uid(), type: 'in', cat: '0', date: iso(now - 24 * DAY), amt: 60000, desc: "Jasur" }, { id: uid(), type: 'in', cat: '1', date: iso(now - 5 * DAY), amt: 70000, desc: "Dilshod" }, { id: uid(), type: 'out', cat: '3', date: iso(now - 10 * DAY), amt: 1500000, desc: "Rent" }]
		}
		const t = k => (T[lang][k] ?? T.en[k] ?? k), esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
		const money = n => new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US').format(Math.round(n)) + (lang === 'ru' ? ' сум' : " so'm")
		const save = () => { LS.set('clients', clients); LS.set('fin', fin); LS.set('tpl', tpl) }
		const toast = m => { const e = $('#toast'); e.textContent = m; e.classList.add('on'); setTimeout(() => e.classList.remove('on'), 1600) }
		const isDue = c => !c.sent && c.rd <= iso(Date.now())
		const fmtD = s => new Date(s).toLocaleDateString(lang === 'uz' ? 'uz-UZ' : lang === 'ru' ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
		const cats = () => t('catS').split(',')
		const link = (p, h) => h ? `https://${p}/${h.replace('@', '')}` : ''
		const msg = c => (tpl[lang] || t('tplDef')).replaceAll('{client_name}', c.fn).replaceAll('{last_visit_date}', fmtD(c.visit))

		/* ---------- Bot/webhook hook: attach Telegram Bot API or WhatsApp here ---------- */
		async function sendReminder(client, text) {
			// Example (run on a server, never expose bot token in browser):
			// await fetch('https://your-server.example/api/send',{method:'POST',headers:{'Content-Type':'application/json'},
			//   body:JSON.stringify({channel:'telegram',to:client.tg,phone:client.ph,text})});
			return { queued: true, client: client.id, text }
		}

		/* ---------- shell ---------- */
		function shell() {
			document.documentElement.dataset.theme = theme; document.documentElement.lang = lang
			$('#theme').textContent = theme === 'dark' ? '☀' : '☾'
			$('#langs').innerHTML = ['en', 'uz', 'ru'].map(l => `<button class="${l === lang ? 'on' : ''}" data-l="${l}">${l.toUpperCase()}</button>`).join('')
			$('#nav').innerHTML = [['dash', 'dash'], ['clients', 'clients'], ['rem', 'rem']].map(([k, l]) => `<button class="${tab === k ? 'on' : ''}" data-t="${k}">${t(l)}</button>`).join('')
			$('#bellN').textContent = clients.filter(isDue).length;
			['dash', 'clients', 'rem'].forEach(k => $('#v-' + k).classList.toggle('hide', k !== tab));
			({ dash: rDash, clients: rClients, rem: rRem })[tab]()
		}
		/* ---------- dashboard ---------- */
		function rDash() {
			const inc = fin.filter(f => f.type === 'in').reduce((a, f) => a + +f.amt, 0), out = fin.filter(f => f.type === 'out').reduce((a, f) => a + +f.amt, 0)
			const months = [...Array(6)].map((_, i) => { const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() - 5 + i); return d })
			const data = months.map(d => { const k = iso(d).slice(0, 7), m = fin.filter(f => f.date.startsWith(k)); return { l: d.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-GB', { month: 'short' }), i: m.filter(f => f.type === 'in').reduce((a, f) => a + +f.amt, 0), o: m.filter(f => f.type === 'out').reduce((a, f) => a + +f.amt, 0) } })
			const mx = Math.max(1, ...data.flatMap(d => [d.i, d.o]))
			$('#v-dash').innerHTML = `
  <div class="grid">
   <div class="card stat hero"><small>${t('profit')}</small><b>${money(inc - out)}</b></div>
   <div class="card stat"><small>${t('rev')}</small><b style="color:var(--green)">${money(inc)}</b></div>
   <div class="card stat"><small>${t('exp')}</small><b style="color:var(--red)">${money(out)}</b></div>
   <div class="card stat"><small>${t('tc')} / ${t('pend')}</small><b>${clients.length} / ${clients.filter(isDue).length}</b></div>
  </div>
  <div class="cols">
   <div class="card"><h2>${t('addTx')}</h2>
    <form id="txf" onsubmit="return false">
     <div class="row"><div><label>${t('income')}/${t('expense')}</label><select id="tx-type"><option value="in">${t('income')}</option><option value="out">${t('expense')}</option></select></div>
     <div><label>${t('cat')}</label><select id="tx-cat">${cats().map((c, i) => `<option value="${i}">${c}</option>`).join('')}</select></div></div>
     <div class="row"><div><label>${t('date')}</label><input type="date" id="tx-date" value="${iso(Date.now())}"></div>
     <div><label>${t('amt')}</label><input type="number" min="0" inputmode="numeric" id="tx-amt"></div></div>
     <label>${t('desc')}</label><input id="tx-desc"><p><button class="btn" id="tx-save">${t('save')}</button></p>
    </form></div>
   <div class="card"><h2>${t('flow')}</h2>
    <div class="bars">${data.map(d => `<div class="g"><div class="pair"><i class="inc" style="height:${d.i / mx * 100}%" title="${money(d.i)}"></i><i class="exp" style="height:${d.o / mx * 100}%" title="${money(d.o)}"></i></div>${d.l}</div>`).join('')}</div></div>
  </div>
  <div class="card" style="margin-top:12px"><h2>${t('tx')}</h2><div class="list">${[...fin].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 8).map(f => `<div class="item"><div><b>${esc(cats()[f.cat] || '')}</b> <span class="m">${fmtD(f.date)} ${esc(f.desc)}</span></div><div><b style="color:var(--${f.type === 'in' ? 'green' : 'red'})">${f.type === 'in' ? '+' : '−'}${money(f.amt)}</b> <button class="ic" style="width:30px;height:30px" data-delfin="${f.id}" aria-label="${t('del')}">×</button></div></div>`).join('') || `<div class="empty">${t('noTx')}</div>`}</div></div>`
			$('#tx-save').onclick = () => {
				const a = +$('#tx-amt').value; if (!a) return
				fin.push({ id: uid(), type: $('#tx-type').value, cat: $('#tx-cat').value, date: $('#tx-date').value, amt: a, desc: $('#tx-desc').value }); save(); toast(t('saved')); shell()
			}
		}
		/* ---------- clients ---------- */
		function rClients() {
			const ql = q.toLowerCase()
			const list = clients.filter(c => (`${c.fn} ${c.ln} ${c.ph}`).toLowerCase().includes(ql) && (filter === 'all' || (filter === 'due' ? isDue(c) : !isDue(c)))).sort((a, b) => b.visit.localeCompare(a.visit))
			$('#v-clients').innerHTML = `
  <div class="bar"><input id="q" placeholder="${t('search')}" value="${esc(q)}">
   <select id="flt">${['all', 'due', 'recent'].map(f => `<option value="${f}" ${f === filter ? 'selected' : ''}>${t(f)}</option>`).join('')}</select>
   <button class="btn" id="addc">+ ${t('addC')}</button><button class="btn ghost" id="exp">${t('export')}</button></div>
  <div class="list">${list.map(c => `<div class="item"><div><b>${esc(c.fn)} ${esc(c.ln)}</b> ${isDue(c) ? `<span class="tag">${t('dueTag')}</span>` : ''}
   <div class="m">${esc(c.ph)} · ${t('lastV')}: ${fmtD(c.visit)} · ${money(c.paid || 0)}</div></div>
   <div class="acts">${c.tg ? `<a href="${link('t.me', c.tg)}" target="_blank" rel="noopener">Telegram</a>` : ''}${c.ig ? `<a href="${link('instagram.com', c.ig)}" target="_blank" rel="noopener">Instagram</a>` : ''}
   <button data-edit="${c.id}">${t('edit')}</button><button data-del="${c.id}">${t('del')}</button></div></div>`).join('') || `<div class="empty">${t('noC')}</div>`}</div>`
			$('#q').oninput = e => { q = e.target.value; const p = e.target.selectionStart; rClients(); $('#q').focus(); $('#q').setSelectionRange(p, p) }
			$('#flt').onchange = e => { filter = e.target.value; rClients() }
			$('#addc').onclick = () => clientForm()
			$('#exp').onclick = exportCSV
		}
		function clientForm(id) {
			const c = clients.find(x => x.id === id) || { fn: '', ln: '', ph: '', tg: '', ig: '', visit: new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 16), paid: '', rd: '' }
			const d = $('#dlg'); let manual = !!id
			d.innerHTML = `<h2>${t(id ? 'editC' : 'addC')}</h2>
  <div class="row"><div><label>${t('fn')}</label><input id="f-fn" value="${esc(c.fn)}"></div><div><label>${t('ln')}</label><input id="f-ln" value="${esc(c.ln)}"></div></div>
  <label>${t('ph')}</label><input id="f-ph" type="tel" value="${esc(c.ph)}" placeholder="+998">
  <div class="row"><div><label>${t('tg')}</label><input id="f-tg" value="${esc(c.tg)}"></div><div><label>${t('ig')}</label><input id="f-ig" value="${esc(c.ig)}"></div></div>
  <div class="row"><div><label>${t('visit')}</label><input id="f-visit" type="datetime-local" value="${c.visit}"></div><div><label>${t('paid')}</label><input id="f-paid" type="number" min="0" inputmode="numeric" value="${c.paid}"></div></div>
  <label>${t('remD')}</label><input id="f-rd" type="date" value="${c.rd || addDays(c.visit, 20)}">
  <p style="display:flex;gap:8px;justify-content:flex-end"><button class="btn ghost" id="f-x">${t('cancel')}</button><button class="btn" id="f-ok">${t('save')}</button></p>`
			d.showModal()
			$('#f-visit').onchange = e => { if (!manual && e.target.value) $('#f-rd').value = addDays(e.target.value, 20) }
			$('#f-rd').oninput = () => manual = true
			$('#f-x').onclick = () => d.close()
			$('#f-ok').onclick = () => {
				const o = { fn: $('#f-fn').value.trim(), ln: $('#f-ln').value.trim(), ph: $('#f-ph').value.trim(), tg: fixH($('#f-tg').value), ig: fixH($('#f-ig').value), visit: $('#f-visit').value, paid: +$('#f-paid').value || 0, rd: $('#f-rd').value || addDays($('#f-visit').value, 20) }
				if (!o.fn || !o.ph || !o.visit) return toast(t('req'))
				if (id) { Object.assign(c, o, { sent: o.rd > iso(Date.now()) ? false : c.sent }) } else {
					clients.push({ id: uid(), sent: false, ...o })
					if (o.paid) fin.push({ id: uid(), type: 'in', cat: '0', date: o.visit.slice(0, 10), amt: o.paid, desc: o.fn })
				}
				save(); d.close(); toast(t('saved')); shell()
			}
		}
		const fixH = v => { v = v.trim(); return v && !v.startsWith('@') ? '@' + v : v }
		function exportCSV() {
			const rows = [['First', 'Last', 'Phone', 'Telegram', 'Instagram', 'Visit', 'Paid', 'Reminder']].concat(clients.map(c => [c.fn, c.ln, c.ph, c.tg, c.ig, c.visit, c.paid, c.rd]))
			const csv = '\ufeff' + rows.map(r => r.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n')
			const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = 'clients.csv'; a.click()
		}
		/* ---------- reminders ---------- */
		function rRem() {
			const due = clients.filter(isDue).sort((a, b) => a.rd.localeCompare(b.rd))
			$('#v-rem').innerHTML = `
  <div class="cols">
   <div class="card"><h2>${t('tpl')}</h2><textarea id="tpl" rows="5">${esc(tpl[lang] || t('tplDef'))}</textarea><div class="m" style="color:var(--mute);font-size:13px;margin-top:4px">${t('tplHint')}</div></div>
   <div class="card"><h2>${t('queue')} (${due.length})</h2><div class="list">${due.map(c => `<div class="item"><div><b>${esc(c.fn)} ${esc(c.ln)}</b><div class="m">${esc(c.ph)} · ${t('lastV')}: ${fmtD(c.visit)}</div></div>
   <div class="acts"><button data-copy="${c.id}">${t('copy')}</button>${c.tg ? `<a href="${link('t.me', c.tg)}" target="_blank" rel="noopener">Telegram</a>` : ''}<button data-sent="${c.id}">${t('sent')}</button></div></div>`).join('') || `<div class="empty">${t('noR')}</div>`}</div></div>
  </div>`
			$('#tpl').oninput = e => { tpl[lang] = e.target.value; save() }
		}
		/* ---------- events ---------- */
		document.addEventListener('click', async e => {
			const b = e.target.closest('button'); if (!b) return; const D = b.dataset
			if (D.l) { lang = D.l; LS.set('lang', lang); shell() }
			else if (D.t) { tab = D.t; shell() }
			else if (b.id === 'theme') { theme = theme === 'dark' ? 'light' : 'dark'; LS.set('theme', theme); shell() }
			else if (b.id === 'bell') { tab = 'rem'; shell() }
			else if (D.edit) clientForm(D.edit)
			else if (D.del) { if (confirm(t('conf'))) { clients = clients.filter(c => c.id !== D.del); save(); toast(t('deleted')); shell() } }
			else if (D.delfin) { fin = fin.filter(f => f.id !== D.delfin); save(); shell() }
			else if (D.copy) { const c = clients.find(x => x.id === D.copy); try { await navigator.clipboard.writeText(msg(c)) } catch (_) { } toast(t('copied')) }
			else if (D.sent) { const c = clients.find(x => x.id === D.sent); await sendReminder(c, msg(c)); c.sent = true; save(); shell() }
		})
		shell();