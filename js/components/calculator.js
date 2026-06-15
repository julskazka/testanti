// js/components/calculator.js
// Интерактивный калькулятор стоимости разработки Mini App воронок.

import { createElement, formatPrice } from '../utils.js';

export function createCalculator() {
  const html = `
    <section id="calculator" class="py-12 scroll-mt-20">
      <div class="space-y-8 max-w-2xl mx-auto">
        <div class="text-center space-y-2">
          <h2 class="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">Калькулятор стоимости проекта</h2>
          <p style="color: var(--color-muted)" class="text-xs sm:text-sm max-w-md mx-auto">Выберите параметры воронки для расчета примерной стоимости и сроков.</p>
        </div>
        <div class="card grid grid-cols-1 md:grid-cols-2 gap-6 bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(255,255,255,0.02)] backdrop-blur-md">
          <div class="space-y-5 text-sm">
            <div class="space-y-2">
              <label class="font-bold text-xs uppercase tracking-wider text-[var(--color-muted)]">Тип воронки / проекта</label>
              <select id="calc-type" class="w-full px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-indigo-500">
                <option value="lead" data-price="15000" data-days="3">Лид-магнит / Квиз-анкета (15 000 ₽)</option>
                <option value="funnel" data-price="35000" data-days="7" selected>Сложная автоворонка продаж (35 000 ₽)</option>
                <option value="miniapp" data-price="60000" data-days="14">Кастомный Mini App / Каталог (60 000 ₽)</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="font-bold text-xs uppercase tracking-wider text-[var(--color-muted)]">Дополнительные опции</label>
              <div class="space-y-2.5">
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" id="opt-vibe" data-price="10000" data-days="2" class="rounded border-[var(--color-border)] text-indigo-600 focus:ring-indigo-500" checked>
                  <span class="text-xs">Кастомный Vibe Coding (+10 000 ₽)</span>
                </label>
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" id="opt-getcourse" data-price="15000" data-days="3" class="rounded border-[var(--color-border)] text-indigo-600 focus:ring-indigo-500">
                  <span class="text-xs">Интеграция с GetCourse (+15 000 ₽)</span>
                </label>
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" id="opt-crm" data-price="8000" data-days="1" class="rounded border-[var(--color-border)] text-indigo-600 focus:ring-indigo-500">
                  <span class="text-xs">Аналитика и CRM-связка (+8 000 ₽)</span>
                </label>
              </div>
            </div>
            <div class="space-y-2">
              <label class="font-bold text-xs uppercase tracking-wider text-[var(--color-muted)]">Срочность проекта</label>
              <div class="flex gap-4">
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="calc-speed" value="standard" checked class="text-indigo-600 focus:ring-indigo-500">
                  <span class="text-xs">Стандарт</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="calc-speed" value="fast" class="text-indigo-600 focus:ring-indigo-500">
                  <span class="text-xs">Срочно (x1.3 цена, -30% срок)</span>
                </label>
              </div>
            </div>
          </div>
          <div class="rounded-2xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-6 flex flex-col justify-between items-center text-center space-y-4">
            <div class="space-y-1">
              <span class="text-xs uppercase font-bold tracking-widest text-indigo-500">Итоговый расчет</span>
              <div id="calc-result-price" class="text-3xl font-extrabold text-[var(--color-text)]">0 ₽</div>
              <p style="color: var(--color-muted)" class="text-xs">Ориентировочная стоимость реализации</p>
            </div>
            <div class="w-full divider my-2"></div>
            <div class="flex justify-around w-full text-xs">
              <div>
                <span class="block text-[var(--color-muted)]">Сроки</span>
                <span id="calc-result-days" class="font-bold text-sm text-[var(--color-text)]">0 дней</span>
              </div>
              <div class="border-r border-[var(--color-border)]"></div>
              <div>
                <span class="block text-[var(--color-muted)]">Связка с GC</span>
                <span id="calc-result-gc" class="font-bold text-sm text-[var(--color-text)]">Нет</span>
              </div>
            </div>
            <a href="#contact" class="btn-press btn-primary w-full text-center py-2.5 text-xs">Заказать разработку</a>
          </div>
        </div>
      </div>
    </section>
  `;

  const element = createElement(html);
  const getInt = (el, attr) => parseInt(el.getAttribute(attr) || '0', 10);

  function calculate() {
    const typeSelect = element.querySelector('#calc-type');
    const selectedOption = typeSelect.options[typeSelect.selectedIndex];
    
    let basePrice = getInt(selectedOption, 'data-price');
    let baseDays = getInt(selectedOption, 'data-days');
    let addonPrice = 0, addonDays = 0, hasGetcourse = false;

    ['#opt-vibe', '#opt-getcourse', '#opt-crm'].forEach(sel => {
      const opt = element.querySelector(sel);
      if (opt.checked) {
        addonPrice += getInt(opt, 'data-price');
        addonDays += getInt(opt, 'data-days');
        if (sel === '#opt-getcourse') hasGetcourse = true;
      }
    });

    let totalPrice = basePrice + addonPrice;
    let totalDays = baseDays + addonDays;

    if (element.querySelector('input[name="calc-speed"]:checked').value === 'fast') {
      totalPrice = Math.round(totalPrice * 1.3);
      totalDays = Math.max(1, Math.round(totalDays * 0.7));
    }

    element.querySelector('#calc-result-price').textContent = formatPrice(totalPrice);
    element.querySelector('#calc-result-days').textContent = `${totalDays} дн.`;
    element.querySelector('#calc-result-gc').textContent = hasGetcourse ? 'Да' : 'Нет';
  }

  element.querySelector('#calc-type').addEventListener('change', calculate);
  element.querySelector('#opt-vibe').addEventListener('change', calculate);
  element.querySelector('#opt-getcourse').addEventListener('change', calculate);
  element.querySelector('#opt-crm').addEventListener('change', calculate);
  element.querySelectorAll('input[name="calc-speed"]').forEach(radio => radio.addEventListener('change', calculate));

  setTimeout(calculate, 0);
  return element;
}
