// ============================================
// БАЗА ДАННЫХ ИГР ПО УРОКАМ
// ============================================

const gamesData = {
  // ===== 6 КЛАСС =====
  crossword_grade6_lesson1: {
    title: "Музыкальные инструменты Древней Руси",
    gridSize: 8,
    words: [
      { word: "ГУСЛИ", x: 1, y: 0, direction: "across", clue: "Самый известный древнерусский струнный инструмент" },
      { word: "СВИРЕЛЬ", x: 3, y: 0, direction: "down", clue: "Продольная флейта" },
      { word: "РОЖОК", x: 3, y: 3, direction: "across", clue: "Деревянный духовой инструмент пастухов" },
      { word: "БУБЕН", x: 0, y: 4, direction: "across", clue: "Ударный инструмент с погремушками" },
      { word: "ЖАЛЕЙКА", x: 1, y: 5, direction: "across", clue: "Язычковый инструмент с резким звуком" }
    ]
  },
  wordsearch_grade6_lesson1: {
    title: "Жанры народной музыки",
    gridSize: 12,
    words: ["КОЛЯДКА", "БЫЛИНА", "ХОРОД", "ПЕСНЯ", "СВАДЬБА", "ПЛЯСОВАЯ", "ПРИЧЕТ"],
    grid: []
  },
  emoji_grade6_lesson1: {
    puzzles: [
      { emoji: "🎵❄️", answer: "Коляда", hint: "Зимняя обрядовая песня" },
      { emoji: "🌸🎶", answer: "Веснянка", hint: "Весенняя закличка" },
      { emoji: "🎭👑", answer: "Былина", hint: "Эпическая песня о богатырях" },
      { emoji: "💒🎵😢", answer: "Свадебный причет", hint: "Песня невесты" },
      { emoji: "🌾🎶👥", answer: "Рабочая песня", hint: "Песня во время труда" }
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
    gridSize: 10,
    words: [
      { word: "АНСАМБЛЬ", x: 0, y: 0, direction: "across", clue: "Музыкальный коллектив, исполняющий народные песни" },
      { word: "ТРАДИЦИЯ", x: 2, y: 2, direction: "down", clue: "То, что передается из поколения в поколение" },
      { word: "БАЯН", x: 4, y: 0, direction: "down", clue: "Современный родственник гармони" },
      { word: "ФЕСТИВАЛЬ", x: 0, y: 5, direction: "across", clue: "Праздник искусства, конкурс исполнителей" },
      { word: "ЭТНО", x: 6, y: 3, direction: "down", clue: "Приставка, означающая 'народный' (например, ...-поп)" }
    ]
  },
  wordsearch_grade6_lesson2: {
    title: "Музыка родного края",
    gridSize: 12,
    words: ["НАРОД", "ПЕСНЯ", "КРАЙ", "ХОР", "ГУСЛИ", "ТВОРЧЕСТВО", "ОБРЯД", "ФЕСТИВАЛЬ"],
    grid: []
  },
  emoji_grade6_lesson2: {
    puzzles: [
      { emoji: "👵📜", answer: "Аутентичный фольклор", hint: "Исполнение песен в первозданном виде старшим поколением" },
      { emoji: "🪕🤘", answer: "Фолк-рок", hint: "Смешение народной музыки и рока" },
      { emoji: "🏆🎶🌍", answer: "Фестиваль", hint: "Масштабный праздник музыки и творчества" },
      { emoji: "🎙️🚗", answer: "Экспедиция", hint: "Поездка ученых в деревни для записи песен" },
      { emoji: "👗👯‍♀️", answer: "Ансамбль", hint: "Коллектив, выступающий в народных костюмах" }
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
    gridSize: 10,
    words: [
      { word: "КАВКАЗ", x: 0, y: 0, direction: "across", clue: "Регион с мощным многоголосием и казачьими песнями" },
      { word: "КАРЕЛИЯ", x: 0, y: 2, direction: "down", clue: "Регион, где исполняют эпос 'Калевала'" },
      { word: "КУРАЙ", x: 4, y: 0, direction: "down", clue: "Башкирский духовой инструмент" },
      { word: "СИБИРЬ", x: 0, y: 5, direction: "across", clue: "Регион с горловым пением" },
      { word: "ГАРМОНЬ", x: 6, y: 3, direction: "down", clue: "Популярный инструмент Центральной России" }
    ]
  },
  wordsearch_grade7_lesson1: {
    title: "Регионы и инструменты России",
    gridSize: 12,
    words: ["КАВКАЗ", "СИБИРЬ", "КАРЕЛИЯ", "КУРАЙ", "ГУСЛИ", "БАЯН", "КАНТЕЛЕ", "ФОЛЬКЛОР"],
    grid: []
  },
  emoji_grade7_lesson1: {
    puzzles: [
      { emoji: "🏔️🔥", answer: "Кавказ", hint: "Регион с огненными танцами и песнями" },
      { emoji: "🌲📜", answer: "Карелия", hint: "Северный регион с эпосом и кантеле" },
      { emoji: "🎵🏔️", answer: "Сибирь", hint: "Регион с горловым пением" }, // Исправлен невидимый символ
      { emoji: "🎻🎪🎵", answer: "Гармонь", hint: "Популярный инструмент Центральной России" }
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
    gridSize: 11,
    words: [
      { word: "КОЛЫБЕЛЬНАЯ", x: 0, y: 12, direction: "across", clue: "Песня, которую поют ребенку перед сном" },
      { word: "СЧИТАЛКА", x: 6, y: 7, direction: "down", clue: "Рифмовка для распределения ролей в игре" },
      { word: "СЕМЬЯ", x: 6, y: 7, direction: "across", clue: "Главный хранитель домашних музыкальных традиций" },
      { word: "ПОТЕШКА", x: 1, y: 11, direction: "down", clue: "Короткая песенка-приговорка (например, 'Сорока-ворона')" },
      { word: "ТРАДИЦИЯ", x: 10, y: 0, direction: "down", clue: "То, что передается от бабушек к внукам" }
    ]
  },
  wordsearch_grade7_lesson2: {
    title: "В кругу семьи",
    gridSize: 12,
    words: ["КОЛЫБЕЛЬНАЯ", "СЧИТАЛКА", "СЕМЬЯ", "ТРАДИЦИЯ", "ПОТЕШКА", "ДЕТСТВО", "ПЕСНЯ", "ЛАДУШКИ"],
    grid: []
  },
  emoji_grade7_lesson2: {
    puzzles: [
      { emoji: "🍼🎵😴", answer: "Колыбельная", hint: "Песня для укачивания малыша" },
      { emoji: "👧👦🔢", answer: "Считалка", hint: "Ритмичный текст для начала игры" },
      { emoji: "👵👶🎶", answer: "Семейная традиция", hint: "Передача песен от старших к младшим" },
      { emoji: "🐦🥣👵", answer: "Потешка", hint: "Сорока-ворона кашу варила..." },
      { emoji: "👏👐👶", answer: "Ладушки", hint: "Игра с хлопками в ладоши" }
    ]
  },
  rebus_grade7_lesson2: {
    puzzles: [
      { answer: "СЕМЬЯ", clue: "Самый близкий круг людей" },
      { answer: "ДЕТИ", clue: "Главные исполнители считалок и дразнилок" },
      { answer: "СОН", clue: "Время, для которого предназначена колыбельная" }
    ]
  },

  // ===== 8 КЛАСС =====
  crossword_grade8_lesson1: {
    title: "Композиторы и произведения",
    gridSize: 10,
    words: [
      { word: "СИМФОНИЯ", x: 0, y: 0, direction: "across", clue: "Крупное оркестровое произведение (как у Калинникова)" },
      { word: "СВИРИДОВ", x: 0, y: 0, direction: "down", clue: "Композитор, написавший «Романс» к «Метели» Пушкина" },
      { word: "РАХМАНИНОВ", x: 0, y: 3, direction: "across", clue: "Автор романса «Весенние воды»" },
      { word: "ГИМН", x: 6, y: 3, direction: "down", clue: "Торжественная песня, символом которой стала музыка Глинки" },
      { word: "РОМАНС", x: 8, y: 3, direction: "down", clue: "Вокальный жанр, в котором написаны «Весенние воды»" }
    ]
  },
  wordsearch_grade8_lesson1: {
    title: "Образы Родины в музыке",
    gridSize: 12,
    words: ["ПРИРОДА", "ПАТРИОТ", "ОКТЯБРЬ", "ВЕСНА", "МЕТЕЛЬ", "РОССИЯ", "ЭПОС", "ПЕЙЗАЖ"],
    grid: []
  },
  emoji_grade8_lesson1: {
    puzzles: [
      { emoji: "❄️📖🎻", answer: "Метель", hint: "Музыкальные иллюстрации Свиридова к повести Пушкина" },
      { emoji: "🍂🎹🕰️", answer: "Осенняя песнь", hint: "Пьеса Чайковского из цикла «Времена года»" },
      { emoji: "🌊🌸🎤", answer: "Весенние воды", hint: "Знаменитый романс Рахманинова" },
      { emoji: "🇷🇺🎺👑", answer: "Гимн", hint: "Торжественная музыка, ставшая символом государства" },
      { emoji: "🎼🏔️", answer: "Симфония", hint: "Масштабное оркестровое произведение Калинникова" }
    ]
  },
  rebus_grade8_lesson1: {
    puzzles: [
      { answer: "РОМАНС", clue: "Вокальный жанр для голоса с инструментальным сопровождением" },
      { answer: "ГИМН", clue: "Торжественная песня, прославляющая страну" },
      { answer: "ЭПОС", clue: "Героическое повествование о прошлом, отраженное в музыке Калинникова" }
    ]
  }
};

// ============================================
// ФУНКЦИИ ОТРИСОВКИ ИГР
// ============================================

function renderCrossword(gameType, grade, lesson) {
  const gameContainer = document.getElementById("game-container");
  const key = `${gameType}_grade${grade}_lesson${lesson}`;
  const data = gamesData[key];

  if (!data) {
    gameContainer.innerHTML = "<p>Кроссворд для этого урока скоро появится!</p>";
    return;
  }

  const crosswordWrapper = document.createElement("div");
  crosswordWrapper.className = "crossword-wrapper";

  const title = document.createElement("h2");
  title.textContent = data.title;
  title.className = "crossword-title";
  crosswordWrapper.appendChild(title);

  const gridSize = data.gridSize || 10;
  let maxX = 0, maxY = 0;
  
  data.words.forEach((word) => {
    const endX = word.direction === "across" ? word.x + word.word.length : word.x + 1;
    const endY = word.direction === "down" ? word.y + word.word.length : word.y + 1;
    maxX = Math.max(maxX, endX);
    maxY = Math.max(maxY, endY);
  });

  const gridWidth = Math.max(gridSize, maxX);
  const gridHeight = Math.max(gridSize, maxY);

  const grid = document.createElement("div");
  grid.className = "crossword-grid";
  grid.style.gridTemplateColumns = `repeat(${gridWidth}, 40px)`;

  const cells = [];
  for (let y = 0; y < gridHeight; y++) {
    cells[y] = [];
    for (let x = 0; x < gridWidth; x++) {
      cells[y][x] = null;
    }
  }

  data.words.forEach((wordObj, wordIndex) => {
    for (let i = 0; i < wordObj.word.length; i++) {
      const x = wordObj.direction === "across" ? wordObj.x + i : wordObj.x;
      const y = wordObj.direction === "across" ? wordObj.y : wordObj.y + i;

      if (cells[y] && cells[y][x]) {
        if (cells[y][x].letter !== wordObj.word[i]) {
          console.error(`Конфликт букв в ячейке [${x},${y}]: ${cells[y][x].letter} vs ${wordObj.word[i]}`);
        }
        if (i === 0) {
          if (cells[y][x].numbers) {
            cells[y][x].numbers.push(wordIndex + 1);
          } else {
            cells[y][x].numbers = [cells[y][x].number, wordIndex + 1];
            delete cells[y][x].number;
          }
        }
      } else if (cells[y]) {
        cells[y][x] = {
          letter: wordObj.word[i],
          number: i === 0 ? wordIndex + 1 : null,
          numbers: null,
        };
      }
    }
  });

  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      const cell = document.createElement("div");
      cell.className = "crossword-cell";

      if (cells[y][x]) {
        cell.classList.add("active");
        if (cells[y][x].numbers) {
          const numbersSpan = document.createElement("span");
          numbersSpan.className = "cell-number";
          numbersSpan.textContent = cells[y][x].numbers.join("");
          cell.appendChild(numbersSpan);
        } else if (cells[y][x].number) {
          const numberSpan = document.createElement("span");
          numberSpan.className = "cell-number";
          numberSpan.textContent = cells[y][x].number;
          cell.appendChild(numberSpan);
        }

        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.dataset.x = x;
        input.dataset.y = y;
        input.dataset.letter = cells[y][x].letter;
        input.autocomplete = "off";
        cell.appendChild(input);
      } else {
        cell.classList.add("black");
      }
      grid.appendChild(cell);
    }
  }

  crosswordWrapper.appendChild(grid);

  const cluesDiv = document.createElement("div");
  cluesDiv.className = "crossword-clues";
  const cluesTitle = document.createElement("h3");
  cluesTitle.textContent = "Подсказки:";
  cluesDiv.appendChild(cluesTitle);

  const cluesList = document.createElement("div");
  cluesList.className = "clues-list";
  data.words.forEach((w, i) => {
    const clueItem = document.createElement("div");
    clueItem.className = "clue-item";
    clueItem.innerHTML = `<strong>${i + 1}.</strong> ${w.clue}`;
    cluesList.appendChild(clueItem);
  });
  cluesDiv.appendChild(cluesList);
  crosswordWrapper.appendChild(cluesDiv);

  const checkBtn = document.createElement("button");
  checkBtn.textContent = "✓ Проверить ответы";
  checkBtn.className = "check-btn";
  checkBtn.onclick = () => checkCrossword(data);
  crosswordWrapper.appendChild(checkBtn);

  gameContainer.appendChild(crosswordWrapper);
}

function checkCrossword(data) {
  const inputs = document.querySelectorAll(".crossword-cell.active input");
  let correct = 0;
  let filled = 0;
  const total = inputs.length;

  inputs.forEach((input) => {
    const userLetter = input.value.toUpperCase();
    const correctLetter = input.dataset.letter;
    input.style.background = "";
    input.style.color = "";

    if (userLetter) {
      filled++;
      if (userLetter === correctLetter) {
        input.style.background = "#4CAF50";
        input.style.color = "white";
        correct++;
      } else {
        input.style.background = "#f44336";
        input.style.color = "white";
      }
    }
  });

  const resultDiv = document.createElement("div");
  resultDiv.className = "crossword-result";
  resultDiv.innerHTML = `Заполнено: ${filled} из ${total}<br>Правильно: ${correct} из ${filled}`;

  const existingResult = document.querySelector(".crossword-result");
  if (existingResult) existingResult.remove();

  document.querySelector(".crossword-wrapper").appendChild(resultDiv);

  if (correct === total && filled === total) {
    setTimeout(() => alert("🎉 Поздравляем! Вы отлично справились! Все слова разгаданы!"), 500);
  }
}

function renderWordSearch(gameType, grade, lesson) {
  const gameContainer = document.getElementById("game-container");
  const key = `${gameType}_grade${grade}_lesson${lesson}`;
  const data = gamesData[key];

  if (!data) {
    gameContainer.innerHTML = "<p>Филворд для этого урока скоро появится!</p>";
    return;
  }

  const wordsearchWrapper = document.createElement("div");
  wordsearchWrapper.className = "wordsearch-wrapper";

  const title = document.createElement("h2");
  title.textContent = data.title;
  title.className = "wordsearch-title";
  wordsearchWrapper.appendChild(title);

  const gridSize = data.gridSize;
  const grid = [];
  const letters = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

  for (let y = 0; y < gridSize; y++) {
    grid[y] = [];
    for (let x = 0; x < gridSize; x++) {
      grid[y][x] = "";
    }
  }

  const placedWords = [];
  data.words.forEach((word) => {
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < 200) {
      const direction = Math.floor(Math.random() * 3);
      const row = Math.floor(Math.random() * gridSize);
      const col = Math.floor(Math.random() * gridSize);

      let canPlace = true;
      const positions = [];

      for (let i = 0; i < word.length; i++) {
        let x, y;
        if (direction === 0) { x = col + i; y = row; } 
        else if (direction === 1) { x = col; y = row + i; } 
        else { x = col + i; y = row + i; }

        if (x >= gridSize || y >= gridSize) {
          canPlace = false;
          break;
        }

        const isOccupied = placedWords.some((pw) =>
          pw.positions.some((pos) => pos.x === x && pos.y === y)
        );
        if (isOccupied && grid[y][x] !== word[i]) {
          canPlace = false;
          break;
        }
        positions.push({ x, y });
      }

      if (canPlace && positions.length === word.length) {
        for (let i = 0; i < word.length; i++) {
          grid[positions[i].y][positions[i].x] = word[i];
        }
        placedWords.push({ word, positions, direction });
        placed = true;
      }
      attempts++;
    }
  });

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === "") {
        grid[y][x] = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }

  const gridDiv = document.createElement("div");
  gridDiv.className = "wordsearch-grid";
  gridDiv.style.gridTemplateColumns = `repeat(${gridSize}, 35px)`;
  gridDiv.style.userSelect = "none";

  const cells = [];
  for (let y = 0; y < gridSize; y++) {
    cells[y] = [];
    for (let x = 0; x < gridSize; x++) {
      const cell = document.createElement("div");
      cell.className = "wordsearch-cell";
      cell.textContent = grid[y][x];
      cell.dataset.x = x;
      cell.dataset.y = y;
      cells[y][x] = cell;
      gridDiv.appendChild(cell);
    }
  }
  wordsearchWrapper.appendChild(gridDiv);

  const progressDiv = document.createElement("div");
  progressDiv.className = "wordsearch-progress";
  progressDiv.innerHTML = `
    <div class="progress-bar">
      <div class="progress-fill" id="progress-fill" style="width: 0%"></div>
    </div>
    <p class="progress-text">Найдено: <span id="found-count">0</span> из ${data.words.length} слов</p>
  `;
  wordsearchWrapper.appendChild(progressDiv);

  const wordsDiv = document.createElement("div");
  wordsDiv.className = "wordsearch-words";
  const wordsTitle = document.createElement("h3");
  wordsTitle.textContent = "Найдите слова:";
  wordsDiv.appendChild(wordsTitle);

  const wordsList = document.createElement("div");
  wordsList.className = "words-list";
  data.words.forEach((w) => {
    const wordItem = document.createElement("span");
    wordItem.className = "word-item";
    wordItem.textContent = w;
    wordItem.id = `word-${w}`;
    wordsList.appendChild(wordItem);
  });
  wordsDiv.appendChild(wordsList);
  wordsearchWrapper.appendChild(wordsDiv);

  gameContainer.appendChild(wordsearchWrapper);

  let isSelecting = false;
  let startCell = null;
  let selectedCells = [];
  let foundWords = [];

  function getCellFromEvent(e) {
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    const element = document.elementFromPoint(clientX, clientY);
    if (element && element.classList.contains("wordsearch-cell")) {
      return { x: parseInt(element.dataset.x), y: parseInt(element.dataset.y), el: element };
    }
    return null;
  }

  function startSelection(e) {
    e.preventDefault();
    const cell = getCellFromEvent(e);
    if (!cell) return;
    isSelecting = true;
    startCell = { x: cell.x, y: cell.y };
    selectedCells = [{ x: cell.x, y: cell.y }];
    updateSelection();
  }

  function continueSelection(e) {
    if (!isSelecting || !startCell) return;
    e.preventDefault();
    const cell = getCellFromEvent(e);
    if (!cell) return;

    const dx = cell.x - startCell.x;
    const dy = cell.y - startCell.y;

    if (dx === 0 || dy === 0 || Math.abs(dx) === Math.abs(dy)) {
      selectedCells = [];
      const steps = Math.max(Math.abs(dx), Math.abs(dy));
      const stepX = dx === 0 ? 0 : dx / Math.abs(dx);
      const stepY = dy === 0 ? 0 : dy / Math.abs(dy);

      for (let i = 0; i <= steps; i++) {
        const cx = startCell.x + stepX * i;
        const cy = startCell.y + stepY * i;
        if (cx >= 0 && cx < gridSize && cy >= 0 && cy < gridSize) {
          selectedCells.push({ x: cx, y: cy });
        }
      }
      updateSelection();
    }
  }

  function endSelection(e) {
    if (!isSelecting) return;
    isSelecting = false;

    const selectedWord = selectedCells.map((c) => grid[c.y][c.x]).join("");
    const reversedWord = selectedWord.split("").reverse().join("");
    const foundWord = data.words.find((w) => w === selectedWord || w === reversedWord);

    if (foundWord && !foundWords.includes(foundWord)) {
      foundWords.push(foundWord);
      selectedCells.forEach((c) => cells[c.y][c.x].classList.add("found"));

      const wordElement = document.getElementById(`word-${foundWord}`);
      if (wordElement) {
        wordElement.classList.add("found");
      }
      updateProgress();

      if (foundWords.length === data.words.length) {
        setTimeout(() => alert("🎉 Поздравляем! Вы нашли все слова!"), 500);
      }
    }
    selectedCells = [];
    updateSelection();
  }

  function updateSelection() {
    document.querySelectorAll(".wordsearch-cell.selected").forEach((c) => c.classList.remove("selected"));
    selectedCells.forEach((c) => cells[c.y][c.x].classList.add("selected"));
  }

  function updateProgress() {
    const progress = (foundWords.length / data.words.length) * 100;
    const progressFill = document.getElementById("progress-fill");
    const foundCount = document.getElementById("found-count");
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (foundCount) foundCount.textContent = foundWords.length;
  }

  gridDiv.addEventListener("mousedown", startSelection);
  gridDiv.addEventListener("mousemove", continueSelection);
  gridDiv.addEventListener("mouseup", endSelection);
  gridDiv.addEventListener("mouseleave", endSelection);

  gridDiv.addEventListener("touchstart", startSelection, { passive: false });
  gridDiv.addEventListener("touchmove", continueSelection, { passive: false });
  gridDiv.addEventListener("touchend", endSelection);
}

