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
      { emoji: "🎭👑", answer: "Былина", hint: "Эпическая песня о богатырях" }
    ]
  },
  rebus_grade6_lesson1: {
    puzzles: [
      { answer: "ГУСЛИ", clue: "Струнный инструмент" },
      { answer: "РОЖОК", clue: "Духовой инструмент" }
    ]
  },

  // ===== 7 КЛАСС =====
  crossword_grade7_lesson1: {
    title: "Музыкальная Россия",
    words: [
      { word: "КАВКАЗ", clue: "Регион с мощным многоголосием" },
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
      { emoji: "🏔️🔥", answer: "Кавказ", hint: "Регион с огненными танцами" },
      { emoji: "🌲📜", answer: "Карелия", hint: "Северный регион с эпосом" }
    ]
  },
  rebus_grade7_lesson1: {
    puzzles: [
      { answer: "ФОЛЬКЛОР", clue: "Народное музыкальное творчество" },
      { answer: "КАВКАЗ", clue: "Регион с казачьими песнями" }
    ]
  },

  crossword_grade7_lesson2: {
    title: "Детский фольклор",
    words: [
      { word: "КОЛЫБЕЛЬНАЯ", clue: "Песня, которую поют ребенку перед сном" },
      { word: "СЧИТАЛКА", clue: "Рифмовка для распределения ролей в игре" },
      { word: "СЕМЬЯ", clue: "Главный хранитель домашних традиций" },
      { word: "ПОТЕШКА", clue: "Короткая песенка-приговорка" },
      { word: "ТРАДИЦИЯ", clue: "То, что передается от бабушек к внукам" }
    ]
  },
  wordsearch_grade7_lesson2: {
    title: "В кругу семьи",
    words: ["КОЛЫБЕЛЬНАЯ", "СЧИТАЛКА", "СЕМЬЯ", "ТРАДИЦИЯ", "ПОТЕШКА", "ДЕТСТВО", "ПЕСНЯ", "ЛАДУШКИ"]
  },
  emoji_grade7_lesson2: {
    puzzles: [
      { emoji: "🍼😴", answer: "Колыбельная", hint: "Песня для укачивания" },
      { emoji: "👦🔢", answer: "Считалка", hint: "Ритмичный текст для начала игры" }
    ]
  },
  rebus_grade7_lesson2: {
    puzzles: [
      { answer: "СЕМЬЯ", clue: "Самый близкий круг людей" },
      { answer: "ДЕТИ", clue: "Главные исполнители считалок" }
    ]
  },

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
      { emoji: "🥞🔥🎭", answer: "Масленица", hint: "Проводы зимы" }
    ]
  },
  rebus_grade7_lesson3: {
    puzzles: [
      { answer: "КОЛЯДА", clue: "Зимний праздник" },
      { answer: "ВЕСНА", clue: "Время года, которое 'заклинают'" }
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
      { emoji: "🌊🌸", answer: "Весенние воды", hint: "Знаменитый романс Рахманинова" }
    ]
  },
  rebus_grade8_lesson1: {
    puzzles: [
      { answer: "РОМАНС", clue: "Вокальный жанр для голоса с сопровождением" },
      { answer: "ГИМН", clue: "Торжественная песня, прославляющая страну" }
    ]
  },

  crossword_grade8_lesson2: {
    title: "Юный исследователь",
    words: [
      { word: "ПРОЕКТ", clue: "Самостоятельная исследовательская работа" },
      { word: "ТЕМА", clue: "То, что выбирается в первую очередь" },
      { word: "АНАЛИЗ", clue: "Детальное изучение музыкального произведения" },
      { word: "ВЫВОД", clue: "Итог исследования" },
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
      { emoji: "📚☕", answer: "Lo-Fi", hint: "Расслабляющая музыка для учебы" }
    ]
  },
  rebus_grade8_lesson2: {
    puzzles: [
      { answer: "ПЛАН", clue: "Пошаговый план действий в проекте" },
      { answer: "ЦЕЛЬ", clue: "То, чего хочет достичь исследователь" }
    ]
  },

  crossword_grade8_lesson3: {
    title: "Музыкальная панорама мира",
    words: [
      { word: "ФЛАМЕНКО", clue: "Испанский музыкальный жанр и танец" },
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
      { emoji: "🇧🇷🎉🎺", answer: "Самба", hint: "Ритм бразильского карнавала" }
    ]
  },
  rebus_grade8_lesson3: {
    puzzles: [
      { answer: "ДЖАЗ", clue: "Синкопированная музыка, зародившаяся в США" },
      { answer: "САМБА", clue: "Ритм бразильского карнавала" }
    ]
  }
};

