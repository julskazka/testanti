// js/components/contact.js
// Форма обратной связи с валидацией и анимацией успешной отправки.

import { createElement, escapeHtml } from '../utils.js';

export function createContact() {
  const html = `
    <section id="contact" class="py-12 scroll-mt-20">
      <div class="space-y-8 max-w-lg mx-auto">
        <!-- Заголовок секции -->
        <div class="text-center space-y-2">
          <h2 class="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
            Обсудить ваш проект
          </h2>
          <p style="color: var(--color-muted)" class="text-xs sm:text-sm">
            Заполните анкету ниже, и я свяжусь с вами в Telegram для детального обсуждения.
          </p>
        </div>

        <!-- Карточка формы -->
        <div class="card bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(255,255,255,0.02)] backdrop-blur-md relative overflow-hidden">
          <!-- Блок формы -->
          <form id="contact-form" class="space-y-4">
            <!-- 1. Имя -->
            <div class="space-y-1">
              <label class="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider">Ваше имя</label>
              <input type="text" id="form-name" placeholder="Иван" 
                     class="w-full px-3 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-indigo-500 transition-colors">
              <span id="err-name" class="text-[10px] text-red-500 hidden font-medium">Пожалуйста, введите имя</span>
            </div>

            <!-- 2. Telegram -->
            <div class="space-y-1">
              <label class="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider">Telegram никнейм</label>
              <input type="text" id="form-tg" placeholder="@username" 
                     class="w-full px-3 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-indigo-500 transition-colors">
              <span id="err-tg" class="text-[10px] text-red-500 hidden font-medium">Введите никнейм в формате @username</span>
            </div>

            <!-- 3. Описание -->
            <div class="space-y-1">
              <label class="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider">Опишите вашу задачу</label>
              <textarea id="form-desc" rows="3" placeholder="Нужна автоворонка для онлайн-школы на GetCourse с квизом..." 
                        class="w-full px-3 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-indigo-500 transition-colors"></textarea>
              <span id="err-desc" class="text-[10px] text-red-500 hidden font-medium">Пожалуйста, опишите вашу задачу</span>
            </div>

            <!-- Кнопка отправки -->
            <button type="submit" class="btn-press btn-primary w-full flex items-center justify-center space-x-2 py-3 mt-2">
              <span>Отправить заявку</span>
              <i data-lucide="send" class="w-4 h-4"></i>
            </button>
          </form>

          <!-- Блок успешной отправки (скрыт по умолчанию) -->
          <div id="contact-success" class="hidden text-center py-8 space-y-5 fade-in">
            <div class="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500 shadow-lg shadow-green-500/10 animate-bounce">
              <i data-lucide="check" class="w-8 h-8"></i>
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-bold text-[var(--color-text)]">Заявка успешно отправлена!</h3>
              <p style="color: var(--color-muted)" class="text-xs max-w-xs mx-auto">
                Спасибо, <span id="success-client-name" class="font-bold text-[var(--color-text)]"></span>! Я уже получила ваши данные и скоро свяжусь с вами.
              </p>
            </div>
            <div class="pt-2">
              <a href="https://t.me/Julskazka" target="_blank" rel="noopener noreferrer" 
                 class="btn-press inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-semibold shadow-md shadow-indigo-500/10">
                <span>Написать мне напрямую</span>
                <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const element = createElement(html);

  const form = element.querySelector('#contact-form');
  const successBlock = element.querySelector('#contact-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = element.querySelector('#form-name');
    const tgInput = element.querySelector('#form-tg');
    const descInput = element.querySelector('#form-desc');

    const errName = element.querySelector('#err-name');
    const errTg = element.querySelector('#err-tg');
    const errDesc = element.querySelector('#err-desc');

    let isValid = true;

    // Валидация Имени
    if (!nameInput.value.trim()) {
      errName.classList.remove('hidden');
      nameInput.classList.add('border-red-500');
      isValid = false;
    } else {
      errName.classList.add('hidden');
      nameInput.classList.remove('border-red-500');
    }

    // Валидация Telegram
    const tgVal = tgInput.value.trim();
    if (!tgVal || (!tgVal.startsWith('@') && tgVal.length < 3)) {
      errTg.classList.remove('hidden');
      tgInput.classList.add('border-red-500');
      isValid = false;
    } else {
      errTg.classList.add('hidden');
      tgInput.classList.remove('border-red-500');
    }

    // Валидация Описания
    if (!descInput.value.trim()) {
      errDesc.classList.remove('hidden');
      descInput.classList.add('border-red-500');
      isValid = false;
    } else {
      errDesc.classList.add('hidden');
      descInput.classList.remove('border-red-500');
    }

    if (isValid) {
      // safe: nameVal is escaped using escapeHtml
      const nameVal = escapeHtml(nameInput.value.trim());
      
      // Скрываем форму и показываем экран успеха
      form.classList.add('hidden');
      successBlock.classList.remove('hidden');
      element.querySelector('#success-client-name').textContent = nameVal;

      // Инициализируем новые иконки в блоке успеха (если есть)
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  });

  return element;
}
