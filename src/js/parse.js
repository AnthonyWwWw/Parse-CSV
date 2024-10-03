export function parseFunction(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const resultArray = [];

    reader.onload = function(event) {
      const csvData = event.target.result;

      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          results.data.forEach((item, index) => {
            if (Object.values(item).every(value => value === null || value === '')) {
              console.log(`Поле ${index} пусте`);
            } else {
              resultArray.push(item);
            }
          });
          resolve(resultArray);
        },
        error: (error) => {
          console.error('Помилка при парсингу CSV:', error);
          reject(error);
        }
      });
    };

    reader.onerror = () => {
      reject(new Error('Помилка читання файлу'));
    };

    reader.readAsText(file);
  });
}