// ============================================
// СТИЛИ ДЛЯ ИГР (внедряются автоматически)
// ============================================
function injectGameStyles() {
    if (document.getElementById('game-styles')) return;
    const style = document.createElement('style');
    style.id = 'game-styles';
    style.textContent = `
        .ws-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 4px; max-width: 400px; margin: 20px auto; user-select: none; }
        .ws-cell { aspect-ratio: 1; display: flex; align-items: center; justify-content: center; background: #e8ecf1; border-radius: 4px; font-weight: bold; font-size: 1.2em; cursor: pointer; transition: all 0.2s; }
        .ws-cell:hover { background: #d0d7e2; }
        .ws-cell.selected { background: #667eea; color: white; transform: scale(1.1); }
        .cw-grid { display: grid; gap: 10px; max-width: 500px; margin: 20px auto; }
        .cw-row { display: flex; align-items: flex-start; gap: 15px; margin-bottom: 15px; }
        .cw-number { font-weight: bold; color: #667eea; min-width: 25px; text-align: right; padding-top: 8px; }
        .cw-inputs { display: flex; gap: 4px; flex-wrap: wrap; }
        .cw-cell { width: 36px; height: 36px; text-align: center; font-size: 1.2em; font-weight: bold; text-transform: uppercase; border: 2px solid #ccc; border-radius: 6px; background: white; transition: all 0.2s; }
        .cw-cell:focus { border-color: #667eea; outline: none; background: #f0f4ff; }
        .cw-cell.correct { border-color: #00b894; background: #d4edda; }
        .cw-cell.incorrect { border-color: #d63031; background: #f8d7da; }
        .game-words-list { background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 15px 0; columns: 2; }
        .game-words-list li { list-style: none; padding: 5px 0; font-weight: 600; color: #495057; }
        .game-words-list li.found { text-decoration: line-through; color: #00b894; }
        .btn-game { padding: 12px 30px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em; margin-top: 15px; transition: background 0.2s; }
        .btn-game:hover { background: #5568d3; }
        .btn-close { padding: 10px 20px; background: #f44336; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; margin-top: 20px; }
    `;
    document.head.appendChild(style);
}

