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
  },

  // ===== 8 КЛАСС - УРОК 3 (НОВЫЙ БЛОК) =====
  crossword_grade8_lesson3: {
    title: "Музыкальная панорама мира",
    words: [
      { word: "ФЛАМЕНКО", clue: "Испанский музыкальный жанр и танец с гитарой и кастаньетами" },
      { word: "ДЖЕМБЕ", clue: "Африканский барабан в форме кубка" },
      { word: "РАГА", clue: "Мелодическая основа индийской классической музыки" },
      { word: "КОТО", clue: "Традиционный японский струнный щипковый инструмент" },
      { word: "САМБА", clue: "Бразильский музыкальный жанр и карнавальный танец" }
    ]
  },
  wordsearch_grade8_lesson3: {
    title: "Инструменты и жанры мира",
    words: ["ФЛАМЕНКО", "ДЖЕМБЕ", "РАГА", "КОТО", "САМБА", "ДЖАЗ", "БЛЮЗ", "ВОЛЫНКА"]
  },
  emoji_grade8_lesson3: {
    puzzles: [
      { emoji: "🇪🇸💃🎸", answer: "Фламенко", hint: "Страстный испанский танец" },
      { emoji: "🥁🌍🔥", answer: "Джембе", hint: "Главный африканский барабан" },
      { emoji: "🇯🇵🎵🎋", answer: "Кото", hint: "Японский струнный инструмент" },
      { emoji: "🇧🇷🎉🎺", answer: "Самба", hint: "Ритм бразильского карнавала" },
      { emoji: "🎷🎹🗽", answer: "Джаз", hint: "Музыкальный жанр, зародившийся в Америке" }
    ]
  },
  rebus_grade8_lesson3: {
    puzzles: [
      { answer: "ДЖАЗ", clue: "Синкопированная музыка, зародившаяся в США" },
      { answer: "САМБА", clue: "Ритм бразильского карнавала (СА + МБА)" },
      { answer: "РАГА", clue: "Основа индийской мелодии (РА + ГА)" }
    ]
  }
};

// ============================================
// УНИВЕРСАЛЬНЫЕ ФУНКЦИИ ИНИЦИАЛИЗАЦИИ ИГР
// ============================================

function initCrossword(data) {
    const container = document.getElementById('crossword-container');
    if (!container || !data) return;

    let html = `<h3 style="margin-bottom: 20px; color: #333;">📝 ${data.title}</h3><div class="crossword-simple">`;
    data.words.forEach((item, index) => {
        html += `
            <div class="crossword-item" style="margin-bottom: 15px;">
                <strong>${index + 1}.</strong> ${item.clue}<br>
                <input type="text" data-answer="${item.word}" placeholder="Введите слово" autocomplete="off" style="margin-top: 5px; padding: 8px; width: 100%; max-width: 300px; border: 1px solid #ccc; border-radius: 5px;">
            </div>
        `;
    });
    html += '</div>';
    html += '<button class="btn-submit" onclick="checkCrosswordAnswers()" style="margin-top: 15px; padding: 10px 25px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">Проверить</button>';
    html += '<div id="crossword-result" style="margin-top: 15px; font-weight: bold;"></div>';

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
        const isSuccess = correct === inputs.length;
        result.innerHTML = `<div class="result-message" style="padding: 10px; border-radius: 5px; background: ${isSuccess ? '#d4edda' : '#f8d7da'}; color: ${isSuccess ? '#155724' : '#721c24'};">Правильно: ${correct} из ${inputs.length}</div>`;
    }
};

