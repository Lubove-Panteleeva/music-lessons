// ============================================
// БАЗА ДАННЫХ ИГР ПО ВСЕМ УРОКАМ
// ============================================

const gamesData = {
  // ===== 6 КЛАСС =====
  crossword_grade6_lesson1: {
    title: "Музыкальные инструменты Древней Руси",
    words: [
      { word: "ГУСЛИ", clue: "Самый известный древнерусский струнный инструмент" },
      { word: "СВИРЕЛЬ", clue: "Продольная флейта" },
      { word: "РОЖОК", clue: "Деревянный духовой инструмент пастухов" },
      { word: "БУБЕН", clue: "Ударный инструмент с погремушками" },
      { word: "ЖАЛЕЙКА", clue: "Язычковый инструмент с резким звуком" }
    ]
  },
  wordsearch_grade6_lesson1: {
    title: "Жанры народной музыки",
    words: ["КОЛЯДКА", "БЫЛИНА", "ХОРОВОД", "ПЕСНЯ", "СВАДЬБА", "ПЛЯСОВАЯ", "ПРИЧЕТ"]
  },
  emoji_grade6_lesson1: {
    puzzles: [
      { emoji: "🎵❄️", answer: "Коляда", hint: "Зимняя обрядовая песня" },
      { emoji: "🌸🎶", answer: "Веснянка", hint: "Весенняя закличка" },
      { emoji: "🎭👑", answer: "Былина", hint: "Эпическая песня о богатырях" },
      { emoji: "🎵😢", answer: "Причет", hint: "Песня невесты" },
      { emoji: "🎶👥", answer: "Рабочая песня", hint: "Песня во время труда" }
    ]
  },
  rebus_grade6_lesson1: {
    puzzles: [
      { answer: "ГУСЛИ", clue: "Струнный инструмент" },
      { answer: "РОЖОК", clue: "Духовой инструмент" },
      { answer: "ПЕСНЯ", clue: "Музыкальное произведение" }
    ]
  },

  crossword_grade6_lesson2: {
    title: "Живая старина: термины",
    words: [
      { word: "АНСАМБЛЬ", clue: "Музыкальный коллектив, исполняющий народные песни" },
      { word: "ТРАДИЦИЯ", clue: "То, что передается из поколения в поколение" },
      { word: "БАЯН", clue: "Современный родственник гармони" },
      { word: "ФЕСТИВАЛЬ", clue: "Праздник искусства, конкурс исполнителей" },
      { word: "ЭТНО", clue: "Приставка, означающая 'народный'" }
    ]
  },
  wordsearch_grade6_lesson2: {
    title: "Музыка родного края",
    words: ["НАРОД", "ПЕСНЯ", "КРАЙ", "ХОР", "ГУСЛИ", "ТВОРЧЕСТВО", "ОБРЯД", "ФЕСТИВАЛЬ"]
  },
  emoji_grade6_lesson2: {
    puzzles: [
      { emoji: "👵🎤", answer: "Аутентичный фольклор", hint: "Исполнение песен в первозданном виде" },
      { emoji: "🪕🤘", answer: "Фолк-рок", hint: "Смешение народной музыки и рока" },
      { emoji: "🏆🎶", answer: "Фестиваль", hint: "Масштабный праздник музыки" },
      { emoji: "🎙️🚗", answer: "Экспедиция", hint: "Поездка ученых в деревни для записи песен" }
    ]
  },
  rebus_grade6_lesson2: {
    puzzles: [
      { answer: "БАЯН", clue: "Инструмент, в который превратилась гармонь" },
      { answer: "ХОР", clue: "Коллективное пение" },
      { answer: "ЭТНО", clue: "Приставка, означающая народную принадлежность" }
    ]
  },

  // ===== 7 КЛАСС =====
  crossword_grade7_lesson1: {
    title: "Музыкальная Россия",
    words: [
      { word: "КАВКАЗ", clue: "Регион с мощным многоголосием и казачьими песнями" },
      { word: "КАРЕЛИЯ", clue: "Регион, где исполняют эпос 'Калевала'" },
      { word: "КУРАЙ", clue: "Башкирский духовой инструмент" },
      { word: "СИБИРЬ", clue: "Регион с горловым пением" },
      { word: "ГАРМОНЬ", clue: "Популярный инструмент Центральной России" }
    ]
  },
  wordsearch_grade7_lesson1: {
    title: "Регионы и инструменты России",
    words: ["КАВКАЗ", "СИБИРЬ", "КАРЕЛИЯ", "КУРАЙ", "ГУСЛИ", "БАЯН", "КАНТЕЛЕ", "ФОЛЬКЛОР"]
  },
  emoji_grade7_lesson1: {
    puzzles: [
      { emoji: "🏔️🔥", answer: "Кавказ", hint: "Регион с огненными танцами и песнями" },
      { emoji: "🌲📜", answer: "Карелия", hint: "Северный регион с эпосом и кантеле" },
      { emoji: "🎵🏔️", answer: "Сибирь", hint: "Регион с горловым пением" },
      { emoji: "🎻🎪", answer: "Гармонь", hint: "Популярный инструмент Центральной России" }
    ]
  },
  rebus_grade7_lesson1: {
    puzzles: [
      { answer: "ФОЛЬКЛОР", clue: "Народное музыкальное творчество" },
      { answer: "КАВКАЗ", clue: "Регион с казачьими песнями" },
      { answer: "БАЯН", clue: "Современный родственник гармони" }
    ]
  },

  crossword_grade7_lesson2: {
    title: "Детский фольклор",
    words: [
      { word: "КОЛЫБЕЛЬНАЯ", clue: "Песня, которую поют ребенку перед сном" },
      { word: "СЧИТАЛКА", clue: "Рифмовка для распределения ролей в игре" },
      { word: "СЕМЬЯ", clue: "Главный хранитель домашних музыкальных традиций" },
      { word: "ПОТЕШКА", clue: "Короткая песенка-приговорка (например, 'Сорока-ворона')" },
      { word: "ТРАДИЦИЯ", clue: "То, что передается от бабушек к внукам" }
    ]
  },
  wordsearch_grade7_lesson2: {
    title: "В кругу семьи",
    words: ["КОЛЫБЕЛЬНАЯ", "СЧИТАЛКА", "СЕМЬЯ", "ТРАДИЦИЯ", "ПОТЕШКА", "ДЕТСТВО", "ПЕСНЯ", "ЛАДУШКИ"]
  },
  emoji_grade7_lesson2: {
    puzzles: [
      { emoji: "🍼😴", answer: "Колыбельная", hint: "Песня для укачивания малыша" },
      { emoji: "👦🔢", answer: "Считалка", hint: "Ритмичный текст для начала игры" },
      { emoji: "👵👶🎶", answer: "Семейная традиция", hint: "Передача песен от старших к младшим" },
      { emoji: "🐦🥣", answer: "Потешка", hint: "Сорока-ворона кашу варила..." }
    ]
  },
  rebus_grade7_lesson2: {
    puzzles: [
      { answer: "СЕМЬЯ", clue: "Самый близкий круг людей" },
      { answer: "ДЕТИ", clue: "Главные исполнители считалок и дразнилок" },
      { answer: "СОН", clue: "Время, для которого предназначена колыбельная" }
    ]
  },

  // ===== 7 КЛАСС - УРОК 3 =====
  crossword_grade7_lesson3: {
    title: "Народный календарь",
    words: [
      { word: "КОЛЯДКИ", clue: "Зимние обрядовые песни" },
      { word: "ВЕСНЯНКИ", clue: "Весенние песни встречи весны" },
      { word: "МАСЛЕНИЦА", clue: "Праздник проводов зимы" },
      { word: "КУПАЛА", clue: "Летний праздник солнцеворота" },
      { word: "ОБЖИНКИ", clue: "Праздник окончания жатвы" }
    ]
  },
  wordsearch_grade7_lesson3: {
    title: "Слова календаря",
    words: ["КОЛЯДКИ", "ВЕСНЯНКИ", "МАСЛЕНИЦА", "СВЯТКИ", "КУПАЛА", "ОБЖИНКИ", "ЗАКЛИЧКИ", "ЖНИВНЫЕ"]
  },
  emoji_grade7_lesson3: {
    puzzles: [
      { emoji: "🎄🎶🏠", answer: "Колядки", hint: "Зимние обрядовые песни" },
      { emoji: "☀️🌾🔥", answer: "Иван Купала", hint: "Летний праздник солнцеворота" },
      { emoji: "🌸🐦🌱", answer: "Веснянки", hint: "Весенние песни" },
      { emoji: "🥞🔥🎭", answer: "Масленица", hint: "Проводы зимы" },
      { emoji: "🌞🙏🌧️", answer: "Заклички", hint: "Обращения к силам природы" }
    ]
  },
  rebus_grade7_lesson3: {
    puzzles: [
      { answer: "КОЛЯДА", clue: "Зимний праздник (предлог КО + ЛЯДА)" },
      { answer: "ВЕСНА", clue: "Время года, которое 'заклинают' прийти" }
    ]
  },

  // ===== 8 КЛАСС =====
  crossword_grade8_lesson1: {
    title: "Композиторы и произведения",
    words: [
      { word: "СИМФОНИЯ", clue: "Крупное оркестровое произведение" },
      { word: "СВИРИДОВ", clue: "Композитор, написавший «Романс» к «Метели»" },
      { word: "РАХМАНИНОВ", clue: "Автор романса «Весенние воды»" },
      { word: "ГИМН", clue: "Торжественная песня, символом которой стала музыка Глинки" },
      { word: "РОМАНС", clue: "Вокальный жанр для голоса с сопровождением" }
    ]
  },
  wordsearch_grade8_lesson1: {
    title: "Образы Родины в музыке",
    words: ["ПРИРОДА", "ПАТРИОТ", "ОКТЯБРЬ", "ВЕСНА", "МЕТЕЛЬ", "РОССИЯ", "ЭПОС", "ПЕЙЗАЖ"]
  },
  emoji_grade8_lesson1: {
    puzzles: [
      { emoji: "❄️📖🎻", answer: "Метель", hint: "Музыкальные иллюстрации Свиридова" },
      { emoji: "🍂🕰️", answer: "Осенняя песнь", hint: "Пьеса Чайковского из цикла «Времена года»" },
      { emoji: "🌊🌸", answer: "Весенние воды", hint: "Знаменитый романс Рахманинова" },
      { emoji: "🇷🇺🎺", answer: "Гимн", hint: "Торжественная музыка государства" }
    ]
  },
  rebus_grade8_lesson1: {
    puzzles: [
      { answer: "РОМАНС", clue: "Вокальный жанр для голоса с инструментальным сопровождением" },
      { answer: "ГИМН", clue: "Торжественная песня, прославляющая страну" },
      { answer: "ЭПОС", clue: "Героическое повествование о прошлом" }
    ]
  },

  crossword_grade8_lesson2: {
    title: "Юный исследователь",
    words: [
      { word: "ПРОЕКТ", clue: "Самостоятельная исследовательская работа" },
      { word: "ТЕМА", clue: "То, что выбирается в первую очередь" },
      { word: "АНАЛИЗ", clue: "Детальное изучение музыкального произведения" },
      { word: "ВЫВОД", clue: "Итог исследования, помещаемый в конце" },
      { word: "ИСТОЧНИК", clue: "Книга, статья или запись, откуда взята информация" }
    ]
  },
  wordsearch_grade8_lesson2: {
    title: "Структура проекта",
    words: ["ПРОЕКТ", "ИССЛЕДОВАНИЕ", "ТЕМА", "ПЛАН", "АНАЛИЗ", "ВЫВОД", "ИСТОЧНИК", "ЦЕЛЬ", "САМПЛ", "ЛОФИ"]
  },
  emoji_grade8_lesson2: {
    puzzles: [
      { emoji: "🎵🎮", answer: "Саундтрек", hint: "Музыкальное сопровождение видеоигры" },
      { emoji: "🤖🎹", answer: "ИИ в музыке", hint: "Когда нейросеть сочиняет мелодии" },
      { emoji: "📚☕", answer: "Lo-Fi", hint: "Расслабляющая музыка для учебы" },
      { emoji: "🎤🔄", answer: "Сэмплинг", hint: "Использование фрагмента чужой записи в новом треке" }
    ]
  },
  rebus_grade8_lesson2: {
    puzzles: [
      { answer: "ПЛАН", clue: "Пошаговый план действий в проекте" },
      { answer: "ЦЕЛЬ", clue: "То, чего хочет достичь исследователь" },
      { answer: "ИСТОЧНИК", clue: "Откуда берется информация для исследования" }
    ]
  }
};

