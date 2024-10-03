import { parseFunction } from './parse.js';
import { searchForUnique } from './searchForUnique.js';

const buttonToCompare = document.querySelector("#button-to-compare");
const buttonfile1 = document.getElementById('file-input-1');
const buttonfile2 = document.getElementById('file-input-2');

buttonfile1.addEventListener('change', handleFiles, false);
buttonfile2.addEventListener('change', handleFiles, false);
    
function handleFiles() {
    const fileList = this.files;

    if (fileList[0]) {
        const alertBox = document.querySelector("#alert-box");
        alertBox.classList.add("active");

        setTimeout(()=>{
            alertBox.classList.remove("active");
        }, 2000)
    }else{

        const alertBox = document.querySelector("#alert-box");
        alertBox.classList.add("active-error");
        const childrenElements = alertBox.children;

        for (let child of childrenElements) {
            child.style.backgroundColor = "brown";
        }

        setTimeout(()=>{
            alertBox.classList.remove("active-error");
        }, 2000)
    }

}

buttonToCompare.addEventListener('click', async (event) => {
    
    if (buttonfile1.files[0] && buttonfile2.files[0]) {
        try {
            let resultKey1 = await parseFunction(buttonfile1.files[0]);
            let resultKey2 = await parseFunction(buttonfile2.files[0]);

            searchForUnique(resultKey1, resultKey2);
        } catch (error) {
            console.error('Сталася помилка при парсингу файлів:', error);
        }
    } else {
        const alertBox = document.querySelector("#alert-box");
        alertBox.classList.add("active-error");
        const childrenElements = alertBox.children;

        for (let child of childrenElements) {
            child.style.backgroundColor = "brown";
        }

        setTimeout(()=>{
            alertBox.classList.remove("active-error");
        }, 2000)
    }
});