// ============================================
// ГЕНЕРАТОР ФИЛВОРДА (Сетка букв)
// ============================================
function initWordSearch(data) {
    injectGameStyles();
    const container = document.getElementById('wordsearch-container');
    if (!container || !data) return;

    const size = 12;
    const alphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    let grid = Array(size).fill().map(() => Array(size).fill(''));
    let placedWords = [];

    // Простой алгоритм размещения слов (горизонтально и вертикально)
    data.words.forEach(word => {
        let placed = false;
        let attempts = 0;
        while (!placed && attempts < 100) {
            const dir = Math.random() > 0.5 ? 'H' : 'V';
            const row = Math.floor(Math.random() * size);
            const col = Math.floor(Math.random() * size);
            
            let canPlace = true;
            for (let i = 0; i < word.length; i++) {
                const r = dir === 'V' ? row + i : row;
                const c = dir === 'H' ? col + i : col;
                if (r >= size || c >= size || (grid[r][c] !== '' && grid[r][c] !== word[i])) {
                    canPlace = false;
                    break;
                }
            }
            
            if (canPlace) {
                for (let i = 0; i < word.length; i++) {
                    const r = dir === 'V' ? row + i : row;
                    const c = dir === 'H' ? col + i : col;
                    grid[r][c] = word[i];
                }
                placedWords.push(word);
                placed = true;
            }
            attempts++;
        }
    });

    // Заполняем пустые клетки случайными буквами
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }

    // Рендеринг
    let html = `<h3 style="text-align:center; color:#333;">🔤 ${data.title}</h3>`;
    html += `<p style="text-align:center; color:#666; margin-bottom:15px;">Кликай по буквам, чтобы выделить слово. Найди все слова из списка!</p>`;
    
    html += '<div class="ws-grid">';
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            html += `<div class="ws-cell" data-r="${r}" data-c="${c}" onclick="toggleWSCell(this)">${grid[r][c]}</div>`;
        }
    }
    html += '</div>';

    html += '<ul class="game-words-list" id="ws-words-list">';
    data.words.forEach(word => {
        html += `<li id="ws-word-${word}">${word}</li>`;
    });
    html += '</ul>';

    html += `<div style="text-align:center;">
                <button class="btn-game" onclick="checkWordSearch('${data.words.join(',')}')">Проверить выделенные слова</button>
                <br>
                <button class="btn-close" onclick="document.getElementById('active-game-container').remove()">Закрыть игру</button>
             </div>`;
    html += `<div id="ws-result" style="text-align:center; margin-top:15px; font-weight:bold;"></div>`;

    container.innerHTML = html;
}

window.toggleWSCell = function(cell) {
    cell.classList.toggle('selected');
};

window.checkWordSearch = function(wordsStr) {
    const words = wordsStr.split(',');
    const selectedCells = document.querySelectorAll('.ws-cell.selected');
    let selectedLetters = "";
    selectedCells.forEach(cell => selectedLetters += cell.textContent);
    
    let foundCount = 0;
    words.forEach(word => {
        if (selectedLetters.includes(word)) {
            foundCount++;
            document.getElementById(`ws-word-${word}`).classList.add('found');
        }
    });

    const resultDiv = document.getElementById('ws-result');
    if (foundCount === words.length) {
        resultDiv.innerHTML = `<span style="color:#00b894; font-size:1.2em;">🎉 Отлично! Все слова найдены!</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color:#f44336;">Найдено слов: ${foundCount} из ${words.length}. Попробуй ещё!</span>`;
    }
};

// ============================================
// ГЕНЕРАТОР КРОССВОРДА (Визуальная сетка)
// ============================================
function initCrossword(data) {
    injectGameStyles();
    const container = document.getElementById('crossword-container');
    if (!container || !data) return;

    let html = `<h3 style="text-align:center; color:#333;">📝 ${data.title}</h3>`;
    html += `<p style="text-align:center; color:#666; margin-bottom:20px;">Впиши ответы в клетки по горизонтали.</p>`;
    
    html += '<div class="cw-grid">';
    data.words.forEach((item, index) => {
        html += `<div class="cw-row">`;
        html += `<div class="cw-number">${index + 1}.</div>`;
        html += `<div>`;
        html += `<p style="margin:0 0 8px 0; color:#495057;">${item.clue}</p>`;
        html += `<div class="cw-inputs">`;
        for (let i = 0; i < item.word.length; i++) {
            html += `<input type="text" class="cw-cell" maxlength="1" data-answer="${item.word[i]}" data-word-idx="${index}" oninput="moveToNextCW(this)">`;
        }
        html += `</div></div></div>`;
    });
    html += '</div>';

    html += `<div style="text-align:center;">
                <button class="btn-game" onclick="checkCrossword()">Проверить кроссворд</button>
                <br>
                <button class="btn-close" onclick="document.getElementById('active-game-container').remove()">Закрыть игру</button>
             </div>`;
    html += `<div id="cw-result" style="text-align:center; margin-top:15px; font-weight:bold;"></div>`;

    container.innerHTML = html;
}

window.moveToNextCW = function(input) {
    input.value = input.value.toUpperCase();
    if (input.value.length === 1) {
        const next = input.nextElementSibling;
        if (next && next.classList.contains('cw-cell')) {
            next.focus();
        }
    }
};