function renderEmojiGame(gameType, grade, lesson) {
  const gameContainer = document.getElementById("game-container");
  const key = `${gameType}_grade${grade}_lesson${lesson}`;
  const data = gamesData[key];

  if (!data) {
    gameContainer.innerHTML = "<p>Эмодзи-шарада для этого урока скоро появится!</p>";
    return;
  }

  gameContainer.classList.add("emoji-game");
  let score = 0;

  window.showEmojiPuzzle = function (index) {
    if (index >= data.puzzles.length) {
      gameContainer.innerHTML = `
        <h2>🎉 Игра завершена!</h2>
        <p style="font-size:1.3em; margin:20px 0;">Вы отгадали <strong>${score}</strong> из <strong>${data.puzzles.length}</strong> загадок!</p>
        <button class="start-btn" onclick="location.reload()" style="max-width:300px;">Играть снова</button>`;
      return;
    }

    const puzzle = data.puzzles[index];
    const safeAnswer = puzzle.answer.replace(/'/g, "\\'");

    gameContainer.innerHTML = `
      <h2>Загадка ${index + 1} из ${data.puzzles.length}</h2>
      <div class="emoji-puzzle">${puzzle.emoji}</div>
      <p style="font-style:italic; color:#666;">💡 Подсказка: ${puzzle.hint}</p>
      <div class="emoji-answer">
        <input type="text" id="answer-${index}" placeholder="Ваш ответ">
        <button class="start-btn" onclick="window.checkEmojiAnswer(${index}, '${safeAnswer}')" style="margin-top:10px;">Проверить</button>
      </div>
      <div id="result-${index}" style="margin-top:15px; font-weight:bold;"></div>
      <button class="start-btn" id="next-${index}" style="display:none; margin-top:15px; max-width:300px;" onclick="window.showEmojiPuzzle(${index + 1})">Следующая загадка →</button>`;
  };

  window.checkEmojiAnswer = function (index, correctAnswer) {
    const inputElement = document.getElementById(`answer-${index}`);
    const resultDiv = document.getElementById(`result-${index}`);
    const nextBtn = document.getElementById(`next-${index}`);

    if (!inputElement || !resultDiv || !nextBtn) return;

    const userAnswer = inputElement.value.trim().toLowerCase();
    if (userAnswer === correctAnswer.toLowerCase()) {
      resultDiv.innerHTML = '<span style="color:#4CAF50;">✅ Правильно! Отлично!</span>';
      score++;
    } else {
      resultDiv.innerHTML = `<span style="color:#f44336;">❌ Неверно. Правильный ответ: <strong>${correctAnswer}</strong></span>`;
    }

    inputElement.disabled = true;
    nextBtn.style.display = "inline-block";
  };

  window.showEmojiPuzzle(0);
}

function renderRebus(gameType, grade, lesson) {
  const gameContainer = document.getElementById("game-container");
  const key = `${gameType}_grade${grade}_lesson${lesson}`;
  const data = gamesData[key];

  if (!data) {
    gameContainer.innerHTML = "<p>Ребусы для этого урока скоро появятся!</p>";
    return;
  }

  data.puzzles.forEach((puzzle, index) => {
    const puzzleDiv = document.createElement("div");
    puzzleDiv.style.marginBottom = "30px";
    puzzleDiv.style.padding = "20px";
    puzzleDiv.style.background = "#f5f7fa";
    puzzleDiv.style.borderRadius = "10px";
    puzzleDiv.innerHTML = `
      <p><strong>Ребус ${index + 1}:</strong> ${puzzle.clue}</p>
      <div style="font-size:2em; margin:20px 0; text-align:center;">
        <p style="background:white; padding:20px; border-radius:10px; border:2px dashed #667eea;">🎨 [Здесь будет изображение ребуса ${index + 1}]</p>
      </div>
      <input type="text" id="rebus-answer-${index}" placeholder="Ваш ответ" style="padding:10px; font-size:1.1em; width:100%; max-width:400px; border:2px solid #ddd; border-radius:8px;">
      <button class="start-btn" onclick="window.checkRebus(${index}, '${puzzle.answer}')" style="margin-top:10px; max-width:200px;">Проверить</button>
      <div id="rebus-result-${index}" style="margin-top:10px; font-weight:bold;"></div>`;
    gameContainer.appendChild(puzzleDiv);
  });

  window.checkRebus = function (index, correctAnswer) {
    const userAnswer = document.getElementById(`rebus-answer-${index}`).value.trim().toLowerCase();
    const resultDiv = document.getElementById(`rebus-result-${index}`);
    if (userAnswer === correctAnswer.toLowerCase()) {
      resultDiv.innerHTML = '<span style="color:#4CAF50;">✅ Правильно!</span>';
    } else {
      resultDiv.innerHTML = `<span style="color:#f44336;">❌ Правильный ответ: <strong>${correctAnswer}</strong></span>`;
    }
  };
}