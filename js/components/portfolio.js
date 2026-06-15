// js/components/portfolio.js
// Блок "Мои Кейсы" с галереей выполненных проектов.

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

        <!-- Сетка кейсов -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${CASES.map(c => `
            <div class="card p-0 overflow-hidden flex flex-col justify-between hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <div class="space-y-3">
                <!-- Контейнер изображения с эффектом приближения -->
                <div class="relative overflow-hidden aspect-video bg-slate-900 border-b border-[var(--color-border)]">
                  <img src="${c.img}" alt="${c.title}" 
                       class="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
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
      </div>
    </section>
  `;

  return createElement(html);
}
