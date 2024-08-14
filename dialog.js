window.addEventListener('load', () => {
    setTimeout(() => {
        const overlay = document.getElementById('overlay');
        const dialog = document.getElementById('dialog');
        overlay.style.display = 'block';
        dialog.style.display = 'block';
  
        // Плавное появление
        setTimeout(() => {
            overlay.style.opacity = '1';
            dialog.style.opacity = '1';
            dialog.style.transform = 'translate(-50%, -50%)';
        }, 50);
    }, 3000);
  
    document.getElementById('close-button').addEventListener('click', () => {
        closeDialog();
    });
  
    document.getElementById('overlay').addEventListener('click', () => {
        closeDialog();
    });
  
    function closeDialog() {
        const overlay = document.getElementById('overlay');
        const dialog = document.getElementById('dialog');
        overlay.style.opacity = '0';
        dialog.style.opacity = '0';
        dialog.style.transform = 'translate(-50%, -40%)';
  
        // Скрыть элементы после завершения анимации
        setTimeout(() => {
            overlay.style.display = 'none';
            dialog.style.display = 'none';
        }, 500);
    }
  });
  