// ============================================
// КОНФИГУРАЦИЯ
// ============================================
const LESSONS_PER_GRADE = 34;

// ============================================
// ОСНОВНЫЕ ФУНКЦИИ НАВИГАЦИИ И ПРОГРЕССА
// ============================================

// Функция открытия урока
function openLesson(grade, lessonNumber) {
    localStorage.setItem('currentGrade', grade);
    localStorage.setItem('currentLesson', lessonNumber);
    
    // Формируем правильное имя файла (например: lesson3-grade7.html)
    const fileName = `lesson${lessonNumber}-grade${grade}.html`;
    
    // Перенаправляем на страницу урока
    window.location.href = `${fileName}?lesson=${lessonNumber}`;
}

// Функция завершения урока
function completeLesson(grade, lessonNumber) {
    const progressKey = `progress_grade${grade}_lesson${lessonNumber}`;
    localStorage.setItem(progressKey, 'completed');
    
    const percentage = calculateTotalProgress(grade);
    
    // Визуальное изменение кнопки
    const btn = event.target;
    btn.textContent = '✅ Урок успешно завершен!';
    btn.style.background = '#4CAF50';
    btn.disabled = true;
    
    alert(`🎉 Поздравляем! Вы успешно завершили Урок ${lessonNumber}!\nВаш общий прогресс в ${grade} классе: ${percentage}%`);
    
    // Опционально: можно убрать редирект, чтобы ученик остался на странице и сделал игры, 
    // или оставить, как у вас было:
    // setTimeout(() => { window.location.href = 'index.html'; }, 1500);
}

// Функция подсчета общего прогресса
function calculateTotalProgress(grade) {
    let completed = 0;
    
    for (let i = 1; i <= LESSONS_PER_GRADE; i++) {
        if (localStorage.getItem(`progress_grade${grade}_lesson${i}`) === 'completed') {
            completed++;
        }
    }
    
    const percentage = Math.round((completed / LESSONS_PER_GRADE) * 100);
    localStorage.setItem(`total_progress_grade${grade}`, percentage);
    return percentage;
}

// УМНАЯ функция открытия игры
function openGame(gameType, grade = 6, lesson = 1) {
    // Проверяем, находимся ли мы на странице урока (где игры уже встроены в HTML)
    const isLessonPage = document.querySelector('.lesson-page') || document.querySelector('.game-block');
    
    if (isLessonPage) {
        // Если да, просто плавно скроллим к секции с играми на этой же странице
        const gamesSection = document.querySelector('.games-section') || document.querySelector('.game-container');
        if (gamesSection) {
            gamesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        // Если мы на главной странице (index.html), перенаправляем на отдельную страницу игры
        localStorage.setItem('currentGame', gameType);
        localStorage.setItem('currentGameGrade', grade);
        localStorage.setItem('currentGameLesson', lesson);
        window.location.href = `game.html?game=${gameType}&grade=${grade}&lesson=${lesson}`;
    }
}

// ============================================
// ФУНКЦИЯ СВОРАЧИВАНИЯ/РАЗВОРАЧИВАНИЯ СЕКЦИЙ
// ============================================
function toggleGrade(gradeId) {
    const gradeSection = document.getElementById(gradeId);
    if (gradeSection) {
        gradeSection.classList.toggle('collapsed');
        const isCollapsed = gradeSection.classList.contains('collapsed');
        localStorage.setItem(`${gradeId}_collapsed`, isCollapsed);
        
        // Обновляем иконку стрелочки
        const arrow = document.getElementById(`arrow-${gradeId}`);
        if (arrow) {
            arrow.textContent = isCollapsed ? '▶' : '▼';
        }
    }
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Плавная прокрутка к секциям по якорям из меню
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Если секция свернута — разворачиваем её при клике на якорь в меню
                if (target.classList.contains('collapsed')) {
                    toggleGrade(href.substring(1));
                }
            }
        });
    });

    // 2. Восстанавливаем состояние сворачивания классов и игр
    ['grade6', 'grade7', 'grade8', 'games'].forEach(gradeId => {
        const isCollapsed = localStorage.getItem(`${gradeId}_collapsed`);
        const gradeSection = document.getElementById(gradeId);
        
        if (gradeSection) {
            // По умолчанию все секции свернуты, если нет сохраненного состояния (или если null)
            if (isCollapsed === 'true' || isCollapsed === null) {
                gradeSection.classList.add('collapsed');
            } else {
                gradeSection.classList.remove('collapsed');
            }
            
            // Синхронизируем стрелочку при загрузке
            const arrow = document.getElementById(`arrow-${gradeId}`);
            if (arrow) {
                arrow.textContent = gradeSection.classList.contains('collapsed') ? '▶' : '▼';
            }
        }
    });

    // 3. Проверяем, завершен ли текущий урок (если мы на странице урока), чтобы обновить кнопку
    checkLessonProgressButton();
    
    // 4. Показываем уведомления о прогрессе в консоли
    showCompletionNotifications();
});

