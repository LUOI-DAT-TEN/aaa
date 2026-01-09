const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()';

// Tạo các cột chữ cái
const columns = Math.floor(window.innerWidth / 30); // Số cột dựa trên chiều rộng màn hình
const columnWidth = window.innerWidth / columns;

// Tạo chữ cái rơi theo cột
function createFallingLetter() {
    const letter = document.createElement('div');
    letter.className = 'trail-letter';
    letter.textContent = allLetters[Math.floor(Math.random() * allLetters.length)];
    
    // Chọn cột ngẫu nhiên
    const randomColumn = Math.floor(Math.random() * columns);
    const xPosition = randomColumn * columnWidth + columnWidth / 2;
    
    letter.style.left = xPosition + 'px';
    letter.style.top = '-50px'; // Bắt đầu từ trên cùng
    
    // Thời gian rơi ngẫu nhiên từ 2-4 giây
    const fallDuration = 2 + Math.random() * 2;
    letter.style.animationDuration = fallDuration + 's';
    
    document.body.appendChild(letter);

    setTimeout(() => {
        letter.remove();
    }, fallDuration * 1000);
}

// Tạo chữ cái mới mỗi 100ms
setInterval(createFallingLetter, 20);