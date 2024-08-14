function handleAlbumClick(folder) {
    fetchImages(folder);
}

function fetchImages(folder) {
    const imagesPath = `Gallery/Gallery-images/${folder}`;
    fs.readdir(imagesPath, (err, files) => {
        if (err) {
            console.error('Error reading folder:', err);
            return;
        }

        const imagesGrid = document.getElementById('images-grid');
        imagesGrid.innerHTML = '';

        files.forEach(file => {
            if (file !== 'Logo.jpg') {
                const imgElement = document.createElement('img');
                imgElement.src = `${imagesPath}/${file}`;
                imagesGrid.appendChild(imgElement);
            }
        });

        openDialog();
    });
}

function openDialog() {
    document.getElementById('dialog').style.display = 'block';
}

function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}