// ============================================
// УНИВЕРСАЛЬНЫЕ ФУНКЦИИ ИНИЦИАЛИЗАЦИИ ИГР
// ============================================

function initCrossword(data) {
    const container = document.getElementById('crossword-container');
    if (!container || !data) return;

    let html = '<div class="crossword-simple">';
    data.words.forEach((item, index) => {
        html += `
            <div class="crossword-item">
                <strong>${index + 1}.</strong> ${item.clue}<br>
                <input type="text" data-answer="${item.word}" placeholder="Введите слово" autocomplete="off">
            </div>
        `;
    });
    html += '</div>';
    html += '<button class="btn-submit" onclick="checkCrosswordAnswers()">Проверить</button>';
    html += '<div id="crossword-result"></div>';

    container.innerHTML = html;
}

window.checkCrosswordAnswers = function() {
    const inputs = document.querySelectorAll('.crossword-simple input');
    let correct = 0;

    inputs.forEach(input => {
        const userAnswer = input.value.toUpperCase().trim();
        const correctAnswer = input.dataset.answer;
        
        if (userAnswer === correctAnswer) {
            correct++;
            input.style.borderColor = '#00b894';
            input.style.background = '#d4edda';
        } else {
            input.style.borderColor = '#d63031';
            input.style.background = '#f8d7da';
        }
    });

    const result = document.getElementById('crossword-result');
    if (result) {
        result.innerHTML = `<div class="result-message ${correct === inputs.length ? 'success' : 'error'}">Правильно: ${correct} из ${inputs.length}</div>`;
    }
};

