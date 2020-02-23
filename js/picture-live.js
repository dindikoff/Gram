'use strict';

(function() {
    const FILE_TYPES = ['jpg', 'jpeg', 'gif', 'png'];

    const preview = document.querySelector('.img-upload__preview img')
    const fileChooser = document.querySelector('#upload-file');

    fileChooser.addEventListener('change', () => {
        const file = fileChooser.files[0];
        const fileName = file.name.toLowerCase();

        const matches = FILE_TYPES.some((it) => {
            return fileName.endsWith(it);
        });

        if (matches) {
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                preview.src = reader.result;
            });

            reader.readAsDataURL(file);
        }
    });
})();