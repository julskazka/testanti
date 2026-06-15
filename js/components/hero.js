// js/components/hero.js
// Главный hero-блок с позиционированием архитектора воронок NotiBot.

import { createElement } from '../utils.js';

/**
 * Создает и возвращает элемент Hero-секции.
 * @returns {HTMLElement}
 */
export function createHero() {
  const html = `
    <section class="relative pt-12 pb-16 overflow-hidden">
      <!-- Фоновые декоративные градиенты (Оранжевый и Мятный) -->
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">
        <!-- Бейджики специализаций (Оранжевый, Янтарный, Мятный) -->
        <div class="flex flex-wrap gap-3.5 justify-center fade-in">
          <span class="px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-orange-500/10 text-orange-600 border border-orange-500/25 shadow-sm">
            Архитектор Mini App
          </span>
          <span class="px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-amber-500/10 text-amber-600 border border-amber-500/25 shadow-sm">
            Специалист GetCourse
          </span>
          <span class="px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/25 shadow-sm">
            Vibe Coding
          </span>
        </div>

        <!-- Заголовок с градиентом -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)] leading-tight slide-up">
          Проектирую <span class="bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 bg-clip-text text-transparent">системы продаж</span> в Telegram Mini Apps
        </h1>

        <!-- Подзаголовок (Философия) -->
        <p style="color: var(--color-muted)" class="text-sm sm:text-base max-w-xl slide-up opacity-90">
          Красивое приложение само по себе не продаёт. Продаёт <span class="text-[var(--color-text)] font-semibold">логика</span>, 
          в которой клиент понимает: «это про меня, и мне это нужно». Собираю воронки в NotiBot как рабочую систему от идеи до аналитики.
        </p>

        <!-- Цитата-блок (Glassmorphism card) -->
        <div class="card w-full text-left bg-[rgba(255,255,255,0.7)] border border-[var(--color-border)] shadow-md max-w-xl mt-4 slide-up">
          <div class="flex items-start space-x-4">
            <span class="text-3xl text-orange-500 font-serif leading-none">“</span>
            <div class="space-y-3 text-xs sm:text-sm leading-relaxed text-[var(--color-muted)]">
              <p class="text-[var(--color-text)] font-semibold">
                Я не просто собираю NotiBot «по кнопкам».
              </p>
              <p>
                Я помогаю бизнесу превратить его в понятную систему, которая ведёт человека от первого интереса до заявки или покупки.
              </p>
              <p>
                Смотрю на продукт, аудиторию и рынок, продумываю, как человек будет двигаться внутри воронки, где его нужно прогреть, где — разделить по интересам, а где — мягко довести до действия.
              </p>
              <p class="border-t border-[var(--color-border)] pt-3 text-[var(--color-text)]">
                ✨ А с помощью <span class="font-semibold text-emerald-500">Vibe Coding</span> можно делать не только стандартные сценарии, а более гибкие решения под конкретный бизнес: чтобы NotiBot работал не «как у всех», а под вашу задачу, вашу аудиторию и вашу систему продаж.
              </p>
            </div>
          </div>
        </div>

        <!-- Кнопки действий -->
        <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-4 slide-up">
          <a href="#quiz" class="btn-press btn-primary w-full sm:w-auto flex items-center justify-center space-x-2">
            <span>Пройти аудит воронки</span>
            <i data-lucide="help-circle" class="w-4 h-4"></i>
          </a>
          <a href="#calculator" class="btn-press w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)] text-[var(--color-text)] text-sm font-semibold transition-all hover:border-orange-500/40">
            <span>Рассчитать стоимость</span>
            <i data-lucide="calculator" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>
  `;
  return createElement(html);
}
