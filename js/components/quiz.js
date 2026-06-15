// js/components/quiz.js
// Интерактивный квиз-диагностика воронки продаж.

import { createElement } from '../utils.js';

const QUESTIONS = [
  { q: "Какова цель проекта?", opts: [
    { t: "Запуск продукта / лид-магнита", s: "lead" },
    { t: "Повышение конверсий воронки", s: "funnel" },
    { t: "Автоматизация сбора анкет", s: "auto" },
    { t: "Нестандартный Mini App/игра", s: "miniapp" }
  ]},
  { q: "Главная проблема (затык) в продажах?", opts: [
    { t: "Заходят в бота, но не кликают дальше", s: "вовлечение" },
    { t: "Кликают, но не заполняют анкету", s: "конверсия" },
    { t: "Теряются на этапе оплаты/созвона", s: "CRM/допродажи" },
    { t: "Воронки еще нет, не знаю с чего начать", s: "запуск с нуля" }
  ]},
  { q: "Нужен ли кастомный дизайн (Vibe Coding)?", opts: [
    { t: "Да, нужен уникальный интерфейс", s: "vibe" },
    { t: "Достаточно стандартных шаблонов", s: "std" },
    { t: "Пока не знаю", s: "none" }
  ]},
  { q: "Нужна ли интеграция с CRM / GetCourse?", opts: [
    { t: "Да, нужна полная синхронизация", s: "gc" },
    { t: "Достаточно уведомлений в Telegram", s: "tg" },
    { t: "Не уверен", s: "none" }
  ]},
  { q: "Планируемый бюджет?", opts: [
    { t: "До 20 000 ₽", s: "min" },
    { t: "20 000 – 50 000 ₽", s: "med" },
    { t: "Свыше 50 000 ₽", s: "max" }
  ]},
  { q: "Сроки запуска?", opts: [
    { t: "Очень срочно (2-3 дня)", s: "fast" },
    { t: "В течение 1-2 недель", s: "normal" },
    { t: "Не спешу", s: "slow" }
  ]}
];

export function createQuiz() {
  const html = `
    <section id="quiz" class="py-12 scroll-mt-20">
      <div class="space-y-6 max-w-lg mx-auto">
        <div class="text-center space-y-2">
          <h2 class="text-2xl font-bold text-[var(--color-text)]">Пройти диагностику воронки</h2>
          <p style="color: var(--color-muted)" class="text-xs">Ответьте на 6 вопросов, чтобы выявить слабые места воронки и получить персональную рекомендацию.</p>
        </div>
        <div class="card bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(255,255,255,0.02)] backdrop-blur-md relative overflow-hidden p-6 rounded-2xl min-h-[280px]">
          <!-- Прогресс -->
          <div class="flex items-center justify-between text-xs text-[var(--color-muted)] mb-4">
            <span id="quiz-step-text">Вопрос 1 из 6</span>
            <div class="w-24 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
              <div id="quiz-progress-bar" class="h-full bg-indigo-500 transition-all duration-300" style="width: 16%"></div>
            </div>
          </div>
          <!-- Текущий вопрос -->
          <div id="quiz-question-container" class="space-y-4">
            <h3 id="quiz-question-title" class="font-bold text-sm text-[var(--color-text)]"></h3>
            <div id="quiz-options-list" class="flex flex-col gap-2.5"></div>
          </div>
          <!-- Экран результатов -->
          <div id="quiz-result-container" class="hidden text-center py-4 space-y-6 fade-in">
            <div class="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto text-indigo-500"><i data-lucide="check" class="w-7 h-7"></i></div>
            <div class="space-y-2">
              <h3 class="text-lg font-bold text-[var(--color-text)]">Анализ завершен!</h3>
              <div class="text-xs text-[var(--color-muted)] bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)] text-left space-y-2">
                <p>⚠️ <strong>Ваш главный затык:</strong> <span id="res-bottleneck" class="text-[var(--color-text)] font-semibold"></span></p>
                <p>🛠️ <strong>Рекомендуемое решение:</strong> <span id="res-solution" class="text-[var(--color-text)] font-semibold"></span></p>
              </div>
            </div>
            <a href="https://t.me/Julskazka" target="_blank" rel="noopener noreferrer" class="btn-press btn-primary py-3 flex items-center justify-center space-x-2 text-xs">
              <span>Обсудить решение в Telegram</span>
              <i data-lucide="send" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  const el = createElement(html);
  let step = 0;
  const answers = [];

  function showQuestion() {
    if (step >= QUESTIONS.length) {
      showResults();
      return;
    }
    const qData = QUESTIONS[step];
    el.querySelector('#quiz-step-text').textContent = `Вопрос ${step + 1} из 6`;
    el.querySelector('#quiz-progress-bar').style.width = `${((step + 1) / 6) * 100}%`;
    el.querySelector('#quiz-question-title').textContent = qData.q;

    const list = el.querySelector('#quiz-options-list');
    list.innerHTML = '';
    qData.opts.forEach(opt => {
      const btn = createElement(`
        <button class="btn-press w-full text-left px-4 py-3 text-xs bg-[var(--color-surface)] hover:bg-[var(--color-border)] text-[var(--color-text)] rounded-xl border border-[var(--color-border)] transition-all">
          ${opt.t}
        </button>
      `);
      btn.addEventListener('click', () => {
        answers.push(opt.s);
        step++;
        showQuestion();
      });
      list.appendChild(btn);
    });
  }

  function showResults() {
    el.querySelector('#quiz-question-container').classList.add('hidden');
    el.querySelector('#quiz-step-text').parentElement.classList.add('hidden');
    
    const bottleneck = answers[1] || 'запуск воронки';
    const budget = answers[4];
    let solution = 'NotiBot Лид-магнит / Квиз';
    if (budget === 'med') solution = 'Автоворонка NotiBot с интеграцией аналитики';
    if (budget === 'max') solution = 'Кастомное Telegram Mini App (NotiBot + Vibe Coding)';

    el.querySelector('#res-bottleneck').textContent = bottleneck;
    el.querySelector('#res-solution').textContent = solution;
    el.querySelector('#quiz-result-container').classList.remove('hidden');

    if (window.lucide) window.lucide.createIcons();
  }

  setTimeout(showQuestion, 0);
  return el;
}
