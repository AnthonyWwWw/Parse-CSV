export function searchForUnique(arrayOfObjects1, arrayOfObjects2) {
    const valuesArray1 = convertObjectsToValuesArray(arrayOfObjects1);
    const valuesArray2 = convertObjectsToValuesArray(arrayOfObjects2);

    const onlyInArray1 = valuesArray1.filter(value => !valuesArray2.includes(value));
    const onlyInArray2 = valuesArray2.filter(value => !valuesArray1.includes(value));

    const uniqueValues = [onlyInArray1, onlyInArray2];
    console.log(uniqueValues);
}

function convertObjectsToValuesArray(arrayOfObjects) {
    const allValues = [];

    for (const obj of arrayOfObjects) {
        const values = Object.values(obj); 
        allValues.push(...values); 
    }

    return allValues;
}
