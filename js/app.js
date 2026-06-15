// js/app.js
// Главная точка входа приложения.
// Здесь собираются все компоненты в единую структуру.

import { initIcons } from './utils.js';
import { createHeader, createFooter } from './components/header.js';
import { createHero } from './components/hero.js';
import { createServices } from './components/services.js';
import { createPortfolio } from './components/portfolio.js';
import { createCalculator } from './components/calculator.js';
import { createQuiz } from './components/quiz.js';

/**
 * Инициализация и рендер приложения.
 */
function initApp() {
  const appEl = document.getElementById('app');
  if (!appEl) return;

  // Очищаем стартовое содержимое
  appEl.innerHTML = '';

  // 1. Добавляем шапку сайта
  appEl.appendChild(createHeader());

  // 2. Создаем контейнер для основного контента
  const mainEl = document.createElement('main');
  mainEl.className = 'max-w-4xl mx-auto px-6 pt-6 pb-12 safe-top safe-bottom space-y-16';

  // 3. Монтируем секции лендинга в main
  mainEl.appendChild(createHero());
  mainEl.appendChild(createServices());
  mainEl.appendChild(createPortfolio());
  mainEl.appendChild(createCalculator());

  appEl.appendChild(mainEl);

  // 4. Добавляем модалку квиза в самый низ (вне основного потока)
  appEl.appendChild(createQuiz());

  // 5. Добавляем подвал сайта
  appEl.appendChild(createFooter());

  // 6. Вешаем обработчик для открытия модалки квиза
  document.querySelectorAll('a[href="#quiz"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById('quiz-modal');
      if (modal) modal.classList.remove('hidden');
    });
  });

  // 7. Инициализируем иконки Lucide
  initIcons();
}

// Запуск приложения
initApp();