window.checkCrossword = function() {
    const inputs = document.querySelectorAll('.cw-cell');
    let correctTotal = 0;
    let totalCells = inputs.length;

    inputs.forEach(input => {
        const userAnswer = input.value.toUpperCase().trim();
        const correctAnswer = input.dataset.answer;
        
        if (userAnswer === correctAnswer) {
            correctTotal++;
            input.classList.add('correct');
            input.classList.remove('incorrect');
        } else {
            input.classList.add('incorrect');
            input.classList.remove('correct');
        }
    });

    const resultDiv = document.getElementById('cw-result');
    const isSuccess = correctTotal === totalCells;
    resultDiv.innerHTML = `<span style="color:${isSuccess ? '#00b894' : '#f44336'}; font-size:1.2em;">
        ${isSuccess ? '🎉 Поздравляем! Кроссворд разгадан верно!' : `Правильно заполнено клеток: ${correctTotal} из ${totalCells}. Попробуй исправить ошибки.`}
    </span>`;
};

// ============================================
// ЭМОДЗИ И РЕБУСЫ (Оставлены рабочими)
// ============================================
function initEmojiGame(data) {
    injectGameStyles();
    const container = document.getElementById('emoji-container');
    if (!container || !data) return;

    let currentIndex = 0;
    let score = 0;

    function showEmoji() {
        if (currentIndex >= data.length) {
            container.innerHTML = `
                <div style="text-align:center; background:white; padding:30px; border-radius:15px;">
                    <h3>🎉 Результаты эмодзи-шарады</h3>
                    <p style="font-size:1.2em;">Правильных ответов: <strong>${score}</strong> из <strong>${data.length}</strong></p>
                    <button class="btn-close" onclick="location.reload()">Играть снова</button>
                </div>`;
            return;
        }

        const item = data[currentIndex];
        container.innerHTML = `
            <div style="text-align:center; background:white; padding:30px; border-radius:15px;">
                <h3 style="color:#333;">😊 Эмодзи-шарада</h3>
                <div style="font-size:4em; margin:20px 0;">${item.emoji}</div>
                <p style="color:#666; font-style:italic;">Подсказка: ${item.hint}</p>
                <input type="text" id="emoji-answer" placeholder="Ваш ответ" autocomplete="off" style="padding:10px; width:80%; max-width:300px; border:1px solid #ccc; border-radius:5px; margin:15px 0; font-size:1.1em; text-align:center;">
                <br>
                <button class="btn-game" onclick="checkEmojiAnswer()">Проверить</button>
                <div id="emoji-result" style="margin-top:15px; min-height:30px; font-weight:bold;"></div>
                <p style="margin-top:20px; color:#999;">Вопрос ${currentIndex + 1} из ${data.length}</p>
            </div>`;
    }

    window.checkEmojiAnswer = function() {
        const input = document.getElementById('emoji-answer');
        const result = document.getElementById('emoji-result');
        if (!input || !result) return;

        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = data[currentIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            result.innerHTML = '<span style="color:#00b894;">✓ Правильно!</span>';
            score++;
        } else {
            result.innerHTML = `<span style="color:#d63031;">✗ Правильный ответ: ${data[currentIndex].answer}</span>`;
        }
        input.disabled = true;
        setTimeout(() => { currentIndex++; showEmoji(); }, 1500);
    };

    showEmoji();
}

