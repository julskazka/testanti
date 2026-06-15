// js/app.js
// Главная точка входа приложения.
// Здесь собираются все компоненты в единую структуру.

import { initIcons } from './utils.js';
import { createHeader, createFooter } from './components/header.js';
import { createHero } from './components/hero.js';
import { createServices } from './components/services.js';
import { createCalculator } from './components/calculator.js';
import { createContact } from './components/contact.js';

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
  mainEl.appendChild(createCalculator());
  mainEl.appendChild(createContact());

  appEl.appendChild(mainEl);

  // 4. Добавляем подвал сайта
  appEl.appendChild(createFooter());

  // 5. Инициализируем иконки Lucide
  initIcons();
}

// Запуск приложения
initApp();
