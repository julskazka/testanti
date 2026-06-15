// js/components/header.js
// Компонент шапки (навигации) и подвала (футера) сайта.

import { createElement } from '../utils.js';

/**
 * Создает и возвращает элемент шапки.
 * @returns {HTMLElement}
 */
export function createHeader() {
  const html = `
    <header class="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f19]/85 border-b border-[var(--color-border)]">
      <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <!-- Логотип -->
        <a href="#" class="flex items-center space-x-2 btn-press">
          <span class="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-orange-500/20">
            Ю
          </span>
          <span class="font-bold text-lg tracking-tight bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 bg-clip-text text-transparent">
            Юлианна
          </span>
        </a>

        <!-- Навигация -->
        <nav class="hidden sm:flex items-center space-x-6 text-sm font-medium">
          <a href="#services" class="hover:text-[var(--color-accent)] transition-colors">Услуги</a>
          <a href="#portfolio" class="hover:text-[var(--color-accent)] transition-colors">Кейсы</a>
          <a href="#calculator" class="hover:text-[var(--color-accent)] transition-colors">Расчет</a>
        </nav>

        <!-- Кнопка связи -->
        <a href="https://t.me/Julskazka" target="_blank" rel="noopener noreferrer" 
           class="btn-press flex items-center space-x-1.5 px-4 h-9 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-semibold shadow-md shadow-orange-500/10">
          <i data-lucide="send" class="w-3.5 h-3.5"></i>
          <span>Связаться</span>
        </a>
      </div>
    </header>
  `;
  return createElement(html);
}

/**
 * Создает и возвращает элемент футера.
 * @returns {HTMLElement}
 */
export function createFooter() {
  const year = new Date().getFullYear();
  const html = `
    <footer class="border-t border-[var(--color-border)] py-8 mt-16 bg-[var(--color-surface)]">
      <div class="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--color-muted)] gap-4">
        <div class="flex items-center space-x-2">
          <span class="font-semibold text-sm tracking-tight bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            Юлианна
          </span>
          <span>&copy; ${year}. Все права защищены.</span>
        </div>
        <div class="flex space-x-6">
          <a href="#services" class="hover:text-[var(--color-text)] transition-colors">Услуги</a>
          <a href="#portfolio" class="hover:text-[var(--color-text)] transition-colors">Кейсы</a>
          <a href="https://t.me/Julskazka" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-text)] transition-colors">Telegram</a>
        </div>
        <div class="text-[10px]">
          Спроектировано в Notibot & Vibe Coding
        </div>
      </div>
    </footer>
  `;
  return createElement(html);
}