function initRebus(data) {
    injectGameStyles();
    const container = document.getElementById('rebus-container');
    if (!container || !data) return;

    let html = `<h3 style="text-align:center; color:#333; margin-bottom:20px;">🧩 Разгадайте ребусы</h3>`;
    data.puzzles.forEach((puzzle, index) => {
        html += `
            <div style="background:white; padding:20px; margin-bottom:20px; border-radius:10px; border-left:4px solid #667eea;">
                <p><strong>Ребус ${index + 1}:</strong> ${puzzle.clue}</p>
                <div style="font-size:2em; margin:15px 0; text-align:center;">
                    <div style="background:#f8f9fa; padding:20px; border-radius:10px; border:2px dashed #667eea; display:inline-block; color:#999;">
                        🎨 [Место для изображения ребуса]
                    </div>
                </div>
                <div style="text-align:center;">
                    <input type="text" class="rebus-input" data-answer="${puzzle.answer}" placeholder="Ваш ответ" autocomplete="off" style="padding:8px; width:80%; max-width:300px; border:1px solid #ccc; border-radius:5px; text-align:center; font-size:1.1em;">
                    <br>
                    <button class="btn-game" style="margin-top:10px;" onclick="checkRebusAnswer(this)">Проверить</button>
                </div>
                <div class="rebus-result" style="text-align:center; margin-top:10px; font-weight:bold;"></div>
            </div>`;
    });
    html += `<div style="text-align:center;"><button class="btn-close" onclick="document.getElementById('active-game-container').remove()">Закрыть игру</button></div>`;
    container.innerHTML = html;
}

window.checkRebusAnswer = function(button) {
    const container = button.parentElement.parentElement;
    const input = container.querySelector('.rebus-input');
    const result = container.querySelector('.rebus-result');
    const answer = input.dataset.answer.toLowerCase();
    const userAnswer = input.value.trim().toLowerCase();
    
    if (userAnswer === answer) {
        result.innerHTML = '<span style="color:#00b894;">✓ Правильно!</span>';
        input.style.borderColor = '#00b894';
        input.style.background = '#d4edda';
        input.disabled = true;
        button.disabled = true;
        button.style.opacity = '0.6';
    } else {
        result.innerHTML = `<span style="color:#d63031;">✗ Правильный ответ: ${input.dataset.answer}</span>`;
        input.style.borderColor = '#d63031';
        input.style.background = '#f8d7da';
    }
};

// ============================================
// ГЛАВНАЯ ФУНКЦИЯ ЗАПУСКА ИГРЫ
// ============================================
window.openGame = function(gameType, grade, lesson) {
    console.log("✅ Кнопка нажата! Параметры:", gameType, grade, lesson);
    
    let container = document.getElementById('active-game-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'active-game-container';
        container.style.cssText = 'background: #f8f9fa; padding: 30px; border-radius: 15px; margin: 30px auto; max-width: 800px; border: 2px solid #667eea; box-shadow: 0 4px 15px rgba(0,0,0,0.1);';
        const lessonContent = document.querySelector('.lesson-content') || document.body;
        lessonContent.appendChild(container);
    }

    container.innerHTML = '<h3 style="text-align:center; color:#667eea;">⏳ Загрузка игры...</h3>';

    const key = `${gameType}_grade${grade}_lesson${lesson}`;
    const data = gamesData[key];
    
    setTimeout(() => {
        if (!data) {
            container.innerHTML = `<p style="text-align:center; color:#f44336;">⚠️ Игра для ${grade} класса, ${lesson} урока пока не создана.</p>
            <div style="text-align:center;"><button class="btn-close" onclick="document.getElementById('active-game-container').remove()">Закрыть</button></div>`;
            return;
        }

        container.innerHTML = ''; // Очистка
        
        // Создаем целевой контейнер для конкретной игры
        const targetId = `${gameType}-container`;
        const gameDiv = document.createElement('div');
        gameDiv.id = targetId;
        container.appendChild(gameDiv);

        // Запуск нужной функции
        if (gameType === 'crossword') initCrossword(data);
        else if (gameType === 'wordsearch') initWordSearch(data);
        else if (gameType === 'emoji') initEmojiGame(data);
        else if (gameType === 'rebus') initRebus(data);

        // Кнопка закрытия внизу
        const closeBtn = document.createElement('div');
        closeBtn.style.textAlign = 'center';
        closeBtn.innerHTML = '<button class="btn-close" onclick="document.getElementById(\'active-game-container\').remove()">✖ Закрыть игру</button>';
        container.appendChild(closeBtn);

        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
};

// Внедряем стили при загрузке страницы
document.addEventListener('DOMContentLoaded', injectGameStyles);
