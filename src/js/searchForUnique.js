export function searchForUnique(massKey1, massKey2) {
    const uniqueValues = [];

    for (const key1 of massKey1) {
        const found = massKey2.find(item => item === key1);
        
        if (found !== undefined) {
            uniqueValues.push(found);
        }
    }

    console.log(uniqueValues);
    return uniqueValues;
}
