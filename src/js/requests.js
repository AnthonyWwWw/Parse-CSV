import { parseFunction } from './parse.js';
import { searchForUnique } from './searchForUnique.js';

const buttonToCompare = document.querySelector("#buttom-to-compare");

buttonToCompare.addEventListener('click', async () => {
    let file1 = document.getElementById('file-input-1').files[0];
    let file2 = document.getElementById('file-input-2').files[0];

    if (file1 && file2) {
        try {
            let resultKey1 = await parseFunction(file1);
            let resultKey2 = await parseFunction(file2);

            searchForUnique(resultKey1, resultKey2)
        } catch (error) {
            console.error('Сталася помилка при парсингу файлів:', error);
        }
    } else {
        console.log('Файли не вибрано');
    }
});