function initWordSearch(data) {
    const container = document.getElementById('wordsearch-container');
    if (!container || !data) return;

    let html = '<div class="wordsearch-list"><h4>Найдите слова:</h4><ul>';
    data.words.forEach(word => {
        html += `<li>${word}</li>`;
    });
    html += '</ul></div>';
    html += '<p class="hint">💡 Подсказка: слова можно искать по горизонтали, вертикали и диагонали.</p>';

    container.innerHTML = html;
}

function initEmojiGame(data) {
    const container = document.getElementById('emoji-container');
    if (!container || !data) return;

    let currentIndex = 0;
    let score = 0;

    function showEmoji() {
        if (currentIndex >= data.length) {
            showResults();
            return;
        }

        const item = data[currentIndex];
        const emojiDisplay = item.emoji || item.emojis || "❓";
        
        container.innerHTML = `
            <div class="emoji-game">
                <div class="emoji-display">${emojiDisplay}</div>
                <p class="hint">Подсказка: ${item.hint}</p>
                <input type="text" id="emoji-answer" placeholder="Ваш ответ" class="game-input" autocomplete="off">
                <button class="btn-submit" onclick="checkEmojiAnswer()">Проверить</button>
                <div id="emoji-result"></div>
                <p style="margin-top: 15px; color: #636e72;">Вопрос ${currentIndex + 1} из ${data.length}</p>
            </div>
        `;
    }

    window.checkEmojiAnswer = function() {
        const input = document.getElementById('emoji-answer');
        const result = document.getElementById('emoji-result');
        if (!input || !result) return;

        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = data[currentIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            result.innerHTML = '<div class="result-message success">✓ Правильно!</div>';
            score++;
        } else {
            result.innerHTML = `<div class="result-message error">✗ Правильный ответ: ${data[currentIndex].answer}</div>`;
        }

        setTimeout(() => {
            currentIndex++;
            showEmoji();
        }, 1500);
    };

    function showResults() {
        const percentage = Math.round((score / data.length) * 100);
        container.innerHTML = `
            <div class="quiz-results">
                <h3>🎉 Результаты эмодзи-шарады</h3>
                <p>Правильных ответов: ${score} из ${data.length}</p>
                <p>Процент: ${percentage}%</p>
                <button class="btn-submit" onclick="location.reload()">Играть снова</button>
            </div>
        `;
    }

    showEmoji();
}