function initWordSearch(data) {
    const container = document.getElementById('wordsearch-container');
    if (!container || !data) return;

    let html = `<h3 style="margin-bottom: 20px; color: #333;">🔤 ${data.title}</h3><div class="wordsearch-list" style="background: white; padding: 20px; border-radius: 10px;"><h4>Найдите слова:</h4><ul style="columns: 2; list-style-type: none; padding: 0;">`;
    data.words.forEach(word => {
        html += `<li style="padding: 5px 0; font-weight: 600; color: #667eea;">${word}</li>`;
    });
    html += '</ul></div>';
    html += '<p class="hint" style="margin-top: 15px; color: #666;">💡 Подсказка: в полной версии здесь будет интерактивная сетка букв. А пока найдите эти слова в тексте урока!</p>';

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
        const emojiDisplay = item.emoji || "❓";
        
        container.innerHTML = `
            <div class="emoji-game" style="text-align: center; background: white; padding: 30px; border-radius: 15px;">
                <h3 style="color: #333;">😊 Эмодзи-шарада</h3>
                <div class="emoji-display" style="font-size: 4em; margin: 20px 0;">${emojiDisplay}</div>
                <p class="hint" style="color: #666; font-style: italic;">Подсказка: ${item.hint}</p>
                <input type="text" id="emoji-answer" placeholder="Ваш ответ" class="game-input" autocomplete="off" style="padding: 10px; width: 80%; max-width: 300px; border: 1px solid #ccc; border-radius: 5px; margin: 15px 0;">
                <br>
                <button class="btn-submit" onclick="checkEmojiAnswer()" style="padding: 10px 25px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">Проверить</button>
                <div id="emoji-result" style="margin-top: 15px; min-height: 30px;"></div>
                <p style="margin-top: 20px; color: #999;">Вопрос ${currentIndex + 1} из ${data.length}</p>
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
            result.innerHTML = '<div class="result-message success" style="color: #00b894; font-weight: bold;">✓ Правильно!</div>';
            score++;
        } else {
            result.innerHTML = `<div class="result-message error" style="color: #d63031; font-weight: bold;">✗ Правильный ответ: ${data[currentIndex].answer}</div>`;
        }

        // Блокируем ввод после ответа
        input.disabled = true;

        setTimeout(() => {
            currentIndex++;
            showEmoji();
        }, 2000);
    };

    function showResults() {
        const percentage = Math.round((score / data.length) * 100);
        container.innerHTML = `
            <div class="quiz-results" style="text-align: center; background: white; padding: 30px; border-radius: 15px;">
                <h3>🎉 Результаты эмодзи-шарады</h3>
                <p style="font-size: 1.2em;">Правильных ответов: <strong>${score}</strong> из <strong>${data.length}</strong></p>
                <p style="font-size: 1.5em; color: #667eea; font-weight: bold;">${percentage}%</p>
                <button class="btn-submit" onclick="location.reload()" style="margin-top: 20px; padding: 10px 25px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer;">Играть снова</button>
            </div>
        `;
    }

    showEmoji();
}

function initRebus(data) {
    const container = document.getElementById('rebus-container');
    if (!container || !data) return;

    let html = `<h3 style="margin-bottom: 20px; color: #333;">🧩 Разгадайте ребусы</h3>`;
    data.puzzles.forEach((puzzle, index) => {
        html += `
            <div class="rebus-item" style="background: white; padding: 20px; margin-bottom: 20px; border-radius: 10px; border-left: 4px solid #667eea;">
                <p><strong>Ребус ${index + 1}:</strong> ${puzzle.clue}</p>
                <div style="font-size:2em; margin:15px 0; text-align:center;">
                    <div style="background:#f8f9fa; padding:20px; border-radius:10px; border:2px dashed #667eea; display:inline-block; color: #999;">
                        🎨 [Здесь будет изображение ребуса]
                    </div>
                </div>
                <input type="text" class="rebus-input" data-answer="${puzzle.answer}" placeholder="Ваш ответ" autocomplete="off" style="padding: 8px; width: 100%; max-width: 300px; border: 1px solid #ccc; border-radius: 5px;">
                <button class="btn-submit" onclick="checkRebusAnswer(this)" style="margin-top: 10px; padding: 8px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">Проверить</button>
                <div class="rebus-result" style="margin-top: 10px; font-weight: bold;"></div>
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
        result.innerHTML = '<div class="result-message success" style="color: #00b894;">✓ Правильно!</div>';
        input.style.borderColor = '#00b894';
        input.style.background = '#d4edda';
        input.disabled = true;
        button.disabled = true;
        button.style.opacity = '0.6';
    } else {
        result.innerHTML = `<div class="result-message error" style="color: #d63031;">✗ Правильный ответ: ${input.dataset.answer}</div>`;
        input.style.borderColor = '#d63031';
        input.style.background = '#f8d7da';
    }
};