function checkLessonProgressButton() {
    const path = window.location.pathname;
    const match = path.match(/lesson(\d+)-grade(\d+)\.html/);
    
    if (match) {
        const lesson = match[1];
        const grade = match[2];
        const progressKey = `progress_grade${grade}_lesson${lesson}`;
        
        if (localStorage.getItem(progressKey) === 'completed') {
            const btn = document.querySelector('button[onclick^="completeLesson"]');
            if (btn) {
                btn.textContent = '✅ Урок уже завершен';
                btn.style.background = '#4CAF50';
                btn.disabled = true;
            }
        }
    }
}

function showCompletionNotifications() {
    for (let grade = 6; grade <= 8; grade++) {
        const progress = localStorage.getItem(`total_progress_grade${grade}`);
        if (progress && parseInt(progress) > 0) {
            console.log(`📊 Прогресс ${grade} класс: ${progress}%`);
        }
    }
}

// ============================================
// ФУНКЦИИ ДЛЯ ОТДЕЛЬНОЙ СТРАНИЦЫ ИГР (game.html)
// (Оставлены на случай, если вы решите использовать отдельную страницу для игр с главной)
// ============================================
function initGamePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameType = urlParams.get('game') || localStorage.getItem('currentGame');
    const grade = parseInt(urlParams.get('grade')) || parseInt(localStorage.getItem('currentGameGrade')) || 6;
    const lesson = parseInt(urlParams.get('lesson')) || parseInt(localStorage.getItem('currentGameLesson')) || 1;
    
    if (isNaN(grade) || isNaN(lesson)) {
        console.error('Некорректные параметры grade или lesson');
        return;
    }
    
    const gameContainer = document.getElementById('game-container');
    if (!gameContainer) return;
    
    const title = document.getElementById('game-title');
    if (title) {
        const titles = {
            'crossword': '📝 Кроссворд',
            'wordsearch': '🔤 Филворд',
            'emoji': '😊 Эмодзи-шарада',
            'rebus': '🧩 Ребусы'
        };
        title.textContent = `${titles[gameType] || 'Игра'} — ${grade} класс, Урок ${lesson}`;
    }
    
    // Вызываем функции из games.js для рендеринга на отдельной странице
    if (typeof renderCrossword === 'function') {
        switch(gameType) {
            case 'crossword': renderCrossword(gameType, grade, lesson); break;
            case 'wordsearch': renderWordSearch(gameType, grade, lesson); break;
            case 'emoji': renderEmojiGame(gameType, grade, lesson); break;
            case 'rebus': renderRebus(gameType, grade, lesson); break;
            default: gameContainer.innerHTML = '<p>Игра не найдена. Вернитесь к уроку.</p>';
        }
    }
}

// Запускаем инициализацию игр только если мы на странице game.html
if (window.location.pathname.includes('game.html')) {
    document.addEventListener('DOMContentLoaded', initGamePage);
}
