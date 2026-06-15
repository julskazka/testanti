// js/components/calculator.js
// Квиз-калькулятор стоимости проекта на базе коэффициентов из Google Таблицы.

import { createElement, formatPrice } from '../utils.js';

const BASE_PRICE = 15000;
const STEPS = [
  { n: "Тип проекта", opts: [{ t: "Визитка", c: 1.0 }, { t: "Каталог / Портфолио", c: 1.1 }, { t: "Лендинг", c: 1.2 }, { t: "Обучающее апп", c: 1.3 }, { t: "Аппка с воронкой", c: 1.4 }, { t: "Система продаж", c: 1.5 }]},
  { n: "Структура страниц", opts: [{ t: "до 5 страниц", c: 1.0 }, { t: "5–10 страниц", c: 1.1 }, { t: "10–15 страниц", c: 1.2 }, { t: "15+ страниц", c: 1.3 }]},
  { n: "Воронка & Логика", opts: [{ t: "Без воронок", c: 1.0 }, { t: "Простая (1-2 шага)", c: 1.1 }, { t: "Многошаговая (3-5)", c: 1.2 }, { t: "Сегментированная", c: 1.3 }]},
  { n: "Автоматизация", opts: [{ t: "Без автоматизации", c: 1.0 }, { t: "Автосообщения", c: 1.1 }, { t: "Рассылки и триггеры", c: 1.2 }, { t: "CRM и интеграции", c: 1.3 }]},
  { n: "Контент & Дизайн", opts: [{ t: "Контент от вас + шаблон", c: 1.0 }, { t: "Контент от меня / ИИ", c: 1.2 }, { t: "Под ключ", c: 1.3 }]},
  { n: "Геймификация", opts: [{ t: "Нет", c: 1.0 }, { t: "Шкала прогресса", c: 1.1 }, { t: "Подарки за баллы", c: 1.2 }]},
  { n: "Аналитика", opts: [{ t: "Базовая", c: 1.0 }, { t: "Расширенная", c: 1.1 }]},
  { n: "Поддержка", opts: [{ t: "Только сборка", c: 1.0 }, { t: "1 месяц", c: 1.1 }, { t: "3 месяца", c: 1.2 }, { t: "Полный цикл", c: 1.3 }]},
  { n: "Роль архитектора", opts: [{ t: "Только сборщик", c: 1.0 }, { t: "Архитектор структуры", c: 1.2 }, { t: "Архитектор + контент", c: 1.3 }, { t: "Архитектор + аналитика + правки", c: 1.4 }]},
  { n: "Дополнительно", opts: [{ t: "Обучение", c: 1.0 }, { t: "Реклама / Лиды", c: 1.2 }, { t: "Вебинары", c: 1.1 }]}
];

export function createCalculator() {
  const html = `
    <div id="calc-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm hidden">
      <div id="calc-card" class="card bg-[var(--color-bg)] w-full max-w-lg relative p-6 rounded-2xl shadow-2xl space-y-6">
        <button id="calc-close" class="absolute top-4 right-4 text-[var(--color-muted)] hover:text-[var(--color-text)] btn-press"><i data-lucide="x" class="w-5 h-5"></i></button>
        <div class="text-center space-y-1">
          <h2 class="text-xl font-bold text-[var(--color-text)]">Расчет стоимости Mini App</h2>
          <p style="color: var(--color-muted)" class="text-[11px]">Ответьте на вопросы, чтобы узнать стоимость по формуле Google Таблицы.</p>
        </div>
        <div class="divider my-0"></div>
        <div class="flex items-center justify-between text-[11px] text-[var(--color-muted)]">
          <span id="calc-step-text">Шаг 1 из 10</span>
          <div class="w-24 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
            <div id="calc-progress-bar" class="h-full bg-indigo-500 transition-all duration-300" style="width: 10%"></div>
          </div>
        </div>
        <div id="calc-question-container" class="space-y-4">
          <h3 id="calc-question-title" class="font-bold text-xs sm:text-sm text-[var(--color-text)]"></h3>
          <div id="calc-options-list" class="flex flex-col gap-2"></div>
        </div>
        <div id="calc-result-container" class="hidden text-center space-y-5 py-2">
          <div class="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto text-indigo-500"><i data-lucide="calculator" class="w-6 h-6"></i></div>
          <div class="space-y-2">
            <h3 class="text-base font-bold text-[var(--color-text)]">Расчет стоимости завершен!</h3>
            <div class="text-2xl font-extrabold text-[var(--color-text)] bg-[var(--color-surface)] py-3 px-6 rounded-xl border border-[var(--color-border)] inline-block" id="calc-final-price">0 ₽</div>
            <p style="color: var(--color-muted)" class="text-xs max-w-xs mx-auto">Расчет произведен автоматически по формуле вашей Google Таблицы.</p>
          </div>
          <a href="https://t.me/Julskazka" target="_blank" rel="noopener noreferrer" class="btn-press btn-primary py-2.5 flex items-center justify-center space-x-2 text-xs">
            <span>Обсудить смету в Telegram</span>
            <i data-lucide="send" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    </div>
  `;

  const el = createElement(html);
  let step = 0;
  const coefficients = [];

  function showQuestion() {
    if (step >= STEPS.length) { showResults(); return; }
    const qData = STEPS[step];
    el.querySelector('#calc-step-text').textContent = `Шаг ${step + 1} из 10`;
    el.querySelector('#calc-progress-bar').style.width = `${((step + 1) / 10) * 100}%`;
    el.querySelector('#calc-question-title').textContent = qData.n;

    const list = el.querySelector('#calc-options-list');
    list.innerHTML = '';
    qData.opts.forEach(opt => {
      const btn = createElement(`
        <button class="btn-press w-full text-left px-4 py-2.5 text-xs bg-[var(--color-surface)] hover:bg-[var(--color-border)] text-[var(--color-text)] rounded-xl border border-[var(--color-border)] transition-all">
          ${opt.t} (x${opt.c})
        </button>
      `);
      btn.addEventListener('click', () => { coefficients.push(opt.c); step++; showQuestion(); });
      list.appendChild(btn);
    });
  }

  function showResults() {
    el.querySelector('#calc-question-container').classList.add('hidden');
    el.querySelector('#calc-step-text').parentElement.classList.add('hidden');
    
    // Формула: BASE_PRICE * Coeff1 * Coeff2 ...
    let finalPrice = BASE_PRICE;
    coefficients.forEach(c => { finalPrice *= c; });
    finalPrice = Math.round(finalPrice);

    el.querySelector('#calc-final-price').textContent = formatPrice(finalPrice);
    el.querySelector('#calc-result-container').classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  }

  const closeBtn = el.querySelector('#calc-close');
  const close = () => { el.classList.add('hidden'); step = 0; coefficients.length = 0; el.querySelector('#calc-question-container').classList.remove('hidden'); el.querySelector('#calc-step-text').parentElement.classList.remove('hidden'); el.querySelector('#calc-result-container').classList.add('hidden'); showQuestion(); };
  closeBtn.addEventListener('click', close);
  el.addEventListener('click', (e) => { if (e.target === el) close(); });

  setTimeout(showQuestion, 0);
  return el;
}