// ============================================
// ГЛАВНАЯ ФУНКЦИЯ ЗАПУСКА ИГРЫ (Связывает HTML кнопки с данными)
// ============================================
window.openGame = function(gameType, grade, lesson) {
    // Находим или создаем контейнер для активной игры на странице урока
    let container = document.getElementById('active-game-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'active-game-container';
        container.className = 'active-game-container';
        container.style.cssText = 'background: #f8f9fa; padding: 30px; border-radius: 15px; margin: 30px 0; border: 2px solid #667eea; box-shadow: 0 4px 15px rgba(0,0,0,0.1);';

        // Вставляем его в конец основного контента урока
        const lessonContent = document.querySelector('.lesson-content') || document.body;
        lessonContent.appendChild(container);
    }

    container.innerHTML = '<h3 style="text-align:center; color: #667eea;">⏳ Загрузка игры...</h3>';

    const keyPrefix = `grade${grade}_lesson${lesson}`;
    let data = null;
    let initFunction = null;
    let containerId = '';

    switch(gameType) {
        case 'crossword':
            data = gamesData[`crossword_${keyPrefix}`];
            initFunction = initCrossword;
            containerId = 'crossword-container';
            break;
        case 'wordsearch':
            data = gamesData[`wordsearch_${keyPrefix}`];
            initFunction = initWordSearch;
            containerId = 'wordsearch-container';
            break;
        case 'emoji':
            data = gamesData[`emoji_${keyPrefix}`];
            initFunction = initEmojiGame;
            containerId = 'emoji-container';
            break;
        case 'rebus':
            data = gamesData[`rebus_${keyPrefix}`];
            initFunction = initRebus;
            containerId = 'rebus-container';
            break;
    }

    if (data && initFunction) {
        // Создаем временный контейнер внутри active-game-container для конкретной игры
        const gameDiv = document.createElement('div');
        gameDiv.id = containerId;
        container.innerHTML = ''; // Очищаем "Загрузку"
        container.appendChild(gameDiv);

        // Добавляем кнопку "Закрыть игру"
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✖ Закрыть игру';
        closeBtn.style.cssText = 'display: block; margin: 20px auto 0; padding: 10px 20px; background: #f44336; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; transition: background 0.2s;';
        closeBtn.onmouseover = () => closeBtn.style.background = '#d32f2f';
        closeBtn.onmouseout = () => closeBtn.style.background = '#f44336';
        closeBtn.onclick = () => { 
            container.innerHTML = ''; 
            // Плавная прокрутка обратно к заголовку игр
            document.querySelector('.games-section')?.scrollIntoView({ behavior: 'smooth' });
        };
        container.appendChild(closeBtn);

        // Запускаем инициализацию конкретной игры
        initFunction(data);

        // Прокручиваем страницу к появившейся игре
        setTimeout(() => {
            container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    } else {
        container.innerHTML = `
            <h3 style="text-align:center; color: #f44336;">😕 Игра пока не готова</h3>
            <p style="text-align:center; color: #666;">Данные для игры "${gameType}" (${grade} класс, ${lesson} урок) еще не добавлены в базу.</p>
            <button onclick="document.getElementById('active-game-container').innerHTML=''" style="display:block; margin: 20px auto; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer;">Закрыть</button>
        `;
    }
};

// ============================================
// АВТОМАТИЧЕСКАЯ ИНИЦИАЛИЗАЦИЯ (Fallback)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Этот блок сработает, если игры нужно загрузить сразу при открытии страницы, 
    // а не по клику на кнопку.
    if (document.querySelector('.lesson-page')) {
        const path = window.location.pathname;
        const match = path.match(/lesson(\d+)-grade(\d+)\.html/);
        
        if (match) {
            const lesson = match[1];
            const grade = match[2];
            
            // Если на странице уже есть статические контейнеры (например, для демо), заполняем их
            if (document.getElementById('crossword-container')) initCrossword(gamesData[`crossword_grade${grade}_lesson${lesson}`]);
            if (document.getElementById('wordsearch-container')) initWordSearch(gamesData[`wordsearch_grade${grade}_lesson${lesson}`]);
            if (document.getElementById('emoji-container')) initEmojiGame(gamesData[`emoji_grade${grade}_lesson${lesson}`]);
            if (document.getElementById('rebus-container')) initRebus(gamesData[`rebus_grade${grade}_lesson${lesson}`]);
        }
    }
});
