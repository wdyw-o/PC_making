// Создаем аудио-объект и привязываем его к window
window.gameMusic = new Audio();
window.gameMusic.loop = true;
window.gameMusic.volume = 0.4;

// Функция запуска музыки
window.playTrack = function(url) {
    if (window.gameMusic.src !== url) {
        window.gameMusic.src = url;
        // Пытаемся запустить, ловим ошибку если браузер блокирует
        var playPromise = window.gameMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(function(error) {
                console.log("Автовоспроизведение заблокировано до клика");
            });
        }
    }
};

// Функция остановки
window.stopMusic = function() {
    window.gameMusic.pause();
    window.gameMusic.currentTime = 0;
};
