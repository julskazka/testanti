// js/components/services.js
// Блок со списком услуг и экспертными преимуществами Юлианны.

import { createElement } from '../utils.js';

/**
 * Создает и возвращает элемент секции услуг.
 * @returns {HTMLElement}
 */
export function createServices() {
  const html = `
    <section id="services" class="py-12 scroll-mt-20">
      <div class="space-y-8 max-w-2xl mx-auto">
        <!-- Заголовок секции -->
        <div class="text-center space-y-2">
          <h2 class="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
            Чем я могу быть полезна вашему бизнесу
          </h2>
          <p style="color: var(--color-muted)" class="text-xs sm:text-sm max-w-md mx-auto">
            От проектирования CJM (карты пути клиента) до технической связки с GetCourse и кастомного Vibe-кода.
          </p>
        </div>

        <!-- Сетка услуг (3 карточки) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <!-- Услуга 1: Архитектура воронок -->
          <div class="card flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
            <div class="space-y-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <i data-lucide="git-branch" class="w-5 h-5"></i>
              </div>
              <h3 class="font-bold text-base text-[var(--color-text)]">Архитектура и логика воронок</h3>
              <p style="color: var(--color-muted)" class="text-xs leading-relaxed">
                Смысловое проектирование. Разбираю продукт и аудиторию, строю CJM, прописываю развилки касаний и сценарии прогрева.
              </p>
            </div>
            <div class="pt-4 border-t border-[var(--color-border)] mt-4">
              <span class="text-xs font-semibold text-indigo-500">С фокусом на конверсию</span>
            </div>
          </div>

          <!-- Услуга 2: Разработка в NotiBot + Vibe Coding -->
          <div class="card flex flex-col justify-between hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
            <div class="space-y-3">
              <div class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <i data-lucide="code" class="w-5 h-5"></i>
              </div>
              <h3 class="font-bold text-base text-[var(--color-text)]">NotiBot + Vibe Coding</h3>
              <p style="color: var(--color-muted)" class="text-xs leading-relaxed">
                Реализация мини-аппов (квизы, анкеты, лид-магниты). Доработка кастомного визуала и логики на HTML/JS в обход ограничений конструктора.
              </p>
            </div>
            <div class="pt-4 border-t border-[var(--color-border)] mt-4">
              <span class="text-xs font-semibold text-purple-500">Быстрый запуск и кастомизация</span>
            </div>
          </div>

          <!-- Услуга 3: Интеграции & GetCourse -->
          <div class="card flex flex-col justify-between hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300">
            <div class="space-y-3">
              <div class="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-600 dark:text-pink-400">
                <i data-lucide="database" class="w-5 h-5"></i>
              </div>
              <h3 class="font-bold text-base text-[var(--color-text)]">Связка с GetCourse & CRM</h3>
              <p style="color: var(--color-muted)" class="text-xs leading-relaxed">
                Как технический специалист GetCourse, настраиваю бесшовную передачу лидов, синхронизацию баз данных, сегментацию и выдачу доступов.
              </p>
            </div>
            <div class="pt-4 border-t border-[var(--color-border)] mt-4">
              <span class="text-xs font-semibold text-pink-500">Автоматизация процессов</span>
            </div>
          </div>
        </div>

        <!-- Экспертный блок ("Я не просто собираю...") -->
        <div id="about" class="card bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 border border-indigo-500/10 p-6 rounded-2xl space-y-4">
          <h4 class="font-bold text-sm text-[var(--color-text)] flex items-center gap-2">
            <i data-lucide="shield-check" class="w-4 h-4 text-indigo-500"></i>
            Мой подход к проектированию Mini App
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[var(--color-muted)]">
            <li class="flex items-start gap-2">
              <i data-lucide="check" class="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5"></i>
              <span>Адаптация механики под конкретный рынок и нишу</span>
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="check" class="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5"></i>
              <span>Логика экранов, переходов и удобство пользователя</span>
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="check" class="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5"></i>
              <span>Поиск слабых мест и постоянное улучшение конверсий</span>
            </li>
            <li class="flex items-start gap-2">
              <i data-lucide="check" class="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5"></i>
              <span>Связка NotiBot с общей воронкой и CRM GetCourse</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `;
  return createElement(html);
}