function initRebus(data) {
    const container = document.getElementById('rebus-container');
    if (!container || !data) return;

    let html = '';
    data.puzzles.forEach((puzzle, index) => {
        html += `
            <div class="rebus-item">
                <p><strong>Ребус ${index + 1}:</strong> ${puzzle.clue}</p>
                <div style="font-size:2em; margin:15px 0; text-align:center;">
                    <div style="background:white; padding:20px; border-radius:10px; border:2px dashed #667eea; display:inline-block;">
                        🎨 [Изображение ребуса]
                    </div>
                </div>
                <input type="text" class="rebus-input" data-answer="${puzzle.answer}" placeholder="Ваш ответ" autocomplete="off">
                <button class="btn-submit" onclick="checkRebusAnswer(this)">Проверить</button>
                <div class="rebus-result"></div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

window.checkRebusAnswer = function(button) {
    const container = button.parentElement;
    const input = container.querySelector('.rebus-input');
    const result = container.querySelector('.rebus-result');
    const answer = input.dataset.answer.toLowerCase();
    const userAnswer = input.value.trim().toLowerCase();
    
    if (userAnswer === answer) {
        result.innerHTML = '<div class="result-message success">✓ Правильно!</div>';
        input.style.borderColor = '#00b894';
    } else {
        result.innerHTML = `<div class="result-message error">✗ Правильный ответ: ${input.dataset.answer}</div>`;
        input.style.borderColor = '#d63031';
    }
};

// ============================================
// АВТОМАТИЧЕСКАЯ ИНИЦИАЛИЗАЦИЯ ИГР НА СТРАНИЦЕ УРОКА
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, находимся ли мы на странице урока
    if (document.querySelector('.lesson-page')) {
        const path = window.location.pathname;
        // Извлекаем номер урока и класса из имени файла (например, lesson3-grade7.html)
        const match = path.match(/lesson(\d+)-grade(\d+)\.html/);
        
        if (match) {
            const lesson = match[1];
            const grade = match[2];
            
            // Инициализируем кроссворд, если есть данные и контейнер
            const crosswordData = gamesData[`crossword_grade${grade}_lesson${lesson}`];
            if (crosswordData && document.getElementById('crossword-container')) {
                initCrossword(crosswordData);
            }
            
            // Инициализируем филворд
            const wordsearchData = gamesData[`wordsearch_grade${grade}_lesson${lesson}`];
            if (wordsearchData && document.getElementById('wordsearch-container')) {
                initWordSearch(wordsearchData);
            }
            
            // Инициализируем эмодзи-шараду
            const emojiData = gamesData[`emoji_grade${grade}_lesson${lesson}`];
            if (emojiData && document.getElementById('emoji-container')) {
                initEmojiGame(emojiData);
            }
            
            // Инициализируем ребусы
            const rebusData = gamesData[`rebus_grade${grade}_lesson${lesson}`];
            if (rebusData && document.getElementById('rebus-container')) {
                initRebus(rebusData);
            }
        }
    }
});
