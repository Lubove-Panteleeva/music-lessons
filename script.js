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
    
    // Формируем правильное имя файла (например: lesson1-grade6.html)
    const fileName = `lesson${lessonNumber}-grade${grade}.html`;
    
    // Перенаправляем на страницу урока с параметром
    window.location.href = `${fileName}?lesson=${lessonNumber}`;
}

// Функция завершения урока
function completeLesson(grade, lessonNumber) {
    const progressKey = `progress_grade${grade}_lesson${lessonNumber}`;
    localStorage.setItem(progressKey, 'completed');
    
    const percentage = calculateTotalProgress(grade);
    
    alert(`🎉 Поздравляем! Вы успешно завершили Урок ${lessonNumber}!\nВаш прогресс: ${percentage}% от всего курса ${grade} класса.`);
    
    window.location.href = 'index.html';
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

// Функция открытия игры
function openGame(gameType, grade = 6, lesson = 1) {
    localStorage.setItem('currentGame', gameType);
    localStorage.setItem('currentGameGrade', grade);
    localStorage.setItem('currentGameLesson', lesson);
    window.location.href = `game.html?game=${gameType}&grade=${grade}&lesson=${lesson}`;
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
    }
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Плавная прокрутка к секциям по якорям
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
            // По умолчанию все секции свернуты, если нет сохраненного состояния
            if (isCollapsed === 'true' || isCollapsed === null) {
                gradeSection.classList.add('collapsed');
            } else {
                gradeSection.classList.remove('collapsed');
            }
        }
    });

    // 3. Показываем уведомления о прогрессе в консоли
    showCompletionNotifications();
});

function showCompletionNotifications() {
    for (let grade = 6; grade <= 8; grade++) {
        const progress = localStorage.getItem(`total_progress_grade${grade}`);
        if (progress && parseInt(progress) > 0) {
            console.log(`Прогресс ${grade} класс: ${progress}%`);
        }
    }
}

// ============================================
// ФУНКЦИИ ДЛЯ СТРАНИЦЫ ИГР (game.html)
// ============================================
function initGamePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameType = urlParams.get('game') || localStorage.getItem('currentGame');
    const grade = parseInt(urlParams.get('grade')) || parseInt(localStorage.getItem('currentGameGrade')) || 6;
    const lesson = parseInt(urlParams.get('lesson')) || parseInt(localStorage.getItem('currentGameLesson')) || 1;
    
    // Проверка на NaN
    if (isNaN(grade) || isNaN(lesson)) {
        console.error('Некорректные параметры grade или lesson');
        return;
    }
    
    const gameContainer = document.getElementById('game-container');
    if (!gameContainer) return;
    
    const title = document.getElementById('game-title');
    if (title) {
        const titles = {
            'crossword': ' Кроссворд',
            'wordsearch': '🔤 Филворд',
            'emoji': '😊 Эмодзи-шарада',
            'rebus': '🧩 Ребусы'
        };
        title.textContent = `${titles[gameType] || 'Игра'} — ${grade} класс, Урок ${lesson}`;
    }
    
    switch(gameType) {
        case 'crossword': renderCrossword(gameType, grade, lesson); break;
        case 'wordsearch': renderWordSearch(gameType, grade, lesson); break;
        case 'emoji': renderEmojiGame(gameType, grade, lesson); break;
        case 'rebus': renderRebus(gameType, grade, lesson); break;
        default: gameContainer.innerHTML = '<p>Игра не найдена. Вернитесь к уроку.</p>';
    }
}

if (window.location.pathname.includes('game.html')) {
    document.addEventListener('DOMContentLoaded', initGamePage);
}