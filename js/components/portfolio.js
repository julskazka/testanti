// js/components/portfolio.js
// Блок "Мои Кейсы" с галереей выполненных проектов и слайдером для мобильной версии.

import { createElement } from '../utils.js';

const CASES = [
  { img: './img/cases/Кейс.png', title: 'Mini App & GetCourse Интеграция', desc: 'Автоматизация сбора контактов и передачи данных об оплатах в CRM-систему.' },
  { img: './img/cases/Кейс-5.jpg', title: 'Квиз-воронка в NotiBot', desc: 'Сложный интерактивный квиз с сегментацией пользователей по уровню теплоты.' },
  { img: './img/cases/Кейс-6.jpg', title: 'Кастомный Vibe Coding Лендинг', desc: 'Разработка уникального интерфейса Mini App в обход стандартных ограничений NotiBot.' },
  { img: './img/cases/Кейс-8.jpg', title: 'Автоматизация и Аналитика', desc: 'Настройка триггерных уведомлений, рассылок и детальной аналитики поведения пользователей.' },
  { img: './img/cases/3f1035d4-36ad-435e-b0fb-7387613da304.png', title: 'Лид-магнит Воронка', desc: 'Классическая воронка выдачи полезного материала с последующим прогревом.' }
];

export function createPortfolio() {
  const html = `
    <section id="portfolio" class="py-2 scroll-mt-20">
      <div class="space-y-8 max-w-4xl mx-auto">
        <!-- Заголовок секции -->
        <div class="text-center space-y-2">
          <h2 class="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">Выполненные кейсы</h2>
          <p style="color: var(--color-muted)" class="text-xs sm:text-sm max-w-md mx-auto">
            Примеры разработанных автоворонок, квизов и интеграций на платформе NotiBot.
          </p>
        </div>

        <!-- Контейнер для прокрутки (слайдер для мобилок, грид для десктопа) -->
        <div id="cases-container" class="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 scroll-smooth no-scrollbar md:grid md:grid-cols-3 md:overflow-x-visible md:snap-none md:pb-0">
          ${CASES.map(c => `
            <div class="card p-0 overflow-hidden flex flex-col justify-between hover:border-orange-500/40 hover:shadow-lg transition-all duration-300 w-[280px] shrink-0 snap-start md:w-auto md:shrink md:snap-align-none bg-[var(--color-surface)]">
              <div class="space-y-3">
                <!-- Контейнер изображения (картинка без обрезки) -->
                <div class="relative overflow-hidden w-full flex items-center justify-center p-3 bg-slate-950/30 border-b border-[var(--color-border)]" style="height: 240px;">
                  <img src="${c.img}" alt="${c.title}" 
                       class="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 hover:scale-105 cursor-pointer"
                       onclick="window.open('${c.img}', '_blank')">
                </div>
                <!-- Описание кейса -->
                <div class="p-4 space-y-2">
                  <h3 class="font-bold text-sm text-[var(--color-text)]">${c.title}</h3>
                  <p style="color: var(--color-muted)" class="text-xs leading-relaxed">${c.desc}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Кнопки управления слайдером на мобильных -->
        <div class="flex md:hidden justify-center items-center space-x-6 mt-4">
          <button id="slide-prev" class="btn-press p-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-orange-500 hover:bg-[var(--color-border)]">
            <i data-lucide="chevron-left" class="w-5 h-5"></i>
          </button>
          <button id="slide-next" class="btn-press p-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-orange-500 hover:bg-[var(--color-border)]">
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </button>
        </div>
      </div>
    </section>
  `;

  const el = createElement(html);
  const container = el.querySelector('#cases-container');

  // Логика прокрутки по кнопкам
  el.querySelector('#slide-prev').addEventListener('click', () => {
    container.scrollBy({ left: -290, behavior: 'smooth' });
  });

  el.querySelector('#slide-next').addEventListener('click', () => {
    container.scrollBy({ left: 290, behavior: 'smooth' });
  });

  return el;
}
